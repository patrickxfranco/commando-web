export function Home(): React.ReactElement {
  return (
    <>
      <div className="flex flex-col gap-4 mx-4 mt-4">
        {/* ABAIXO É O CÓDIGO DO CARD MOBILE */}
        <div id="card" className="group relative flex items-center rounded-md h-25 overflow-hidden hover:transform-flat cursor-pointer">
          <img
            src="https://images6.alphacoders.com/111/1114212.jpg"
            alt="Imagem de Vinland Saga"
            className="brightness-50 hover:brightness-100 active:brightness-100 grayscale-25 hover:grayscale-0 active:grayscale-0 hover:saturate-150 active:saturate-150 object-cover aspect-video hover:scale-110 active:scale-110 transition-all"
          />
          <span className="top-0 left-0 absolute group-hover:opacity-0 p-4 font-black text-[28px] text-white uppercase transition-all pointer-events-none">
            Stranger Things
          </span>
        </div>
      </div>
    </>
  );
}
