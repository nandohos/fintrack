export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex-col md:flex">
        <main className="flex-1 p-4">{children}</main>
      </div>
    </>
  );
}
