"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navLinks } from "@/constants";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <header className="header">
      <Link href="/" className="flex items-center gap-2 md:py-2">
        <Image
          src="/assets/images/logo-text.svg"
          alt="ImageWorld logo"
          width={180}
          height={28}
        />
      </Link>

      <nav className="flex gap-2">
        {/* SignedIn Section */}
        <SignedIn>
          <UserButton afterSignOutUrl="/" />

          {/* Mobile Menu Trigger */}
          <Sheet>
            <SheetTrigger>
              <Image
                src="/assets/icons/menu.svg"
                alt="Open menu"
                width={32}
                height={32}
                className="cursor-pointer"
              />
            </SheetTrigger>
            <SheetContent className="sheet-content sm:w-64">
              <Image
                src="/assets/images/logo-text.svg"
                alt="ImageWorld logo"
                width={152}
                height={23}
              />

              <ul className="header-nav_elements">
                {navLinks.map((link) => {
                  const isActive = link.route === pathname;

                  return (
                    <li
                      key={link.route}
                      className={`p-18 flex whitespace-nowrap text-dark-700 ${
                        isActive ? "gradient-text" : ""
                      }`}
                    >
                      <Link
                        className="sidebar-link cursor-pointer flex items-center gap-2"
                        href={link.route}
                      >
                        <Image
                          src={link.icon}
                          alt={`${link.label} icon`}
                          width={24}
                          height={24}
                        />
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </SheetContent>
          </Sheet>
        </SignedIn>

        {/* SignedOut Section */}
        <SignedOut>
          <Button asChild className="button bg-purple-gradient bg-cover">
            <Link href="/sign-in">Login</Link>
          </Button>
        </SignedOut>
      </nav>
    </header>
  );
};

export default MobileNav;
