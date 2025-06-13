import { MobileCard } from './MobileCard';

export function MobileView() {
  return (
    <div className="sm:invisible flex flex-col gap-4 mx-4 mt-4">
      <MobileCard imdbID="tt1124373" />
      <MobileCard imdbID="tt10233448" />
      <MobileCard imdbID="tt4574334" />
    </div>
  );
}
