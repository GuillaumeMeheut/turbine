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
        id: '1',
        slug: 'turbine-banki-inox-compact',
        name: 'Banki Inox Compact',
        model: 'Banki',
        materialType: 'Inox',
        materialDescription: 'Acier Inoxydable (316L)',
        powerRange: '5kW - 20kW',
        description: 'Idéale pour les petits ruisseaux et l\'autonomie résidentielle. Structure Banki éprouvée avec construction Inox anticorrosion.',
        price: 'À partir de 12 000 €',
        specs: {
            head: '5m - 20m',
            flow: '20L/s - 100L/s',
            efficiency: '75%',
            weight: '150kg'
        },
        image: '/images/inox-1.jpg'
    },
    {
        id: '2',
        slug: 'turbine-banki-inox-pro',
        name: 'Banki Inox Pro',
        model: 'Banki',
        materialType: 'Inox',
        materialDescription: 'Acier Inoxydable (316L)',
        powerRange: '20kW - 100kW',
        description: 'Turbine Banki haute performance pour environnements exigeants. Durabilité maximale grâce au tout Inox.',
        price: 'À partir de 25 000 €',
        specs: {
            head: '10m - 50m',
            flow: '50L/s - 300L/s',
            efficiency: '88%',
            weight: '320kg'
        },
        image: '/images/inox-2.jpg'
    },
    {
        id: '3',
        slug: 'turbine-banki-acier-standard',
        name: 'Banki Acier Standard',
        model: 'Banki',
        materialType: 'Acier',
        materialDescription: 'Acier Carbone Revêtu',
        powerRange: '10kW - 50kW',
        description: 'La fiabilité de la technologie Banki en version Acier économique. Revêtement époxy industriel.',
        price: 'À partir de 15 000 €',
        specs: {
            head: '5m - 30m',
            flow: '30L/s - 200L/s',
            efficiency: '84%',
            weight: '280kg'
        },
        image: '/images/acier-1.jpg'
    },
    {
        id: '4',
        slug: 'turbine-banki-acier-max',
        name: 'Banki Acier Max',
        model: 'Banki',
        materialType: 'Acier',
        materialDescription: 'Acier Carbone Renforcé',
        powerRange: '100kW - 500kW',
        description: 'Solution Banki grand format pour forts débits. Conception lourde pour usage industriel continu.',
        price: 'À partir de 60 000 €',
        specs: {
            head: '10m - 80m',
            flow: '200L/s - 1000L/s',
            efficiency: '89%',
        },
        image: '/images/acier-big.jpg'
    },
    {
        id: '5',
        slug: 'pelton-acier-haute-chute',
        name: 'Pelton Acier HF',
        model: 'Pelton',
        materialType: 'Acier',
        materialDescription: 'Châssis Fonte / Augets Inox',
        powerRange: '50kW - 1MW',
        description: 'Technologie Pelton pour les grandes hauteurs de chute. Efficacité extrême sous haute pression.',
        price: 'À partir de 45 000 €',
        specs: {
            head: '50m - 300m',
            flow: '10L/s - 100L/s',
            efficiency: '92%',
            weight: '400kg'
        },
        image: '/images/pelton.jpg'
    }
];
