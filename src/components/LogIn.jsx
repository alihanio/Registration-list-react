import React from "react";
import Input from "./Input";

const LogIn = () => {
  return (
    <div className="bunch">
      <form className="form">
        <h1 className="heading">Log in</h1>
        <Input labelText="firstName"/>
        <Input labelText="lastName"/>
        <Input
          labelText="Email"
          type="email"
        />
        <Input
          labelText="Password"
          type="password"
        />
        <Input
          labelText="Adress"
          type="text"
        />
        <Input
          labelText="City"
          type="text"
        />
        <Input
          labelText="Age"
          type="number"
        />
        <button className="button">
          Register
        </button>
      </form>
    </div>
  );
};

export default LogIn;
