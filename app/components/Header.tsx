// app/components/Header.tsx

import Link from "next/link";
import { Briefcase } from 'lucide-react';

export default function Header() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link className="flex items-center justify-center" href="/">
        <Briefcase className="h-6 w-6 mr-2" />
        <span className="font-bold">Mancilla Consulting</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="/services">
          Services
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="/case-studies">
          Case Studies
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="/about">
          About
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="/contact">
          Contact
        </Link>
      </nav>
    </header>
  );
}
