import { Flame, Popcorn } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function SearchArea() {
  return (
    <div id="search" className="flex flex-row items-center gap-4 w-full">
      <Input placeholder="Buscar conteúdo" type="search" className="bg-white dark:bg-black max-w-150 h-12" />
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
  );
}
