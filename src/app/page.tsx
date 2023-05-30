'use client';
import { TheHome } from '@/components/TheHome';
import { Contact } from '@/components/Contact';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';
import { TheFooter } from '@/components/TheFooter';
import { TheHeader } from '@/components/TheHeader';
import { ThemeProvider } from 'next-themes';

export default function App() {
  return (
    <main>
          <ThemeProvider enableSystem={true} attribute='class'>
            <TheHeader />
            <div id='TheHome'><TheHome /></div>
            <Contact />
            <div id='Projects'><Projects /></div>
            <div id='Skills'><Skills /></div>
            <TheFooter />
          </ThemeProvider>
    </main>
  )
}
