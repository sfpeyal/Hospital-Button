import { Eye, Stethoscope, Microscope, Heart, Scissors } from 'lucide-react';
import { Link } from 'react-router-dom';

// Service card type definition
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

// Service card component
const ServiceCard = ({ icon, title, description, link }: ServiceCardProps) => (
  <div className="flex h-full flex-col rounded-lg bg-background p-6 shadow-sm transition-transform hover:-translate-y-1">
    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/20 text-secondary">
      {icon}
    </div>
    <h3 className="mb-3 text-xl font-semibold text-primary">{title}</h3>
    <p className="mb-6 flex-grow text-sm text-gray-600">{description}</p>
    <Link
      to={link}
      className="mt-auto inline-block text-sm font-medium text-secondary hover:underline"
    >
      Read More
    </Link>
  </div>
);

const ServiceGrid = () => {
  // Services data
  const services = [
    {
      id: "eye-care",
      icon: <Eye size={24} />,
      title: "Eye Care",
      description: "Comprehensive vision care, including eye exams and treatment for various eye conditions.",
      link: "/services/eye-care"
    },
    {
      id: "medical-checkup",
      icon: <Stethoscope size={24} />,
      title: "Medical Checkup",
      description: "Thorough health examinations to assess your overall health and address any medical concerns.",
      link: "/services/medical-checkup"
    },
    {
      id: "dental-care",
      icon: <Scissors size={24} />,
      title: "Dental Care",
      description: "Top-tier preventative dentistry, restorative services, and cosmetic dental procedures.",
      link: "/services/dental-care"
    },
    {
      id: "laboratory",
      icon: <Microscope size={24} />,
      title: "Laboratory Service",
      description: "State-of-the-art clinical testing to help diagnose and treat various medical conditions.",
      link: "/services/laboratory"
    },
    {
      id: "patient-care",
      icon: <Heart size={24} />,
      title: "Patient-Centered",
      description: "Focused on patient needs with personalized care plans tailored to your unique health profile.",
      link: "/services/patient-care"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <span className="mb-2 inline-block text-sm font-medium uppercase tracking-wider text-secondary">
            Medical Services
          </span>
          <h2 className="text-3xl font-bold text-primary md:text-4xl">
            We're Providing Best Services.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
              link={service.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;
