import React from 'react';

import { NextPage, Metadata } from 'next';
import { Footer } from '@/components/custom';
import { Manifesto } from '@/features/landing/components';
import { ResizableNavbar } from '@/components/ui/resizable-navbar';

export const metadata: Metadata = {
  title: 'Manifesto - Emma AI Therapist | Mental Health Revolution',
  description:
    'Our mission to revolutionize mental healthcare through AI. Learn why traditional therapy needs transformation and how Emma is leading the change.',
};

const ManifestoPage: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <ResizableNavbar showNavItems={false} />

      <main className="flex flex-1 flex-col">
        <Manifesto />
      </main>

      <Footer />
    </div>
  );
};

export default ManifestoPage;
