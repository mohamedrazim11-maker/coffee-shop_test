// app/page.tsx
import CoffeeShowcase from '@/components/CoffeeShowcase';

export const metadata = {
  title: 'Artisan Coffee Roasters | Experience Flavor',
  description: 'A highly interactive modern showcase engineered with dynamic framework routing architectures.',
};

export default function Home() {
  return <CoffeeShowcase />;
}