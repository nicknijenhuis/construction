'use client';

import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import '@/lib/env';

export default function HomePage() {
  return (
    <main className='max-w-4xl mx-auto'>
      <section className='mb-12 flex flex-col md:flex-row gap-8'>
        <div className='md:w-1/2'>
          <h2 className='text-3xl font-bold mb-4'>
            Welkom bij Dieteren Bouwservice
          </h2>
          <p className='mb-4'>
            Dieteren bouw is een klein ervaren bouwbedrijf dat zich bezig houdt
            met nieuwbouw, verbouw, aanbouw en renovatie. Wij werken grotendeels
            voor particulieren maar ook voor woningbouwverenigingen.
          </p>
          <p className='mb-4'>
            Wij zijn vooral gespecialiseerd in nieuwbouw, waar we in de meeste
            gevallen in overleg de ruwbouw maken, dit betekent de bouw vanaf de
            fundering tot het dak. Dit is gunstig voor u, omdat u dan de afbouw
            zelf kan regelen waarmee u geld bespaart. Uiteraard kunnen we ook de
            gehele bouw voor u realiseren.
          </p>
          <Link
            href='/over-ons'
            className='inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors'
          >
            Lees meer
          </Link>
        </div>
        <div className='md:w-1/2 mt-4 md:mt-0'>
          <Image
            src='/images/home.jpg'
            alt='Dieteren Bouw Home'
            width={500}
            height={300}
            className='rounded-lg shadow-md object-cover w-full h-auto'
          />
        </div>
      </section>

      <section className='bg-gray-100 p-6 rounded-lg'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
          <div>
            <h4 className='text-lg font-medium mb-2'>Eijsden</h4>
            <Image
              src='/images/Eijsden.jpg'
              alt='Bouwproject in Eijsden'
              width={300}
              height={200}
              className='w-full h-48 object-cover rounded'
            />
          </div>
          <div>
            <h4 className='text-lg font-medium mb-2'>Brunssum</h4>
            <Image
              src='/images/Kerkstraat.jpg'
              alt='Bouwproject aan Kerkstraat in Brunssum'
              width={300}
              height={200}
              className='w-full h-48 object-cover rounded'
            />
          </div>
          <div>
            <h4 className='text-lg font-medium mb-2'>Eijsden</h4>
            <Image
              src='/images/Eijsden2.jpg'
              alt='Tweede bouwproject in Eijsden'
              width={300}
              height={200}
              className='w-full h-48 object-cover rounded'
            />
          </div>
          <div>
            <h4 className='text-lg font-medium mb-2'>Heijenrath</h4>
            <Image
              src='/images/Heijenrath.jpg'
              alt='Bouwproject in Heijenrath'
              width={300}
              height={200}
              className='w-full h-48 object-cover rounded'
            />
          </div>
        </div>
      </section>
    </main>
  );
}
