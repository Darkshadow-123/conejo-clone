import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import Empathy from "../components/sections/Empathy";
import WhoWeHelp from "../components/sections/WhoWeHelp";
import PhotoStatement from "../components/sections/PhotoStatement";
import AreasOfExpertise from "../components/sections/AreasOfExpertise";
import HowWeWork from "../components/sections/HowWeWork";
import Honoring from "../components/sections/Honoring";
import Specialties from "../components/sections/Specialties";
import ScheduleAppointment from "../components/sections/ScheduleAppointment";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Empathy />
        <WhoWeHelp />
        <PhotoStatement />
        <AreasOfExpertise />
        <HowWeWork />
        <Honoring />
        <Specialties />
        <ScheduleAppointment />
      </main>
      <Footer />
    </>
  );
}
