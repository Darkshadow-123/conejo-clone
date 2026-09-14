import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Empathy from "../components/sections/Empathy";
import WhoWeHelp from "../components/sections/WhoWeHelp";
import PhotoStatement from "../components/sections/PhotoStatement";
import AreasOfExpertise from "../components/sections/AreasOfExpertise";
import HowWeWork from "../components/sections/HowWeWork";
import OurOffice from "../components/sections/OurOffice";
import Honoring from "../components/sections/Honoring";
import Specialties from "../components/sections/Specialties";
import FAQs from "../components/sections/FAQs";
import ScheduleAppointment from "../components/sections/ScheduleAppointment";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Empathy />
        <WhoWeHelp />
        <PhotoStatement />
        <AreasOfExpertise />
        <HowWeWork />
        <OurOffice />
        <Honoring />
        <Specialties />
        <FAQs />
        <ScheduleAppointment />
      </main>
      <Footer />
    </>
  );
}
