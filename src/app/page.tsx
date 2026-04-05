import Header from '@/components/Layout/Header';
import FlowCanvas from '@/components/Mindmap/FlowCanvas';

export default function Home() {
  return (
    <main className="flex flex-col h-screen w-screen relative">
      <Header />
      <div className="pt-16 h-full w-full">
        <FlowCanvas />
      </div>
    </main>
  );
}