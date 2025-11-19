import ContactAppointment from "../components/ContactForm";
import ContactHero from "../components/ContactHero";

const Contact = () => {
  return (
    <div className="bg-gray-100">
      <ContactHero />
      <ContactAppointment />
    </div>
  );
};

export default Contact;
