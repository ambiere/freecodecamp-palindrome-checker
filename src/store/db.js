const title = "Palindrome Checker";
const formTitle = "Got a palindrome?";
const helpLink = "https://en.wikipedia.org/wiki/Palindrome";
const copyright = "Palindrome-checker 2023";
const linkUrl = "http://www.github.com/zhid0399123";
const linkText = "zhid0399123";
const description = {
  title: "What is a palindrome?",
  description:
    "A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing" +
    " Strings with varying formats, such as `racecar`, `RaceCar`, and `race CAR` among others can be passed, and the checker will verify if it is a palindrome." +
    " It is also possible to pass strings with special symbols, such as `2A3*3a2`, `2A3 3a2`, and `2_A3*3#A2`.",
};
const msg = `palindrome since it can be spelled the same way both forward and backward, ignoring punctuation, case, and spacing.`;
const styles = { fill: "gray", height: 10, top: 1, left: 2 };

export default Object.freeze({
  title,
  formTitle,
  helpLink,
  copyright,
  linkText,
  description,
  linkUrl,
  msg,
  styles,
});
