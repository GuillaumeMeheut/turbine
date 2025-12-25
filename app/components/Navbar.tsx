import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 bg-[#F1E8DF]/95 backdrop-blur-md border-b border-[#d4cfc9]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0 flex items-center gap-2">
                        <Image src="/logo-resized-removebg.png" alt="logo BZH Turbines" width={32} height={32} />
                        <Link href="/" className="text-xl font-bold font-display uppercase tracking-tight text-[#121C1E]">
                            BZH<span className="text-[#216D86]">Turbines</span>
                        </Link>
                    </div>
                    <div className="hidden md:flex space-x-8 items-center">
                        <Link href="/#products" className="text-sm font-semibold uppercase tracking-wide text-[#121C1E]/80 hover:text-[#216D86] transition-colors">
                            Catalogue
                        </Link>
                        <Link href="/#calculator" className="text-sm font-semibold uppercase tracking-wide text-[#121C1E]/80 hover:text-[#216D86] transition-colors">
                            Simulation
                        </Link>
                        <Link href="/#contact" className="px-5 py-2 rounded-sm bg-[#ea580c] text-white text-sm font-bold uppercase tracking-wide hover:bg-[#c2410c] transition-all shadow-sm active:translate-y-px">
                            Demander un Devis
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}