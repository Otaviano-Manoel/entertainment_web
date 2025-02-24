import { validState } from "@/enum/validState";
import React, { useState } from "react";

const useEmail = () => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(validState.NOT_EDITING);
  const [isNullOrEmpty, setIsNullOrEmpty] = useState(validState.NOT_EDITING);
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const validEmail = (): boolean => {
    const isValid = regex.test(email);
    setIsValid(isValid ? validState.ACCEPT : validState.ERROR);
    return isValid;
  };
  const handleIsNullOrEmpty = (): boolean => {
    const isNullOrEmpty = email.trim() === "";
    setIsNullOrEmpty(isNullOrEmpty ? validState.ERROR : validState.ACCEPT);
    return isNullOrEmpty;
  };

  const thisEmailAccept = () => {
    return validEmail() && !handleIsNullOrEmpty();
  };

  const handleSetEmail = (input: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(input.currentTarget.value);
  };

  return {
    email: {
      email,
      isValid,
      isNullOrEmpty,
      handleSetEmail,
      thisEmailAccept,
    },
  };
};

export default useEmail;
