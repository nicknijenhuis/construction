import * as React from 'react';
import '@/lib/env';

import ContactWidget from '@/components/ContactWidget';

export default function AboutUs() {
  return (
    <main className='max-w-6xl mx-auto px-4 py-4'>
      <div className='flex flex-col md:flex-row gap-8'>
        <div className='md:w-2/3'>
          <h1 className='text-3xl font-bold mb-6'>Over ons</h1>
          <div className='space-y-4'>
            <p>
              Dieteren bouw is een klein ervaren bouwbedrijf dat zich bezig
              houdt met nieuwbouw, verbouw, aanbouw en renovatie. Wij werken
              grotendeels voor particulieren maar ook voor
              woningbouwverenigingen.
            </p>
            <p>
              Wij zijn vooral gespecialiseerd in nieuwbouw, waar we in de meeste
              gevallen in overleg de ruwbouw maken, dit betekent de bouw vanaf
              de fundering tot het dak. Dit is gunstig voor u, omdat u dan de
              afbouw zelf kan regelen waarmee u geld bespaart. Uiteraard kunnen
              we ook de gehele bouw voor u realiseren.
            </p>
            <p>
              Heeft u bouwplannen of bent u van plan uw woning uit te breiden of
              te renoveren, dan willen wij graag uw bouwplan uitvoeren. U kunt
              bij ons een afspraak maken waarbij een vrijblijvende offerte kan
              volgen.
            </p>
            <p>
              Hierna is er een mogelijkheid om de offerte uitgebreid te
              bespreken, zodat we alle onderdelen met de daarbij behorende
              materialen, werkzaamheden en prijzen kunnen onderbouwen. U bepaalt
              zelf welke onderdelen u door ons wilt laten maken, wat u eventueel
              anderen wilt laten maken of wat u zelf wilt doen.
            </p>
            <p>
              U krijgt de tijd om in alle rust over de offerte na te denken. Als
              u akkoord gaat komt er een afrondend gesprek waarin we de start en
              einddatum bespreken.
            </p>
            <p>
              Heeft u verder nog vragen dan kunt u met ons contact opnemen via
              telefoon of{' '}
              <a
                href='mailto:info@dieterenbouw.nl'
                className='text-blue-600 hover:underline'
              >
                e-mail
              </a>
              .
            </p>
          </div>
        </div>
        <div className='md:w-1/3'>
          <ContactWidget />
        </div>
      </div>
    </main>
  );
}
