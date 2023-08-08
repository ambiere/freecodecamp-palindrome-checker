import { useState } from "react";
import checkIfPalindrome from "./utils/isPalindrome";
import LinkIcon from "./components/linkIcon/LinkIcon";
import PalindromeFooter from "./views/PalindromeFooter";
import PalindromeHeader from "./layout/PalindromeHeader";
import PalindromeMessage from "./views/PalindromeMessage";
import PalindromeForm from "./components/form/PalindromeForm";
import PalindromeDescription from "./views/PalindromeDescription";
import db from "./store/db";
import "./App.css";

function App() {
  const [palindrome, setPalindrome] = useState("");
  const [message, setMessage] = useState("");
  const [palindromeChecked, setPalindromeChecked] = useState(false);
  const [reversedWord, setReversedWord] = useState("");

  const checkPalindrome = () => {
    const { isPalindrome, checkedPalindrome } = checkIfPalindrome(palindrome);
    isPalindrome ? setMessage("is a " + db.msg) : setMessage("is not a " + db.msg.replace("can", "can not"));
    setReversedWord(checkedPalindrome);
    setTimeout(() => {
      const loader = document.querySelector(".loader-icon");
      loader.classList.remove("loader-icon--active");
      loader.nextSibling.textContent = loader.nextSibling.textContent.replace("...", "");
      setPalindromeChecked(true);
    }, 1000);
  };

  return (
    <>
      <PalindromeHeader title={db.title} />
      <PalindromeDescription description={db.description} />
      <hr />
      <PalindromeForm
        title={db.formTitle}
        setPalindrome={setPalindrome}
        setPalindromeChecked={setPalindromeChecked}
        onSubmit={checkPalindrome}
        palindromeChecked={palindromeChecked}
        helpLink={db.helpLink}
        LinkIcon={LinkIcon}
        sx={db.styles}
      />
      {palindromeChecked && <PalindromeMessage palindrome={palindrome} message={message} reversedWord={reversedWord} />}
      <PalindromeFooter copyright={db.copyright} linkUrl={db.linkUrl} linkText={db.linkText} />
    </>
  );
}

export default App;
