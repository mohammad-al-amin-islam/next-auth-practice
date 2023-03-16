import { getSession } from "next-auth/client";
import { useRef, useState } from "react";
import classes from "./profile-form.module.css";

function ProfileForm() {
  const newPasswordRef = useRef();
  const oldPasswordRef = useRef();
  const [errorMessage,setErrorMessage] = useState('')

  async function changePassword(newPassword, oldPassword) {
    const bodyData = {
      newPassword,
      oldPassword
    }
    const response = await fetch("/api/profile/changePassword", {
      method: "PATCH",
      body: JSON.stringify(bodyData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    return data;
  }

  async function handleOnSubmit(event) {
    event.preventDefault();
    const newPassword = newPasswordRef.current.value;
    const oldPassword = oldPasswordRef.current.value;


    const data = await changePassword(newPassword, oldPassword);
    console.log(data.message);
    setErrorMessage(data.message);
  }

  return (
    <form  className={classes.form} onSubmit={handleOnSubmit}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input type="password" id="new-password" ref={newPasswordRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="old-password">Old Password</label>
        <input type="password" id="old-password" ref={oldPasswordRef} />
      </div>
      <p>{errorMessage}</p>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
