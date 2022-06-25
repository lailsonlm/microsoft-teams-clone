import { CheckCircle } from "phosphor-react";

interface AvatarProps {
  name: string;
  header?: boolean;
}

export function Avatar({ name, header }: AvatarProps) {
  const firstName = name.split(' ')[0]
  const secondName = name.split(' ')[1]
  const initialsName = secondName !== undefined ? firstName.slice(0,1) + secondName?.slice(0,1) : firstName.slice(0,1)
  
  return (
    <div className="w-8 h-8 bg-violet-100 text-indigo-800 rounded-full flex items-center justify-center text-xs font-semibold relative uppercase">
      {initialsName}
      <div className={`absolute flex items-center -right-1 -bottom-1 rounded-full border ${header ? 'border-indigo-800 bg-indigo-800' : ' border-neutral-100 bg-neutral-100'}`}>
        <CheckCircle size={14} color="#92c353" weight="fill" />
      </div>
    </div>
  )
}