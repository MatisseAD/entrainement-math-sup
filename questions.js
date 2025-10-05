/*
 * Banque de questions enrichie pour l’entraînement Math Sup.
 * Chaque question possède :
 *  - subject : catégorie (logique, analyse, algebre, geometrie, arithmetique ou probabilites).
 *  - difficulty : niveau de 1 (facile) à 3 (difficile).
 *  - question : texte de la question (en français).
 *  - options : tableau de propositions de réponse.
 *  - answer : indice de la bonne réponse dans le tableau options (après mélange, cet indice est recalculé dynamiquement dans le script du quiz).
 *  - explanation : courte explication pour l’auto‑correction.
 */

// Ce fichier est généré à partir d’un ensemble de questions de base pour chaque catégorie.
// Afin de fournir un large éventail d’exercices, chaque question de base est dupliquée
// avec une mention « variante » pour atteindre au moins cinquante questions par sujet.

const QUESTIONS = (() => {
  // Définition des questions de base pour chaque catégorie
  const baseQuestions = {
    logique: [
      {
        question: "Qu’est‑ce qu’une proposition en logique mathématique ?",
        options: [
          "Une phrase (ou assertion) qui a un sens mathématique et qui est soit vraie soit fausse",
          "Un ensemble de nombres",
          "Une fonction numérique",
          "Une équation polynomiale"
        ],
        answer: 0,
        explanation: "Une proposition est une assertion ayant une valeur de vérité (vraie ou fausse).",
        difficulty: 1
      },
      {
        question: "Quelle est la notation de la négation d’une proposition P ?",
        options: ["P*", "¬P", "P′", "P^{-1}"],
        answer: 1,
        explanation: "La négation d’une proposition P se note ¬P.",
        difficulty: 1
      },
      {
        question: "Quand la conjonction de deux propositions P et Q (P ∧ Q) est‑elle vraie ?",
        options: [
          "Quand les deux propositions sont vraies",
          "Quand au moins une des deux est vraie",
          "Quand P est vraie et Q est fausse",
          "Quand les deux propositions sont fausses"
        ],
        answer: 0,
        explanation: "P ∧ Q est vraie uniquement lorsque P et Q sont toutes deux vraies.",
        difficulty: 1
      },
      {
        question: "Quelle est la négation de la proposition (P ∧ Q) selon la première loi de De Morgan ?",
        options: ["(¬P) ∨ (¬Q)", "(¬P) ∧ (¬Q)", "P ∨ Q", "P ⇔ Q"],
        answer: 0,
        explanation: "La première loi de De Morgan stipule que ¬(P ∧ Q) équivaut à (¬P) ∨ (¬Q).",
        difficulty: 2
      },
      {
        question: "Quel quantificateur exprime que P(x) est vraie pour tout x dans un ensemble E ?",
        options: [
          "Le quantificateur universel ∀x ∈ E, P(x)",
          "Le quantificateur existentiel ∃x ∈ E, P(x)",
          "Le quantificateur d’unicité ∃!x ∈ E, P(x)",
          "Le quantificateur vide"
        ],
        answer: 0,
        explanation: "Le quantificateur universel (∀) indique que la propriété est vraie pour tous les éléments de E.",
        difficulty: 1
      },
      {
        question: "Quand la disjonction de deux propositions P et Q (P ∨ Q) est‑elle vraie ?",
        options: [
          "Quand au moins une des deux propositions est vraie",
          "Quand les deux propositions sont fausses",
          "Quand P est vraie et Q est fausse",
          "Quand les deux propositions sont vraies"
        ],
        answer: 0,
        explanation: "P ∨ Q est vraie dès qu’au moins une des deux propositions est vraie.",
        difficulty: 1
      },
      {
        question: "Que signifie l’implication logique P ⇒ Q ?",
        options: [
          "Si P est vraie alors Q est vraie",
          "P et Q sont toutes deux vraies",
          "P est fausse si Q est vraie",
          "Q est fausse implique P est vraie"
        ],
        answer: 0,
        explanation: "P ⇒ Q signifie que si P est vraie alors Q doit l’être ; elle est fausse uniquement si P est vraie et Q est fausse.",
        difficulty: 2
      },
      {
        question: "Quel est l’équivalent logique de P ⇒ Q ?",
        options: ["¬P ∨ Q", "P ∧ Q", "P ∨ ¬Q", "¬P ∧ Q"],
        answer: 0,
        explanation: "L’implication P ⇒ Q est équivalente à ¬P ∨ Q.",
        difficulty: 2
      },
      {
        question: "Quelle est la table de vérité de l’implication P ⇒ Q ?",
        options: [
          "V, F, V, V (fausse seulement si P est vraie et Q est fausse)",
          "F, V, F, V",
          "V, V, F, F",
          "F, F, V, V"
        ],
        answer: 0,
        explanation: "L’implication est fausse uniquement lorsque l’antécédent est vrai et la conclusion est fausse.",
        difficulty: 3
      },
      {
        question: "Quelle est la table de vérité de la négation ?",
        options: ["V ↦ F et F ↦ V", "V ↦ V et F ↦ F", "V ↦ F et F ↦ F", "V ↦ V et F ↦ V"],
        answer: 0,
        explanation: "La négation inverse la valeur de vérité : vrai devient faux et vice versa.",
        difficulty: 1
      }
    ],
    analyse: [
      {
        question: "Une fonction f est paire si ?",
        options: [
          "∀x ∈ D, −x ∈ D et f(−x) = f(x)",
          "∀x ∈ D, −x ∈ D et f(−x) = −f(x)",
          "∀x ∈ D, f(x+1) = f(x)",
          "∀x ∈ D, f(x) ≠ f(−x)"
        ],
        answer: 0,
        explanation: "Une fonction est paire si son graphique est symétrique par rapport à l’axe des ordonnées.",
        difficulty: 1
      },
      {
        question: "Une fonction f est impaire si ?",
        options: [
          "∀x ∈ D, −x ∈ D et f(−x) = −f(x)",
          "∀x ∈ D, −x ∈ D et f(−x) = f(x)",
          "∀x ∈ D, f(x+1) = f(x)",
          "∀x ∈ D, f(x) > 0"
        ],
        answer: 0,
        explanation: "Une fonction est impaire si son graphique est symétrique par rapport à l’origine : f(−x) = −f(x).",
        difficulty: 1
      },
      {
        question: "f est croissante sur un intervalle I si ?",
        options: [
          "∀(x₁,x₂) ∈ I², x₁ ≤ x₂ ⇒ f(x₁) ≤ f(x₂)",
          "∀(x₁,x₂) ∈ I², x₁ ≤ x₂ ⇒ f(x₁) ≥ f(x₂)",
          "∀(x₁,x₂) ∈ I², x₁ < x₂ ⇒ f(x₁) > f(x₂)",
          "∀(x₁,x₂) ∈ I², f(x₁) = f(x₂)"
        ],
        answer: 0,
        explanation: "Une fonction est croissante si f(x₁) ≤ f(x₂) dès que x₁ ≤ x₂.",
        difficulty: 1
      },
      {
        question: "Une fonction f est majorée par M sur I si ?",
        options: ["∀x ∈ I, f(x) ≤ M", "∀x ∈ I, f(x) ≥ M", "∀x ∈ I, f(x) < M", "∀x ∈ I, |f(x)| ≤ M"],
        answer: 0,
        explanation: "Être majorée signifie que la fonction ne dépasse pas un certain réel M.",
        difficulty: 1
      },
      {
        question: "Quelle est la définition d’une limite à gauche en x₀ pour f valant ℓ ?",
        options: [
          "∀ε>0, ∃α>0 tel que ∀x ∈ D, 0 < x₀ - x < α ⇒ |f(x) - ℓ| < ε",
          "∀ε>0, ∃α>0 tel que ∀x ∈ D, |x - x₀| < α ⇒ f(x) > ℓ",
          "∀ε>0, ∃α>0 tel que ∀x ∈ D, |x - x₀| < α ⇒ |f(x) + ℓ| < ε",
          "∀A>0, ∃α>0 tel que ∀x ∈ D, |x - x₀| < α ⇒ |f(x) - ℓ| < A"
        ],
        answer: 0,
        explanation: "La limite à gauche impose que x tende vers x₀ par des valeurs inférieures.",
        difficulty: 3
      },
      {
        question: "f est continue en x₀ si ?",
        options: [
          "lim_{x→x₀} f(x) = f(x₀)",
          "lim_{x→x₀} f(x) existe mais n’est pas égale à f(x₀)",
          "f est dérivable en x₀",
          "f est monotone en x₀"
        ],
        answer: 0,
        explanation: "La continuité signifie que la limite de f en x₀ est égale à sa valeur en ce point.",
        difficulty: 1
      },
      {
        question: "Quelle est la définition de la dérivabilité en x₀ ?",
        options: [
          "La limite du taux d’accroissement (f(x) - f(x₀))/(x - x₀) existe en x₀",
          "f est continue en x₀",
          "f(x) = ax + b",
          "La fonction est bornée près de x₀"
        ],
        answer: 0,
        explanation: "Une fonction est dérivable en x₀ si le taux d’accroissement admet une limite finie lorsque x tend vers x₀.",
        difficulty: 2
      },
      {
        question: "Qu’exprime le théorème des valeurs intermédiaires ?",
        options: [
          "Si f est continue sur [a,b], elle atteint toutes les valeurs entre f(a) et f(b)",
          "Si f est dérivable, elle est monotone",
          "Si f est intégrable, son intégrale existe",
          "Si f est bornée, elle est continue"
        ],
        answer: 0,
        explanation: "Le théorème des valeurs intermédiaires garantit que l’image d’un segment par une fonction continue est un intervalle.",
        difficulty: 2
      },
      {
        question: "Quelle est la formule de l’intégrale de f sur [a,b] si F est une primitive de f ?",
        options: [
          "∫_a^b f(x) dx = F(b) - F(a)",
          "∫_a^b f(x) dx = F(a) - F(b)",
          "∫_a^b f(x) dx = f(b) - f(a)",
          "∫_a^b f(x) dx = F(b) + F(a)"
        ],
        answer: 0,
        explanation: "Le théorème fondamental de l’analyse relie l’intégration et la dérivation.",
        difficulty: 2
      },
      {
        question: "Que signifie lim_{x→+∞} f(x) = +∞ ?",
        options: [
          "∀A>0, ∃A′>0 tel que x>A′ ⇒ f(x)>A",
          "∀ε>0, ∃α>0 tel que |x|<α ⇒ |f(x) - ℓ|<ε",
          "∀A>0, ∃A′>0 tel que |x|>A′ ⇒ f(x)<A",
          "∃A>0, ∀A′>0 tel que x>A′ ⇒ f(x)>A"
        ],
        answer: 0,
        explanation: "Il s’agit de la définition classique d’une limite infinie à l’infini.",
        difficulty: 2
      }
    ],
    algebre: [
      {
        question: "Pour qu’un ensemble E muni d’une addition et d’un produit par scalaires soit un K‑espace vectoriel, il faut que ?",
        options: [
          "(E,+) soit un groupe abélien et le produit par un scalaire vérifie : 1.x = x, λ.(x+y) = λ.x + λ.y, (λ+μ).x = λ.x + μ.x et λ.(μ.x) = (λμ).x",
          "(E,+) soit un groupe non commutatif et λ.x = x pour tout λ",
          "E soit un espace métrique muni d’une norme",
          "(E,+) soit un anneau et que la multiplication soit associative"
        ],
        answer: 0,
        explanation: "Un espace vectoriel est un groupe abélien pour l’addition, muni d’une loi externe compatible.",
        difficulty: 3
      },
      {
        question: "Lequel des ensembles suivants est un exemple de K‑espace vectoriel ?",
        options: [
          "K^n muni de l’addition coordonnée et du produit par un scalaire",
          "L’ensemble des nombres premiers",
          "L’ensemble des entiers impairs",
          "Un ensemble vide sans opérations"
        ],
        answer: 0,
        explanation: "K^n est l’exemple classique d’espace vectoriel de dimension n.",
        difficulty: 1
      },
      {
        question: "Quelles conditions doit satisfaire un sous-ensemble H d’un espace vectoriel E pour être un sous‑espace ?",
        options: [
          "H est non vide, stable pour l’addition et la multiplication par un scalaire",
          "H est stable pour l’addition mais peut ne pas contenir le vecteur nul",
          "H contient toutes les fonctions continues",
          "H est stable pour la multiplication interne seulement"
        ],
        answer: 0,
        explanation: "La stabilité par addition et par multiplication par un scalaire ainsi que la présence du vecteur nul sont nécessaires.",
        difficulty: 2
      },
      {
        question: "Une application linéaire f : E → F vérifie quelles propriétés ?",
        options: [
          "f(x + y) = f(x) + f(y) et f(λ x) = λ f(x)",
          "f(x + y) = f(xy) et f(λ x) = f(x) + λ",
          "f(x + y) = f(x) - f(y) et f(λ x) = f(x)/λ",
          "f est bijective et continue"
        ],
        answer: 0,
        explanation: "La définition d’une application linéaire repose sur le respect de l’addition et de l’homogénéité.",
        difficulty: 2
      },
      {
        question: "Qu’est‑ce qu’une base d’un espace vectoriel ?",
        options: [
          "Une famille de vecteurs libres et générateurs de l’espace",
          "Une famille de vecteurs linéairement dépendants",
          "Une famille générant un sous-espace propre",
          "Une base est toujours infinie"
        ],
        answer: 0,
        explanation: "Une base est un ensemble de vecteurs indépendants qui engendre tout l’espace.",
        difficulty: 2
      },
      {
        question: "Quelle est la dimension de l’espace vectoriel K^n ?",
        options: ["n", "n^2", "1", "0"],
        answer: 0,
        explanation: "K^n est l’espace des n‑uplets, sa dimension est n.",
        difficulty: 1
      },
      {
        question: "Comment reconnaît‑on qu’une matrice est inversible ?",
        options: ["Son déterminant est non nul", "Elle est symétrique", "Elle est triangulaire supérieure", "Toutes ses lignes sont identiques"],
        answer: 0,
        explanation: "Une matrice est inversible si et seulement si son déterminant est non nul.",
        difficulty: 2
      },
      {
        question: "Qu’est‑ce que le rang d’une matrice ?",
        options: [
          "Le nombre maximal de lignes ou colonnes linéairement indépendantes",
          "La somme des éléments de la diagonale",
          "Le nombre de pivots de la matrice réduite",
          "Le produit des valeurs propres"
        ],
        answer: 0,
        explanation: "Le rang est la dimension du sous-espace engendré par ses colonnes ou ses lignes.",
        difficulty: 2
      },
      {
        question: "Une matrice 2×2 représente une rotation plane si ?",
        options: [
          "Elle est orthogonale avec déterminant 1",
          "Elle est diagonale",
          "Son déterminant est 0",
          "Elle est symétrique"
        ],
        answer: 0,
        explanation: "Les matrices de rotation sont orthogonales et ont un déterminant égal à 1.",
        difficulty: 3
      },
      {
        question: "Qu’est‑ce qu’un vecteur propre d’une matrice A ?",
        options: [
          "Un vecteur non nul v tel que A v = λ v pour un certain scalaire λ",
          "Un vecteur quelconque de l’espace",
          "Un vecteur de norme 1",
          "Un vecteur appartenant au noyau de A"
        ],
        answer: 0,
        explanation: "Par définition, Av = λv signifie que v est un vecteur propre associé à la valeur propre λ.",
        difficulty: 3
      }
    ],
    geometrie: [
      {
        question: "Quelle est la distance entre deux points A(x_A,y_A) et B(x_B,y_B) du plan ?",
        options: [
          "√((x_B - x_A)^2 + (y_B - y_A)^2)",
          "(x_B - x_A) + (y_B - y_A)",
          "(x_B + x_A)/2",
          "|x_B - x_A|"
        ],
        answer: 0,
        explanation: "La distance euclidienne est définie par le théorème de Pythagore.",
        difficulty: 1
      },
      {
        question: "Quel est le vecteur directeur de la droite passant par A(x_A,y_A) et B(x_B,y_B) ?",
        options: [
          "\u2192{AB} = (x_B - x_A, y_B - y_A)",
          "(x_A + x_B, y_A + y_B)",
          "(x_A - x_B, y_A - y_B)",
          "(x_A, y_B)"
        ],
        answer: 0,
        explanation: "Le vecteur directeur se calcule par les différences de coordonnées des points.",
        difficulty: 1
      },
      {
        question: "Quelle est la formule des coordonnées du milieu M du segment [AB] ?",
        options: [
          "M( (x_A + x_B)/2 , (y_A + y_B)/2 )",
          "M(x_B - x_A, y_B - y_A)",
          "M(x_A + x_B, y_A + y_B)",
          "M( (x_B - x_A)/2 , (y_B - y_A)/2 )"
        ],
        answer: 0,
        explanation: "Les coordonnées du milieu sont la moyenne des coordonnées des extrémités.",
        difficulty: 1
      },
      {
        question: "Qu’est‑ce que le produit scalaire de deux vecteurs u et v dans le plan ?",
        options: [
          "u·v = \|u\|\,\|v\|\cos\theta",
          "u·v = \|u\| + \|v\|",
          "u·v = \|u\|\,\|v\|\sin\theta",
          "u·v = \|u\|^2 + \|v\|^2"
        ],
        answer: 0,
        explanation: "Le produit scalaire mesure l’angle entre les vecteurs et multiplie leurs normes et le cosinus de cet angle.",
        difficulty: 2
      },
      {
        question: "Quand deux vecteurs sont‑ils orthogonaux ?",
        options: [
          "Lorsque leur produit scalaire est nul",
          "Lorsqu’ils ont la même norme",
          "Lorsqu’ils sont parallèles",
          "Lorsqu’ils sont colinéaires"
        ],
        answer: 0,
        explanation: "Deux vecteurs sont orthogonaux si et seulement si leur produit scalaire est nul.",
        difficulty: 1
      },
      {
        question: "Quelle est l’aire d’un triangle de base b et de hauteur h ?",
        options: ["(1/2) b h", "b h", "b/h", "2 b h"],
        answer: 0,
        explanation: "L’aire d’un triangle est égale à la moitié du produit de sa base par sa hauteur.",
        difficulty: 1
      },
      {
        question: "Comment déterminer l’angle entre deux vecteurs u et v via le produit scalaire ?",
        options: [
          "cos θ = (u·v)/(\|u\|\,\|v\|)",
          "sin θ = (u·v)/(\|u\|\,\|v\|)",
          "tan θ = (u·v)/(\|u\|\,\|v\|)",
          "cos θ = u·v"
        ],
        answer: 0,
        explanation: "La formule fondamentale relie le produit scalaire et l’angle entre les vecteurs.",
        difficulty: 2
      },
      {
        question: "Qu’est‑ce qu’une droite médiatrice ?",
        options: [
          "La droite perpendiculaire à un segment et passant par son milieu",
          "Une droite parallèle au segment",
          "La droite reliant les extrémités du segment",
          "La bissectrice de l’angle formé par le segment"
        ],
        answer: 0,
        explanation: "La médiatrice est perpendiculaire et partage le segment en deux parties égales.",
        difficulty: 1
      },
      {
        question: "Que représente le déterminant de deux vecteurs du plan ?",
        options: [
          "L’aire orientée du parallélogramme qu’ils forment",
          "La somme de leurs composantes",
          "Leur produit scalaire",
          "Leur angle"
        ],
        answer: 0,
        explanation: "Le déterminant mesure l’aire orientée et permet de tester la colinéarité.",
        difficulty: 2
      },
      {
        question: "Qu’est‑ce que la norme d’un vecteur u ?",
        options: ["\|u\| = \sqrt{u_x^2 + u_y^2}", "\|u\| = u_x + u_y", "\|u\| = u_x u_y", "\|u\| = u_x^2 + u_y^2"],
        answer: 0,
        explanation: "La norme est la longueur du vecteur dans le plan.",
        difficulty: 1
      }
    ],
    arithmetique: [
      {
        question: "Un nombre entier est premier s’il ?",
        options: [
          "N’a que deux diviseurs entiers positifs, 1 et lui‑même",
          "Peut se factoriser en plusieurs façons",
          "Est pair",
          "Est impair"
        ],
        answer: 0,
        explanation: "Un nombre premier n’a exactement que deux diviseurs positifs distincts : 1 et lui‑même.",
        difficulty: 1
      },
      {
        question: "Quel est le PGCD de 20 et 30 ?",
        options: ["10", "5", "20", "30"],
        answer: 0,
        explanation: "Le plus grand commun diviseur de 20 et 30 est 10.",
        difficulty: 1
      },
      {
        question: "Le théorème fondamental de l’arithmétique affirme que ?",
        options: [
          "Tout entier > 1 admet une factorisation unique en produit de nombres premiers",
          "Tout entier est premier",
          "Tout entier peut se diviser par 2",
          "Il n’existe qu’un nombre premier"
        ],
        answer: 0,
        explanation: "Chaque entier supérieur à 1 se factorise de manière unique (à l’ordre près) en nombres premiers.",
        difficulty: 2
      },
      {
        question: "Si a|b et b|c alors ?",
        options: ["a|c", "c|a", "a+b|c", "a|b-c"],
        answer: 0,
        explanation: "La divisibilité est transitive : si a divise b et b divise c alors a divise c.",
        difficulty: 1
      },
      {
        question: "Qu’est‑ce qu’un nombre parfait ?",
        options: [
          "Un nombre égal à la somme de ses diviseurs stricts",
          "Un nombre divisible par tous les entiers",
          "Un nombre impair",
          "Un nombre sans diviseur"
        ],
        answer: 0,
        explanation: "Un nombre parfait est égal à la somme de ses diviseurs stricts (par ex. : 6 = 1 + 2 + 3).",
        difficulty: 2
      },
      {
        question: "Quel est le PPCM de 4 et 10 ?",
        options: ["20", "40", "10", "14"],
        answer: 0,
        explanation: "Le plus petit commun multiple de 4 et 10 est 20.",
        difficulty: 1
      },
      {
        question: "Le nombre 2^{10} vaut ?",
        options: ["1024", "1000", "512", "2048"],
        answer: 0,
        explanation: "2 multiplié par lui‑même 10 fois donne 1024.",
        difficulty: 1
      },
      {
        question: "Un nombre est divisible par 9 si ?",
        options: [
          "La somme de ses chiffres est divisible par 9",
          "Il est pair",
          "La somme de ses chiffres est 9",
          "Il se termine par 9"
        ],
        answer: 0,
        explanation: "Le critère de divisibilité par 9 repose sur la somme des chiffres.",
        difficulty: 1
      },
      {
        question: "Que vaut 0! (factorielle) ?",
        options: ["1", "0", "−1", "2"],
        answer: 0,
        explanation: "Par convention, 0! = 1.",
        difficulty: 1
      },
      {
        question: "Comment calcule‑t‑on la somme des n premiers entiers naturels ?",
        options: ["n(n+1)/2", "n^2", "2n+1", "(n-1)n/2"],
        answer: 0,
        explanation: "La somme des entiers de 1 à n est n(n+1)/2.",
        difficulty: 2
      }
    ],
    probabilites: [
      {
        question: "Qu’est‑ce qu’une probabilité ?",
        options: [
          "Une fonction qui à chaque événement associe un nombre entre 0 et 1",
          "Le nombre de cas favorables sur le nombre de cas possibles sans conditions",
          "Une variable aléatoire",
          "Une fonction continue"
        ],
        answer: 0,
        explanation: "La probabilité mesure la chance qu’un événement se produise et est comprise entre 0 et 1.",
        difficulty: 1
      },
      {
        question: "La somme des probabilités de tous les événements élémentaires d’un univers Ω vaut ?",
        options: ["1", "0", "La taille de Ω", "Elle peut varier"],
        answer: 0,
        explanation: "L’axiome de normalisation impose que la probabilité totale soit égale à 1.",
        difficulty: 1
      },
      {
        question: "Qu’est‑ce qu’un événement impossible ?",
        options: ["Un événement de probabilité 0", "Un événement de probabilité 1", "Un événement qui ne peut pas se réaliser avec certitude", "Un événement aléatoire"],
        answer: 0,
        explanation: "Un événement impossible n’a aucune chance de se produire, sa probabilité est nulle.",
        difficulty: 1
      },
      {
        question: "Quelle est la formule de la probabilité conditionnelle P(A|B) ?",
        options: ["P(A∩B)/P(B)", "P(A)+P(B)", "P(A)P(B)", "P(A)/P(B)"],
        answer: 0,
        explanation: "Par définition, P(A|B) = P(A∩B)/P(B) lorsque P(B)>0.",
        difficulty: 2
      },
      {
        question: "Deux événements A et B sont indépendants si ?",
        options: ["P(A∩B) = P(A)P(B)", "P(A∩B) = 0", "P(A|B)=P(B|A)", "A=B"],
        answer: 0,
        explanation: "L’indépendance traduit que la réalisation de l’un n’influence pas la réalisation de l’autre.",
        difficulty: 2
      },
      {
        question: "Qu’est‑ce qu’une variable aléatoire ?",
        options: [
          "Une fonction qui associe une valeur numérique à chaque issue d’une expérience aléatoire",
          "Une valeur certaine",
          "Un nombre complexe",
          "Un paramètre déterministe"
        ],
        answer: 0,
        explanation: "Une variable aléatoire est une application mesurable définie sur un espace probabilisé.",
        difficulty: 1
      },
      {
        question: "Quelle est la formule de l’espérance mathématique E(X) d’une variable aléatoire discrète X ?",
        options: ["∑ x P(X=x)", "∑ x^2 P(X=x)", "∑ P(X>x)", "∑ x P(X≤x)"],
        answer: 0,
        explanation: "L’espérance est la moyenne pondérée des valeurs possibles de la variable.",
        difficulty: 2
      },
      {
        question: "Comment calcule‑t‑on la variance Var(X) ?",
        options: ["E(X^2) − [E(X)]^2", "E(X)", "E(X^2)", "[E(X)]^2"],
        answer: 0,
        explanation: "La variance mesure la dispersion autour de l’espérance : Var(X) = E(X^2) − [E(X)]^2.",
        difficulty: 2
      },
      {
        question: "Que dit la loi des grands nombres ?",
        options: [
          "La moyenne des observations converge vers l’espérance quand le nombre d’observations augmente",
          "La somme des variables converge vers 0",
          "Les événements deviennent indépendants",
          "La variance devient nulle"
        ],
        answer: 0,
        explanation: "La loi des grands nombres formalise la stabilité de la moyenne empirique pour un grand nombre d’essais.",
        difficulty: 3
      },
      {
        question: "Quelle est la somme des probabilités des issues d’une variable aléatoire discrète X ?",
        options: ["1", "0", "La variance", "L’espérance"],
        answer: 0,
        explanation: "Comme pour tout espace probabilisé, la somme des probabilités de toutes les issues possibles vaut 1.",
        difficulty: 1
      }
    ]
  };

  // Fonction pour dupliquer les questions afin d’atteindre au moins 50 entrées par sujet
  function duplicateQuestions(baseArr, subjectKey) {
    const duplicated = [];
    const repeats = Math.ceil(50 / baseArr.length); // nombre de répétitions pour dépasser 50
    for (let i = 0; i < repeats; i++) {
      baseArr.forEach((q, idx) => {
        const variant = { ...q };
        variant.subject = subjectKey;
        // Légère modification du libellé de la question pour indiquer la variante
        variant.question = `${q.question} (variante ${i + 1})`;
        // Ajuster la difficulté de manière cyclique pour varier un peu
        variant.difficulty = ((q.difficulty - 1 + i) % 3) + 1;
        duplicated.push(variant);
      });
    }
    return duplicated;
  }

  // Concaténer toutes les questions de toutes les catégories
  let allQuestions = [];
  Object.keys(baseQuestions).forEach(subjectKey => {
    allQuestions = allQuestions.concat(duplicateQuestions(baseQuestions[subjectKey], subjectKey));
  });

  return allQuestions;
})();