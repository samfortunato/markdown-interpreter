const markdownTagMatchers = {
  h1: /^#\s{1,}(.+)\n?$/,
  h2: /^##\s{1,}(.+)\n?$/,
  h3: /^###\s{1,}(.+)\n?$/,
  h4: /^####\s{1,}(.+)\n?$/,
  h5: /^#####\s{1,}(.+)\n?$/,
  h6: /^######\s{1,}(.+)\n?$/
};

const markdownFormatMatchers = {
  em: /^\*([^\*].+[^\*])\*$/,
  strong: /^\*{2}([^\*].+[^\*])\*{2}$/
};