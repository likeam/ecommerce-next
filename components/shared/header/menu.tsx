import React from "react";
import { ModeToggle } from "./mode-toggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { EllipsisVertical, ShoppingCart, UserIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Menu = () => {
  return (
    <div className="flex justify-end gap-3">
      <nav className=" hidden md:flex w-full max-w-xs gap-1">
        <ModeToggle />
        <Button asChild variant="ghost">
          <Link href="/cart" className=" flex-start">
            <ShoppingCart />
            Cart
          </Link>
        </Button>
        <Button asChild>
          <Link href="/sign-in" className=" flex-start">
            <UserIcon />
            Sign In
          </Link>
        </Button>
      </nav>
      <nav className=" md:hidden">
        <Sheet>
          <SheetTrigger className=" align-middle">
            <EllipsisVertical />
          </SheetTrigger>
          <SheetContent className=" flex flex-col items-start">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription>
                <ModeToggle />
                <div className=" flex flex-col items-start space-y-2">
                  <Button asChild variant="ghost" className=" justify-start">
                    <Link href="/cart" className=" flex-start">
                      <ShoppingCart />
                      Cart
                    </Link>
                  </Button>
                  <Button asChild>
                    <Link href="/sign-in" className=" flex-start">
                      <UserIcon />
                      Sign In
                    </Link>
                  </Button>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default Menu;
