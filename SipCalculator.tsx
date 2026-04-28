'use client';
import { useState } from 'react';

export default function SipCalculator() {
  const [val, setVal] = useState(5000);
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    // Basic SIP formula: FV = P * ((1 + i)^n - 1) * (1 + i) / i
    const monthlyRate = 0.12 / 12;
    const months = 120; // 10 years
    const fv = val * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
    setResult(Math.round(fv));
  };

  return (
    <div className="flex flex-col h-full">
      <h2 className="text-xl font-bold mb-6 text-white">SIP Calculator</h2>
      <label className="text-xs uppercase text-gray-400 mb-2 font-bold tracking-widest">Monthly Investment (₹)</label>
      <input 
        type="number" 
        value={val} 
        onChange={(e) => setVal(Number(e.target.value))}
        className="luxury-input mb-6"
      />
      <button onClick={calculate} className="luxury-btn mt-auto">Calculate Growth</button>
      {result && (
        <div className="mt-6 p-4 bg-black/20 rounded-2xl border border-white/5 text-center">
          <p className="text-gray-400 text-sm uppercase">Estimated Value (10 yrs)</p>
          <p className="text-3xl font-bold text-white">₹{result.toLocaleString()}</p>
        </div>
      )}
    </div>
  );
}