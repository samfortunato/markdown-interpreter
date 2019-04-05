const markdownTextarea = document.querySelector('#markdown');
const interpretedMarkdownArea = document.querySelector('#interpreted-markdown');

markdownTextarea.addEventListener('input', (evt) => {
  const markdown = convertMarkdownToH1(evt.target.value);

  if (markdown !== null) {
    interpretedMarkdownArea.appendChild(markdown);
  }
});

const markdownSyntaxMatchers = {
  h1: /^#\s{1,}(.+)\n?$/,
  h2: /^##\s{1,}(.+)\n?$/
};

const convertMarkdownToHTML = (markdown) => {

};

const convertMarkdownToH1 = (markdown) => {
  const regExMatch = markdown.match(markdownSyntaxMatchers.h1);
  
  if (regExMatch) {
    const h1 = document.createElement('h1');
    h1.textContent = regExMatch[1];

    return h1;
  } else {
    return null;
  }
};
