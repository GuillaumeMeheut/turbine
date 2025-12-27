export interface Turbine {
    id: string;
    slug: string;
    name: string;
    model: 'Banki' | 'Pelton';
    materialType: 'Inox' | 'Acier';
    materialDescription: string;
    powerRange: string;
    description: string;
    price: string;
    specs: {
        head: string;
        flow: string;
        efficiency: string;
        weight?: string;
    };
    image: string;
}
export const turbines: Turbine[] = [
    {
        id: 'banki-5x',
        slug: 'banki-5x',
        name: 'Turbine Banki 5X',
        model: 'Banki',
        materialType: 'Inox',
        materialDescription: 'Inox',
        powerRange: '1 kW - 7 kW',
        description: 'Idéale pour petit moulin.',
        price: '5500€',
        specs: {
            head: '2 m - 10 m',
            flow: '50 L/s - 300 L/s',
            efficiency: '70% - 80%',
        },
        image: '/banki-5x.png',
    },
    {
        id: 'banki-10a',
        slug: 'banki-10a',
        name: 'Turbine Banki 10A',
        model: 'Banki',
        materialType: 'Acier',
        materialDescription: 'Acier',
        powerRange: '5 kW - 15 kW',
        description: 'Idéale pour petit et moyen moulin.',
        price: '5000€',
        specs: {
            head: '2 m - 10 m',
            flow: '100 L/s - 500 L/s',
            efficiency: '70% - 80%',
        },
        image: '/banki-10a.jpg',
    },
    {
        id: 'banki-5a',
        slug: 'banki-5a',
        name: 'Turbine Banki 5A',
        model: 'Banki',
        materialType: 'Acier',
        materialDescription: 'Acier',
        powerRange: '1 kW - 7 kW',
        description: 'Idéale pour petit moulin.',
        price: '3000€',
        specs: {
            head: '2 m - 10 m',
            flow: '50 L/s - 300 L/s',
            efficiency: '70% - 80%',
        },
        image: '/banki-5a.jpg',
    },
    {
        id: 'banki-10x',
        slug: 'banki-10x',
        name: 'Turbine Banki 10X',
        model: 'Banki',
        materialType: 'Inox',
        materialDescription: 'Inox',
        powerRange: '5 kW - 15 kW',
        description: 'Idéale pour petit et moyen moulin.',
        price: '7500€',
        specs: {
            head: '2 m - 10 m',
            flow: '100 L/s - 500 L/s',
            efficiency: '70% - 80%',
        },
        image: '/banki-10x.png',
    },
    {
        id: 'pelton-1a',
        slug: 'pelton-1a',
        name: 'Turbine Pelton 1A',
        model: 'Pelton',
        materialType: 'Acier',
        materialDescription: 'Acier',
        powerRange: '200 W - 1 kW',
        description: 'Idéale pour petit moulin et ruisseaux avec grande hauteur de chute.',
        price: '1000€',
        specs: {
            head: '30 m - 100 m',
            flow: '5 L/s - 10 L/s',
            efficiency: '70% - 80%',
        },
        image: '/pelton-1a.png',
    },
];
