// src/app/page.tsx
import * as React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import '@fontsource-variable/inter';

import Sidebar from './components/Sidebar';

export default function Home() {
  return (
    <CssVarsProvider disableTransitionOnChange>
      <Sidebar />
      <main className="container mx-auto p-8">
        <header className="text-center my-8">
          <h1 className="text-4xl font-bold">
            Willkommen im gogistischen Kaiserreich
          </h1>
          <p className="text-lg mt-2">
            Offizielles Konferenzblatt & Informationsportal
          </p>
        </header>

        <section className="my-12">
          <h2 className="text-2xl font-semibold mb-4">Neueste Konferenzblätter</h2>
          <div className="flex flex-col gap-4">
            {/* Platzhalter für ein Konferenzblatt */}
            <div className="border p-4 rounded-lg">
              <h3 className="font-bold">Konferenzblatt XIV - Sonderausgabe</h3>
              <p className="my-2">Die Pforten der Konferenz öffnen sich erneut! Lesen Sie hier das offizielle Blatt zur Begrüßung der Titanen.</p>
              <a href="#" className="text-blue-500 hover:underline">
                Jetzt lesen (PDF)
              </a>
            </div>
            {/* Hier könnten weitere Blätter folgen */}
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-2xl font-semibold mb-4">Zukünftige Konferenzen</h2>
          <div className="border p-4 rounded-lg">
            <p>
              Die nächste große Konferenz ist in Planung. Terminvorschläge und
              Themen können bald im internen Bereich eingereicht werden.
            </p>
          </div>
        </section>

        <footer className="text-center mt-12">
          <p>&copy; 2025 - Ministerium für Medienkoordination und Informationsaufklärung</p>
        </footer>
      </main>
    </CssVarsProvider>
  );
}