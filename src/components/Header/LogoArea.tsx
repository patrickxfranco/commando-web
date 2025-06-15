import { Globe, NotebookPen, Plus } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';

import { useState, type ReactElement } from 'react';
import { Link } from 'react-router';
import { MobileCard } from '@/pages/Home/MobileCard';

type DropDownMenuItemProps = {
  itemName: string;
  icon?: ReactElement;
};

export function LogoArea() {
  const [idSearch, setIdSearch] = useState<string>('');

  return (
    <div id="logo" className="max-w-min">
      <Dialog>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button asChild type="button" variant="ghost" size="icon" className="w-12 h-12">
              <div>
                <span className="sr-only">Voltar para home</span>
                <Plus />
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-background/90 backdrop-blur-lg ml-4 w-60">
            <DropdownMenuLabel className="text-[12px] text-muted-foreground">adicionar conteúdo</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DialogTrigger asChild>
                <DropDownMenuItem icon={<Globe />} itemName="Da API" />
              </DialogTrigger>
              <DropDownMenuItem icon={<NotebookPen />} itemName="Manualmente" />
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        <DialogContent>
          <DialogHeader className="mb-2">
            <DialogTitle>Adicionar um novo conteúdo da API</DialogTitle>
            <DialogDescription>
              Aqui você pode adicionar um novo conteúdo a sua lista de favoritos usando o ID usado no IMDb
            </DialogDescription>
          </DialogHeader>
          {idSearch === '' ? null : <MobileCard imdbID={idSearch} />}
          <div className="flex flex-col gap-4 my-4">
            <Input
              type="search"
              placeholder="IMDb ID, exemplo: tt0389860"
              value={idSearch}
              onChange={(e) => setIdSearch(e.target.value)}
            />
            <Link to="https://www.imdb.com/" target="_blank" className="max-w-max text-amber-300">
              Buscar no IMDb
            </Link>
          </div>
          <DialogFooter>
            <Button type="submit">Confirmar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function DropDownMenuItem({ itemName, icon, ...props }: DropDownMenuItemProps & React.ComponentProps<'div'>) {
  return (
    <DropdownMenuItem className="flex flex-row items-center gap-2 p-3" {...props}>
      {icon ? icon : null}
      {itemName}
    </DropdownMenuItem>
  );
}
