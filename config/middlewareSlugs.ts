/**
 * Schlanke Slug-Listen nur für die Middleware.
 * Vermeidet das Laden von config/projects.ts und config/cities.ts bei jeder Anfrage.
 * Bei neuen Portfolio-Projekten oder Städten: hier die Arrays anpassen (und in projects.ts/cities.ts).
 */
export const PROJECT_SLUGS: string[] = ['heinerfilm', 'da-sound', 'he-immologis']
export const CITY_SLUGS: string[] = ['darmstadt', 'pfungstadt', 'griesheim', 'weiterstadt']
