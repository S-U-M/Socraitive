import React from 'react';

import { NextPage } from 'next';
import { Manifesto } from '@/features/landing/components';
import { Header, Footer } from '@/components/custom';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Manifesto - Emma AI Therapist | Mental Health Revolution',
  description:
    'Our mission to revolutionize mental healthcare through AI. Learn why traditional therapy needs transformation and how Emma is leading the change.',
};

const ManifestoPage: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Header />

      <main className="flex flex-1 flex-col">
        <Manifesto />
      </main>

      <Footer />
    </div>
  );
};

export default ManifestoPage;
