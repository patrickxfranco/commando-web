import { useEffect, useState } from 'react';

import { Skeleton } from '@/components/ui/skeleton';
import type { MovieInfo } from '@/types/movie';

type MobileCardProps = {
  imdbID: string;
};

export function MobileCard({ imdbID }: MobileCardProps) {
  const [movie, setMovie] = useState<MovieInfo>();
  const [notFound, setNotFound] = useState<Boolean>(false);

  useEffect(() => {
    if (!imdbID) {
      setMovie(undefined);
      setNotFound(false);
      return;
    }

    setNotFound(false);

    async function fetchData() {
      const response = await fetch(`https://imdb.iamidiotareyoutoo.com/search?tt=${imdbID}`);
      const json: MovieInfo = await response.json();

      if (!json.short) {
        setNotFound(true);
        setMovie(undefined);
        return null;
      }

      setMovie(json);
    }
    fetchData();
  }, [imdbID]);

  if (notFound) {
    return null;
  }

  if (!movie) {
    return <Skeleton className="rounded-md w-full h-25" />;
  }

  return (
    <div
      className="group relative flex items-center rounded-md h-25 overflow-hidden hover:transform-flat cursor-pointer"
      role="button"
      tabIndex={0}
    >
      <img
        src={movie.short.image}
        alt={`Imagem de ${movie.short.name}`}
        className="brightness-50 hover:brightness-100 active:brightness-100 grayscale-25 hover:grayscale-0 active:grayscale-0 hover:saturate-150 active:saturate-150 w-full object-cover aspect-video hover:scale-110 active:scale-110 transition-all"
      />
      <span className="top-0 left-0 absolute flex flex-col gap-1 group-active:opacity-0 group-hover:opacity-0 p-4 font-bold text-[28px] text-foreground uppercase transition-all pointer-events-none">
        {movie.short.name}
        <br />
        <span className="bg-background/90 backdrop-blur-sm px-2 py-1 rounded-sm max-w-max text-[10px] text-foreground">
          {movie.short['@type'] === 'Movie' ? 'Filme' : 'Seriado'}
        </span>
      </span>
    </div>
  );
}
