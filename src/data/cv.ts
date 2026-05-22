import cvEs from "./cv.es.json";
import cvEn from "./cv.en.json";

export type Lang = "es" | "en";

/**
 * Explicit, hand-written type for the CV data.
 *
 * The two locale JSON files (cv.es.json / cv.en.json) legitimately differ in
 * which optional fields each entry carries — different projects expose
 * `github`, `highlights`, `url` or `badges` and not symmetrically between the
 * two files. Every field that is not present on every entry is therefore
 * marked optional here so both datasets satisfy `CV`.
 */

export interface CVLocation {
  city: string;
  countryCode: string;
  region: string;
}

export interface CVProfile {
  network: string;
  username: string;
  url: string;
}

export interface CVBasics {
  name: string;
  label: string;
  image: string;
  email: string;
  phone: string;
  url: string;
  summary: string;
  location: CVLocation;
  profiles: CVProfile[];
}

export interface CVWork {
  name: string;
  position: string;
  url?: string;
  startDate: string;
  endDate: string;
  summary?: string;
  highlights?: string[];
}

export interface CVEducation {
  institution: string;
  url?: string;
  area: string;
  studyType: string;
  startDate: string;
  endDate: string;
  courses?: string[];
}

export interface CVSkill {
  name: string;
  level: string;
  keywords: string[];
}

export interface CVLanguage {
  language: string;
  fluency: string;
}

export interface CVBadge {
  label: string;
  url?: string;
}

export interface CVProject {
  name: string;
  isActive: boolean;
  startDate: string;
  endDate: string;
  description: string;
  highlights?: string[];
  badges?: CVBadge[];
  url?: string;
  github?: string;
}

export interface CV {
  basics: CVBasics;
  work: CVWork[];
  volunteer: unknown[];
  education: CVEducation[];
  awards: unknown[];
  certificates: unknown[];
  publications: unknown[];
  skills: CVSkill[];
  languages: CVLanguage[];
  interests: unknown[];
  references: unknown[];
  projects: CVProject[];
}

const datasets: Record<Lang, CV> = {
  es: cvEs,
  en: cvEn,
};

export function getCV(lang: Lang): CV {
  return datasets[lang];
}
