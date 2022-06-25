import { ArrowLineDown, Bell, CalendarBlank, ChatCircleText, Question, VideoCamera } from "phosphor-react";
import { ChatList } from "./ChatList";

export function Sidebar() {
  return (
    <div className="flex w-[68px] md:max-w-[428px] md:w-full">
      <div className="flex flex-col w-[68px] items-center justify-between">
        <div className="flex flex-col items-center justify-center w-full p-[2px] text-neutral-600">
          <button className="flex flex-col w-full h-[56px] items-center justify-center hover:bg-slate-50 hover:text-indigo-700">
            <Bell size={24} weight="light" />
            <span className="text-[10px]">Atividade</span>
          </button>
          <button className="w-full h-[56px] hover:bg-slate-50 border-y-4 border-transparent hover:text-indigo-700">
            <div className="flex flex-col items-center justify-center h-full w-full border-l-2 border-indigo-700">
              <ChatCircleText size={24} color="#5b5fc7" weight="fill" />
              <span className="text-[10px] text-indigo-700">Chat</span>
            </div>
          </button>
          <button className="flex flex-col w-full h-[56px] items-center justify-center  py-[1px] hover:bg-neutral-50 hover:text-indigo-700">
            <VideoCamera size={24} weight="light" />
            <span className="text-[10px]">Reunir</span>
          </button>
          <button className="flex flex-col w-full h-[56px] items-center justify-center  py-[1px] hover:bg-neutral-50 hover:text-indigo-700">
            <CalendarBlank size={24} weight="light" />
            <span className="text-[10px]">Calendário</span>
          </button>
        </div>

        <div className="flex flex-col items-center justify-center w-full p-[5px] text-neutral-600 gap-2 mb-1">
          <button className="flex flex-col w-full h-[56px] items-center justify-center py-[1px] hover:bg-neutral-50 hover:text-indigo-700">
            <Question size={24} weight="light" />
            <span className="text-[10px]">Ajuda</span>
          </button>
          <button className="flex flex-col w-full items-center justify-center py-2 hover:bg-indigo-800 bg-indigo-700 rounded">
            <ArrowLineDown size={24} color="#fff" weight="light"  />
          </button>
        </div>
      </div>
      <ChatList />
    </div>
  )
}