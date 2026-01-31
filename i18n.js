// =========================================================
// Simple i18n dictionary (FR/NL) for static labels
// =========================================================
export const I18N = {
  fr: {
    appName: "Math Blocks",
    menu: "Menu",
    reset: "Reset",
    github: "GitHub",
    howPlay: "Comment jouer ?",
    enter: "Entrer",
    progressCleared: "Progression effacée ✅",
    // index
    homeTitle: "Apprendre les maths avec des blocs (sans « emprunt ») ✨",
    homeLead: "Deux jeux : (1) composer/décomposer, (2) soustraire en transformant une dizaine en 10 unités.",
    teacherMode: "Mode « prof » (rapide)",
    // compose common
    level: "Niveau",
    exercise: "Exercice",
    next: "Suivant ▶",
    check: "Vérifier ✅",
    addTen: "+1 dizaine",
    addOne: "+1 unité",
    remTen: "−1 dizaine",
    remOne: "−1 unité",
    transform: "Transformer 1 dizaine → 10 unités",
    group: "Regrouper 10 unités → 1 dizaine",
    help: "Aide",
    auto: "🤖 Auto",
    // tags
    tagBuild: "Construire",
    tagTransform: "Transformer",
    tagExplore: "Explorer",
    tagJumps: "Sauts",
    tagChallenge: "Défi",
    // subtract steps
    step1: "Étape 1 : Préparer",
    step2: "Étape 2 : Retirer les unités",
    step3: "Étape 3 : Retirer les dizaines",
    // toasts
    letsGo: "On y va ! ✨",
    stepByStep: "Étape par étape 🙂",
    needTen: "Il faut une dizaine pour transformer 🙂",
    need10Ones: "Il faut 10 unités pour regrouper 🙂",
  },
  nl: {
    appName: "Math Blocks",
    menu: "Menu",
    reset: "Reset",
    github: "GitHub",
    howPlay: "Hoe spelen?",
    enter: "Start",
    progressCleared: "Voortgang gewist ✅",
    // index
    homeTitle: "Wiskunde met blokjes (zonder ‘lenen’) ✨",
    homeLead: "Twee spellen: (1) samenstellen/ontbinden, (2) aftrekken door een tiental in 10 eenheden te veranderen.",
    teacherMode: "‘Leerkracht’-modus (snel)",
    // compose common
    level: "Niveau",
    exercise: "Oefening",
    next: "Volgende ▶",
    check: "Controleren ✅",
    addTen: "+1 tiental",
    addOne: "+1 eenheid",
    remTen: "−1 tiental",
    remOne: "−1 eenheid",
    transform: "Verander 1 tiental → 10 eenheden",
    group: "Groepeer 10 eenheden → 1 tiental",
    help: "Help",
    auto: "🤖 Auto",
    // tags
    tagBuild: "Bouwen",
    tagTransform: "Veranderen",
    tagExplore: "Ontdekken",
    tagJumps: "Sprongen",
    tagChallenge: "Uitdaging",
    // subtract steps
    step1: "Stap 1: Voorbereiden",
    step2: "Stap 2: Eenheden wegnemen",
    step3: "Stap 3: Tientallen wegnemen",
    // toasts
    letsGo: "Daar gaan we! ✨",
    stepByStep: "Stap voor stap 🙂",
    needTen: "Je hebt een tiental nodig 🙂",
    need10Ones: "Je hebt 10 eenheden nodig 🙂",
  }
};

export function t(lang, key){
  const L = I18N[lang] || I18N.fr;
  return L[key] ?? I18N.fr[key] ?? key;
}
