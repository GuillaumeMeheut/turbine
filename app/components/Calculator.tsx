'use client';

import { useState, useMemo, ChangeEvent } from 'react';

export default function Calculator() {
    const [flow, setFlow] = useState(50); // L/s
    const [head, setHead] = useState(10); // meters
    const [efficiency, setEfficiency] = useState(75); // %

    const power = useMemo(() => {
        const p = 1000 * 9.81 * (flow / 1000) * head * (efficiency / 100);
        return (p / 1000).toFixed(2); // kW
    }, [flow, head, efficiency]);

    const handleInputChange = (setter: (val: number) => void, min: number, max: number) => (e: ChangeEvent<HTMLInputElement>) => {
        let val = parseFloat(e.target.value);
        if (isNaN(val)) val = min;
        setter(val);
    };

    return (
        <section id="calculator" className="py-24 bg-[#e2ded9] border-t border-[#d4cfc9]">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-[#F1E8DF] border border-[#d4cfc9] shadow-sm rounded-sm overflow-hidden">
                    {/* Header */}
                    <div className="bg-[#121C1E] px-8 py-6 border-b border-[#216D86] flex justify-between items-center">
                        <div>
                            <h2 className="text-2xl font-bold font-display text-[#F1E8DF] uppercase tracking-wider">Simulateur</h2>
                            <p className="text-[#216D86] text-sm font-bold">Estimation de production énergétique</p>
                        </div>
                        <div className="hidden sm:block text-right">
                            <div className="text-xs text-slate-500 uppercase">Version</div>
                            <div className="text-slate-400 font-mono">v2.5.0-FR</div>
                        </div>
                    </div>

                    <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-12 bg-[#F1E8DF]">
                        <div className="space-y-8">
                            {/* Flow Input */}
                            <div className="bg-white/50 p-4 border border-[#d4cfc9] rounded-sm shadow-sm space-y-4">
                                <div className="flex justify-between items-center">
                                    <label className="text-sm font-bold text-[#121C1E] uppercase">Débit d'eau (L/s)</label>
                                    <div className="flex items-center">
                                        <input
                                            type="number"
                                            min="0"
                                            max="2000"
                                            value={flow}
                                            onChange={handleInputChange(setFlow, 0, 2000)}
                                            className="w-24 px-2 py-1 text-right font-mono font-bold text-[#121C1E] bg-white border border-[#d4cfc9] focus:border-[#216D86] focus:ring-1 focus:ring-[#216D86] outline-none rounded-sm"
                                        />
                                        <span className="ml-2 text-xs font-bold text-[#121C1E]/60">L/s</span>
                                    </div>
                                </div>
                                <input
                                    type="range"
                                    min="10"
                                    max="1000"
                                    value={flow}
                                    onChange={(e) => setFlow(Number(e.target.value))}
                                    className="w-full h-2 bg-[#d4cfc9] rounded-none appearance-none cursor-pointer accent-[#216D86]"
                                />
                            </div>

                            {/* Head Input */}
                            <div className="bg-white/50 p-4 border border-[#d4cfc9] rounded-sm shadow-sm space-y-4">
                                <div className="flex justify-between items-center">
                                    <label className="text-sm font-bold text-[#121C1E] uppercase">Hauteur de Chute (m)</label>
                                    <div className="flex items-center">
                                        <input
                                            type="number"
                                            min="0"
                                            max="500"
                                            step="0.1"
                                            value={head}
                                            onChange={handleInputChange(setHead, 0, 500)}
                                            className="w-24 px-2 py-1 text-right font-mono font-bold text-[#121C1E] bg-white border border-[#d4cfc9] focus:border-[#216D86] focus:ring-1 focus:ring-[#216D86] outline-none rounded-sm"
                                        />
                                        <span className="ml-2 text-xs font-bold text-[#121C1E]/60">m</span>
                                    </div>
                                </div>
                                <input
                                    type="range"
                                    min="2"
                                    max="100"
                                    value={head}
                                    onChange={(e) => setHead(Number(e.target.value))}
                                    className="w-full h-2 bg-[#d4cfc9] rounded-none appearance-none cursor-pointer accent-[#216D86]"
                                />
                            </div>

                            {/* Efficiency Input */}
                            <div className="bg-white/50 p-4 border border-[#d4cfc9] rounded-sm shadow-sm space-y-4">
                                <div className="flex justify-between items-center">
                                    <label className="text-sm font-bold text-[#121C1E] uppercase">Rendement (%)</label>
                                    <div className="flex items-center">
                                        <input
                                            type="number"
                                            min="0"
                                            max="100"
                                            value={efficiency}
                                            onChange={handleInputChange(setEfficiency, 0, 100)}
                                            className="w-24 px-2 py-1 text-right font-mono font-bold text-[#121C1E] bg-white border border-[#d4cfc9] focus:border-[#216D86] focus:ring-1 focus:ring-[#216D86] outline-none rounded-sm"
                                        />
                                        <span className="ml-2 text-xs font-bold text-[#121C1E]/60">%</span>
                                    </div>
                                </div>
                                <input
                                    type="range"
                                    min="50"
                                    max="95"
                                    value={efficiency}
                                    onChange={(e) => setEfficiency(Number(e.target.value))}
                                    className="w-full h-2 bg-[#d4cfc9] rounded-none appearance-none cursor-pointer accent-[#216D86]"
                                />
                            </div>
                        </div>

                        {/* Output Display - LCD Style */}
                        <div className="flex flex-col justify-center">
                            <div className="bg-[#121C1E] p-8 rounded-sm border-4 border-[#1e2e30] shadow-xl relative">
                                <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-[#ea580c] animate-pulse"></div>
                                <span className="text-[#216D86] text-xs font-mono uppercase tracking-widest mb-4 block text-center border-b border-[#216D86]/30 pb-2">Puissance Estimée</span>
                                <div className="flex items-baseline justify-center gap-2 py-4">
                                    <span className="text-6xl font-mono text-[#F1E8DF] font-bold tracking-tighter" style={{ textShadow: '0 0 15px rgba(33, 109, 134, 0.4)' }}>
                                        {power}
                                    </span>
                                    <span className="text-2xl text-[#216D86] font-mono">kW</span>
                                </div>
                                <div className="text-center mt-2 text-xs text-slate-400 font-mono">
                                    {Number(power) * 24 * 365 > 1000 ?
                                        `~${((Number(power) * 24 * 365) / 1000).toFixed(1)} MWh / an` :
                                        `~${(Number(power) * 24 * 365).toFixed(0)} kWh / an`
                                    }
                                </div>
                            </div>
                            <p className="text-[#121C1E]/60 text-xs mt-6 pl-2 border-l-4 border-[#ea580c] italic">
                                *Note: Les curseurs permettent une estimation rapide. Utilisez les champs de saisie pour des valeurs précises.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
