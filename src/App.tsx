import { useState } from 'react';
import { HomePage } from './components/HomePage';
import { ChildMode } from './components/ChildMode';
import { AdultMode } from './components/AdultMode';

export type Mode = 'home' | 'child' | 'adult';

export default function App() {
  const [mode, setMode] = useState<Mode>('home');

  return (
    <div className="min-h-screen">
      {mode === 'home' && <HomePage onSelectMode={setMode} />}
      {mode === 'child' && <ChildMode onBack={() => setMode('home')} />}
      {mode === 'adult' && <AdultMode onBack={() => setMode('home')} />}
    </div>
  );
}
