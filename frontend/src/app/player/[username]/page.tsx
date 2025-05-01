import PlayerStats from '../../components/PlayerStats';

interface PlayerPageProps {
  params: {
    username: string;
  };
}

export default function PlayerPage({ params }: PlayerPageProps) {
  return (
    <main className="min-h-screen bg-gray-100">
      <PlayerStats username={params.username} />
    </main>
  );
}