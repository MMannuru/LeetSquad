import Header from './components/Header';
import Leaderboard from './components/Leaderboard';
import Footer from './components/Footer';
import DSAIconsBackground from './components/DSAIconsBackground';
import ParticlesBackground from './components/ParticlesBackground';

export default function Home() {
  return (
    <main className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="pointer-events-none fixed inset-0 z-0 animate-gradient-move bg-gradient-to-br from-yellow-900/30 via-black/80 to-orange-900/30 blur-2xl opacity-80" />
      <ParticlesBackground />
      <DSAIconsBackground />
      <div className="relative z-10">
        <Header />
        <Leaderboard />
        <Footer />
      </div>
    </main>
  );
}
