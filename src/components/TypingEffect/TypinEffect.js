import React from "react";
// import typing effect
import ReactTypingEffect from "react-typing-effect";

const TypinEffect = (props) => {
  const { typingText } = props;
  return (
    <>
      <ReactTypingEffect
        text={typingText}
        cursorRenderer={(cursor) => <h1>{cursor}</h1>}
        speed={50}
        eraseSpeed={50}
        eraseDelay={1500}
        typingDelay={120}
        displayTextRenderer={(text, i) => {
          return (
            <h1>
              {text.split("").map((char, i) => {
                const key = `${i}`;
                return (
                  <span key={key} className="text-accent font-logo">
                    {char}
                  </span>
                );
              })}
            </h1>
          );
        }}
      />
    </>
  );
};

export default TypinEffect;
