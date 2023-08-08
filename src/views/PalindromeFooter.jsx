import "../views/palindromeFooter.css";

function PalindromeFooter({ copyright, linkUrl, linkText }) {
  return (
    <footer>
      <p>
        &copy; {copyright} |{" "}
        <a href={linkUrl} target="_blank" rel="noopener noreferrer">
          {linkText}
        </a>
      </p>
    </footer>
  );
}

export default PalindromeFooter;
