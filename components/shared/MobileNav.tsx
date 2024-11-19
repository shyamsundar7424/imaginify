"use client";
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { navLinks } from "@/constants";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <header className="header flex justify-between items-center h-[60px] p-[-2]"> {/* Adjusted height to 60px here */}
      <Link href="/" className="flex items-center gap-[-1]">
        <Image
          src="/assets/images/logo-text.svg"
          alt="Logo"
          width={180}
          height={28}
        />
      </Link>

      <nav className="flex gap-[-4]">
        <SignedIn>
          <UserButton afterSignOutUrl="/" />

          <Dialog>
            <DialogTrigger aria-label="Open menu">
              <Image 
                src="/assets/icons/menu.svg"
                alt="Menu"
                width={32}
                height={32}
                className="cursor-pointer"
              />
            </DialogTrigger>
            <DialogContent className="dialog-content sm:w-60 p-2 text-sm" style={{ height: 'auto', maxHeight: '95vh', maxWidth:'60vw' }}> {/* Set max height for dialog */}
              <DialogTitle>
                <VisuallyHidden>Mobile Navigation Menu</VisuallyHidden>
              </DialogTitle>
              <div className="header-nav flex flex-col  items-center">
                <Image 
                  src="/assets/images/logo-text.svg"
                  alt="Logo"
                  width={152}
                  height={23}
                  className="mb-2"
                />
                <ul className="header-nav_elements flex flex-col  w-full">
                  {navLinks.map((link) => {
                    const isActive = link.route === pathname;

                    return (
                      <li
                        className={`${
                          isActive ? 'gradient-text' : ''
                        } p-[-4] flex items-center  whitespace-wrap text-dark-700 w-full  text-sm `} 
                        key={link.route}
                      >
                        <Link className="sidebar-link flex items-center w-full" href={link.route}>
                          <Image 
                            src={link.icon}
                            alt={link.label}
                            width={24}
                            height={24}
                            className="mr-2"
                          />
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
                <Button className="mt-4 w-full bg-purple-gradient" asChild>
                  <Link href="/sign-out">Sign Out</Link>
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </SignedIn>

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
