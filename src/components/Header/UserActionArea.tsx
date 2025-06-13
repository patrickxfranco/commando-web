import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function UserActionArea() {
  return (
    <div id="user-action" className="max-w-min">
      <Avatar className="rounded-sm w-12 h-12">
        <AvatarFallback>PF</AvatarFallback>
        <AvatarImage src="https://www.github.com/patrickxfranco.png" />
      </Avatar>
    </div>
  );
}
