import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section className="bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          {/* Left Side - Image */}
          <div className="relative w-full lg:w-1/2">
            <div className="relative mx-auto max-w-md">
              {/* Main Image */}
              <div className="relative z-10 overflow-hidden rounded-lg shadow-lg">
                <img
                  src="https://img.freepik.com/free-photo/doctor-nurses-special-equipment_23-2148980721.jpg"
                  alt="Medical staff discussing patient care"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Decorative element */}
              <div className="absolute -z-10 -top-4 -left-4 h-full w-full rounded-lg bg-secondary opacity-10" />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="w-full lg:w-1/2">
            <span className="mb-2 inline-block text-sm font-medium uppercase tracking-wider text-secondary">
              About 
            </span>
            <h2 className="mb-6 text-3xl font-bold text-primary md:text-4xl">
              Our Best Services & Popular Treatment Here.
            </h2>
            <p className="mb-8 text-gray-600">
              For more than 10 years, we have been delivering innovative medical services focused on individual patient needs. We combine traditional healthcare approaches with cutting-edge medical technologies to provide comprehensive treatment options.
            </p>

            {/* Services List */}
            <div className="mb-8">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="flex items-start gap-2">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-secondary" />
                  <div>
                    <h4 className="font-semibold text-primary">Patient Experience</h4>
                    <p className="text-sm text-gray-600">Personalized care focused on comfort and satisfaction.</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-secondary" />
                  <div>
                    <h4 className="font-semibold text-primary">Medical Patient Department</h4>
                    <p className="text-sm text-gray-600">Specialized units for focused treatment.</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-secondary" />
                  <div>
                    <h4 className="font-semibold text-primary">Emergency Treatment</h4>
                    <p className="text-sm text-gray-600">24/7 emergency care by skilled professionals.</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-secondary" />
                  <div>
                    <h4 className="font-semibold text-primary">Modern Equipment</h4>
                    <p className="text-sm text-gray-600">State-of-the-art medical equipment for accurate diagnosis.</p>
                  </div>
                </div>
              </div>
            </div>

            <Link
              to="/about"
              className="inline-flex rounded-md bg-secondary px-6 py-3 font-medium text-primary transition-colors hover:bg-opacity-90"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
