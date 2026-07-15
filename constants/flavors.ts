// constants/flavors.ts
export interface CoffeeFlavor {
    id: string;
    name: string;
    description: string;
    price: string;
    color: string;
    accentColor: string;
    image: string;
}

export const COFFEE_FLAVORS: CoffeeFlavor[] = [
    {
        id: 'hazelnut',
        name: 'Toasted Hazelnut',
        description: 'A creamy blend of roasted premium Arabica beans infused with earthy hazelnut extracts.',
        price: '$4.99',
        color: 'from-amber-800 to-amber-950',
        accentColor: '#78350f',
        image: '🌰',
    },
    {
        id: 'matcha-latte',
        name: 'Ceremonial Matcha',
        description: 'Vibrant Japanese green tea whisked into velvety steamed oat milk with sweet vanilla undertones.',
        price: '$5.49',
        color: 'from-emerald-700 to-emerald-950',
        accentColor: '#064e3b',
        image: '🍵',
    },
    {
        id: 'salted-caramel',
        name: 'Salted Caramel',
        description: '24-hour slow-steeped cold brew topped with thick, savory salted caramel cold foam.',
        price: '$5.99',
        color: 'from-yellow-700 to-yellow-950',
        accentColor: '#451a03',
        image: '🍯',
    },
];