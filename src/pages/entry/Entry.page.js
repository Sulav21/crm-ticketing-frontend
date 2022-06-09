import React, { useState } from "react";
import { Login } from "../../components/LoginComp";
import { ResetPassword } from "../../components/PasswordReset";
import "./entry.css";

export const Entry = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formLoad, setFormLoad] = useState("login")

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;

      default:
        break;
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if(!email || !password){
       return alert('Fill up all the form details')
    }

    // Call API to submit the form
    console.log(email,password)
  };

  const handleOnReset = (e) => {
    e.preventDefault();
    if(!email){
       return alert('Fill in the email field')
    }

    // Call API to submit the form
    console.log(email)
  };

  const frmSwitcher=(type)=>{
   setFormLoad(type)
  }

  return (
    <div className="entry-page bg-info">
      <div className="jumbotron">
          {formLoad==='login' && <Login
          handleOnChange={handleOnChange}
          email={email}
          password={password}
          handleOnSubmit={handleOnSubmit}
          frmSwitcher={frmSwitcher}
        />}
        
      {formLoad==='reset' && <ResetPassword
          handleOnChange={handleOnChange}
          email={email}
          handleOnReset={handleOnReset}
          frmSwitcher={frmSwitcher}
        />}
        
      </div>
    </div>
  );
};
