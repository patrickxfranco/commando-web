import { Outlet } from 'react-router';

import { Header } from '@/components/Header';

export function AppLayout() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="pt-20">
        <Outlet />
      </div>
    </div>
  );
}
