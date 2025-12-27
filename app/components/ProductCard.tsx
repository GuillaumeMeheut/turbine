import Link from 'next/link';
import Image from 'next/image';
import { Turbine } from '../data';

export default function ProductCard({ product }: { product: Turbine }) {
    // Determine color theme based on Material
    const isInox = product.materialType === 'Inox';

    // Background logic: Inox = Light/Cream, Acier = Darker/Teal-ish
    const bgClass = isInox
        ? 'bg-gradient-to-br from-[#e2ded9] to-[#d4cfc9]'
        : 'bg-gradient-to-br from-[#121C1E] to-[#1e2e30]';

    return (
        <Link
            href={`/turbines/${product.slug}`}
            className="group block bg-[#F1E8DF] border border-[#d4cfc9] hover:border-[#216D86] hover:ring-1 hover:ring-[#216D86] transition-all duration-200 rounded-sm overflow-hidden"
        >
            <div className={`h-48 relative border-b border-[#d4cfc9] ${bgClass}`}>
                <div className="absolute inset-0 opacity-20 bg-grid-pattern"></div>
                {product.image && (
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className='object-cover'
                    />
                )}

                {/* Badges for Model and Material */}
                <div className="absolute top-3 left-3 flex gap-2 z-10">
                    <span className="bg-[#121C1E] text-[#F1E8DF] text-xs font-bold px-2 py-1 uppercase tracking-wider rounded-sm shadow-sm">
                        {product.model}
                    </span>
                    <span className={`text-xs font-bold px-2 py-1 uppercase tracking-wider rounded-sm shadow-sm ${isInox ? 'bg-[#F1E8DF] text-[#121C1E] border border-[#d4cfc9]' : 'bg-[#ea580c] text-white'
                        }`}>
                        {product.materialType}
                    </span>
                </div>
            </div>

            <div className="p-5">
                <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-bold font-display text-[#121C1E] group-hover:text-[#216D86] transition-colors uppercase">
                        {product.name}
                    </h3>
                    <span className="text-xs font-mono bg-[#e2ded9] px-2 py-1 rounded text-[#121C1E]/70">
                        REF-{product.id.padStart(3, '0')}
                    </span>
                </div>

                <p className="text-[#121C1E]/70 text-sm mb-6 line-clamp-2 h-10 leading-snug">
                    {product.description}
                </p>

                <div className="space-y-2 border-t border-[#d4cfc9] pt-4 mb-4">
                    <div className="flex justify-between text-sm">
                        <span className="text-[#121C1E]/60">Puissance</span>
                        <span className="font-semibold text-[#121C1E]">{product.powerRange}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className="text-[#121C1E]/60">Matériau</span>
                        <span className="font-semibold text-[#121C1E] truncate max-w-[150px] text-right">{product.materialDescription}</span>
                    </div>
                </div>

                <div className="w-full py-2 text-center border border-[#d4cfc9] text-[#121C1E]/80 text-sm font-bold uppercase tracking-wide group-hover:bg-[#121C1E] group-hover:text-[#F1E8DF] group-hover:border-[#121C1E] transition-all rounded-sm">
                    Détails Techniques
                </div>
            </div>
        </Link>
    );
}
