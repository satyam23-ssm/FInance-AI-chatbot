'use client';
import { useState } from 'react';

export default function DebtCalculator() {
  const [amount, setAmount] = useState(500000);
  const [rate, setRate] = useState(10);
  const [payment, setPayment] = useState(15000);
  const [result, setResult] = useState<string | null>(null);

  const calculateDebt = () => {
    let balance = amount;
    let months = 0;
    const monthlyRate = (rate / 100) / 12;
    while (balance > 0 && months < 600) {
      balance = balance * (1 + monthlyRate) - payment;
      months++;
    }
    setResult(months >= 600 ? "Payment too low." : `${Math.floor(months / 12)} years, ${months % 12} months`);
  };

  return (
    <div className="flex flex-col h-full">
      <h2 className="text-xl font-bold mb-6 text-white">Debt Payoff</h2>
      <label className="text-xs uppercase text-gray-400 mb-1 font-bold tracking-widest">Loan Amount (₹)</label>
      <input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} className="luxury-input mb-4" />
      
      <label className="text-xs uppercase text-gray-400 mb-1 font-bold tracking-widest">Interest Rate (%)</label>
      <input type="number" value={rate} onChange={(e) => setRate(Number(e.target.value))} className="luxury-input mb-4" />
      
      <label className="text-xs uppercase text-gray-400 mb-1 font-bold tracking-widest">Monthly Payment (₹)</label>
      <input type="number" value={payment} onChange={(e) => setPayment(Number(e.target.value))} className="luxury-input mb-6" />
      
      <button onClick={calculateDebt} className="luxury-btn mt-auto">Calculate Payoff</button>
      
      {result && (
        <div className="mt-6 p-4 bg-black/20 rounded-2xl border border-white/5 text-center">
          <p className="text-gray-400 text-sm uppercase">Time to Debt-Free</p>
          <p className="text-xl font-bold text-white">{result}</p>
        </div>
      )}
    </div>
  );
}