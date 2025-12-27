import Link from 'next/link';
import { notFound } from 'next/navigation';
import { turbines } from '../../data';
import Navbar from '../../components/Navbar';
import Image from 'next/image';

interface Props {
    params: Promise<{ slug: string }>;
}

export default async function TurbinePage({ params }: Props) {
    const { slug } = await params;
    const turbine = turbines.find((t) => t.slug === slug);

    if (!turbine) {
        notFound();
    }

    const isInox = turbine.materialType === 'Inox';

    return (
        <main className="min-h-screen bg-[#F1E8DF]">
            <Navbar />

            <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link href="/#products" className="text-[#121C1E]/60 hover:text-[#216D86] text-sm font-bold uppercase tracking-wide mb-8 inline-block transition-colors">
                    &larr; Retour au Catalogue
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Product Image Area */}
                    <div className="bg-[#e2ded9] rounded-sm aspect-[4/3] relative overflow-hidden border border-[#d4cfc9] shadow-inner">
                        {turbine.image && (
                            <Image
                                src={turbine.image}
                                alt={turbine.name}
                                fill
                                className='object-cover'
                            />
                        )}

                        <div className="absolute top-6 right-6 flex flex-col gap-2 items-end">
                            <span className="bg-white/90 backdrop-blur px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#121C1E] shadow-sm rounded-sm">
                                Modèle {turbine.model}
                            </span>
                            <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider shadow-sm rounded-sm ${isInox ? 'bg-[#F1E8DF] text-[#121C1E]/80' : 'bg-[#ea580c] text-white'
                                }`}>
                                Finition {turbine.materialType}
                            </span>
                        </div>
                    </div>

                    {/* Product Details */}
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold font-display text-[#121C1E] mb-2 uppercase">
                            {turbine.name}
                        </h1>
                        <div className="w-20 h-1 bg-[#ea580c] mb-6"></div>

                        <p className="text-2xl text-[#121C1E] font-bold mb-8 font-mono">
                            {turbine.price} <span className="text-sm font-normal text-[#121C1E]/60 ml-2">(TTC)</span>
                        </p>

                        <p className="text-lg text-[#121C1E]/80 leading-relaxed mb-10">
                            {turbine.description}
                        </p>

                        <div className="bg-[#F1E8DF] border border-[#d4cfc9] p-8 mb-10">
                            <h3 className="text-sm font-bold text-[#121C1E] uppercase tracking-wider mb-6 pb-2 border-b border-[#d4cfc9]">
                                Caractéristiques Techniques
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                                <div className="flex justify-between border-b border-[#d4cfc9] pb-2 border-dashed">
                                    <span className="text-sm text-[#121C1E]/60">Modèle</span>
                                    <span className="text-sm font-semibold text-[#121C1E]">{turbine.model}</span>
                                </div>
                                <div className="flex justify-between border-b border-[#d4cfc9] pb-2 border-dashed">
                                    <span className="text-sm text-[#121C1E]/60">Matériau</span>
                                    <span className="text-sm font-semibold text-[#121C1E]">{turbine.materialDescription}</span>
                                </div>
                                <div className="flex justify-between border-b border-[#d4cfc9] pb-2 border-dashed">
                                    <span className="text-sm text-[#121C1E]/60">Puissance</span>
                                    <span className="text-sm font-semibold text-[#121C1E]">{turbine.powerRange}</span>
                                </div>
                                <div className="flex justify-between border-b border-[#d4cfc9] pb-2 border-dashed">
                                    <span className="text-sm text-[#121C1E]/60">Chute (Head)</span>
                                    <span className="text-sm font-semibold text-[#121C1E]">{turbine.specs.head}</span>
                                </div>
                                <div className="flex justify-between border-b border-[#d4cfc9] pb-2 border-dashed">
                                    <span className="text-sm text-[#121C1E]/60">Débit</span>
                                    <span className="text-sm font-semibold text-[#121C1E]">{turbine.specs.flow}</span>
                                </div>
                                <div className="flex justify-between border-b border-[#d4cfc9] pb-2 border-dashed">
                                    <span className="text-sm text-[#121C1E]/60">Rendement</span>
                                    <span className="text-sm font-semibold text-[#121C1E]">{turbine.specs.efficiency}</span>
                                </div>
                                {turbine.specs.weight && (
                                    <div className="flex justify-between border-b border-[#d4cfc9] pb-2 border-dashed">
                                        <span className="text-sm text-[#121C1E]/60">Poids</span>
                                        <span className="text-sm font-semibold text-[#121C1E]">{turbine.specs.weight}</span>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <Link
                                href="/#contact"
                                className="flex-1 text-center bg-[#ea580c] text-white font-bold py-4 rounded-sm hover:bg-[#c2410c] transition-all shadow-sm active:translate-y-px uppercase tracking-wide"
                            >
                                Demander un devis
                            </Link>
                            <Link
                                href="/#calculator"
                                className="flex-1 text-center bg-[#F1E8DF] border border-[#d4cfc9] text-[#121C1E] font-bold py-4 rounded-sm hover:bg-[#e2ded9] transition-all active:translate-y-px uppercase tracking-wide"
                            >
                                Simuler
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

// Generate static params for SSG
export async function generateStaticParams() {
    return turbines.map((turbine) => ({
        slug: turbine.slug,
    }));
}
