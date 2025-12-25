'use client';

import { useActionState } from 'react';
import { sendEmail } from '../actions';

const initialState = {
    success: false,
    message: '',
};

export default function ContactForm() {
    const [state, formAction, isPending] = useActionState(sendEmail, initialState);

    return (
        <section id="contact" className="py-24 bg-[#F1E8DF] border-t border-[#d4cfc9]">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold font-display text-[#121C1E] mb-4 uppercase tracking-tight">Démarrez Votre Projet</h2>
                    <p className="text-[#121C1E]/70">Contactez notre bureau d'études pour une solution sur mesure.</p>
                </div>

                <div className="bg-white p-8 md:p-10 shadow-sm border border-[#d4cfc9] rounded-sm">
                    {state.success ? (
                        <div className="text-center py-12">
                            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            </div>
                            <h3 className="text-xl font-bold text-[#121C1E] mb-2">Demande Envoyée !</h3>
                            <p className="text-[#121C1E]/70">Nos ingénieurs vous répondront sous 24h.</p>
                        </div>
                    ) : (
                        <form action={formAction} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-xs font-bold text-[#121C1E]/60 uppercase mb-1">Nom Complet</label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        required
                                        className="w-full px-4 py-3 rounded-none bg-[#F1E8DF]/50 border border-[#d4cfc9] focus:border-[#216D86] focus:ring-1 focus:ring-[#216D86] outline-none transition-all placeholder:text-[#121C1E]/30 text-[#121C1E]"
                                        placeholder="Votre Nom"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-xs font-bold text-[#121C1E]/60 uppercase mb-1">Email Professionnel</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        required
                                        className="w-full px-4 py-3 rounded-none bg-[#F1E8DF]/50 border border-[#d4cfc9] focus:border-[#216D86] focus:ring-1 focus:ring-[#216D86] outline-none transition-all placeholder:text-[#121C1E]/30 text-[#121C1E]"
                                        placeholder="contact@entreprise.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="turbine" className="block text-xs font-bold text-[#121C1E]/60 uppercase mb-1">Modèle d'Intérêt</label>
                                <select
                                    name="turbine"
                                    id="turbine"
                                    className="w-full px-4 py-3 rounded-none bg-[#F1E8DF]/50 border border-[#d4cfc9] focus:border-[#216D86] focus:ring-1 focus:ring-[#216D86] outline-none transition-all text-[#121C1E]"
                                >
                                    <option value="">Sélectionnez une turbine...</option>
                                    <optgroup label="Turbines Banki">
                                        <option value="banki-inox">Banki - Gamme Inox</option>
                                        <option value="banki-acier">Banki - Gamme Acier</option>
                                    </optgroup>
                                    <optgroup label="Turbines Pelton">
                                        <option value="pelton">Pelton - Haute Chute</option>
                                    </optgroup>
                                    <option value="consultation">Consultation Générale</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-xs font-bold text-[#121C1E]/60 uppercase mb-1">Description du Projet</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    rows={4}
                                    required
                                    className="w-full px-4 py-3 rounded-none bg-[#F1E8DF]/50 border border-[#d4cfc9] focus:border-[#216D86] focus:ring-1 focus:ring-[#216D86] outline-none transition-all placeholder:text-[#121C1E]/30 text-[#121C1E]"
                                    placeholder="Détails sur l'emplacement, hauteur de chute estimée..."
                                ></textarea>
                            </div>

                            {state.message && !state.success && (
                                <div className="p-3 bg-red-50 text-red-600 text-sm border border-red-200 rounded-sm">
                                    {state.message}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isPending}
                                className="w-full py-4 px-8 rounded-sm bg-[#ea580c] text-white font-bold text-lg uppercase tracking-wider hover:bg-[#c2410c] transition-all shadow-sm active:translate-y-px disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
                            >
                                {isPending ? (
                                    <span className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                                ) : (
                                    'Envoyer la Demande'
                                )}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}
