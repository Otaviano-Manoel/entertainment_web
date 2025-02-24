import { validState } from "@/enum/validState";
import React, { useState } from "react";

const useRepeatPassword = () => {
  const [repeatPassword, setRepeatPassword] = useState("");
  const [isValid, setIsValid] = useState(validState.NOT_EDITING);
  const [isNullOrEmpty, setIsNullOrEmpty] = useState(validState.NOT_EDITING);

  const validRepeatPassword = (password: string): boolean => {
    const isValid = repeatPassword === password;
    setIsValid(isValid ? validState.ACCEPT : validState.ERROR);
    return isValid;
  };

  const handleIsNullOrEmpty = (): boolean => {
    const isNullOrEmpty = repeatPassword.trim() === "";
    setIsNullOrEmpty(isNullOrEmpty ? validState.ERROR : validState.ACCEPT);
    return isNullOrEmpty;
  };

  const thisRepeatPasswordAccept = (password: string) => {
    return validRepeatPassword(password) && !handleIsNullOrEmpty();
  };

  const handleSetRepeatPassword = (
    input: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRepeatPassword(input.currentTarget.value);
  };

  return {
    repeatPassword: {
      repeatPassword,
      isValid,
      isNullOrEmpty,
      handleSetRepeatPassword,
      thisRepeatPasswordAccept,
    },
  };
};

export default useRepeatPassword;
