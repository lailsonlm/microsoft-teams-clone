import { User } from "firebase/auth";
import { MagnifyingGlass } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "./Avatar";

interface HeaderProps {
  user: User | null;
  handleSignOut: () => void;
}

export function Header({ user, handleSignOut }: HeaderProps) {
  const [openSignOutButton, setOpenSignOutButton] = useState(false)
  return (
    <header className="w-full flex bg-indigo-800 h-12 items-center justify-center relative">
      <div className="flex w-[68px] lg:max-w-[428px] lg:w-full"/>
      <div className='flex-1 h-8 items-center justify-center rounded-md bg-indigo-200'>
        <label htmlFor="search" className="sr-only">
          Pesquisar
        </label>
        <div className="relative shadow-sm h-full">
          <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
            <MagnifyingGlass 
              size={16} 
              // color='#71717a' 
              className="text-neutral-600" 
            />
          </div>
          <input
            type="text"
            name="search"
            id="search"
            className="bg-transparent w-full h-full pl-8 pr-8 sm:text-sm rounded-md focus:bg-white focus:outline-0 placeholder:text-indigo-800"
            placeholder="Pesquisar"
          />
        </div>
      </div>
      <div className="flex max-w-[254px] xl:max-w-[428px] w-full h-full items-center justify-end pr-2 gap-2">
        <span className="text-white font-semibold text-lg mb-3">...</span>
        <button 
          onClick={() => setOpenSignOutButton(!openSignOutButton)}
          className="h-full px-2 hover:bg-indigo-900"
        >
          {user?.photoURL && <Avatar avatarURL={user.photoURL} header />}
        </button>
      </div>
      {
        openSignOutButton &&
        <button 
          onClick={handleSignOut}
          className="w-40 p-2 bg-white rounded absolute right-1 -bottom-11 shadow-md hover:bg-indigo-100 font-semibold"
        >
          Sair
      </button>
      }

    </header>
  )
}