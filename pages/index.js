import Head from 'next/head';
import { AiFillLinkedin, AiFillMediumCircle, AiFillGithub,AiFillDribbbleCircle} from 'react-icons/ai';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { useState } from 'react';
import { motion, Variants, Transition, AnimationControls } from 'framer-motion';
import Image from 'next/image';
import code from '../public/code.png';
import my from '../public/my.png';
import icon from '../public/icon.png';
import pro1 from '../public/pro1.png';
import F4 from '../public/F4.png';
import F2 from '../public/F2.png';
import dp6 from '../public/dp6.png';
import emailjs from 'emailjs-com';
import { AiFillCode, AiOutlineTool } from 'react-icons/ai';
import { DiDatabase } from 'react-icons/di';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };
  
    try {
      await emailjs.send('service_b1t0rrb', 'template_yadsh0e', templateParams, 'qIglSiKAeBByemKdu');
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send message. Please try again later.');
    }
  };
  // Define the animation for each letter
const letterAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

// Define the container animation to stagger the letters
const containerAnimation = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}; 

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};
const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};
const containerAnimation1 = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const letterAnimation1 = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const navVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};


return (
  <div className={darkMode ? 'dark' : ''}>
    <Head>
      <title>Nipuni S</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/icon.png" />
    </Head>
    <main className="px-4 bg-white sm:px-6 md:px-10 lg:px-20 xl:px-40 dark:bg-gray-900">
      <motion.section  
        className="min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.nav 
  className="sticky top-0 z-50 flex flex-row items-center justify-between px-6 py-4 mb-12 bg-white dark:bg-gray-900 dark:text-white">
  <div className="flex items-center">
    <h1 className="text-lg md:text-xl font-burtons">developedbyns</h1>
  </div>
  <div className="flex items-center space-x-4">
    <li>
      <BsFillMoonStarsFill
        onClick={() => setDarkMode(!darkMode)}
        className="text-xl cursor-pointer md:text-2xl"
      />
    </li>
    <li>
      <a
        className="px-3 py-2 text-white rounded-md md:px-4 md:py-3 bg-gradient-to-r from-cyan-700 to-teal-700 hover:from-teal-700 hover:to-cyan-700"
        href="/Nipuni_Sathsara.pdf" 
        download
      >
        Resume
      </a>
    </li>
  </div>
</motion.nav>

{/*Name section */}
  <motion.div
  id='home'
  className="p-10 text-center"
  initial="hidden"
  whileInView="visible"
  variants={containerAnimation}
>
  <h2 className="py-2 text-4xl font-medium text-teal-600 md:text-5xl lg:text-6xl dark:text-teal-400">
    {Array.from("Nipuni S Ranathunga").map((letter, index) => (
      <motion.span key={index} variants={letterAnimation}>
        {letter}
      </motion.span>
    ))}
  </h2>

  <h3 className="py-2 text-2xl md:text-3xl dark:text-white">Undergraduate</h3>
  <p className="max-w-lg py-5 mx-auto leading-8 text-gray-800 text-medium md:text-xl dark:text-gray-200">
    BSc Hons in Information Technology & Management.
    <br /> University of Moratuwa.
  </p>
</motion.div>
{/* Social Links */}
<motion.div 
  className="flex justify-center gap-8 py-3 text-4xl text-gray-600 md:gap-12 lg:gap-16 md:text-5xl dark:text-gray-400"
  initial={{ scale: 0 }}
  whileInView={{ scale: 1 }}
  transition={{ duration: 0.5, delay: 0.8 }}
>
  <a href="https://www.linkedin.com/in/nipuni-s-ranathunga/" target="_blank" rel="noopener noreferrer">
    <AiFillLinkedin className="transition-transform transform hover:scale-110" />
  </a>
  <a href="https://github.com/nipunisr" target="_blank" rel="noopener noreferrer">
    <AiFillGithub className="transition-transform transform hover:scale-110" />
  </a>
  <a href="https://medium.com/@sathsaranipuni11" target="_blank" rel="noopener noreferrer">
    <AiFillMediumCircle className="transition-transform transform hover:scale-110" />
  </a>
  <a href="https://dribbble.com/NipuniS" target="_blank" rel="noopener noreferrer">
    <AiFillDribbbleCircle className="transition-transform transform hover:scale-110" />
  </a>
</motion.div>
        {/* About Me Section */}
  <motion.section 
  className="flex items-center justify-center my-20"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  <div className="text-center">
    <h3 className="py-1 mb-10 font-semibold text-teal-600 lg:text-5xl md:text-4xl dark:text-teal-400">About Me</h3>
    <motion.div 
  className="relative w-32 h-32 mx-auto mt-10 overflow-hidden rounded-full bg-gradient-to-b from-teal-500 md:h-64 md:w-64"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 1, delay: 0.5 }}
>
<Image
  src="/_next/static/media/dp6.575a1160.png"
  alt="Mypic"
  fill
  sizes="100vw"
  style={{ objectFit: 'cover' }}
/>
</motion.div>
    <p className="py-2 mt-8 leading-8 text-gray-800 text-md md:text-xl dark:text-gray-200">
      Hello! I&apos;m Nipuni Sathsara Ranathunga, an Information Technology & Management student at the University of Moratuwa with a love for coding and design.
    </p>
    <p className="py-2 leading-8 text-gray-800 text-md md:text-xl dark:text-gray-200">
      My journey in IT has equipped me with skills in various programming languages and design tools, allowing me to create engaging and efficient digital experiences.
    </p>
  </div>
</motion.section>

        {/* Education Section */}
<section id="education" className='my-20'>
  <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
    <div>
      <h3 className="py-1 mb-10 font-semibold text-teal-600 lg:text-5xl md:text-4xl dark:text-teal-400">Education</h3>
      <div className="relative mt-10 ml-4">
        <div className="border-l-4 border-teal-500">
          {/* Educational Entries */}
          <motion.div 
            className="mb-8 ml-4"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
          >
            <div className="flex items-center mb-1">
              <div className="w-2 h-2 mr-2 bg-teal-500 rounded-full"></div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">BSc Hons in Information Technology & Management</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-400">University of Moratuwa (2022 - Present)</p>
          </motion.div>
          <motion.div 
            className="mb-8 ml-4"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
          >
            <div className="flex items-center mb-1">
              <div className="w-2 h-2 mr-2 bg-teal-500 rounded-full"></div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">G.C.E. Advance Level &apos;2020&apos;</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-400">R/Sivali Central College, Ratnapura<br />Stream: Commerce<br />Z Score: 1.8755</p>
          </motion.div>
          <motion.div 
            className="mb-8 ml-4"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
          >
            <div className="flex items-center mb-1">
              <div className="w-2 h-2 mr-2 bg-teal-500 rounded-full"></div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">G.C.E. Ordinary Level-2017</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-400">R/Gamini Central College, Kalawana<br />9 A&apos;s including ICT, Commerce & Music</p>
          </motion.div>
        </div>
      </div>
    </div>

    <div>
      <h3 className="py-1 mb-10 font-semibold text-teal-600 lg:text-5xl md:text-4xl dark:text-teal-400">Experience</h3>
      <div className="relative mt-10 ml-4">
        <div className="border-l-4 border-teal-500">
          {/* Experience Entries */}
          <motion.div 
            className="mb-8 ml-4"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
          >
            <div className="flex items-center mb-1">
              <div className="w-2 h-2 mr-2 bg-teal-500 rounded-full"></div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Intern</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-400">Peoples Bank (2021 - 2022)</p>
            <ul className="mt-2 text-gray-600 list-disc list-inside dark:text-gray-400">
              <li>Enhanced problem-solving abilities by quickly identifying and addressing issues</li>
              <li>Collaborated with colleagues to achieve team goals.</li>
            </ul>
          </motion.div>
          <motion.div 
            className="mb-8 ml-4"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
          >
            <div className="flex items-center mb-1">
              <div className="w-2 h-2 mr-2 bg-teal-500 rounded-full"></div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Customer Outreach Executive</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-400">StageYou.Inc (2023)</p>
            <ul className="mt-2 text-gray-600 list-disc list-inside dark:text-gray-400">
              <li>Analyzing customer data to identify trends & preferences</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  </div>
</section>

        <motion.section
        id="projects"
        className='flex items-center justify-center my-10'
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
      >
        <div className='text-center'>
          <h3 className="py-1 mb-10 font-semibold text-teal-600 lg:text-5xl md:text-4xl dark:text-teal-400">Projects</h3>
          <p className="py-2 leading-8 text-gray-800 text-md md:text-xl dark:text-gray-200">
            Throughout my journey in the world of technology and design, I have had the opportunity to work on a variety of projects that have honed my skills and expanded my knowledge.
          </p>
        </div>
      </motion.section>

      <section>
      <motion.div
        className="gap-10 lg:flex"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
      >
        <motion.div
          className="p-10 my-10 text-center transition duration-500 transform shadow-lg rounded-xl dark:bg-white hover:bg-teal-100 hover:scale-105 dark:hover:bg-teal-100"
          variants={cardVariants}
        >
          <Image src={pro1} width={100} height={100} alt="Nipuni S Ranathunga"/>
          <h3 className="pt-8 pb-2 text-lg font-medium">Rooftop Automated Green House (Group)</h3>
          <p>
            Design an efficient greenhouse with Automatic Water Tank Filling System, Automated Plant Irrigation, Rooftop Surface Water Flow, Custom Curtain System, Humidity and Temperature Monitoring and Displaying in real-time.
          </p>
          <h4 className="py-4 text-teal-600">Contribution</h4>
          <p className="py-1 text-gray-800">Automatic Water-Tank Filling System</p>
          <h4 className="py-4 text-teal-600">Technologies I Used</h4>
          <p className="py-1 text-gray-800">C++</p>
          <p className="py-1 text-gray-800">Arduino</p>
          <p className="py-1 text-gray-800">Proteus</p>
        </motion.div>
        <motion.div
          className="p-10 my-10 text-center transition duration-500 transform shadow-lg rounded-xl dark:bg-white hover:bg-teal-100 hover:scale-105 dark:hover:bg-teal-100"
          variants={cardVariants}
        >
          <Image src={code} width={100} height={100} alt="Nipuni S Ranathunga"/>
          <h3 className="pt-8 pb-2 text-lg font-medium">Event Management System (Group)</h3>
          <p>
            Enable organizers to manage events effectively and attendees to connect with events. This system features event registration, ticket purchasing, personalized profiles, secure payment capabilities, reporting system and real-time chat.
          </p>
          <h4 className="py-4 text-teal-600">Contribution</h4>
          <p className="py-1 text-gray-800">Ticket Management</p>
          <h4 className="py-4 text-teal-600">Technologies I Used</h4>
          <p className="py-1 text-gray-800">React</p>
          <p className="py-1 text-gray-800">Node.js</p>
          <p className="py-1 text-gray-800">MySQL</p>
        </motion.div>
      </motion.div>
    </section>
      {/*Skills*/}
      <section id="skills" className="my-20">
      <motion.div
        className="text-center"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
      >
        <h3 className="py-1 mb-10 font-semibold text-teal-600 lg:text-5xl md:text-4xl dark:text-teal-400">Skills</h3>
        <p className="py-2 leading-8 text-gray-800 text-md md:text-xl dark:text-gray-200">
          My skill set spans across various programming languages and design tools.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 gap-8 mt-10 md:grid-cols-3">
        {/* Frontend Card */}
        <motion.div
          className="p-6 text-center transition duration-500 transform shadow-lg rounded-xl dark:bg-white hover:scale-105 hover:bg-teal-100 dark:hover:bg-teal-100"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
        >
          <div className="flex justify-center mb-4 text-4xl text-teal-600">
            <AiFillCode />
          </div>
          <h4 className="pb-2 text-lg font-medium text-teal-600">Frontend</h4>
          <p className="text-gray-800 dark:text-gray-600">HTML<br /> CSS <br /> JavaScript<br /> React</p>
        </motion.div>

        {/* Backend Card */}
        <motion.div
          className="p-6 text-center transition duration-500 transform shadow-lg rounded-xl dark:bg-white hover:scale-105 hover:bg-teal-100 dark:hover:bg-teal-100"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
        >
          <div className="flex justify-center mb-4 text-4xl text-teal-600">
            <DiDatabase />
          </div>
          <h4 className="pb-2 text-lg font-medium text-teal-600">Backend</h4>
          <p className="text-gray-800 dark:text-gray-600">Node.js<br /> Express<br /> MySQL</p>
        </motion.div>

        {/* Tools Card */}
        <motion.div
          className="p-6 text-center transition duration-500 transform shadow-lg rounded-xl dark:bg-white hover:scale-105 hover:bg-teal-100 dark:hover:bg-teal-100"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
        >
          <div className="flex justify-center mb-4 text-4xl text-teal-600">
            <AiOutlineTool />
          </div>
          <h4 className="pb-2 text-lg font-medium text-teal-600">Tools</h4>
          <p className="text-gray-800 dark:text-gray-600">Git<br /> Figma<br /> VSCode</p>
        </motion.div>
      </div>
    </section>    
        {/* Designs Section */}
        <section id="designs" className='flex items-center justify-center my-10'>
          <motion.div 
          className='text-center'
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}>
         
            <h3 className="py-1 mb-10 font-semibold text-teal-600 lg:text-5xl md:text-4xl dark:text-teal-400">My Designs</h3>
            <p className="py-2 leading-8 text-gray-800 text-md md:text-xl dark:text-gray-200">
              My passion for design has led me to create numerous projects, each one challenging me to push the boundaries of creativity and functionality.
            </p>
          </motion.div>
        </section>

        <section>
      <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
      <motion.div
  className="flex-1 basis-1/3"
  initial="hidden"
  whileInView="visible"
  variants={imageVariants}
>
  <Image
    className="object-cover w-full h-auto rounded-lg"
    src={F2}
    alt="Design 1"
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    width={500}  // Set an appropriate base width
    height={300} 
  />
</motion.div>
<motion.div
  className="flex-1 basis-1/4"
  initial="hidden"
  whileInView="visible"
  variants={imageVariants}
>
  <Image
    className="object-cover w-full h-auto rounded-lg"
    src={my}
    alt="Design 2"
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    width={500}  // Set an appropriate base width
    height={300}
  />
</motion.div>
<motion.div
  className="flex-1 basis-1/3"
  initial="hidden"
  whileInView="visible"
  variants={imageVariants}
>
  <Image
    className="object-cover w-full h-auto rounded-lg"
    src={F4}
    alt="Design 3"
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    width={500}  // Set an appropriate base width
    height={300}
  />
</motion.div>
      </div>
    </section>

        
       {/* Contact Me Section */}
<section id="contact" className='my-20'>
  <div className="flex flex-col items-center justify-center px-4 sm:px-6 md:px-10">
    {/* Contact Form */}
    <div className='w-full mx-auto mb-10 text-center md:w-2/3 lg:w-1/2'>
      <h3 className="py-1 mb-10 font-semibold text-teal-600 lg:text-5xl md:text-4xl dark:text-teal-400">Contact Me</h3>
      <motion.form 
        onSubmit={handleSubmit} 
        className="flex flex-col"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        <motion.input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className="p-2 mb-4 border border-gray-300 rounded"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
        />
        <motion.input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="p-2 mb-4 border border-gray-300 rounded"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
        />
        <motion.input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Subject"
          className="p-2 mb-4 border border-gray-300 rounded"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
        />
        <motion.textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          className="p-2 mb-4 border border-gray-300 rounded"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
        />
        <button
          type="submit"
          className="px-4 py-3 text-lg text-white bg-teal-500 rounded hover:bg-teal-600 md:text-xl"
        >
          Send
        </button>
      </motion.form>
    </div>

    {/* Contact Information */}
    <div className='w-full text-center md:w-1/2'>
    <p className="text-sm leading-7 text-gray-800 dark:text-gray-200 sm:text-base md:text-lg lg:text-xl md:leading-8">
  <strong>Email : </strong> 
  <a 
    href="mailto:ranathungakns@gmail.com" 
    className="text-gray-800 hover:underline dark:text-gray-200"
  >
    ranathungakns@gmail.com
  </a>
</p>

      <p className="text-sm leading-7 text-gray-800 dark:text-gray-200 sm:text-base md:text-lg lg:text-xl md:leading-8">
        <strong>Address :</strong> Katubedda, Moratuwa
      </p>
      <p className="text-sm leading-7 text-gray-800 dark:text-gray-200 sm:text-base md:text-lg lg:text-xl md:leading-8">
  <strong>Mobile : </strong> 
  <a 
    href="tel:+94715151853" 
    className="text-gray-800 dark:text-gray-200 hover:underline"
  >
    +94 71 515 1853
  </a>
</p>
    </div>
  </div>
</section>

        {/* Footer */}
        <footer className="py-6 text-center text-gray-600 bg-white dark:bg-gray-900 dark:text-gray-400">
          <div className="container mx-auto">
            <p>&copy; 2024 Nipuni S Ranathunga. All rights reserved.</p>
            <p>
              Follow me on{' '}
              <a href="https://www.linkedin.com/in/nipuni-s-ranathunga/" className="text-teal-600 hover:text-teal-400">LinkedIn</a>,{' '}
              <a href="https://github.com/nipunisr" className="text-teal-600 hover:text-teal-400">GitHub</a>,{' '}
              <a href="https://medium.com/@sathsaranipuni11" className="text-teal-600 hover:text-teal-400">Medium</a>,{' '}
              <a href="https://dribbble.com/NipuniS" className="text-teal-600 hover:text-teal-400">Dribbble</a>
            </p>
          </div>
        </footer>
        </motion.section>
      </main>
    </div>
  );
}