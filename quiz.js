// Gestion du quiz : sélectionne les questions, affiche les questions et gère le chronomètre.

document.addEventListener('DOMContentLoaded', () => {
  // Récupération des paramètres passés dans l’URL
  const params = new URLSearchParams(window.location.search);
  const subject = params.get('subject') || 'logique';
  const difficulty = parseInt(params.get('difficulty'), 10) || 1;
  const timeMinutes = parseInt(params.get('time'), 10) || 5;

  // Filtrer les questions selon le sujet et le niveau de difficulté
  let quizQuestions = QUESTIONS.filter(q => q.subject === subject && q.difficulty <= difficulty);
  // Si aucune question ne correspond, on prend toutes les questions du sujet
  if (quizQuestions.length === 0) {
    quizQuestions = QUESTIONS.filter(q => q.subject === subject);
  }

  // Mélange des questions
  function shuffle(array) {
    const arr = array.slice();
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
  quizQuestions = shuffle(quizQuestions);

  let currentIndex = 0;
  let score = 0;
  let timeLeft = timeMinutes * 60; // en secondes
  const container = document.getElementById('quiz-container');
  const timerEl = document.getElementById('timer');

  // Met à jour l’affichage du chronomètre
  function updateTimer() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerEl.textContent = `Temps restant : ${minutes.toString().padStart(2, '0')}\u00a0:\u00a0${seconds.toString().padStart(2, '0')}`;
  }

  // Terminer le quiz et afficher le score
  function finishQuiz() {
    clearInterval(timerInterval);
    // Nettoie le conteneur et affiche le résultat
    container.innerHTML = '';
    const resultDiv = document.createElement('div');
    resultDiv.className = 'result';
    resultDiv.innerHTML = `<h2>Résultat</h2><p>Vous avez obtenu <strong>${score}</strong> bonne${score > 1 ? 's' : ''} réponse${score > 1 ? 's' : ''} sur ${quizQuestions.length}.</p>`;
    container.appendChild(resultDiv);
  }

  // Affiche la question courante
  function showQuestion() {
    // Si toutes les questions ont été traitées, on termine
    if (currentIndex >= quizQuestions.length) {
      finishQuiz();
      return;
    }
    const q = quizQuestions[currentIndex];
    // Nettoie l’espace des questions mais conserve le chronomètre
    // On supprime tout sauf le timer
    const children = Array.from(container.children).filter(child => child.id !== 'timer');
    children.forEach(child => child.remove());
    // Création des éléments de la question
    const questionEl = document.createElement('div');
    questionEl.className = 'question';
    questionEl.textContent = `${currentIndex + 1}. ${q.question}`;
    const optionsList = document.createElement('ul');
    optionsList.className = 'options';
    q.options.forEach((opt, idx) => {
      const li = document.createElement('li');
      const label = document.createElement('label');
      const radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = 'option';
      radio.value = idx;
      label.appendChild(radio);
      label.appendChild(document.createTextNode(opt));
      li.appendChild(label);
      optionsList.appendChild(li);
    });
    // Bouton suivant / terminer
    const isLast = currentIndex === quizQuestions.length - 1;
    const btn = document.createElement('button');
    btn.id = isLast ? 'finish-btn' : 'next-btn';
    btn.textContent = isLast ? 'Terminer' : 'Suivant';
    btn.addEventListener('click', () => {
      // Vérifie la réponse sélectionnée
      const selected = document.querySelector('input[name="option"]:checked');
      if (!selected) {
        alert('Veuillez sélectionner une réponse avant de continuer.');
        return;
      }
      const selectedIndex = parseInt(selected.value, 10);
      if (selectedIndex === q.answer) {
        score++;
      }
      currentIndex++;
      showQuestion();
    });
    // Ajout des éléments au conteneur
    container.appendChild(questionEl);
    container.appendChild(optionsList);
    container.appendChild(btn);
  }

  // Démarre le chronomètre
  updateTimer();
  const timerInterval = setInterval(() => {
    timeLeft--;
    if (timeLeft <= 0) {
      timeLeft = 0;
      updateTimer();
      finishQuiz();
    } else {
      updateTimer();
    }
  }, 1000);

  // Lance la première question
  showQuestion();
});