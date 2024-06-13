"use client";

import Link from "next/link";
import { ReactComponentElement } from "react";

interface HeaderProps {
  isAuthenticated?: boolean;
  children?: ReactComponentElement<any>;
}

const Header = ({ isAuthenticated, children }: HeaderProps) => {
  return (
    <header className="bg-zinc-900 p-4 shadow-md">
      <nav className="flex justify-between items-center">
        <h1 className="text-2xl text-orange-500">Taskify</h1>
        {children}
        {isAuthenticated && (
          <div className="flex space-x-4">
            <Link href="/dashboard" className="text-white">
              Dashboard
            </Link>
            <Link href="/profile" className="text-white">
              Profile
            </Link>
            <Link href="/settings" className="text-white">
              Settings
            </Link>
            <Link href="/logout" className="text-white">
              Logout
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
