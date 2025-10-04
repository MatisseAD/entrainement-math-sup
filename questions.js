/*
 * Banque de questions pour l’entraînement Math Sup.
 * Chaque question possède :
 * - subject : catégorie (logique, analyse ou algebre).
 * - difficulty : niveau de 1 (facile) à 3 (difficile).
 * - question : texte de la question.
 * - options : tableau de propositions.
 * - answer : indice de la bonne réponse dans le tableau options.
 */

const QUESTIONS = [
  // Logique & Ensembles
  {
    subject: 'logique',
    difficulty: 1,
    question: 'Qu\u2019est\u2011ce qu\u2019une proposition en logique math\u00e9matique\u00a0?',
    options: [
      'Une phrase (ou assertion) qui a un sens math\u00e9matique et qui est soit vraie soit fausse',
      'Un ensemble de nombres',
      'Une fonction num\u00e9rique',
      'Une \u00e9quation polynomiale'
    ],
    answer: 0
  },
  {
    subject: 'logique',
    difficulty: 1,
    question: 'Quelle est la notation de la n\u00e9gation d\u2019une proposition P\u00a0?',
    options: [
      'P*',
      '\u00acP',
      'P\u2032',
      'P^{-1}'
    ],
    answer: 1
  },
  {
    subject: 'logique',
    difficulty: 1,
    question: 'Quand la conjonction de deux propositions P et Q (P \u2227 Q) est‑elle vraie\u00a0?',
    options: [
      'Quand les deux propositions sont vraies',
      'Quand au moins une des deux est vraie',
      'Quand P est vraie et Q est fausse',
      'Quand les deux propositions sont fausses'
    ],
    answer: 0
  },
  {
    subject: 'logique',
    difficulty: 2,
    question: 'Quelle est la n\u00e9gation de la proposition (P \u2227 Q) selon la premi\u00e8re loi de De Morgan\u00a0?',
    options: [
      '(\u00acP) \u2228 (\u00acQ)',
      '(\u00acP) \u2227 (\u00acQ)',
      'P \u2228 Q',
      'P \u21d4 Q'
    ],
    answer: 0
  },
  {
    subject: 'logique',
    difficulty: 1,
    question: 'Quel quantificateur exprime que P(x) est vraie pour tout x dans un ensemble E\u00a0?',
    options: [
      'Le quantificateur universel \u2200x \u2208 E, P(x)',
      'Le quantificateur existentiel \u2203x \u2208 E, P(x)',
      'Le quantificateur d\u2019unicité \u2203!x \u2208 E, P(x)',
      'Le quantificateur vide'
    ],
    answer: 0
  },
  {
    subject: 'logique',
    difficulty: 1,
    question: 'Comment s\u2019\u00e9crit l\u2019intersection de deux ensembles A et B contenus dans E\u00a0?',
    options: [
      'A \u2229 B = \u007bx \u2208 E\u00a0| x \u2208 A et x \u2208 B\u007d',
      'A \u222a B = \u007bx \u2208 E\u00a0| x \u2208 A ou x \u2208 B\u007d',
      'A \u005c B = \u007bx \u2208 E\u00a0| x \u2208 A et x \u2208 B\u007d',
      'A \u222a B = \u007bx \u2208 E\u00a0| x \u2208 A et x \u2208 B\u007d'
    ],
    answer: 0
  },
  // Analyse
  {
    subject: 'analyse',
    difficulty: 1,
    question: 'Une fonction f est paire si\u00a0?',
    options: [
      '\u2200x \u2208 D,\,-x \u2208 D et f(-x) = f(x)',
      '\u2200x \u2208 D,\,-x \u2208 D et f(-x) = -f(x)',
      '\u2200x \u2208 D, f(x+1) = f(x)',
      '\u2200x \u2208 D, f(x) \u2260 f(-x)'
    ],
    answer: 0
  },
  {
    subject: 'analyse',
    difficulty: 3,
    question: 'Quelle est la d\u00e9finition d\u2019une limite \u00e0 gauche en x\u2080 pour une fonction f valant \u2113\u00a0?',
    options: [
      '\u2200\u03b5 > 0, \u2203\u03b1 > 0 tel que \u2200x \u2208 D,\;|x - x\u2080| < \u03b1 \u21d2 |f(x) - \u2113| < \u03b5',
      '\u2200\u03b5 > 0, \u2203\u03b1 > 0 tel que \u2200x \u2208 D,\;|x - x\u2080| < \u03b1 \u21d2 f(x) > \u2113',
      '\u2200\u03b5 > 0, \u2203\u03b1 > 0 tel que \u2200x \u2208 D,\;|x - x\u2080| < \u03b1 \u21d2 |f(x) + \u2113| < \u03b5',
      '\u2200A > 0, \u2203\u03b1 > 0 tel que \u2200x \u2208 D,\;|x - x\u2080| < \u03b1 \u21d2 |f(x) - \u2113| < A'
    ],
    answer: 0
  },
  {
    subject: 'analyse',
    difficulty: 1,
    question: 'f est croissante sur un intervalle I si\u00a0?',
    options: [
      '\u2200(x_1, x_2) \u2208 I^2, x_1 \u2264 x_2 \u21d2 f(x_1) \u2264 f(x_2)',
      '\u2200(x_1, x_2) \u2208 I^2, x_1 \u2264 x_2 \u21d2 f(x_1) \u2265 f(x_2)',
      '\u2200(x_1, x_2) \u2208 I^2, x_1 < x_2 \u21d2 f(x_1) > f(x_2)',
      '\u2200(x_1, x_2) \u2208 I^2, f(x_1) = f(x_2)'
    ],
    answer: 0
  },
  {
    subject: 'analyse',
    difficulty: 1,
    question: 'Une fonction f est major\u00e9e par M sur I si\u00a0?',
    options: [
      '\u2200x \u2208 I, f(x) \u2264 M',
      '\u2200x \u2208 I, f(x) \u2265 M',
      '\u2200x \u2208 I, f(x) < M',
      '\u2200x \u2208 I, |f(x)| \u2264 M'
    ],
    answer: 0
  },
  {
    subject: 'analyse',
    difficulty: 2,
    question: 'On a \u03c7\u00a0: \u201clim_{x \u2192 +\u221e} f(x) = +\u221e\u201d si\u00a0?',
    options: [
      '\u2200A > 0, \u2203A\u2032 > 0 tel que x > A\u2032 \u21d2 f(x) > A',
      '\u2200\u03b5 > 0, \u2203A > 0 tel que |x - A| < \u03b5 \u21d2 |f(x) - A| < \u03b5',
      '\u2200A > 0, \u2203A\u2032 > 0 tel que |x| > A\u2032 \u21d2 f(x) < A',
      '\u2203A > 0, \u2200A\u2032 > 0 tel que x > A\u2032 \u21d2 f(x) > A'
    ],
    answer: 0
  },
  // Algèbre
  {
    subject: 'algebre',
    difficulty: 3,
    question: 'Pour qu\u2019un ensemble E muni d\u2019une addition et d\u2019un produit par des scalaires soit un K-espace vectoriel, il faut que\u00a0?',
    options: [
      '(E,+) soit un groupe ab\u00e9lien et que le produit par un scalaire v\u00e9rifie\u00a0: 1.x = x, \u03bb.(x + y) = \u03bb.x + \u03bb.y, (\u03bb+\u00b5).x = \u03bb.x + \u00b5.x et \u03bb.(\u00b5.x) = (\u03bb\u00b5).x',
      '(E,+) soit un groupe non commutatif et que \u03bb.x = x pour tout \u03bb',
      'E soit un espace m\u00e9trique muni d\u2019une norme',
      '(E,+) soit un anneau et que la multiplication soit associative'
    ],
    answer: 0
  },
  {
    subject: 'algebre',
    difficulty: 1,
    question: 'Lequel des ensembles suivants est un exemple de K-espace vectoriel\u00a0?',
    options: [
      'K^n muni de l\u2019addition coordonn\u00e9e et du produit par un scalaire',
      'L\u2019ensemble des nombres premiers',
      'L\u2019ensemble des entiers impairs',
      'Un ensemble vide sans op\u00e9rations'
    ],
    answer: 0
  },
  {
    subject: 'algebre',
    difficulty: 2,
    question: 'Quelles conditions doit satisfaire un sous-ensemble H d\u2019un espace vectoriel E pour \u00eatre un sous-espace vectoriel\u00a0?',
    options: [
      'H est non vide, stable pour l\u2019addition et stable pour la multiplication par un scalaire',
      'H est stable pour l\u2019addition, mais peut ne pas contenir le vecteur nul',
      'H contient toutes les fonctions continues',
      'H est stable pour la multiplication interne seulement'
    ],
    answer: 0
  },
  {
    subject: 'algebre',
    difficulty: 2,
    question: 'Une application lin\u00e9aire f : E \u2192 F v\u00e9rifie quelles propri\u00e9t\u00e9s\u00a0?',
    options: [
      'f(x + y) = f(x) + f(y) et f(\u03bb x) = \u03bb f(x)',
      'f(x + y) = f(xy) et f(\u03bb x) = f(x) + \u03bb',
      'f(x + y) = f(x) - f(y) et f(\u03bb x) = f(x) / \u03bb',
      'f est bijective et continue'
    ],
    answer: 0
  }
];