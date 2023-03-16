import { signIn } from "next-auth/client";

function GoogleSignInButton() {
  const handleSignIn = () => {
    signIn("google");
  };

  return <button onClick={handleSignIn}>Sign in with Google</button>;
}

export default GoogleSignInButton;
