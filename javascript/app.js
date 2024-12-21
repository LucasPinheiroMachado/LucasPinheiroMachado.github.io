document.querySelectorAll('.read-more').forEach(button => {
  button.addEventListener('click', () => {
    const project = button.closest('.project');
    const text = project.querySelector('p');
    
    if (text.classList.contains('expanded')) {
      text.classList.remove('expanded');
      button.textContent = '...Ler mais';
    } else {
      text.classList.add('expanded');
      button.textContent = 'Ler menos';
    }
  });
});
