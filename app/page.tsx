// app/page.tsx
import CoffeeShowcase from "@/components/CoffeeShowcase";

export default function Home() {
  return (
    <main className="bg-stone-950 overflow-x-hidden min-h-screen">
      <CoffeeShowcase />
    </main>
  );
}