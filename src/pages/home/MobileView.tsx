import { MobileCard } from './MobileCard';
import { Star } from 'lucide-react';

export function MobileView() {
  return (
    <div>
      <div className="mx-4 mt-4">
        <h1 className="flex flex-row items-center gap-2 font-bold text-[22px] uppercase">
          <Star className="fill-amber-300 size-6 text-amber-300" />
          Meus Conteúdos
        </h1>
      </div>
      <p className="mx-12 text-[12px] text-muted-foreground">Os filmes e séries que você mais gosta listados abaixo</p>
      <div className="sm:invisible flex flex-col gap-4 mx-4 mt-4">
        <MobileCard imdbID="tt1124373" />
        <MobileCard imdbID="tt10233448" />
        <MobileCard imdbID="tt4574334" />
        <MobileCard imdbID="tt0389860" />
      </div>
    </div>
  );
}
