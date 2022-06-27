import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleIcon } from "../components/GoogleIcon";

export function SignIn() {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const navigate = useNavigate()

  async function handleSignIn() {
    await signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result.user;

        navigate('/chat')
      }).catch((error) => {
        console.log(error)
      });
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate('/chat')
      } 
    });
  }, [])

  return (
    <div className="flex flex-col h-screen items-center justify-center bg-neutral-800 ">
      <div className="flex flex-col w-full max-w-md items-center justify-center gap-8">
        <h1 className="font-bold text-3xl text-neutral-100">Faça login em sua conta</h1>
        <button 
          onClick={handleSignIn}
          className="flex w-full gap-2 p-4 shadow-md border rounded items-center justify-center bg-white"
        >
          <GoogleIcon />
          <span className="font-semibold text-lg">Entrar com Google</span>
        </button>
      </div>
    </div>
  )
}