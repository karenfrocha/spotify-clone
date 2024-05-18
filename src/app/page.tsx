import { ContentHeader, YourLibraryContentItem } from "../components";

export default function Home() {
  return (
    <div className="flex flex-row w-screen h-screen p-2 gap-2 bg-black">
      {/* Side Navigation */}
      <div className="flex flex-col w-[26.25rem] h-full gap-2">
        {/* Menu */}
        <div className="flex flex-col gap-2 py-2 px-3 w-full h-28 rounded-lg bg-[#121212] items-center justify-center">
          {/* Menu Item*/}
          <div className="flex flex-row w-full h-10 gap-4 py-1 px-3 items-center justify-start text-[#a7a7a7] hover:text-white cursor-pointer font-bold text-base">
            <span className="material-icons-outlined text-3xl">home</span>
            <span>Início</span>
          </div>
          {/* Menu Item*/}
          <div className="flex flex-row w-full h-10 gap-4 py-1 px-3 items-center justify-start text-[#a7a7a7] hover:text-white cursor-pointer font-bold text-base">
            <span className="material-icons-outlined text-3xl">search</span>
            <span>Buscar</span>
          </div>
        </div>

        {/* Your Library */}
        <div className="flex flex-col gap-2 py-2 px-3 w-full h-[45.56rem] rounded-lg bg-[#121212]">
          {/* Your Library Header */}
          <div className="flex flex-row w-full h-10 gap-4 py-1 px-3 items-center justify-between text-[#a7a7a7] font-bold text-base">
            <div className="flex flex-row items-center gap-2 hover:text-white cursor-pointer">
              <span className="material-icons-outlined text-3xl">dehaze</span>
              <span>Sua Biblioteca</span>
            </div>
            <div className="flex flex-row items-center gap-2">
              <button className="flex justify-center items-center p-2 size-8 hover:text-white hover:bg-white/5 rounded-full cursor-pointer">
                <span className="material-icons-outlined size-4">add</span>
              </button>
              <button className="flex justify-center items-center p-2 size-8 hover:text-white hover:bg-white/5 rounded-full cursor-pointer">
                <span className="material-icons-outlined size-4">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>

          {/* Your Library Content */}
          <div className="flex flex-col w-full items-start justify-center gap-6">
            <YourLibraryContentItem
              title="Crie sua primeira playlist"
              description="É fácil, vamos te ajudar."
              buttonLabel="Criar playlist"
            />

            <YourLibraryContentItem
              title="Que tal seguir um podcast novo?"
              description="Avisaremos você sobre novos episódios."
              buttonLabel="Explore podcasts"
            />
          </div>
        </div>
      </div>

      {/* Barra superior e menu do usuário */}
      <div className="flex flex-col w-[calc(100vw-26.25rem)] px-4 rounded-lg h-[53.06rem] p-2 bg-[#242424] items-start justify-start">
        <ContentHeader profileInitial="K" />
        <div> {/* grid das musicas */}</div>
      </div>
    </div>
  );
}
