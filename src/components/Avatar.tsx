import { CheckCircle } from "phosphor-react";

interface AvatarProps {
  header?: boolean;
  avatarURL?: string;
}

export function Avatar({ header, avatarURL }: AvatarProps) {
  
  return (
    <div className="w-8 h-8 text-indigo-800 rounded-full flex items-center justify-center text-xs font-semibold relative uppercase">
        <div className="overflow-hidden rounded-full">
          <img src={avatarURL && avatarURL} alt="Avatar do Usuário" />
        </div>
      <div className={`absolute flex items-center -right-1 -bottom-1 rounded-full border ${header ? 'border-indigo-800 bg-indigo-800' : ' border-neutral-100 bg-neutral-100'}`}>
        <CheckCircle size={14} color="#92c353" weight="fill" />
      </div>
    </div>
  )
}