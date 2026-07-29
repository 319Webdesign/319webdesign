'use client'

import Link from 'next/link'
import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type FormEvent,
  type KeyboardEvent as ReactKeyboardEvent,
  type ReactNode,
} from 'react'
import {
  Check,
  Clock,
  Globe,
  LayoutTemplate,
  Loader2,
  Lock,
  Mail,
  MessageSquare,
  Phone,
  Rocket,
  Search,
  Sparkles,
  Star,
  User,
  X,
  Zap,
} from 'lucide-react'
import { WEBSITE_CHECK_CONFIG } from '@/lib/websiteCheckConfig'
import { markWebsiteCheckSubmitted } from '@/lib/websiteCheckStorage'
import { trackWebsiteCheckEvent } from '@/lib/websiteCheckTracking'

type Props = {
  isOpen: boolean
  onClose: () => void
}

type FormState = {
  name: string
  email: string
  websiteUrl: string
  phone: string
  improvement: string
  /** Honeypot – muss leer bleiben */
  website: string
}

type FieldKey = 'name' | 'email' | 'websiteUrl'

const emptyForm = (): FormState => ({
  name: '',
  email: '',
  websiteUrl: '',
  phone: '',
  improvement: '',
  website: '',
})

const { copy, serviceLabel } = WEBSITE_CHECK_CONFIG

const HERO_BENEFIT_ICONS = {
  design: LayoutTemplate,
  seo: Search,
  speed: Zap,
  ux: Sparkles,
} as const

function isValidWebsiteUrl(value: string): boolean {
  const trimmed = value.trim()
  if (!trimmed) return false
  try {
    const withProtocol = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`
    const url = new URL(withProtocol)
    return Boolean(url.hostname && url.hostname.includes('.'))
  } catch {
    return false
  }
}

function normalizeWebsiteUrl(value: string): string {
  const trimmed = value.trim()
  if (!trimmed) return ''
  return /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`
}

export default function WebsiteCheckModal({ isOpen, onClose }: Props) {
  const titleId = useId()
  const descId = useId()
  const dialogRef = useRef<HTMLDivElement>(null)
  const previouslyFocusedRef = useRef<HTMLElement | null>(null)
  const formStartedRef = useRef(false)

  const [form, setForm] = useState<FormState>(emptyForm)
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<FieldKey, string>>>({})
  const [formError, setFormError] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  useEffect(() => {
    if (!isOpen) return
    setForm(emptyForm())
    setFieldErrors({})
    setFormError(null)
    setIsSubmitting(false)
    setIsSuccess(false)
    formStartedRef.current = false
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return
    previouslyFocusedRef.current = document.activeElement as HTMLElement | null
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const frame = window.requestAnimationFrame(() => {
      const dialog = dialogRef.current
      if (!dialog) return
      const focusable = getFocusable(dialog)
      ;(focusable[0] as HTMLElement | undefined)?.focus()
    })

    return () => {
      window.cancelAnimationFrame(frame)
      document.body.style.overflow = prevOverflow
      previouslyFocusedRef.current?.focus?.()
    }
  }, [isOpen])

  const handleClose = useCallback(() => {
    if (isSubmitting) return
    onClose()
  }, [isSubmitting, onClose])

  const onDialogKeyDown = (e: ReactKeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Escape') {
      e.stopPropagation()
      handleClose()
      return
    }
    if (e.key !== 'Tab' || !dialogRef.current) return

    const focusable = getFocusable(dialogRef.current)
    if (focusable.length === 0) {
      e.preventDefault()
      return
    }

    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    const active = document.activeElement

    if (e.shiftKey) {
      if (active === first || !dialogRef.current.contains(active)) {
        e.preventDefault()
        last.focus()
      }
    } else if (active === last) {
      e.preventDefault()
      first.focus()
    }
  }

  const setField = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((f) => ({ ...f, [key]: value }))
    if (key === 'name' || key === 'email' || key === 'websiteUrl') {
      const fieldKey = key as FieldKey
      setFieldErrors((prev) => {
        if (!prev[fieldKey]) return prev
        const next = { ...prev }
        delete next[fieldKey]
        return next
      })
    }
    setFormError(null)

    if (!formStartedRef.current) {
      formStartedRef.current = true
      trackWebsiteCheckEvent('website_check_form_started')
    }
  }

  const validate = (): boolean => {
    const errors: Partial<Record<FieldKey, string>> = {}
    if (!form.name.trim()) errors.name = 'Bitte geben Sie Ihren Namen an.'
    if (!form.email.trim()) {
      errors.email = 'Bitte geben Sie Ihre E-Mail-Adresse an.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      errors.email = 'Bitte geben Sie eine gültige E-Mail-Adresse an.'
    }
    if (!form.websiteUrl.trim()) {
      errors.websiteUrl = 'Bitte geben Sie die URL Ihrer Website an.'
    } else if (!isValidWebsiteUrl(form.websiteUrl)) {
      errors.websiteUrl = 'Bitte geben Sie eine gültige Website-URL an (z. B. www.beispiel.de).'
    }
    setFieldErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (isSubmitting) return
    if (!validate()) return

    setIsSubmitting(true)
    setFormError(null)

    const websiteUrl = normalizeWebsiteUrl(form.websiteUrl)
    const message = [
      serviceLabel,
      '',
      `Website-URL: ${websiteUrl}`,
      form.phone.trim() ? `Telefon: ${form.phone.trim()}` : null,
      form.improvement.trim()
        ? `Verbesserungswunsch:\n${form.improvement.trim()}`
        : 'Verbesserungswunsch: Keine Angabe',
      '',
      'Gesendet über den Lead-Magneten „Kostenloser Website-Check“.',
    ]
      .filter((line) => line !== null)
      .join('\n')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name.trim(),
          firstName: form.name.trim(),
          lastName: '—',
          email: form.email.trim(),
          service: serviceLabel,
          message,
          privacyAccepted: true,
          website: form.website,
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        throw new Error(typeof data.error === 'string' ? data.error : 'Versand fehlgeschlagen.')
      }

      markWebsiteCheckSubmitted()
      trackWebsiteCheckEvent('website_check_form_submitted')
      setIsSuccess(true)
    } catch (err) {
      setFormError(err instanceof Error ? err.message : 'E-Mail konnte nicht gesendet werden.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-slate-950/60 p-3 backdrop-blur-[6px] sm:items-center sm:p-5"
      role="presentation"
      onClick={handleClose}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descId}
        tabIndex={-1}
        onKeyDown={onDialogKeyDown}
        onClick={(e) => e.stopPropagation()}
        className="relative mb-[max(0.5rem,env(safe-area-inset-bottom))] flex max-h-[min(92dvh,820px)] w-full max-w-[920px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-white shadow-[0_25px_80px_-12px_rgba(15,23,42,0.45)] outline-none motion-safe:animate-website-check-in sm:mb-0"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        <button
          type="button"
          onClick={handleClose}
          disabled={isSubmitting}
          className="absolute right-3 top-3 z-20 rounded-xl border border-slate-200/80 bg-white/90 p-2 text-slate-500 shadow-sm backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white hover:text-slate-800 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:opacity-60 md:right-4 md:top-4"
          aria-label="Schließen"
        >
          <X className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden />
        </button>

        {isSuccess ? (
          <SuccessPanel
            titleId={titleId}
            descId={descId}
            onClose={handleClose}
          />
        ) : (
          <div className="grid min-h-0 flex-1 grid-cols-1 overflow-y-auto overscroll-contain md:grid-cols-2 md:overflow-hidden">
            <HeroPanel titleId={titleId} descId={descId} />
            <div className="relative flex flex-col border-t border-slate-100 bg-white md:overflow-y-auto md:overscroll-contain md:border-l md:border-t-0 md:border-slate-100">
              <div className="border-b border-slate-100 px-5 pb-3 pt-5 md:px-8 md:pb-4 md:pt-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-600">
                  Anfrage
                </p>
                <p className="mt-1 text-base font-semibold tracking-tight text-slate-900 md:text-lg">
                  In unter einer Minute starten
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="flex flex-1 flex-col gap-3.5 px-5 py-5 md:gap-4 md:px-8 md:py-6"
                noValidate
              >
                <div className="absolute -left-[9999px] top-auto h-0 w-0 overflow-hidden" aria-hidden="true">
                  <label>
                    Website
                    <input
                      type="text"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      value={form.website}
                      onChange={(e) => setField('website', e.target.value)}
                    />
                  </label>
                </div>

                <IconField
                  id="wc-name"
                  label="Name"
                  required
                  error={fieldErrors.name}
                  icon={<User className="h-4 w-4" aria-hidden />}
                >
                  <input
                    id="wc-name"
                    type="text"
                    name="name"
                    autoComplete="name"
                    placeholder="Ihr Name"
                    value={form.name}
                    onChange={(e) => setField('name', e.target.value)}
                    onFocus={(e) => scrollFieldIntoView(e.currentTarget)}
                    disabled={isSubmitting}
                    aria-invalid={Boolean(fieldErrors.name)}
                    aria-describedby={fieldErrors.name ? 'wc-name-error' : undefined}
                    className={inputClass(Boolean(fieldErrors.name))}
                  />
                </IconField>

                <IconField
                  id="wc-email"
                  label="E-Mail-Adresse"
                  required
                  error={fieldErrors.email}
                  icon={<Mail className="h-4 w-4" aria-hidden />}
                >
                  <input
                    id="wc-email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    inputMode="email"
                    placeholder="name@firma.de"
                    value={form.email}
                    onChange={(e) => setField('email', e.target.value)}
                    onFocus={(e) => scrollFieldIntoView(e.currentTarget)}
                    disabled={isSubmitting}
                    aria-invalid={Boolean(fieldErrors.email)}
                    aria-describedby={fieldErrors.email ? 'wc-email-error' : undefined}
                    className={inputClass(Boolean(fieldErrors.email))}
                  />
                </IconField>

                <IconField
                  id="wc-url"
                  label="Website-URL"
                  required
                  error={fieldErrors.websiteUrl}
                  icon={<Globe className="h-4 w-4" aria-hidden />}
                >
                  <input
                    id="wc-url"
                    type="text"
                    name="websiteUrl"
                    autoComplete="url"
                    inputMode="url"
                    placeholder="www.ihre-website.de"
                    value={form.websiteUrl}
                    onChange={(e) => setField('websiteUrl', e.target.value)}
                    onFocus={(e) => scrollFieldIntoView(e.currentTarget)}
                    disabled={isSubmitting}
                    aria-invalid={Boolean(fieldErrors.websiteUrl)}
                    aria-describedby={fieldErrors.websiteUrl ? 'wc-url-error' : undefined}
                    className={inputClass(Boolean(fieldErrors.websiteUrl))}
                  />
                </IconField>

                <IconField
                  id="wc-phone"
                  label="Telefonnummer"
                  optional
                  icon={<Phone className="h-4 w-4" aria-hidden />}
                >
                  <input
                    id="wc-phone"
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    inputMode="tel"
                    placeholder="Optional"
                    value={form.phone}
                    onChange={(e) => setField('phone', e.target.value)}
                    onFocus={(e) => scrollFieldIntoView(e.currentTarget)}
                    disabled={isSubmitting}
                    className={inputClass(false)}
                  />
                </IconField>

                <IconField
                  id="wc-improvement"
                  label="Was möchten Sie verbessern?"
                  optional
                  icon={<MessageSquare className="h-4 w-4" aria-hidden />}
                  textarea
                >
                  <textarea
                    id="wc-improvement"
                    name="improvement"
                    rows={2}
                    placeholder="Optional – z. B. mehr Anfragen, modernes Design …"
                    value={form.improvement}
                    onChange={(e) => setField('improvement', e.target.value)}
                    onFocus={(e) => scrollFieldIntoView(e.currentTarget)}
                    disabled={isSubmitting}
                    className={`${inputClass(false)} min-h-[4.25rem] resize-none py-3.5`}
                  />
                </IconField>

                {formError && (
                  <p className="rounded-xl border border-red-200 bg-red-50 px-3.5 py-2.5 text-sm text-red-700" role="alert">
                    {formError}
                  </p>
                )}

                <div className="mt-auto space-y-3 pt-1">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 px-5 py-4 text-[15px] font-semibold text-white shadow-lg shadow-blue-500/35 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/45 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" aria-hidden />
                        Wird gesendet …
                      </>
                    ) : (
                      <>
                        <Rocket className="h-5 w-5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
                        {copy.cta}
                      </>
                    )}
                  </button>

                  <p className="flex items-start gap-2 text-xs leading-relaxed text-slate-500">
                    <Lock className="mt-0.5 h-3.5 w-3.5 shrink-0 text-slate-400" aria-hidden />
                    <span>{copy.dataTrust}</span>
                  </p>

                  <p className="text-[11px] leading-relaxed text-slate-400">
                    {copy.privacyNoteBefore}
                    <Link
                      href="/datenschutz"
                      className="font-medium text-blue-600 underline underline-offset-2 transition-colors hover:text-blue-700"
                    >
                      {copy.privacyLinkLabel}
                    </Link>
                    {copy.privacyNoteAfter}
                  </p>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function HeroPanel({ titleId, descId }: { titleId: string; descId: string }) {
  return (
    <aside className="relative overflow-hidden bg-slate-950 px-5 py-5 text-white md:flex md:flex-col md:overflow-y-auto md:px-8 md:py-9">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div
          className="absolute inset-0 opacity-90"
          style={{
            background:
              'radial-gradient(ellipse 80% 55% at 10% 0%, rgba(59,130,246,0.35), transparent 55%), radial-gradient(ellipse 60% 45% at 100% 100%, rgba(99,102,241,0.22), transparent 50%)',
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.2)_0%,transparent_40%,rgba(2,6,23,0.55)_100%)]" />
      </div>

        <div className="relative z-10 flex min-h-0 flex-1 flex-col">
        <div className="hidden md:block">
          <BrowserMockup />
        </div>

        <div className="md:mt-7">
          <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-blue-400/25 bg-blue-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-blue-200 backdrop-blur-sm md:mb-3 md:text-[11px]">
            <Search className="h-3 w-3" aria-hidden />
            Kostenlos &amp; unverbindlich
          </div>
          <h2 id={titleId} className="pr-8 text-xl font-bold leading-tight tracking-tight text-white md:pr-0 md:text-2xl lg:text-[1.7rem]">
            {copy.title}
          </h2>
          <p id={descId} className="mt-2 max-w-md text-[13px] leading-relaxed text-slate-300 md:mt-3 md:text-[15px] md:leading-relaxed">
            {copy.subtitle}
          </p>
        </div>

        <ul className="mt-3.5 grid grid-cols-2 gap-2 md:mt-6 md:gap-2.5" aria-label="Prüfpunkte">
          {copy.heroBenefits.map((benefit) => {
            const Icon = HERO_BENEFIT_ICONS[benefit.key]
            return (
              <li
                key={benefit.key}
                className="group flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-2.5 py-2 backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-400/30 hover:bg-white/[0.08] md:gap-2.5 md:px-3 md:py-3"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-500/15 text-blue-300 ring-1 ring-blue-400/20 transition-colors duration-200 group-hover:bg-blue-500/25 group-hover:text-blue-200 md:h-8 md:w-8">
                  <Icon className="h-3.5 w-3.5" aria-hidden />
                </span>
                <span className="text-[11px] font-medium leading-snug text-slate-100 md:text-[13px]">
                  {benefit.label}
                </span>
              </li>
            )
          })}
        </ul>

        <div className="mt-3.5 rounded-xl border border-white/10 bg-white/[0.05] p-3 backdrop-blur-sm md:mt-auto md:p-4">
          <div className="flex items-start gap-2.5 border-b border-white/10 pb-2.5 md:pb-3">
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-400/15 text-amber-300">
              <Star className="h-3.5 w-3.5 fill-current" aria-hidden />
            </span>
            <p className="text-[12px] leading-snug text-slate-200 md:text-[13px]">{copy.trustPersonal}</p>
          </div>
          <div className="flex items-start gap-2.5 pt-2.5 md:pt-3">
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-400/15 text-blue-300">
              <Clock className="h-3.5 w-3.5" aria-hidden />
            </span>
            <p className="text-[12px] leading-snug text-slate-200 md:text-[13px]">{copy.trustResponse}</p>
          </div>
        </div>
      </div>
    </aside>
  )
}

function BrowserMockup() {
  return (
    <div
      className="relative mx-auto w-full max-w-[280px] md:mx-0 md:max-w-none"
      aria-hidden
    >
      <div className="overflow-hidden rounded-xl border border-white/15 bg-slate-900/80 shadow-xl shadow-blue-950/40 backdrop-blur-md">
        <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/[0.04] px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-slate-500/80" />
          <span className="h-2 w-2 rounded-full bg-slate-500/80" />
          <span className="h-2 w-2 rounded-full bg-slate-500/80" />
          <div className="ml-2 flex-1 truncate rounded-md bg-white/[0.06] px-2 py-0.5 text-center text-[9px] text-slate-400">
            ihre-website.de
          </div>
        </div>
        <div className="relative space-y-2 p-3">
          <div className="h-2 w-1/3 rounded bg-blue-400/40" />
          <div className="h-2 w-2/3 rounded bg-white/10" />
          <div className="h-2 w-1/2 rounded bg-white/10" />
          <div className="mt-1 grid grid-cols-3 gap-1.5">
            <div className="h-8 rounded-md bg-gradient-to-br from-blue-500/35 to-indigo-500/20 ring-1 ring-white/10" />
            <div className="h-8 rounded-md bg-white/[0.07] ring-1 ring-white/5" />
            <div className="h-8 rounded-md bg-white/[0.07] ring-1 ring-white/5" />
          </div>
          <div className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-blue-600 text-white shadow-lg shadow-blue-500/40 ring-2 ring-slate-950">
            <Check className="h-3.5 w-3.5" strokeWidth={3} />
          </div>
        </div>
      </div>
    </div>
  )
}

function SuccessPanel({
  titleId,
  descId,
  onClose,
}: {
  titleId: string
  descId: string
  onClose: () => void
}) {
  return (
    <div className="relative overflow-hidden px-6 py-14 text-center sm:px-10 sm:py-16">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(59,130,246,0.12),transparent_60%)]"
        aria-hidden
      />
      <div className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/35">
        <Check className="h-7 w-7" strokeWidth={2.5} aria-hidden />
      </div>
      <h2 id={titleId} className="relative mt-6 text-2xl font-bold tracking-tight text-slate-900">
        {copy.successTitle}
      </h2>
      <p id={descId} className="relative mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-600 sm:text-base">
        {copy.successText}
      </p>
      <button
        type="button"
        onClick={onClose}
        className="relative mt-8 inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/45 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 sm:w-auto sm:min-w-[200px]"
      >
        {copy.successClose}
      </button>
    </div>
  )
}

function getFocusable(root: HTMLElement): HTMLElement[] {
  const nodes = root.querySelectorAll<HTMLElement>(
    'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
  )
  return Array.from(nodes).filter((el) => {
    if (el.hasAttribute('disabled') || el.getAttribute('aria-hidden') === 'true') return false
    if (el.closest('[aria-hidden="true"]')) return false
    if (el.tabIndex < 0) return false
    return true
  })
}

function inputClass(hasError: boolean) {
  return [
    'w-full rounded-xl border bg-white py-3.5 pl-11 pr-3.5 text-sm text-slate-900 outline-none',
    'placeholder:text-slate-400 disabled:bg-slate-50 scroll-mt-24',
    'transition-all duration-200 hover:border-slate-300',
    hasError
      ? 'border-red-400 shadow-[0_0_0_4px_rgba(248,113,113,0.12)] focus:border-red-500 focus:shadow-[0_0_0_4px_rgba(248,113,113,0.18)]'
      : 'border-slate-200/90 shadow-sm shadow-slate-900/[0.02] focus:border-blue-500 focus:shadow-[0_0_0_4px_rgba(59,130,246,0.15)]',
  ].join(' ')
}

function scrollFieldIntoView(el: HTMLElement) {
  window.requestAnimationFrame(() => {
    el.scrollIntoView({ block: 'center', behavior: 'smooth' })
  })
}

function IconField({
  id,
  label,
  required,
  optional,
  error,
  icon,
  textarea,
  children,
}: {
  id: string
  label: string
  required?: boolean
  optional?: boolean
  error?: string
  icon: ReactNode
  textarea?: boolean
  children: ReactNode
}) {
  return (
    <div className="text-left">
      <label
        htmlFor={id}
        className="mb-1.5 flex items-baseline gap-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500"
      >
        <span>{label}</span>
        {required && (
          <span className="text-red-500" aria-hidden>
            *
          </span>
        )}
        {optional && (
          <span className="normal-case tracking-normal font-medium text-slate-400">(optional)</span>
        )}
      </label>
      <div className="relative">
        <span
          className={`pointer-events-none absolute left-3.5 z-[1] text-slate-400 ${
            textarea ? 'top-3.5' : 'top-1/2 -translate-y-1/2'
          }`}
        >
          {icon}
        </span>
        {children}
      </div>
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-xs text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}
