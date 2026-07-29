/**
 * Konfiguration für den Lead-Magneten „Kostenloser Website-Check“.
 * Hier Timing, Storage-Keys und Texte zentral anpassbar.
 */
export const WEBSITE_CHECK_CONFIG = {
  /** Empfänger ist über /api/contact (SMTP → kontakt@319webdesign.com) geregelt. */
  serviceLabel: 'Anfrage: Kostenloser Website-Check',

  storage: {
    dismissedUntilKey: 'website-check-dismissed-until-v3',
    submittedKey: 'website-check-submitted-v3',
    sessionShownKey: 'website-check-shown-session-v3',
    /** Nach Schließen: 7 Tage nicht erneut automatisch anzeigen */
    dismissDays: 7,
  },

  timing: {
    /** Desktop: Popup nach X ms Aufenthalt */
    desktopDelayMs: 3_000,
    /** Desktop: ab dieser Scrolltiefe (0–1) */
    desktopScrollRatio: 0.25,
    /** Mobile: Mindest-Aufenthalt UND Scrolltiefe */
    mobileDelayMs: 5_000,
    mobileScrollRatio: 0.3,
    /** Viewport-Breite ≤ dieser Wert gilt als Mobile (kein Exit Intent) */
    mobileMaxWidthPx: 768,
  },

  copy: {
    title: 'Kostenloser Website-Check',
    subtitle:
      'Lassen Sie Ihre Website kostenlos analysieren und erfahren Sie, wie Sie mehr Kunden über Google und Ihre Website gewinnen können.',
    heroBenefits: [
      { key: 'design', label: 'Modernes Design' },
      { key: 'seo', label: 'Google-Sichtbarkeit' },
      { key: 'speed', label: 'Ladegeschwindigkeit' },
      { key: 'ux', label: 'Benutzerfreundlichkeit' },
    ] as const,
    trustPersonal: 'Persönliche Analyse durch 319Webdesign',
    trustResponse: 'Rückmeldung innerhalb von 24 Stunden',
    cta: 'Kostenlosen Website-Check starten',
    dataTrust: 'Ihre Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet.',
    privacyNoteBefore:
      'Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Angaben zur Bearbeitung der Anfrage zu. Weitere Informationen finden Sie in der ',
    privacyLinkLabel: 'Datenschutzerklärung',
    privacyNoteAfter: '.',
    successTitle: 'Vielen Dank für Ihre Anfrage!',
    successText:
      'Ich schaue mir Ihre Website persönlich an und melde mich mit ersten Einschätzungen bei Ihnen.',
    successClose: 'Schließen',
    inlineTitle: 'Unsicher, was Ihre Website verbessern könnte?',
    inlineText:
      'Lassen Sie Ihre Website kostenlos prüfen und erhalten Sie konkrete Vorschläge zu Design, Ladezeit und Google-Sichtbarkeit.',
    inlineCta: 'Kostenlosen Website-Check starten',
  },
} as const
