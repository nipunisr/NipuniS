import Head from 'next/head';
import { AiFillLinkedin, AiFillMediumCircle, AiFillGithub,AiFillDribbbleCircle} from 'react-icons/ai';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { useState } from 'react';
import Image from 'next/image';
import ns from '../public/ns.jpg';
import design from '../public/design.png';
import code from '../public/code.png';
import consulting from '../public/consulting.png';
import my from '../public/my.png';
import icon from '../public/icon.png';
import pro1 from '../public/pro1.png';
import F4 from '../public/F4.png';
import F2 from '../public/F2.png';
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
  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>Nipuni S</title>
        <meta name="description" content="Home page" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <main className="px-10 bg-white md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="sticky top-0 z-50 flex justify-between py-6 mb-12 bg-white dark:bg-gray-900 dark:text-white">
            <h1 className="text-xl font-burtons">developedbyns</h1>
            
            {/* Navigation Links */}
            <ul className="flex items-center max-w-lg space-x-4 md:text-xl">
              <li><a href="#about" className="text-teal-700">About Me</a></li>
              <li><a href="#education" className="text-teal-700">Education</a></li>
              <li><a href="#projects" className="text-teal-700">Projects</a></li>
              <li><a href="#designs" className="text-teal-700">Designs</a></li>
              <li><a href="#contact" className="text-teal-700">Contact</a></li>
            </ul>

            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="text-2xl cursor-pointer"
                />
              </li>
              <li>
                <a
                  className="px-4 py-3 ml-8 text-white rounded-md bg-gradient-to-r from-cyan-700 to-teal-700"
                  href="/resume.pdf" 
                  download
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          <div className="p-10 text-center">
            <h2 className="py-2 text-5xl font-medium text-teal-600 md:text-6xl dark:text-teal-400">
              Nipuni S Ranathunga
            </h2>
            <h3 className="py-2 text-2xl md:text-3xl dark:text-white">Undergraduate</h3>
            <p className="max-w-lg py-5 mx-auto leading-8 text-gray-800 text-medium md:text-xl dark:text-gray-200">
              BSc Hons in Information Technology & Management.
              <br /> University of Moratuwa.
            </p>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center gap-16 py-3 text-5xl text-gray-600 dark:text-gray-400">
            <a href="https://www.linkedin.com/in/nipuni-s-ranathunga/" target="_blank" rel="noopener noreferrer">
              <AiFillLinkedin />
            </a>
            <a href="https://github.com/nipunisr" target="_blank" rel="noopener noreferrer">
              <AiFillGithub />
            </a>
            <a href="https://medium.com/@sathsaranipuni11" target="_blank" rel="noopener noreferrer">
              <AiFillMediumCircle />
            </a>
            <a href="https://dribbble.com/NipuniS" target="_blank" rel="noopener noreferrer">
              <AiFillDribbbleCircle />
            </a>
            
          </div>

          <div className="relative w-32 h-32 mx-auto mt-20 overflow-hidden rounded-full bg-gradient-to-b from-teal-500 md:h-64 md:w-64">
            <Image src={ns} layout="fill" objectFit="cover" />
          </div>
        

        {/* About Me Section */}
        <section id="about" className='flex items-center justify-center my-20'>
          <div className='text-center'>
            <h3 className="py-1 pb-4 text-3xl text-teal-600 dark:text-teal-400">About Me</h3>
            <p className="py-2 leading-8 text-gray-800 text-md md:text-xl dark:text-gray-200">
              Hello! I'm Nipuni S Ranathunga, an Information Technology & Management student at the University of Moratuwa with a love for coding and design.
            </p>
            <p className="py-2 leading-8 text-gray-800 text-md md:text-xl dark:text-gray-200">
              My journey in IT has equipped me with skills in various programming languages and design tools, allowing me to create engaging and efficient digital experiences.
            </p>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className='my-20'>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h3 className="py-1 text-3xl text-teal-600 dark:text-teal-400">Education</h3>
              <div className="relative mt-10 ml-4">
                <div className="border-l-4 border-teal-500">
                  <div className="mb-8 ml-4">
                    <div className="flex items-center mb-1">
                      <div className="w-2 h-2 mr-2 bg-teal-500 rounded-full"></div>
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">BSc Hons in Information Technology & Management</h4>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">University of Moratuwa (2022 - Present)</p>
                  </div>
                  <div className="mb-8 ml-4">
                    <div className="flex items-center mb-1">
                      <div className="w-2 h-2 mr-2 bg-teal-500 rounded-full"></div>
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">G.C.E. Advance Level-2020</h4>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">R/Sivali Central College, Ratnapura<br />Stream: Commerce<br />Z Score: 1.8755</p>
                  </div>
                  <div className="mb-8 ml-4">
                    <div className="flex items-center mb-1">
                      <div className="w-2 h-2 mr-2 bg-teal-500 rounded-full"></div>
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">G.C.E. Ordinary Level-2017</h4>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">R/Gamini Central College, Kalawana<br />9 A's including ICT, Commerce & Music</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="py-1 text-3xl text-teal-600 dark:text-teal-400">Experience</h3>
              <div className="relative mt-10 ml-4">
                <div className="border-l-4 border-teal-500">
                  <div className="mb-8 ml-4">
                    <div className="flex items-center mb-1">
                      <div className="w-2 h-2 mr-2 bg-teal-500 rounded-full"></div>
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Intern</h4>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">Peoples Bank (2021 - 2022)</p>
                    <ul className="mt-2 text-gray-600 list-disc list-inside dark:text-gray-400">
                      <li>Enhanced problem-solving abilities by quickly identifying and addressing issues</li>
                      <li>Collaborated with colleagues to achieve team goals.</li>
                    </ul>
                  </div>
                  <div className="mb-8 ml-4">
                    <div className="flex items-center mb-1">
                      <div className="w-2 h-2 mr-2 bg-teal-500 rounded-full"></div>
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Customer Outreach Executive</h4>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">StageYou.Inc (2023)</p>
                    <ul className="mt-2 text-gray-600 list-disc list-inside dark:text-gray-400">
                      <li>Analyzing customer data to identify trends & preferences</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className='flex items-center justify-center my-10'>
          <div className='text-center'>
            <h3 className="py-1 text-3xl text-teal-600 dark:text-teal-400">Projects</h3>
            <p className="py-2 leading-8 text-gray-800 text-md md:text-xl dark:text-gray-200">
              Throughout my journey in the world of technology and design, I have had the opportunity to work on a variety of projects that have honed my skills and expanded my knowledge.
            </p>
          </div>
        </section>

        <section>
          <div className="gap-10 lg:flex" >
            <div className="p-10 my-10 text-center transition duration-500 transform shadow-lg rounded-xl dark:bg-white hover:bg-teal-100 hover:scale-105 dark:hover:bg-teal-100">
              <Image src={pro1} width={100} height={100} />
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
            </div>
            <div className="p-10 my-10 text-center transition duration-500 transform shadow-lg rounded-xl dark:bg-white hover:bg-teal-100 hover:scale-105 dark:hover:bg-teal-100">
              <Image src={code} width={100} height={100} />
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
            </div>
          </div>
        </section>
        
      {/*Skills*/}
      <section id="skills" className="my-20">
      <div className="text-center">
       <h3 className="py-1 text-3xl text-teal-600 dark:text-teal-400">Skills</h3>
        <p className="py-2 leading-8 text-gray-800 text-md md:text-xl dark:text-gray-200">
         My skill set spans across various programming languages and design tools.
        </p>
      </div>
    <div className="grid grid-cols-1 gap-8 mt-10 md:grid-cols-3">
    {/* Frontend Card */}
    <div className="p-6 text-center transition duration-500 transform shadow-lg rounded-xl dark:bg-white hover:scale-105 hover:bg-teal-100 dark:hover:bg-teal-100">
      <div className="flex justify-center mb-4 text-4xl text-teal-600">
        <AiFillCode />
      </div>
      <h4 className="pb-2 text-lg font-medium text-teal-600">Frontend</h4>
      <p className="text-gray-800 dark:text-gray-600">HTML<br/> CSS <br/> JavaScript<br/> React</p>
    </div>

    {/* Backend Card */}
    <div className="p-6 text-center transition duration-500 transform shadow-lg rounded-xl dark:bg-white hover:scale-105 hover:bg-teal-100 dark:hover:bg-teal-100">
      <div className="flex justify-center mb-4 text-4xl text-teal-600">
        <DiDatabase />
      </div>
      <h4 className="pb-2 text-lg font-medium text-teal-600">Backend</h4>
      <p className="text-gray-800 dark:text-gray-600">Node.js<br/> Express<br/> MySQL</p>
    </div>

    {/* Tools Card */}
    <div className="p-6 text-center transition duration-500 transform shadow-lg rounded-xl dark:bg-white hover:scale-105 hover:bg-teal-100 dark:hover:bg-teal-100">
      <div className="flex justify-center mb-4 text-4xl text-teal-600">
        <AiOutlineTool />
      </div>
      <h4 className="pb-2 text-lg font-medium text-teal-600">Tools</h4>
      <p className="text-gray-800 dark:text-gray-600">Git<br/> Figma<br/>VSCode</p>
    </div>
  </div>
</section>


        

        {/* Designs Section */}
        <section id="designs" className='flex items-center justify-center my-10'>
          <div className='text-center'>
            <h3 className="py-1 text-3xl text-teal-600 dark:text-teal-400">My Designs</h3>
            <p className="py-2 leading-8 text-gray-800 text-md md:text-xl dark:text-gray-200">
              My passion for design has led me to create numerous projects, each one challenging me to push the boundaries of creativity and functionality.
            </p>
          </div>
        </section>

        <section>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="flex-1 basis-1/3">
              <Image
                className="object-cover rounded-lg"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={F2}
              />
            </div>
            <div className="flex-1 basis-1/4">
              <Image
                className="object-cover rounded-lg max-h-90"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={my}
              />
            </div>
            <div className="flex-1 basis-1/3">
              <Image
                className="object-cover rounded-lg max-h-90"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={F4}
              />
            </div>
            
          </div>
        </section>

        
        {/* Contact Me Section */}
        <section id="contact" className='my-20'>
  <div className="flex flex-col items-center justify-center px-10">
    {/* Contact Form */}
    <div className='w-full mb-10 text-center md:w-1/2'>
      <h3 className="py-1 text-3xl text-teal-600 dark:text-teal-400">Contact Me</h3>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className="p-2 mb-4 border border-gray-300 rounded"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="p-2 mb-4 border border-gray-300 rounded"
        />
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Subject"
          className="p-2 mb-4 border border-gray-300 rounded"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          className="p-2 mb-4 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="px-4 py-2 text-white bg-teal-500 rounded hover:bg-teal-600"
        >
          Send
        </button>
      </form>
    </div>

    {/* Contact Information */}
    <div className='w-full text-center md:w-1/2'>
      <p className="text-gray-800 dark:text-gray-200">
        <strong>Email:</strong> sathsaranipuni11@gmail.com
      </p>
      <p className="text-gray-800 dark:text-gray-200">
        <strong>Address:</strong> Katubedda, Moratuwa
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
        </section>
      </main>
    </div>
  );
}