
'use client';
import React from 'react';
import { signIn } from 'next-auth/react';
import Image from 'next/image';

function Login() {
  return (
      <div className='bg-[#11a37f] h-screen flex flex-col items-center justify-center text-center'>
          <Image
              src='https://links.papareact.com/2i6'
              width={300}
              height={300}
              alt='logo'
          />
    </div>
  )
}

export default Login