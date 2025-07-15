"use client";

export function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b bg-white shadow-sm">
      <div className="text-xl font-bold text-blue-600">MyLogo</div>

      {/* Connect wallet button (placeholder) */}
      <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
        Connect Wallet
      </button>
    </header>
  );
}
