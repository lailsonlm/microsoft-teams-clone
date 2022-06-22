import { Feed } from "./Feed";

export function Sidebar() {
  return (
    <div className="flex max-w-[428px] w-full">
      <div className="">
        Atividade
      </div>
      <Feed />
    </div>
  )
}