import { useState } from "react";

interface IProps {
  label: string;
  value: string;
  name?: string;
  placeholder?: string;
  onChange?: (value: string, inputName: string) => void;
  type?: string;
  errorText?: string;
  disabled?: boolean;
  required?: boolean;
}

const TextInputField = (props: IProps) => {
  const {
    label,
    value,
    name,
    placeholder,
    onChange,
    type,
    errorText,
    disabled,
    required
  } = props;
  
  return (
    <div className="mt-[36px]">
      <div className="font-bold label-field">
        <label htmlFor={name}>{label}</label>
        {required && (
          <span className="bg-red-rq text-sm text-white px-[5px] py-[3px] ml-[5px] rounded-sm">必須</span>
        )}
      </div>
      <input
        id={name}
        key={name}
        name={name}
        className="w-full border-[2px] border-input-grey rounded-[0.3rem] px-[15px] py-[10.5px] mt-[10px] focus:outline-main-teal"
        type={type}
        placeholder={placeholder}
        // value={value}
        // onChange={onChange}
        disabled={disabled}
        required={required}
      />
      {errorText && (
        <div className="text-red-rq pl-[5px] mt-[5px]">{errorText}</div>
      )}
    </div>
  );
};

TextInputField.defaultProps = {
  label: "",
  value: "",
  name: "",
  placeholder: "",
  onChange: () => {return;},
  type: "text",
  errorText: "",
  disabled: false,
  require: false,
};

export default TextInputField;