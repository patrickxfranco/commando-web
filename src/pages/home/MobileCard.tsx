type ContentProps = {
  id: number;
  name: string;
  cover: string;
};

export function MobileCard(props: ContentProps) {
  return (
    <div key={props.id} className="group relative flex items-center rounded-md h-25 overflow-hidden hover:transform-flat cursor-pointer">
      <img
        src={props.cover}
        alt="Imagem de Stranger Things"
        className="brightness-50 hover:brightness-100 active:brightness-100 grayscale-25 hover:grayscale-0 active:grayscale-0 hover:saturate-150 active:saturate-150 object-cover aspect-video hover:scale-110 active:scale-110 transition-all"
      />
      <span className="top-0 left-0 absolute group-hover:opacity-0 p-4 font-black text-[28px] text-white uppercase transition-all pointer-events-none">
        {props.name}
      </span>
    </div>
  );
}
