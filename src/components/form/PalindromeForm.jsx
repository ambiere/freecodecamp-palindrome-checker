import PalindromeButton from "../button/PalindromeButton";
import PalindromeInput from "../input/PalindromeInput";
import "../form/palindromeForm.css";

function PalindromeForm({
  title,
  setPalindrome,
  palindromeChecked,
  setPalindromeChecked,
  onSubmit,
  helpLink,
  LinkIcon,
  sx,
}) {
  return (
    <div className="palindrome-form-wrapper">
      <h2>{title}</h2>
      <form action="" className="palindrome-form">
        <PalindromeInput
          label={"Enter palindrome*"}
          setPalindrome={setPalindrome}
          setPalindromeChecked={setPalindromeChecked}
        />
        <PalindromeButton checkPalindrome={onSubmit} palindromeChecked={palindromeChecked}>
          <div className="loader-icon"></div>
        </PalindromeButton>
        <a href={helpLink} target="_blank" rel="noopener noreferrer">
          Are you stuck? Find help
          <LinkIcon sx={sx} />
        </a>
      </form>
    </div>
  );
}

export default PalindromeForm;
