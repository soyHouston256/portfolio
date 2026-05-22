export type Lang = "es" | "en";

export const languages: Record<Lang, string> = {
  es: "Español",
  en: "English",
};

export const defaultLang: Lang = "es";

export interface UIStrings {
  /** <html lang> and document language */
  htmlLang: string;
  /** Section titles */
  sections: {
    about: string;
    experience: string;
    education: string;
    projects: string;
    skills: string;
  };
  /** Word shown when an end date is missing (ongoing). */
  present: string;
  /** Page <title> suffix appended after the name. */
  titleRole: string;
  /** Hero / link accessible labels. */
  hero: {
    sendEmail: (name: string, email: string) => string;
    callPhone: (name: string, phone: string) => string;
    visitProfile: (name: string, network: string) => string;
    profilePhotoAlt: (name: string) => string;
    /** Download-CV button label. */
    downloadCV: string;
  };
  /** Theme toggle (light/dark). */
  themeToggle: {
    /** Accessible label for the toggle button. */
    label: string;
  };
  /** Skills section sub-labels grouped by proficiency. */
  skillLevels: {
    expert: string;
    advanced: string;
    intermediate: string;
    basic: string;
  };
  /** Projects section labels. */
  projectsLabels: {
    repository: string;
    seeProject: (name: string) => string;
    /** Accessible label for the active-project status dot. */
    active: string;
  };
  /** "Skip to main content" link text. */
  skipToContent: string;
  /** Command palette (ninja-keys) strings. */
  commandPalette: {
    /** Footer hint split around the kbd shortcut: [before, after]. */
    hintBefore: string;
    hintAfter: string;
    /** Placeholder text inside the palette. */
    placeholder: string;
    /** Section label for built-in actions. */
    actionsSection: string;
    /** Section label for social links. */
    socialSection: string;
    /** "Print" action title. */
    print: string;
    /** Per-profile action title. */
    visit: (network: string) => string;
  };
  /** Language switcher. */
  langSwitcher: {
    /** Accessible label for the switcher group. */
    label: string;
    es: string;
    en: string;
  };
}

const ui: Record<Lang, UIStrings> = {
  es: {
    htmlLang: "es",
    sections: {
      about: "Sobre mí",
      experience: "Experiencia",
      education: "Educación",
      projects: "Proyectos",
      skills: "Habilidades",
    },
    present: "Presente",
    titleRole: "Backend Developer",
    hero: {
      sendEmail: (name, email) => `Enviar correo a ${name} a ${email}`,
      callPhone: (name, phone) => `Llamar a ${name} al número ${phone}`,
      visitProfile: (name, network) => `Visitar el perfil de ${name} en ${network}`,
      profilePhotoAlt: (name) => `Foto de perfil de ${name}`,
      downloadCV: "Descargar CV",
    },
    themeToggle: {
      label: "Cambiar tema claro/oscuro",
    },
    skillLevels: {
      expert: "Experto",
      advanced: "Avanzado",
      intermediate: "Intermedio",
      basic: "Básico",
    },
    projectsLabels: {
      repository: "repositorio",
      seeProject: (name) => `Ver el proyecto ${name}`,
      active: "Proyecto activo",
    },
    skipToContent: "Saltar al contenido principal",
    commandPalette: {
      hintBefore: "Pulsa",
      hintAfter: "para abrir la paleta de comandos",
      placeholder: "Buscar comandos",
      actionsSection: "Acciones",
      socialSection: "Redes sociales",
      print: "Imprimir",
      visit: (network) => `Visitar ${network}`,
    },
    langSwitcher: {
      label: "Cambiar idioma",
      es: "ES",
      en: "EN",
    },
  },
  en: {
    htmlLang: "en",
    sections: {
      about: "About",
      experience: "Experience",
      education: "Education",
      projects: "Projects",
      skills: "Skills",
    },
    present: "Present",
    titleRole: "Backend Developer",
    hero: {
      sendEmail: (name, email) => `Send an email to ${name} at ${email}`,
      callPhone: (name, phone) => `Call ${name} at ${phone}`,
      visitProfile: (name, network) => `Visit ${name}'s profile on ${network}`,
      profilePhotoAlt: (name) => `Profile photo of ${name}`,
      downloadCV: "Download CV",
    },
    themeToggle: {
      label: "Toggle light/dark theme",
    },
    skillLevels: {
      expert: "Expert",
      advanced: "Advanced",
      intermediate: "Intermediate",
      basic: "Basic",
    },
    projectsLabels: {
      repository: "repository",
      seeProject: (name) => `See the ${name} project`,
      active: "Active project",
    },
    skipToContent: "Skip to main content",
    commandPalette: {
      hintBefore: "Press",
      hintAfter: "to open the command palette",
      placeholder: "Search commands",
      actionsSection: "Actions",
      socialSection: "Social",
      print: "Print",
      visit: (network) => `Visit ${network}`,
    },
    langSwitcher: {
      label: "Switch language",
      es: "ES",
      en: "EN",
    },
  },
};

export function getUI(lang: Lang): UIStrings {
  return ui[lang];
}

/** Alias kept for ergonomics. */
export function useTranslations(lang: Lang): UIStrings {
  return getUI(lang);
}
