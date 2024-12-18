import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';

export const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow px-6 sm:px-3 sm:py-2">
        <Outlet />
      </main>
    </div>
  );
};
