import React from "react";
import { loginWithGoogle } from "../../utils/firebaseUtils";

export default function Login() {
  return (
    <div className="loginWrapper">
      <input name="username" placeholder="username"></input>
      <br />
      <input name="password" placeholder="password"></input>
      <br />
      <button
        onClick={() => {
          loginWithGoogle();
        }}
      >
        SIgn in With Google
      </button>
    </div>
  );
}
