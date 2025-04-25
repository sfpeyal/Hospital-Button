import { Phone, Users, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceCardSection = () => {
  return (
    <section className="my-12 px-4 md:my-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {/* Contact Card */}
          <div className="rounded-lg bg-secondary p-6 text-primary shadow-lg">
            <h3 className="mb-2 text-xl font-semibold">Don't Hesitate To Contact Us</h3>
            <Link
              to="/appointment"
              className="mt-4 inline-block rounded-md bg-primary px-4 py-2 text-white transition-colors hover:bg-opacity-90"
            >
              Make Appointment
            </Link>
          </div>

          {/* Family Health Card */}
          <div className="rounded-lg bg-primary p-6 text-white shadow-lg">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-primary">
              <Users size={24} />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Need Family Health</h3>
            <p className="mb-4 text-sm text-gray-300">
              We provide comprehensive care for your entire family with personalized treatment plans.
            </p>
          </div>

          {/* 24 Hours Service Card */}
          <div className="rounded-lg bg-secondary p-6 text-primary shadow-lg">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white">
              <Clock size={24} />
            </div>
            <h3 className="mb-2 text-xl font-semibold">24 Hours Service</h3>
            <p className="mb-4 text-sm">
              Our healthcare services are available 24 hours a day. Our doctors will take care of you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCardSection;
