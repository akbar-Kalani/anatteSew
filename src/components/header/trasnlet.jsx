import React, { useEffect } from "react";

const Translate = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://translate.google.com/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateService();
    };

    return () => {
      document.body.removeChild(script);
      delete window.googleTranslateElementInit;
      delete window.google;
    };
  }, []);

  return <div id="google_translate_element"></div>;
};

export default Translate;
