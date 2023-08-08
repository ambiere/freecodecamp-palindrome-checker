import "../button/palindromeButton.css";

function PalindromeButton({ children, checkPalindrome, palindromeChecked }) {
  const handleButtonClick = (e) => {
    e.preventDefault();
    e.currentTarget.disabled = !palindromeChecked;
    const loader = document.querySelector(`.${children.props.className}`);
    loader.classList.add("loader-icon--active");
    loader.nextSibling.textContent += " ...";
    checkPalindrome();
  };

  return (
    <button
      type="submit"
      className="palindrome-button"
      disabled={palindromeChecked}
      onClick={handleButtonClick}
    >
      {!palindromeChecked && children}
      Check Palindrome
    </button>
  );
}

export default PalindromeButton;
