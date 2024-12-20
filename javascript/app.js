document.querySelectorAll('.read-more').forEach(button => {
  button.addEventListener('click', () => {
    const project = button.closest('.project');
    const text = project.querySelector('p'); // Seleciona o parágrafo dentro do projeto
    
    // Alterna entre expandir e colapsar o texto
    if (text.classList.contains('expanded')) {
      // Se o texto estiver expandido, recolhe
      text.classList.remove('expanded');
      button.textContent = '...Ler mais';
    } else {
      // Se o texto estiver colapsado, expande
      text.classList.add('expanded');
      button.textContent = 'Ler menos';
    }
  });
});
