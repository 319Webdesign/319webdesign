'use client'

import Link from 'next/link'
import { useCallback, useEffect, useId, useState } from 'react'
import { Mail, X } from 'lucide-react'
import { WHATSAPP_BUSINESS_E164 } from '@/lib/whatsapp'
import { trackContactFormSubmit } from '@/lib/pirschContactEvent'

const ANGEBOT_ZIELE = [
  'Professionelles Erscheinungsbild',
  'Neue Kunden gewinnen',
  'Prozesse Automatisieren',
  'Mitarbeiter gewinnen',
  'Bisherige Website-Kosten senken',
] as const

type Props = {
  isOpen: boolean
  onClose: () => void
  paketName: string | null
}

type FormState = {
  nachname: string
  vorname: string
  unternehmen: string
  email: string
  telefon: string
  ziel: string
  privacyAccepted: boolean
}

const emptyForm = (): FormState => ({
  nachname: '',
  vorname: '',
  unternehmen: '',
  email: '',
  telefon: '',
  ziel: '',
  privacyAccepted: false,
})

export default function AngebotAnfragenModal({ isOpen, onClose, paketName }: Props) {
  const titleId = useId()
  const privacyId = useId()
  const [form, setForm] = useState<FormState>(emptyForm)
  const [error, setError] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (!isOpen) return
    setForm(emptyForm())
    setError(null)
    setIsSubmitting(false)
  }, [isOpen, paketName])

  useEffect(() => {
    if (!isOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen, onClose])

  const setField = useCallback(<K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((f) => ({ ...f, [key]: value }))
    setError(null)
  }, [])

  const validateCommon = (): string | null => {
    if (!form.vorname.trim() || !form.nachname.trim()) return 'Bitte Name und Vorname ausfüllen.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) return 'Bitte eine gültige E-Mail-Adresse angeben.'
    if (!form.ziel) return 'Bitte wählen Sie eine Option aus dem Dropdown.'
    return null
  }

  const buildMailMessage = () =>
    [
      paketName ? `Gewünschtes Paket: ${paketName}` : 'Anlass: Allgemeines Erstgespräch (kein Paket gewählt)',
      `Hauptziel: ${form.ziel}`,
      form.telefon.trim() ? `Telefon: ${form.telefon.trim()}` : null,
      '',
      'Gesendet über das Angebotsformular auf /unser-angebot',
    ]
      .filter(Boolean)
      .join('\n')

  const buildWhatsAppText = () => {
    const lines = [
      'Hallo, ich möchte ein Angebot anfragen (319Webdesign – www.319webdesign.de).',
      paketName ? `Interessiert am Paket: ${paketName}` : 'Allgemeine Anfrage / Erstgespräch',
      '',
      `Name: ${form.nachname.trim()}, ${form.vorname.trim()}`.trim(),
      form.unternehmen.trim() ? `Unternehmen: ${form.unternehmen.trim()}` : null,
      `E-Mail: ${form.email.trim()}`,
      form.telefon.trim() ? `Telefon: ${form.telefon.trim()}` : null,
      '',
      `Mein Schwerpunkt / Ziel: ${form.ziel}`,
    ].filter(Boolean) as string[]
    return lines.join('\n')
  }

  const handleEmail = async () => {
    const v = validateCommon()
    if (v) {
      setError(v)
      return
    }
    if (!form.privacyAccepted) {
      setError('Bitte akzeptieren Sie die Datenschutzhinweise für den Versand per E-Mail.')
      return
    }

    setIsSubmitting(true)
    setError(null)
    try {
      const serviceBetreff = `Angebot ${paketName ? `(${paketName})` : '(Erstgespräch)'} – ${form.ziel}`
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: form.vorname.trim(),
          lastName: form.nachname.trim(),
          company: form.unternehmen.trim(),
          email: form.email.trim(),
          service: serviceBetreff,
          message: buildMailMessage(),
          privacyAccepted: true,
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(typeof data.error === 'string' ? data.error : 'Versand fehlgeschlagen.')
      trackContactFormSubmit('unser-angebot')
      onClose()
    } catch (e) {
      setError(e instanceof Error ? e.message : 'E-Mail konnte nicht gesendet werden.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleWhatsApp = () => {
    const v = validateCommon()
    if (v) {
      setError(v)
      return
    }
    const url = `https://wa.me/${WHATSAPP_BUSINESS_E164}?text=${encodeURIComponent(buildWhatsAppText())}`
    window.open(url, '_blank', 'noopener,noreferrer')
    onClose()
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/50 p-4 backdrop-blur-sm"
      role="presentation"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative max-h-[min(90vh,760px)] w-full max-w-lg overflow-y-auto rounded-2xl border border-slate-200 bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 rounded-lg p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-800"
          aria-label="Schließen"
        >
          <X className="h-5 w-5" aria-hidden />
        </button>

        <div className="p-6 pt-14 md:p-8 md:pt-12">
          <h2 id={titleId} className="text-xl font-bold text-slate-900 md:text-2xl">
            Angebot anfragen
          </h2>
          {paketName && (
            <p className="mt-2 text-sm font-medium text-blue-600">
              Auswahl: Paket <span className="text-slate-900">{paketName}</span>
            </p>
          )}
          <p className="mt-3 text-sm text-slate-600">
            Formular ausfüllen und die Anfrage <strong className="font-semibold text-slate-800">per E-Mail</strong> oder{' '}
            <strong className="font-semibold text-slate-800">per WhatsApp</strong> absenden – Sie entscheiden unten.
          </p>

          <div className="mt-6 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-left">
                <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-500">Name</span>
                <input
                  type="text"
                  autoComplete="family-name"
                  value={form.nachname}
                  onChange={(e) => setField('nachname', e.target.value)}
                  disabled={isSubmitting}
                  className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm text-slate-900 outline-none ring-blue-500/20 transition-shadow focus:border-blue-500 focus:ring-4 disabled:bg-slate-50"
                />
              </label>
              <label className="block text-left">
                <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-500">Vorname</span>
                <input
                  type="text"
                  autoComplete="given-name"
                  value={form.vorname}
                  onChange={(e) => setField('vorname', e.target.value)}
                  disabled={isSubmitting}
                  className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm text-slate-900 outline-none ring-blue-500/20 transition-shadow focus:border-blue-500 focus:ring-4 disabled:bg-slate-50"
                />
              </label>
            </div>
            <label className="block text-left">
              <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-500">
                Unternehmen
              </span>
              <input
                type="text"
                autoComplete="organization"
                value={form.unternehmen}
                onChange={(e) => setField('unternehmen', e.target.value)}
                disabled={isSubmitting}
                className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm text-slate-900 outline-none ring-blue-500/20 transition-shadow focus:border-blue-500 focus:ring-4 disabled:bg-slate-50"
              />
            </label>
            <label className="block text-left">
              <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-500">E-Mail</span>
              <input
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={(e) => setField('email', e.target.value)}
                disabled={isSubmitting}
                className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm text-slate-900 outline-none ring-blue-500/20 transition-shadow focus:border-blue-500 focus:ring-4 disabled:bg-slate-50"
              />
            </label>
            <label className="block text-left">
              <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-500">
                Telefonnummer
              </span>
              <input
                type="tel"
                autoComplete="tel"
                value={form.telefon}
                onChange={(e) => setField('telefon', e.target.value)}
                disabled={isSubmitting}
                className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm text-slate-900 outline-none ring-blue-500/20 transition-shadow focus:border-blue-500 focus:ring-4 disabled:bg-slate-50"
              />
            </label>
            <label className="block text-left">
              <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-500">
                Was möchten Sie erreichen?
              </span>
              <select
                value={form.ziel}
                onChange={(e) => setField('ziel', e.target.value)}
                disabled={isSubmitting}
                className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none ring-blue-500/20 transition-shadow focus:border-blue-500 focus:ring-4 disabled:bg-slate-50"
              >
                <option value="">Bitte auswählen …</option>
                {ANGEBOT_ZIELE.map((z) => (
                  <option key={z} value={z}>
                    {z}
                  </option>
                ))}
              </select>
            </label>

            <div className="rounded-lg border border-slate-100 bg-slate-50/80 px-3 py-3 text-left">
              <label htmlFor={privacyId} className="flex cursor-pointer gap-3 text-sm text-slate-600">
                <input
                  id={privacyId}
                  type="checkbox"
                  checked={form.privacyAccepted}
                  onChange={(e) => setField('privacyAccepted', e.target.checked)}
                  disabled={isSubmitting}
                  className="mt-0.5 h-4 w-4 shrink-0 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                />
                <span>
                  Ich habe die{' '}
                  <Link href="/datenschutz" className="font-medium text-blue-600 underline hover:text-blue-700">
                    Datenschutzhinweise
                  </Link>{' '}
                  gelesen und akzeptiere diese{' '}
                  <span className="text-slate-500">(erforderlich für Versand per E-Mail).</span>{' '}
                  <span className="text-red-600" aria-hidden>
                    *
                  </span>
                </span>
              </label>
            </div>
          </div>

          {error && (
            <p className="mt-4 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700" role="alert">
              {error}
            </p>
          )}

          <div className="mt-8 flex flex-col gap-3">
            <p className="text-center text-xs font-semibold uppercase tracking-wide text-slate-500">
              Anfrage senden über
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={handleEmail}
                disabled={isSubmitting}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-blue-500/30 transition-all hover:shadow-lg hover:shadow-blue-500/45 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <Mail className="h-5 w-5 shrink-0" aria-hidden />
                {isSubmitting ? 'Wird gesendet …' : 'Per E-Mail senden'}
              </button>
              <button
                type="button"
                onClick={handleWhatsApp}
                disabled={isSubmitting}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-md shadow-green-900/15 transition-all hover:bg-[#20bd5a] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
              >
                <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Per WhatsApp senden
              </button>
            </div>
            <button
              type="button"
              onClick={onClose}
              disabled={isSubmitting}
              className="rounded-xl border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50 disabled:opacity-60"
            >
              Abbrechen
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
