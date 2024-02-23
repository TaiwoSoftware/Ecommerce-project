import React from "react";
import { useNavigate } from "react-router-dom";
import SignUpForm from "../auth/SignUpForm";
import { useState } from "react";

function SignIn() {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const [secondValue, setSecondValue] = useState("");
  const [thirdValue, setThirdValue] = useState("");
  const [fourthValue, setFourthValue] = useState("");
  const [fifthValue, setFifthValue] = useState("");
  const handleChangeValue = (e) => {
    setValue(e.target.value);
  };
  const handleSecondValue = (e) => {
    setSecondValue(e.target.value);
  };
  const handleThirdValue = (e) => {
    setThirdValue(e.target.value);
  };
  const handleFourthValue = (e) => {
    setFourthValue(e.target.value);
  };
  const handleFifthValue = (e) => {
    setFifthValue(e.target.value);
  };
  const handleClick = () => {
    if (
      value === "" ||
      secondValue === "" ||
      thirdValue === "" ||
      fourthValue === "" ||
      fifthValue === ""
    ) {
      alert("please fill in the required details");
    } else {
      navigate("/login");
    }
  };
  return (
    <div className="Sign">
      <h2>Create An Account</h2>
      <form>
        <SignUpForm
          type="text"
          placeholder="Full name"
          values={value}
          handleChange={handleChangeValue}
        />
        <SignUpForm
          type="email"
          values={secondValue}
          handleChange={handleSecondValue}
          placeholder="Email address"
        />
        <SignUpForm
          type="tel"
          values={thirdValue}
          handleChange={handleThirdValue}
          placeholder="Phone number"
        />
        <SignUpForm
          type="text"
          values={fourthValue}
          handleChange={handleFourthValue}
          placeholder="address"
        />
        <SignUpForm
          type="password"
          values={fifthValue}
          handleChange={handleFifthValue}
          placeholder="Password"
        />
        <input
          className="submitButton"
          type="submit"
          onClick={handleClick}
          value="Continue"
        />
      </form>
    </div>
  );
}

export default SignIn;
