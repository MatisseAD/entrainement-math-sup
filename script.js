// Script pour la page d'accueil (index.html)
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('exercise-form');
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      // Récupère les valeurs sélectionnées
      const subject = document.getElementById('subject').value;
      const difficulty = document.getElementById('difficulty').value;
      const time = document.getElementById('time').value;
      const mode = document.getElementById('mode').value;
      // Redirige vers la page du quiz en passant les paramètres dans l’URL
      const params = new URLSearchParams({ subject, difficulty, time, mode });
      window.location.href = `quiz.html?${params.toString()}`;
    });
  }
});