import { TheHome } from '@/components/TheHome';
import { Contact } from '@/components/Contact';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';
import { TheFooter } from '@/components/TheFooter';
import { TheHeader } from '@/components/TheHeader';

export default function App() {
  return (
    <main>
          <TheHeader />
          <div id='TheHome'><TheHome /></div>
          <Contact />
          <div id='Projects'><Projects /></div>
        
          <div id='Skills'><Skills /></div>
          <TheFooter />
    </main>
  )
}
