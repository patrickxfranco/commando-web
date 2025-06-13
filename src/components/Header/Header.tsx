import { LogoArea } from './LogoArea';
import { SearchArea } from './SearchArea';
import { UserActionArea } from './UserActionArea';

export function Header(): React.ReactElement {
  return (
    <header
      role="banner"
      className="z-50 fixed items-center gap-4 grid grid-cols-[min-content_1fr_min-content] grid-rows-1 grid-flow-col bg-background/90 backdrop-blur-lg px-4 border-b w-full h-20"
    >
      <LogoArea />
      <SearchArea />
      <UserActionArea />
    </header>
  );
}
