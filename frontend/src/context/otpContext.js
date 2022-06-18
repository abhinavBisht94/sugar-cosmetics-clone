import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { createContext } from "react";
import { auth } from "../config/firebase.config";

export const OtpContext = createContext();

export const OtpContextProvider = ({ children }) => {
  const setUpRecaptcha = (number) => {
    console.log(number);

    const recaptcha = new RecaptchaVerifier("recaptcha-container", {}, auth);
    recaptcha.render();

    return signInWithPhoneNumber(auth, number, recaptcha);
  };

  return (
    <OtpContext.Provider value={setUpRecaptcha}>{children}</OtpContext.Provider>
  );
};
