/**
 * Parse string/markdown to be used as innerHTML
 * @param {String} markdown
 * @returns {{markdown: String}}
 * @version 0.1.0
 */

export default function parseMarkdown(markdown) {
  const copyMarkdown = markdown.slice(0);
  const parsedMarkdown = copyMarkdown.replace(/`(\w+\S+|\w+\s\w+)`/gim, "<span>$1</span>");
  console.log("parsedMarkdown: ", [parsedMarkdown]);
  return { markdown: parsedMarkdown };
}
