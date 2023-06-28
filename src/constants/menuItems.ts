import { RouteNames } from './routes.ts'

export const menuItems = [
  { href: RouteNames.ABOUT, name: 'ОБО МНЕ' },
  { href: RouteNames.SKILLS, name: 'НАВЫКИ' },
  { href: RouteNames.PORTFOLIO, name: 'ПОРТФОЛИО' },
  { href: RouteNames.CONTACTS, name: 'КОНТАКТЫ' },
] as const
