import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: 'en',
    debug: true,
    resources: {
      en: {
        translation: {
          getStarted: 'Get Started',
          heroHeadline: 'The place where we',
          heroDescPart1: 'Designed to be the pinnacle of productive environments.',
          grow: 'Grow',
          comfort: 'comfort',
          functionality: 'functionality',
          inspiration: 'inspiration',
          and: 'and',
          elevate: 'to elevate your productivity',
          about: 'About',
          at: 'At',
          weBelieve:
            'we believe that the right environment is the cornerstone of productivity, creativity and personal growth. Our mission is to provide spaces that do more than just accommodate to work - they inspire it.',
          ourApproach: ' Our approach to designing coworking spaces is deeply rooted in',
          scientificResearch: 'scientific research',
          onProductivity: 'on productivity, ergonomics, and the psychology of workspaces.',
        },
      },
      fr: {
        translation: {
          getStarted: 'Commencer',
          heroHeadline: "L'endroit où nous",
          heroDescPart1: 'Conçu pour être le summum des environnements productifs.',
          grow: 'Croissons',
          comfort: 'confort',
          functionality: 'fonctionnalité',
          inspiration: 'inspiration',
          and: 'et',
          elevate: 'pour élever votre productivité',
          about: 'A propos de',
          at: 'Chez',
          weBelieve:
            "nous croyons que le bon environnement est le pilier de la productivité, de la créativité et de la croissance personnelle. Notre mission est de fournir des espaces qui font plus que simplement s'adapter au travail - ils l'inspirent.",
          ourApproach: "Notre approche de la conception d'espaces de coworking est profondément enracinée dans",
          scientificResearch: 'la recherche scientifique',
          onProductivity: "sur la productivité, l'ergonomie et la psychologie des espaces de travail.",
        },
      },
    },
  });

export default i18next;
