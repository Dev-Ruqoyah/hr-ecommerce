// components/navbar.tsx

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { SearchBar } from "./SearchBar";
import IconHeader from "./IconHeader";

export function Navbar() {
  return (
    <header className="flex items-center justify-between p-4 border-b">
      <Link to="/" className="text-xl font-bold">
        MySite
      </Link>

      <nav className="hidden md:flex gap-4">
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <div className="flex ite">
        <SearchBar />
        <IconHeader />
      </div>
    </header>
  );
}
