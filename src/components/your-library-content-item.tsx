export function YourLibraryContentItem(params: {
  title: string;
  description: string;
  buttonLabel: string;
}) {
  const { title, description, buttonLabel } = params;

  return (
    <div className="flex flex-col gap-4 py-4 px-5 w-full h-[8.4rem] rounded-lg bg-[#242424]">
      <div>
        <h1 className="text-white font-bold text-md">{title}</h1>
        <span className="text-white text-sm">{description}</span>
      </div>
      <div>
        <button className="bg-white rounded-full py-1 px-4 hover:scale-105">
          <span className="text-sm text-black font-bold">{buttonLabel}</span>
        </button>
      </div>
    </div>
  );
}
