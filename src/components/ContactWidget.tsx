import React from 'react';

const ContactWidget: React.FC = () => {
  return (
    <div className='bg-gray-100 p-6 rounded-lg shadow-md'>
      <h2 className='text-2xl font-bold mb-4'>Contact</h2>
      <p className='font-semibold'>Ferdie Dieteren</p>
      <ul className='mt-2 space-y-1'>
        <li>
          <strong>E-mail:</strong>{' '}
          <a
            href='mailto:info@dieterenbouw.nl'
            className='text-blue-600 hover:underline'
          >
            info@dieterenbouw.nl
          </a>
        </li>
        <li>
          <strong>Mobiel:</strong>{' '}
          <a href='tel:+31655886869' className='text-blue-600 hover:underline'>
            +31 6 55 88 68 69
          </a>
        </li>
        <li>
          <strong>Telefoon:</strong>{' '}
          <a href='tel:045527233' className='text-blue-600 hover:underline'>
            045 527 23 39
          </a>
        </li>
        <li>
          <strong>FAX:</strong> 045 527 23 39
        </li>
      </ul>
      <div className='mt-4'>
        <p>
          <strong>KVK nr.:</strong> 52981657
        </p>
        <p>
          <strong>btw nr.:</strong> NL850695454B01
        </p>
      </div>
      <div className='mt-4'>
        <h3 className='font-semibold'>Adres:</h3>
        <p>Boskriek 3</p>
        <p>6444DK Brunssum</p>
      </div>
    </div>
  );
};

export default ContactWidget;
