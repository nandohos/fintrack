"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "~/lib/utils";

const navItems = [
  { name: "Main", href: "/dashboard" },
  { name: "Accounts", href: "/dashboard/accounts" },
  { name: "Transactions", href: "/dashboard/transactions" },
  { name: "Settings", href: "/dashboard/settings" },
];

interface MainNavProps extends React.HTMLAttributes<HTMLElement> {
  currentPath: string;
}

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            pathname != item.href ? "text-muted-foreground" : "text-primary",
          )}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}
