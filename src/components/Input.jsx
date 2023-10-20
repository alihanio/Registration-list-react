import React, { useState } from "react";

const Input = ({ labelText, type }) => {
  const [inputsValue, setInputsValue] = useState("");
  const [error, setError] = useState("");

  const change = (e) => {
    setInputsValue(e.target.value);

    if (labelText === "Email") {
      if (e.target.value.includes("@gmail.com")) {
        setError("");
      } else {
        setError("Неволидный email (@gmail.com)");
      }
    }

    if (labelText === "Password") {
      if (inputsValue.length > 6) {
        setError("");
      } else {
        setError("пороль должен содержать 6 символов");
      }
    }

    if (labelText === "Adress") {
      if (inputsValue.length >= 6) {
        setError("");
      } else {
        setError("введите полный адресс");
      }
    }

    if (labelText === "City") {
      if (inputsValue.length >= 3) {
        setError("");
      } else {
        setError("введите полный адресс");
      }
    }

    if (labelText === "Age") {
      if (e.target.value > 18) {
        setError("");
      } else {
        setError("Возраст должен быть старше 18 лет!");
      }
    }
  };

  return (
    <div className="input-form">
      <label htmlFor="lastName">{labelText}</label>
      <input
        id="lastName"
        type={type ? type : "text"}
        value={inputsValue}
        onChange={change}
      />
      <p>{error}</p>
      {inputsValue === "" ? <p>Поле не должно быть пустым</p> : ""}
    </div>
  );
};

export default Input;
