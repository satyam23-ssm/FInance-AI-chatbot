'use client';

export default function Toggle({ active, onChange }: { active: 'tools' | 'ai', onChange: (val: 'tools' | 'ai') => void }) {
  return (
    <div className="flex justify-center mb-10">
      <div className="bg-white/5 p-1 rounded-2xl border border-white/10 flex backdrop-blur-xl">
        <button 
          onClick={() => onChange('tools')}
          className={`px-8 py-3 rounded-xl font-bold transition-all duration-300 ${active === 'tools' ? 'bg-red-900 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
        >
          Dashboard
        </button>
        <button 
          onClick={() => onChange('ai')}
          className={`px-8 py-3 rounded-xl font-bold transition-all duration-300 ${active === 'ai' ? 'bg-red-900 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
        >
          AI Assistant
        </button>
      </div>
    </div>
  );
}