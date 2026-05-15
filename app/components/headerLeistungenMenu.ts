export type LeistungenMenuLink = { href: string; label: string }

export type LeistungenMenuGroup = {
  title: string
  links: LeistungenMenuLink[]
}

export const leistungenMenuGroups: LeistungenMenuGroup[] = [
  {
    title: 'Webdesign',
    links: [
      { href: '/leistungen/webdesign-launch', label: 'Webdesign & Launch' },
      { href: '/website-relaunch', label: 'Relaunch' },
      { href: '/webdesign-handwerker', label: 'Webdesign für Handwerker' },
      { href: '/immobilienmakler-webdesign', label: 'Immobilienmakler Webdesign' },
    ],
  },
  {
    title: 'SEO',
    links: [{ href: '/leistungen/wachstum-seo', label: 'Wachstum & SEO' }],
  },
  {
    title: 'Wartung',
    links: [{ href: '/leistungen/strategische-begleitung', label: 'Website-Betreuung' }],
  },
]

export const leistungenDropdownPanelWidth = 'min(100vw - 4rem, 760px)'
