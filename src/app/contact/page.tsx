'use client';

import * as React from 'react';
import '@/lib/env';

import ContactWidget from '@/components/ContactWidget';

export default function HomePage() {
  return (
    <main>
      <section className='bg-white'>
        <div className='layout relative py-2'>
          <ContactWidget />
        </div>
      </section>
    </main>
  );
}
