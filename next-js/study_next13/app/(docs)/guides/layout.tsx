import React, { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary py-4">
        <div className="container mx-auto">
          {/* Your header content goes here */}
        </div>
      </header>
      <main className="flex-grow container mx-auto">{children}</main>
      <footer className="bg-primary py-4">
        <div className="container mx-auto">
          {/* Your footer content goes here */}
        </div>
      </footer>
    </div>
  );
};

export default Layout;
