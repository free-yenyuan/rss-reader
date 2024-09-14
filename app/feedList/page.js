import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {/* side bar */}
        <div>RSS Reader</div>
        <p className="text-6xl">RSS Reader111</p>
        <p className="text-gray-500">Create Your Own Feed.</p>
        <Link
          href="/feedList"
          className="block rounded border-2 border-slate-100 p-2 px-4 transition-all hover:bg-slate-100 hover:text-black">
          Start Subscribe ➡️
        </Link>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
