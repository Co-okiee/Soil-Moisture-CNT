import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const AboutPage = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  const teamMembers = [
    {
      name: "Wade Warren",
      role: "Attorney",
      img: "https://via.placeholder.com/150",
      description: "Specializes in corporate law with 10+ years of experience.",
    },
    {
      name: "Jerome Bell",
      role: "Attorney",
      img: "https://via.placeholder.com/150",
      description: "Expert in real estate law and legal consultation.",
    },
    {
      name: "Arlene McCoy",
      role: "Attorney",
      img: "https://via.placeholder.com/150",
      description: "Focused on criminal defense and civil rights cases.",
    },
    {
      name: "Savannah Nguyen",
      role: "Attorney",
      img: "https://via.placeholder.com/150",
      description: "Provides legal support for startups and SMEs.",
    },
    {
      name: "Guy Hawkins",
      role: "Attorney",
      img: "https://via.placeholder.com/150",
      description: "Known for expertise in intellectual property law.",
    },
    {
      name: "Kathryn Murphy",
      role: "Attorney",
      img: "https://via.placeholder.com/150",
      description: "Specializes in family law and mediation services.",
    },
    {
      name: "Jacob Jones",
      role: "Attorney",
      img: "https://via.placeholder.com/150",
      description: "Provides litigation services and business law solutions.",
    },
    {
      name: "Eleanor Pena",
      role: "Attorney",
      img: "https://via.placeholder.com/150",
      description: "Focused on employment law and workplace compliance.",
    },
    // {
    //   name: "Cameron Williamson",
    //   role: "Attorney",
    //   img: "https://via.placeholder.com/150",
    //   description: "Offers consultation on tax law and estate planning.",
    // },
  ];

  return (
    <>
      <section className="dark:text-white py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Let’s Meet Our Team</h2>
          <p className="text-lg max-w-xl mx-auto">
            Get the proper legal consultation from Legal Wizard. We are here to
            consult you as per your business needs.
          </p>
        </div>

        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4"
                data-aos="fade-up"
              >
                <div className="bg-white text-black rounded-lg shadow-lg p-6">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{member.role}</p>
                  <p className="text-sm text-gray-500">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
