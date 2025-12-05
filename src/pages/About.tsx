import { motion } from 'motion/react';
import { Users, BookOpen, Heart, Target } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import aboutHeroImage from '../assets/aboutHero.png';
import ourStoryImage from '../assets/impact.png';
import { Link } from 'react-router-dom';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6 }
};

export function About() {
  const objectives = [
    'Raise morale and self-esteem among persons with disabilities',
    'Provide quality care and support services',
    'Support income generation and economic independence',
    'Promote social inclusion and community participation',
    'Advocate for disability rights and accessibility',
    'Build capacity through education and training',
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="bg-[#6D00C0] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4"
          >
            <h1>About Us</h1>
            <p className="text-gray-200 max-w-2xl mx-auto">
              Empowering lives through compassion, care, and commitment since 2014
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl overflow-hidden shadow-xl"
            >
              <img
                src={aboutHeroImage}
                alt="Double Portion Organization team with beneficiaries at an event"
                className="w-full h-[500px] object-cover"
              />
            </motion.div>

            <motion.div
              {...fadeInUp}
              className="space-y-6"
            >
              <div className="inline-flex items-center space-x-2 bg-[#F4FF05] px-4 py-2 rounded-full">
                <Users size={20} className="text-[#6D00C0]" />
                <span className="text-[#6D00C0]">Who We Are</span>
              </div>
              <h2 className="text-[#6D00C0]">Building a More Inclusive Zimbabwe</h2>
              <p className="text-gray-600 leading-relaxed">
                Double Portion Organization is a non-profit, non-governmental organization committed to transforming the lives of children and adults living with disabilities across Zimbabwe.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We work across Harare, Chitungwiza, and Nyatsime, with plans to expand our reach nationwide. Our comprehensive approach focuses on education, advocacy, care, and empowerment to ensure that persons with disabilities can live with dignity and participate fully in society.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              {...fadeInUp}
              className="space-y-6 order-2 lg:order-1"
            >
              <div className="inline-flex items-center space-x-2 bg-[#F4FF05] px-4 py-2 rounded-full">
                <BookOpen size={20} className="text-[#6D00C0]" />
                <span className="text-[#6D00C0]">Our Story</span>
              </div>
              <h2 className="text-[#6D00C0]">Founded on Love and Determination</h2>
              <p className="text-gray-600 leading-relaxed">
                Double Portion Organization was founded in 2014 in Mutoko by Tande Nyarai, a mother whose personal journey raising a child with cerebral pulse inspired her to create change.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Witnessing firsthand the challenges faced by families caring for children with disabilities, Tande was moved to establish an organization that would provide support, resources, and hope to others walking a similar path.
              </p>
              <p className="text-gray-600 leading-relaxed">
                What began as a grassroots effort in Mutoko has grown into a respected organization serving communities throughout Zimbabwe, touching countless lives and inspiring social change.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl overflow-hidden shadow-xl order-1 lg:order-2"
            >
              <img
                src={ourStoryImage}
                alt="Double Portion Organization team and beneficiaries celebrating together"
                className="w-full h-[500px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-[#F4FF05] px-4 py-2 rounded-full mb-6">
              <Heart size={20} className="text-[#6D00C0]" />
              <span className="text-[#6D00C0]">What We Do</span>
            </div>
            <h2 className="text-[#6D00C0] mb-4">Our Focus Areas</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive support through multiple programs designed to empower and uplift persons with disabilities.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Education',
                description: 'Ensuring access to quality education and learning opportunities for all.',
              },
              {
                title: 'Advocacy',
                description: 'Fighting for disability rights and promoting inclusive policies.',
              },
              {
                title: 'Care',
                description: 'Providing compassionate care and rehabilitation services.',
              },
              {
                title: 'Empowerment',
                description: 'Building skills and confidence for independent living.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow"
              >
                <h3 className="text-[#6D00C0] mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-20 bg-[#6D00C0] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full mb-6">
              <Target size={20} className="text-[#6D00C0]" />
              <span className="text-[#6D00C0]">Our Objectives</span>
            </div>
            <h2 className="mb-4">What We Aim to Achieve</h2>
            <p className="text-gray-200 max-w-2xl mx-auto">
              Our strategic objectives guide every decision we make and every action we take.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {objectives.map((objective, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-2xl border border-white border-opacity-20"
              >
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-[#F4FF05] flex-shrink-0 mt-1"></div>
                  <p className="leading-relaxed text-gray-600">{objective}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp} className="space-y-8">
            <h2 className="text-[#6D00C0]">Be Part of Our Story</h2>
            <p className="text-gray-600 leading-relaxed">
              Together, we can continue to expand our reach and deepen our impact. Join us in creating a more inclusive Zimbabwe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to='contact' className="bg-[#6D00C0] text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-all">
                Donate Now
              </Link>
              <Link to='contact' className="bg-[#F4FF05] text-[#6D00C0] px-8 py-3 rounded-full hover:bg-opacity-90 transition-all">
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}