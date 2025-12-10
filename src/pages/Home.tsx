import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Heart, Eye, Shield } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import heroImage from '../assets/hero.png';
import impactImage from '../assets/impact.png';



const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.2 } },
  viewport: { once: true }
};

export function Home() {
  const cards = [
    {
      icon: Heart,
      title: 'Mission',
      description: 'To empower and rehabilitate persons with disabilities.',
      color: '#6D00C0',
    },
    {
      icon: Eye,
      title: 'Vision',
      description: 'To see people with disabilities participating fully in social and economic life.',
      color: '#F4FF05',
    },
    {
      icon: Shield,
      title: 'Values',
      description: 'Equality, Integrity, Empathy, Accountability, Transparency.',
      color: '#6D00C0',
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Text */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-block px-4 py-2 bg-[#F4FF05] rounded-full">
                <span className="text-[#6D00C0]">Arise and Shine</span>
              </div>
              <h1 className="text-[#6D00C0]">
                Empowering Children Living with Disabilities
              </h1>
              <p className="text-gray-600 leading-relaxed">
                Double Portion Organization is a non-profit, non-governmental organization dedicated to improving the lives of children and adults living with disabilities through care, empowerment, education, and social inclusion.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-[#6D00C0] cursor-pointer text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-all flex items-center justify-center"
                >
                  Donate Now
                </Link>
                <Link to="/about" 
                className="cursor-pointer border-2 border-[#6D00C0] text-[#6D00C0] px-8 py-3 rounded-full hover:bg-[#6D00C0] hover:text-white transition-all flex items-center justify-center"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={heroImage}
                  alt="Double Portion Organization team members celebrating together"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#F4FF05] rounded-full opacity-50 -z-10"></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#6D00C0] rounded-full opacity-20 -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Info Cards Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {cards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white p-8 rounded-2xl border-2 border-gray-100 hover:border-[#6D00C0] hover:shadow-xl transition-all"
                >
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                    style={{
                      backgroundColor: card.color === '#F4FF05' ? '#F4FF05' : '#6D00C0',
                    }}
                  >
                    <Icon
                      size={32}
                      style={{
                        color: card.color === '#F4FF05' ? '#6D00C0' : 'white',
                      }}
                    />
                  </div>
                  <h3 className="text-[#6D00C0] mb-4">{card.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{card.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-[#6D00C0] mb-4">Our Impact</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Together, we're building a more inclusive Zimbabwe where everyone has the opportunity to thrive.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl overflow-hidden shadow-xl"
            >
              <img
                src={impactImage}
                alt="Double Portion Organization team with children and beneficiaries"
                className="w-full h-[400px] object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h3 className="text-[#6D00C0]">Making a Difference</h3>
              <p className="text-gray-600 leading-relaxed">
                Since our founding in 2014, we've been committed to creating lasting change in the lives of persons with disabilities across Zimbabwe.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Through education, advocacy, and direct support, we're helping individuals and families discover their full potential and participate actively in their communities.
              </p>
              <Link to='about' className="cursor-pointer bg-[#F4FF05] text-[#6D00C0] px-8 py-3 rounded-full hover:bg-[#6D00C0] hover:text-white transition-all">
                Read Our Story
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp} className="space-y-8">
            <h2 className="text-[#6D00C0]">Join Us in Making a Difference</h2>
            <p className="text-gray-600 leading-relaxed">
              Your support can transform lives. Together, we can create a more inclusive and compassionate society.
            </p>
            <Link to='contact' className="bg-[#6D00C0] text-white px-12 py-4 rounded-full hover:bg-opacity-90 transition-all shadow-lg">
              Support Our Cause
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}