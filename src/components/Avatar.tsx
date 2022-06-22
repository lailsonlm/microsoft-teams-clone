import { CheckCircle } from "phosphor-react";

interface AvatarProps {
  name: string;
}

export function Avatar({ name }: AvatarProps) {
  const firstName = name.split(' ')[0]
  const secondName = name.split(' ')[1]
  const initialsName = secondName !== undefined ? firstName.slice(0,1) + secondName?.slice(0,1) : firstName.slice(0,1)
  
  return (
      <div className="w-8 h-8 bg-violet-300 text-indigo-800 rounded-full flex items-center justify-center text-xs font-semibold relative">
        {initialsName}
        <div className="absolute flex items-center right-0 bottom-0 rounded-full border border-indigo-800 bg-indigo-800">
          <CheckCircle size={10} color="#92c353" weight="fill" />
        </div>
      </div>
  )
}