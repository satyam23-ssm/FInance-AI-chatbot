'use client';
import { useState } from 'react';
import SipCalculator from '@/components/SipCalculator';
import DebtCalculator from '@/components/DebtCalculator';
import AiAssistant from '@/components/AiAssistant';
import Toggle from '@/components/Toggle';

export default function Dashboard() {
  const [tab, setTab] = useState<'tools' | 'ai'>('tools');

  return (
    <div className="space-y-10">
      <h1 className="text-5xl font-extrabold text-center tracking-tight text-white">
        Rupee<span className="text-red-800">Wise</span>
      </h1>
      
      <Toggle active={tab} onChange={setTab} />

      {tab === 'tools' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-card"><SipCalculator /></div>
          <div className="glass-card"><DebtCalculator /></div>
        </div>
      ) : (
        <div className="glass-card max-w-3xl mx-auto"><AiAssistant /></div>
      )}
    </div>
  );
}