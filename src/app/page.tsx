import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-row w-screen h-screen p-2 bg-black">
      <div className="flex flex-col w-[26.25rem] h-full gap-2">
        <div className="flex flex-col gap-2 py-2 px-3 w-full h-28 rounded-lg bg-[#121212] items-center justify-center">
          <div className="flex flex-row w-full h-10 gap-4 py-1 px-3 items-center justify-start text-[#a7a7a7] hover:text-white cursor-pointer font-bold text-base">
            <span className="material-icons-outlined text-3xl">home</span>
            <span>Início</span>
          </div>
          <div className="flex flex-row w-full h-10 gap-4 py-1 px-3 items-center justify-start text-[#a7a7a7] hover:text-white cursor-pointer font-bold text-base">
            <span className="material-icons-outlined text-3xl">search</span>
            <span>Buscar</span>
          </div>
        </div>

        <div className="flex flex-col gap-2 py-2 px-3 w-full h-[45.56rem] rounded-lg bg-[#121212]">
          <div className="flex flex-row w-full h-10 gap-4 py-1 px-3 items-center justify-start text-[#a7a7a7] hover:text-white cursor-pointer font-bold text-base">
            <span className="material-icons-outlined text-3xl">dehaze</span>
            <span>Sua biblioteca</span>
            <button className="material-icons-outlined text-3xl">add</button>
            <button className="material-icons-outlined text-3xl">
              arrowforward
            </button>
          </div>
          <div className="flex flex-col gap-4 py-16 px-20 rounded-lg bg-[#242424]">
            <h1 className="text-[#ffff]">Crie sua primeira playlist</h1>
            <h2 className="text-[#ffff]">É fácil, vamos te ajudar.</h2>
            <button className="bg-[#ffff] text-black rounded-full">Criar playlist</button>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
