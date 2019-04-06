const markdownTagMatchers = {
  h1: /^#\s{1,}(.+)\n?$/m,
  h2: /^##\s{1,}(.+)\n?$/m,
  h3: /^###\s{1,}(.+)\n?$/m,
  h4: /^####\s{1,}(.+)\n?$/m,
  h5: /^#####\s{1,}(.+)\n?$/m,
  h6: /^######\s{1,}(.+)\n?$/m
};

const markdownFormatMatchers = {
  em: /(?<!\*)\*(\w+)\*(?!\*)/,
  strong: /\*{2}(\w+)\*{2}/
};
