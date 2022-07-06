import React, { useState } from "react";
import { InputWrapper, Input } from "./styled";

const InputText = ({ typeInput, placeholder, register, questionId }) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <InputWrapper>
      <Input
        value={value}
        {...register(questionId.toString())}
        name={questionId.toString()}
        type={typeInput}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </InputWrapper>
  );
};

export default InputText;
