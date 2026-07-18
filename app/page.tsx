// app/page.tsx
import CoffeeShowcase from "@/components/CoffeeShowcase";

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-950 text-stone-100 selection:bg-emerald-800">
      <CoffeeShowcase />
    </main>
  );
}