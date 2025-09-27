"use client";

import Link from "next/link";
import { Button } from "@workspace/ui/components/button";
import NavDesktop from "./nav-desktop";
import NavMobile from "./nav-mobile";
import Logo from "@workspace/ui/components/logo";
import { authClient } from "database/lib/auth-client";

export default function Header() {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  return (
    <header className="w-full bg-white sticky top-0 left-0 z-50 shadow-sm">
      <div className="mx-auto px-4 py-5 flex items-center justify-between">
        <Logo className="text-secondary _expandButton_1rxo6_28" />
        <NavDesktop className="hidden lg:flex" />
        <NavMobile className="lg:hidden" />
      </div>
    </header>
  );
}
