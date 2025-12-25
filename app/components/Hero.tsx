export default function Hero() {
    return (
        <div className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden bg-[#F1E8DF] border-b border-[#d4cfc9]">
            {/* Industrial Grid Background */}
            <div className="absolute inset-0 tech-grid-bg opacity-[0.4] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <div className="inline-block mb-6 px-3 py-1 bg-[#216D86]/10 border border-[#216D86]/20 rounded-sm text-xs font-bold text-[#216D86] uppercase tracking-widest">
                    Ingénierie Hydroélectrique
                </div>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#121C1E] mb-6 font-display uppercase">
                    Maîtrisez <br />
                    <span className="text-[#216D86]">L'Énergie Hydraulique</span>
                </h1>
                <p className="mt-4 text-xl text-[#121C1E]/70 max-w-2xl mx-auto leading-relaxed mb-10 font-light">
                    Turbines pour une production d'énergie fiable. Solutions Inox/Acier - Banki/Pelton pour particuliers et industries.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="#products" className="px-8 py-4 rounded-sm bg-[#121C1E] text-[#F1E8DF] font-bold text-lg hover:bg-[#216D86] transition-all shadow-lg active:translate-y-px">
                        Voir le Catalogue
                    </a>
                    <a href="#calculator" className="px-8 py-4 rounded-sm bg-[#F1E8DF] text-[#121C1E] font-bold text-lg border-2 border-[#121C1E]/20 hover:border-[#216D86] hover:text-[#216D86] transition-all active:translate-y-px">
                        Simulateur de Puissance
                    </a>
                </div>
            </div>
        </div>
    );
}
