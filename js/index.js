const markdownTextarea = document.querySelector('#markdown');
const interpretedMarkdownArea = document.querySelector('#interpreted-markdown');

const convertMarkdownToHTMLElement = (markdown) => {
  const htmlElementType = Object.keys(markdownTagMatchers).find((element) => {
    return markdownTagMatchers[element].test(markdown);
  });

  switch (htmlElementType) {
    case 'h1':
    case 'h2':
    case 'h3':
    case 'h4':
    case 'h5':
    case 'h6':
      const regExMatch = markdown.match(markdownTagMatchers[htmlElementType]);
      const textContent = regExMatch[1];
      
      const htmlElement = document.createElement(htmlElementType);
      const innerHTML = convertMarkdownToFormattedText(textContent);

      if (innerHTML instanceof Node) {
        htmlElement.appendChild(innerHTML);
      } else {
        htmlElement.textContent = textContent;
      }
      
      return htmlElement;

    case 'p':
      break;

    default:
      return null;
  }
};

const convertMarkdownToFormattedText = (markdown) => {
  const htmlElementType = Object.keys(markdownFormatMatchers).find((element) => {
    return markdownFormatMatchers[element].test(markdown);
  });

  switch (htmlElementType) {
    case 'em':
    case 'strong':
      const regExMatch = markdown.match(markdownFormatMatchers[htmlElementType]);
      const textContent = regExMatch[1];

      const htmlElement = document.createElement(htmlElementType);
      htmlElement.textContent = textContent;

      return htmlElement;

    default:
      return markdown;
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
