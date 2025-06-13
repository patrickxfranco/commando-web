import { Plus } from 'lucide-react';

import { Button } from '@/components/ui/button';

export function LogoArea() {
  return (
    <div id="logo" className="max-w-min">
      <Button asChild type="button" variant="ghost" size="icon" className="w-12 h-12">
        <div>
          <span className="sr-only">Voltar para home</span>
          <Plus />
        </div>
      </Button>
    </div>
  );
}
