import { useState } from "react";
import "../input/palindromeInput.css";

function PalindromeInput({ label, setPalindrome, setPalindromeChecked }) {
  const [value, setValue] = useState("");
  function handleInput({ currentTarget }) {
    setValue(currentTarget.value);
    setPalindrome(currentTarget.value);
    setPalindromeChecked(false);
  }
  return (
    <div className="palindrome-input-wrapper">
      <label htmlFor="palindrome-input">{label}</label>
      <input
        type="text"
        name="palindrome-input"
        id="palindrome-input"
        className="palindrome-input"
        placeholder="Example: racecar"
        value={value}
        onChange={handleInput}
      />
    </div>
  );
}

export default PalindromeInput;
