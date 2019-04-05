const markdownTextarea = document.querySelector('#markdown');
const interpretedMarkdownArea = document.querySelector('#interpreted-markdown');

markdownTextarea.addEventListener('input', (evt) => {
  interpretedMarkdownArea.innerHTML = evt.target.value;
});
