import { Outlet } from 'react-router';

import { Header } from '@/components/Header';

export function AppLayout() {
  return (
    <div className="grid grid-cols-1 grid-rows-2 grid-flow-row">
      <Header />
      <Outlet />
    </div>
  );
}
