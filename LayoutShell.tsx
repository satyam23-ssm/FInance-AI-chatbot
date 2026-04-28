'use client';
import { useState } from 'react';

export default function LayoutShell({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-red-900/50">
      {/* Background Gradient */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-900/20 via-black to-black -z-10" />

      {/* Top Navbar */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tighter">Rupee<span className="text-red-700">Wise</span></h1>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
            <a href="/" className="hover:text-white transition-colors">Dashboard</a>
            <a href="/profile" className="hover:text-white transition-colors">Profile</a>
            <a href="/contact" className="hover:text-white transition-colors">Support</a>
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-6 py-12 min-h-[80vh]">
        {children}
      </main>

      {/* Professional Footer */}
      <footer className="border-t border-white/5 py-12 text-center text-gray-600 text-sm">
        <div className="max-w-7xl mx-auto px-6">
          <p>© 2026 RupeeWise AI. All rights reserved.</p>
          <div className="flex justify-center gap-6 mt-4">
            <a href="#" className="hover:text-red-800 transition-colors">Privacy</a>
            <a href="#" className="hover:text-red-800 transition-colors">Terms</a>
            <a href="#" className="hover:text-red-800 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}