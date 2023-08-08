import "../views/palindromeMessage.css";

function PalindromeMessage({ palindrome, message, reversedWord }) {
  return (
    <div className="palindrome-message">
      <p>
        <span>{palindrome}</span> {message}
      </p>
      <p>
        Reversed word: <span>{reversedWord}</span>
      </p>
    </div>
  );
}

export default PalindromeMessage;
