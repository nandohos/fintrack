import { MainNav } from "../_components/main-nav";
import { SearchNav } from "../_components/search";
import { UserNav } from "../_components/user-nav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex-col md:flex">
        <header className="border-b">
          <div className="flex h-16 items-center px-4">
            <MainNav className="mx-6 font-semibold" />
            <div className="ml-auto flex items-center space-x-4">
              <SearchNav />
              <UserNav />
            </div>
          </div>
        </header>
        <main className="flex-1 p-4">{children}</main>
      </div>
    </>
  );
}
