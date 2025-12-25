export default function WhyHydro() {
    return (
        <section className="py-24 bg-[#121C1E] text-[#F1E8DF]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-[#216D86] font-bold tracking-widest uppercase text-xs">L'Énergie Responsable</span>
                    <h2 className="text-4xl font-bold font-display mt-2 mb-4 uppercase !text-[#F1E8DF]">Pourquoi Choisir l'Hydroélectricité ?</h2>
                    <div className="w-24 h-1 bg-[#216D86] mx-auto"></div>
                    <p className="mt-6 text-lg text-[#F1E8DF]/70 max-w-2xl mx-auto">
                        Une énergie renouvelable historique, remise au goût du jour par la technologie moderne.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
                    {/* Benefit 1 */}
                    <div className="space-y-4">
                        <div className="w-16 h-16 bg-[#216D86]/20 border border-[#216D86]/30 flex items-center justify-center rounded-sm mx-auto md:mx-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#216D86]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold font-display uppercase !text-[#F1E8DF]">Rentabilité & Constance</h3>
                        <p className="text-[#F1E8DF]/60 leading-relaxed">
                            Contrairement au solaire ou à l'éolien, l'hydroélectricité produit <strong>24h/24 et 7j/7</strong>. Votre retour sur investissement est prévisible et constant tout au long de l'année.
                        </p>
                    </div>

                    {/* Benefit 2 */}
                    <div className="space-y-4">
                        <div className="w-16 h-16 bg-[#216D86]/20 border border-[#216D86]/30 flex items-center justify-center rounded-sm mx-auto md:mx-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#216D86]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold font-display uppercase !text-[#F1E8DF]">Pour Chaque Site</h3>
                        <p className="text-[#F1E8DF]/60 leading-relaxed">
                            Que ce soit pour un <strong>moulin historique</strong>, une conduite forcée industrielle ou un simple ruisseau, il existe une turbine adaptée (Banki, Pelton, Kaplan) pour optimiser chaque goutte d'eau.
                        </p>
                    </div>

                    {/* Benefit 3 */}
                    <div className="space-y-4">
                        <div className="w-16 h-16 bg-[#216D86]/20 border border-[#216D86]/30 flex items-center justify-center rounded-sm mx-auto md:mx-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#216D86]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold font-display uppercase !text-[#F1E8DF]">Impact Local</h3>
                        <p className="text-[#F1E8DF]/60 leading-relaxed">
                            Produisez et consommez localement. Participez à l'indépendance énergétique de votre territoire avec une installation à faible impact visuel et respectueuse de la faune aquatique.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
