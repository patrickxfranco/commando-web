import { Star } from 'lucide-react';

import { DataManager } from '@/lib/dataManager';

import { MobileCard } from './MobileCard';

import type { MovieInfo } from '@/types/movie';

export function MobileView() {
  const dataManager = new DataManager();

  const allContents = dataManager.getMovies();

  console.log(dataManager.getMovies());

  // function renderContent(content: MovieInfo) {
  //   return <MobileCard key={content.imdbId} imdbID={content.imdbId} />;
  // }

  function renderContents(contents: MovieInfo[]) {
    return contents.map((content) => {
      return <MobileCard key={content.imdbId} imdbID={content.imdbId} />;
    });
  }

  return (
    <div>
      <div className="mx-4 mt-4">
        <h1 className="flex flex-row items-center gap-2 font-bold text-[22px] uppercase">
          <Star className="fill-amber-300 size-6 text-amber-300" />
          Meus Conteúdos
        </h1>
      </div>
      <p className="mx-12 text-[12px] text-muted-foreground">Os filmes e séries que você mais gosta listados abaixo</p>
      <div className="sm:invisible flex flex-col gap-4 mx-4 mt-4">{renderContents(allContents)}</div>
    </div>
  );
}
