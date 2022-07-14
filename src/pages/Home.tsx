import { getAuth, onAuthStateChanged, signOut, User } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Chat } from "../components/Chat";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

export default function Home() {
  const [user, setUser] = useState<User | null>(null)
  const auth = getAuth();
  const navigate = useNavigate()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        navigate('/')
        setUser(null)
      }
    });
  }, [])

  function handleSignOut() {
    signOut(auth)
    .then(() => {
      navigate('/')
      setUser(null)

    }).catch((error) => {
      console.log(error)
    });
  }

  if(!user) {
    return <p>Carregando...</p>
  }

  return (
    <div className="flex flex-col h-screen">
      <Header user={user} handleSignOut={handleSignOut} />
      <main className="flex flex-1 overflow-hidden">
        <Sidebar />
        <Chat user={user} />
      </main>
    </div>
  )
}