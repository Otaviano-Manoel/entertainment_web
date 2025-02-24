import { validState } from "@/enum/validState";
import React, { useState } from "react";

const usePassword = () => {
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(validState.NOT_EDITING);
  const [isNullOrEmpty, setIsNullOrEmpty] = useState(validState.NOT_EDITING);

  const validPassword = (): boolean => {
    const isValid = password.length >= 4;
    setIsValid(isValid ? validState.ACCEPT : validState.ERROR);
    return isValid;
  };
  const handleIsNullOrEmpty = (): boolean => {
    const isNullOrEmpty = password.trim() === "";
    setIsNullOrEmpty(isNullOrEmpty ? validState.ERROR : validState.ACCEPT);
    return isNullOrEmpty;
  };

  const thisPasswordAccept = () => {
    return validPassword() && !handleIsNullOrEmpty();
  };

  const handleSetPassword = (input: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(input.currentTarget.value);
  };

  return {
    password: {
      password,
      isValid,
      isNullOrEmpty,
      handleSetPassword,
      thisPasswordAccept,
    },
  };
};

export default usePassword;
