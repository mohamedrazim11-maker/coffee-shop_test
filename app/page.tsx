import CoffeeShowcase from '@/components/CoffeeShowcase';

export default function Home() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'CafeOrCoffeeShop',
        name: 'Aura Botanica',
        image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1200&q=80',
        '@id': 'https://aurabotanica.com',
        url: 'https://aurabotanica.com',
        telephone: '+1-555-019-2831',
        address: {
            '@type': 'PostalAddress',
            streetAddress: '124 Forest Reserve Way',
            addressLocality: 'Portland',
            addressRegion: 'OR',
            postalCode: '97201',
            addressCountry: 'US',
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: 45.5152,
            longitude: -122.6784,
        },
        openingHoursSpecification: [
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: [
                    'Monday',
                    'Tuesday',
                    'Wednesday',
                    'Thursday',
                    'Friday',
                    'Saturday',
                    'Sunday',
                ],
                opens: '07:00',
                closes: '18:00',
            },
        ],
        servesCuisine: 'Artisanal Coffee, Micro-Roastery',
        priceRange: '$$',
    };

    return (
        <>
            {/* Inject Structured Data for Local Business SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <CoffeeShowcase />
        </>
    );
}