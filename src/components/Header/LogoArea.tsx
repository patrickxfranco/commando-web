import { Plus, Globe, NotebookPen } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import type { ReactElement } from 'react';

type DropDownMenuItemProps = {
  itemName: string;
  icon?: ReactElement;
};

export function LogoArea() {
  return (
    <div id="logo" className="max-w-min">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button asChild type="button" variant="ghost" size="icon" className="w-12 h-12">
            <div>
              <span className="sr-only">Voltar para home</span>
              <Plus />
            </div>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-background/90 backdrop-blur-lg ml-4 min-w-max">
          <DropdownMenuLabel className="text-[12px] text-muted-foreground">adicionar conteúdo</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropDownMenuItem icon={<Globe />} itemName="Da API" />
            <DropDownMenuItem icon={<NotebookPen />} itemName="Manualmente" />
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

function DropDownMenuItem({ itemName, icon }: DropDownMenuItemProps) {
  return (
    <DropdownMenuItem className="flex flex-row items-center gap-2 p-3">
      {icon ? icon : null}
      {itemName}
    </DropdownMenuItem>
  );
}
