'use client';
import { Button } from '@carbon/react';
import TutorialHeader from '@/components/TutorialHeader/TutorialHeader';

export default function Page() {
  return (
    <>
      <TutorialHeader />
      <main style={{ padding: '2rem' }}>
        <Button>Button</Button>
      </main>
    </>
  );
}
