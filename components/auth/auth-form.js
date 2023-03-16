import { useRef, useState } from "react";
import { useRouter } from "next/router";
import classes from "./auth-form.module.css";
import { signIn } from "next-auth/client";


async function createAccount(email, password) {
  const data = {
    email: email,
    password: password,
  };
  
  const res = await fetch("/api/auth/signup", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const resData = await res.json();

  if (!res.ok) {
    throw new Error(resData.message || "Something went wrong");
  }
  return resData;
}

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const emailRef = useRef();
  const passwordRef = useRef();
  const router = useRouter();
  const [errorMessage,setErrorMessage] = useState("")

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }

  async function handleSubmiForm(event) {
    event.preventDefault();

    const email = emailRef.current.value;

    const password = passwordRef.current.value;
    
    if (isLogin) {
      const result = await signIn("credentials", {
        redirect: false,
        email: email,
        password: password,
      });

      console.log(result);
      setErrorMessage(result.error);

      if (!result.error) {
        router.replace("/profile");
      }
    }
    if (!isLogin) {
      try {
        const result = await createAccount(email, password);
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={handleSubmiForm}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input type="password" id="password" required ref={passwordRef} />
        </div>
        <p style={{color:"white"}}>{errorMessage}</p>
        <div className={classes.actions}>
          <button>{isLogin ? "Login" : "Create Account"}</button>
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
}

export default AuthForm;
