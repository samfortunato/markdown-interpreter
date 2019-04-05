const markdownSyntaxMatchers = {
  h1: /^#\s{1,}(.+)\n?$/,
  h2: /^##\s{1,}(.+)\n?$/,
  h3: /^###\s{1,}(.+)\n?$/,
  h4: /^####\s{1,}(.+)\n?$/,
  h5: /^#####\s{1,}(.+)\n?$/,
  h6: /^######\s{1,}(.+)\n?$/
};

const markdownTextarea = document.querySelector('#markdown');
const interpretedMarkdownArea = document.querySelector('#interpreted-markdown');

const convertMarkdownToHTMLElement = (markdown) => {
  const htmlElementType = Object.keys(markdownSyntaxMatchers).find((element) => {
    return markdownSyntaxMatchers[element].test(markdown);
  });
  
  if (htmlElementType) {
    const regExMatch = markdown.match(markdownSyntaxMatchers[htmlElementType]);
    const textContent = regExMatch[1];
    
    const htmlElement = document.createElement(htmlElementType);
    htmlElement.textContent = textContent;
    
    return htmlElement;
  } else {
    return null;
  }
};

markdownTextarea.addEventListener('input', (evt) => {
  const convertedElements = [];
  const individualMarkdownLines = evt.target.value.split('\n');

  individualMarkdownLines.forEach((line) => {
    if (line !== '') {
      const convertedLine = convertMarkdownToHTMLElement(line);
      convertedElements.push(convertedLine);
    }
  });

  interpretedMarkdownArea.innerHTML = '';

  convertedElements.forEach((element) => {
    if (element !== null) {
      interpretedMarkdownArea.appendChild(element);
    }
  });
});
