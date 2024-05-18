type Params = {
  profileInitial: string;
};

export function ContentHeader(params: Params) {
  return (
    <div className="flex flex-row w-full h-16 items-center justify-between">
      <div className="flex flex-row w-full h-10 gap-4 py-1 px-3 items-center justify-between text-[#a7a7a7] font-bold text-">
        <div className="flex flex-row gap-2 items-center justify-start">
          <button className="flex justify-center items-center p-2 size-8 bg-black/70 hover:text-white hover:bg-white/5 rounded-full cursor-pointer">
            <span className="material-icons-outlined size-4">
              arrow_back_ios
            </span>
          </button>
          <button className="flex justify-center items-center p-2 size-8 bg-black/70 hover:text-white hover:bg-white/5 rounded-full cursor-pointer">
            <span className="material-icons-outlined size-4">
              arrow_forward_ios
            </span>
          </button>
        </div>
        <div className="flex flex-row gap-2 items-center justify-end">
          <button className="bg-white rounded-full py-1 px-4 hover:scale-105">
            <span className="text-sm text-black font-bold">
              Ver planos premium
            </span>
          </button>
          <button className="flex flex-row bg-black rounded-full py-1 px-4 hover:scale-105 gap-2 items-center">
            <span className="material-icons-outlined size-4">
              download_for_offline
            </span>
            <span className="text-sm text-white font-bold">
              Instalar aplicativo
            </span>
          </button>
          <button className="flex justify-center items-center p-2 size-8 bg-black/70 hover:text-white hover:bg-white/5 hover:scale-105 rounded-full cursor-pointer">
            <span className="material-icons-outlined size-4">
              notifications
            </span>
          </button>
          <button className="bg-purple-400 rounded-full text-center hover:scale-105 w-8 h-8 items-center justify-center">
            <span className="text-sm text-black font-bold ">
              {params.profileInitial}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
