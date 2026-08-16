document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const pageKey = body.dataset.pageKey;

  if (pageKey) {
    setupNotePage(pageKey);
  }

  initializeThemeToggle();

  document.querySelectorAll('.card[data-note-key]').forEach((card) => {
    const key = card.dataset.noteKey;
    const indicator = card.querySelector('.save-indicator');

    if (!indicator) return;

    const savedText = localStorage.getItem(key) || '';
    indicator.textContent = savedText.trim() ? 'Anotações salvas' : 'Sem anotações';
  });

  document.querySelectorAll('.toggle-details').forEach((button) => {
    button.addEventListener('click', () => {
      const card = button.closest('.card');
      const isExpanded = card.classList.toggle('expanded');
      button.textContent = isExpanded ? 'Ocultar' : 'Ler mais';
      button.setAttribute('aria-expanded', String(isExpanded));
    });
  });
});

function initializeThemeToggle() {
  const toggleButton = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const shouldUseDark = savedTheme === 'dark' || (!savedTheme && prefersDark);

  if (shouldUseDark) {
    document.body.classList.add('dark-mode');
  }

  if (toggleButton) {
    toggleButton.textContent = shouldUseDark ? '☀️' : '🌙';
    toggleButton.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      const isDark = document.body.classList.contains('dark-mode');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      toggleButton.textContent = isDark ? '☀️' : '🌙';
    });
  }
}

function setupNotePage(storageKey) {
  const textarea = document.getElementById('note-input');
  const status = document.getElementById('save-status');
  const clearBtn = document.getElementById('clear-note');

  if (!textarea) return;

  const savedText = localStorage.getItem(storageKey) || '';
  textarea.value = savedText;

  const setStatus = (message) => {
    if (!status) return;
    status.textContent = message;
  };

  textarea.addEventListener('input', () => {
    localStorage.setItem(storageKey, textarea.value);
    setStatus('Salvo no navegador');
  });

  clearBtn?.addEventListener('click', () => {
    textarea.value = '';
    localStorage.removeItem(storageKey);
    setStatus('Limpo');
  });
}
