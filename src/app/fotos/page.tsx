import Image from 'next/image';
import * as React from 'react';

import ContactWidget from '@/components/ContactWidget';

export default function PhotosPage() {
  const images = [
    { src: 'Eijsden.jpg', title: 'Eijsden' },
    { src: 'Eijsden2.jpg', title: 'Eijsden' },
    { src: 'Eijsden3.jpg', title: 'Eijsden' },
    { src: 'Eijsden4.jpg', title: 'Eijsden' },
    { src: 'Heijenrath.jpg', title: 'Heijenrath' },
    { src: 'home.jpg', title: 'Boskriek Brunssum' },
    { src: 'home2.jpg', title: 'Boskriek Brunssum' },
    { src: 'Kerkstraat.jpg', title: 'Kerkstraat Brunssum' },
    { src: 'Kerkstraat2.jpg', title: 'Kerkstraat Brunssum' },
  ];

  return (
    <main className='max-w-6xl mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-6'>Foto's</h1>
      <div className='flex flex-col md:flex-row gap-8'>
        <div className='md:w-3/4'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {images.map((image, index) => (
              <div key={index} className='flex flex-col'>
                <div className='aspect-w-1 aspect-h-1 mb-2'>
                  <Image
                    src={`/images/${image.src}`}
                    alt={image.title}
                    width={400}
                    height={400}
                    className='rounded-lg object-cover'
                  />
                </div>
                <h3 className='text-lg font-semibold text-center'>
                  {image.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
        <div className='md:w-1/4'>
          <ContactWidget />
        </div>
      </div>
    </main>
  );
}
