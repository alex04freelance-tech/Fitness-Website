import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Philosophy } from '@/components/Philosophy';
import { ClassExplorer } from '@/components/ClassExplorer';
import { SignaturePrograms } from '@/components/SignaturePrograms';
import { Schedule } from '@/components/Schedule';
import { Trainers } from '@/components/Trainers';
import { PersonalTraining } from '@/components/PersonalTraining';
import { TheClub } from '@/components/TheClub';
import { FacilityExplorer } from '@/components/FacilityExplorer';
import { Membership } from '@/components/Membership';
import { TrialForm } from '@/components/TrialForm';
import { Location } from '@/components/Location';
import { Footer } from '@/components/Footer';

function App() {
  useSmoothScroll();

  return (
    <div className="bg-ivory text-charcoal">
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <ClassExplorer />
        <SignaturePrograms />
        <Schedule />
        <Trainers />
        <PersonalTraining />
        <TheClub />
        <FacilityExplorer />
        <Membership />
        <TrialForm />
        <Location />
      </main>
      <Footer />
    </div>
  );
}

export default App;
