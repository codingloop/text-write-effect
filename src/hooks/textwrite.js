import { useEffect, useState } from "react";

const useTextWriteEffect = (
  inputTextList,
  typeSpeed = 50,
  pauseTime = 2000
) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    startTyping(inputTextList[currentIndex] || "");
  }, [currentIndex]);

  const rotateText = () => {
    if (currentIndex + 1 > inputTextList.length) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex((val) => val + 1);
    }
  };

  const startTyping = (text) => {
    let typeCounter = 0;
    const textLength = text.length;

    const typeInterval = setInterval(() => {
      if (typeCounter == textLength) {
        clearInterval(typeInterval);
        typeCounter = 0;
        setTimeout(() => startErasing(text), pauseTime);
        return;
      }
      setCurrentText(text.slice(0, typeCounter + 1));
      typeCounter += 1;
    }, typeSpeed);
  };

  const startErasing = (text) => {
    let eraseCounter = text.length;
    const eraseInterval = setInterval(() => {
      if (eraseCounter == 0) {
        clearInterval(eraseInterval);
        setTimeout(() => rotateText(), 500);
        return;
      }
      eraseCounter -= 1;
      setCurrentText(text.slice(0, eraseCounter));
    }, 10);
  };

  return currentText;
};

export default useTextWriteEffect;
