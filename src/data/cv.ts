import cvEs from "./cv.es.json";
import cvEn from "./cv.en.json";

export type Lang = "es" | "en";

export type CV = typeof cvEs;

const datasets: Record<Lang, CV> = {
  es: cvEs,
  en: cvEn,
};

export function getCV(lang: Lang): CV {
  return datasets[lang];
}
