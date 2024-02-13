import { navLinks } from "@/constants";
import { Button } from "./ui/button";
import Link from "next/link";
import { SignInButton, UserButton, auth } from "@clerk/nextjs";

const Navbar = () => {
  const { userId } = auth();
  return (
    <nav className="w-full py-4 px-20">
      <div className="h-full flex flex-row items-center justify-between">
        <div className="">
          <Link href={"/"}>
            <h3 className="font-semibold text-xl text-[accent]">
              Dron
              <span className="text-primary/80 uppercase">Ed</span>
            </h3>
          </Link>
        </div>
        <div className="flex gap-x-4 items-center justify-center">
          <ul className="space-x-4">
            {navLinks.map((link) => (
              <Link href={link.href} key={link.href}>
                {link.label}
              </Link>
            ))}
          </ul>
          {userId ? (
            <UserButton />
          ) : (
            <div className="space-x-2">
              <SignInButton>
                <Button>Start Learning</Button>
              </SignInButton>
            </div>
          )}
        </div>
        {/* TO:DO User auth */}
      </div>
    </nav>
  );
};

export default Navbar;
