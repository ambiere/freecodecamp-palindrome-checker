import { useCallback, useEffect, useRef } from "react";
import "../views/palindromeDescription.css";
import parseMarkdown from "../utils/parseMarkdown";

function PalindromeDescription({ description: { title, description } }) {
  const renderRef = useRef(true);
  const cb = useCallback(() => parseMarkdown(description), [description]);

  useEffect(() => {
    if (renderRef.current) {
      renderRef.current = false;
      const palindromeDescription = document.querySelector(".palindrome-description");
      const div = document.createElement("div");
      const { markdown } = cb();
      div.innerHTML = markdown;
      palindromeDescription.append(div);
    } else {
      return () => {};
    }
    return () => {};
  }, [cb]);

  return (
    <div className="palindrome-description">
      <h2>{title}</h2>
    </div>
  );
}

export default PalindromeDescription;
