import { useEffect, useState } from 'react';

import { Skeleton } from '@/components/ui/skeleton';

type MobileCardProps = {
  imdbID: string;
};

type ResponseAPIProps = {
  name: string;
  image: string;
};

type ResponseAPI = {
  short: ResponseAPIProps;
};

export function MobileCard({ imdbID }: MobileCardProps) {
  const [data, setData] = useState<ResponseAPI>();
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://imdb.iamidiotareyoutoo.com/search?tt=${imdbID}`);
      const json = await response.json();
      setData(json);
    }
    fetchData();
  }, [imdbID]);

  if (!data) {
    return <Skeleton className="rounded-md w-full h-25" />;
  }

  return (
    <div
      className="group relative flex items-center rounded-md h-25 overflow-hidden hover:transform-flat cursor-pointer"
      role="button"
      tabIndex={0}
    >
      <img
        src={data?.short.image}
        alt={`Imagem de ${data?.short.name}`}
        className="brightness-50 hover:brightness-100 active:brightness-100 grayscale-25 hover:grayscale-0 active:grayscale-0 hover:saturate-150 active:saturate-150 w-full object-cover aspect-video hover:scale-110 active:scale-110 transition-all"
      />
      <span className="top-0 left-0 absolute group-active:opacity-0 group-hover:opacity-0 p-4 font-bold text-[28px] text-white uppercase transition-all pointer-events-none">
        {data?.short.name}
      </span>
    </div>
  );
}
