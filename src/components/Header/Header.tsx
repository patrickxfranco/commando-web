import { Command, Flame, Popcorn } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Header(): React.ReactElement {
  return (
    <header className="z-50 fixed items-center gap-4 grid grid-cols-[min-content_1fr_min-content] grid-rows-1 grid-flow-col bg-background/90 backdrop-blur-lg px-4 border-b w-full h-20">
      <div id="logo" className="max-w-min">
        <Button type="button" variant="ghost" size="icon" className="w-12 h-12">
          <span className="sr-only">Voltar para home</span>
          <Command />
        </Button>
      </div>
      <div id="search" className="flex flex-row items-center gap-4 w-full">
        <Input placeholder="Buscar conteúdo" className="bg-white dark:bg-black max-w-150 h-12" />
        <nav className="hidden sm:flex flex-row gap-4">
          <Button variant="link">
            <Flame />
            Em Alta
          </Button>
          <Button variant="link">
            <Popcorn />
            Lançamentos
          </Button>
        </nav>
      </div>
      <div id="user-action" className="max-w-min">
        <Avatar className="rounded-sm w-12 h-12">
          <AvatarFallback>PF</AvatarFallback>
          <AvatarImage src="https://www.github.com/patrickxfranco.png" />
        </Avatar>
      </div>
    </header>
  );
}
