import React from 'react';
import { FaInstagram, FaLinkedin, FaDiscord, FaEnvelope } from 'react-icons/fa'; // Ensure you have react-icons installed
import Image from 'next/image'; // For better image handling in Next.js
import Machine from '../../assets/arcade_machine.png'; // Adjust path as necessary

// Defining a TypeScript type for the social links
type SocialLinkProps = {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
};

const socialLinks: SocialLinkProps[] = [
  {
    href: 'https://www.instagram.com/hackoverflowgmu/',
    icon: FaInstagram,
    label: 'Instagram',
  },
  {
    href: 'https://www.linkedin.com/company/hackoverflow-gmu/?viewAsMember=true',
    icon: FaLinkedin,
    label: 'LinkedIn',
  },
  {
    href: 'https://discord.gg/JqjUQfgKDu',
    icon: FaDiscord,
    label: 'Discord',
  },
  {
    href: 'mailto:hackoverflowmason@email.com',
    icon: FaEnvelope,
    label: 'Email',
  },
];

const MinFooter: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="flex w-full flex-col items-center justify-between gap-5 border-t border-gray-900/5 pt-8 sm:flex-row dark:border-white/5">
      <div className="flex flex-col items-center">
        <Image src={Machine} alt="Arcade Machine" width={1000} height={1000} />
      </div>

      <div className="flex flex-col items-center">
        <h3 className="text-lg font-semibold text-black">Follow Us</h3>
        <ul className="flex gap-4 text-black">
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <li key={label}>
              <a href={href} target="_blank" rel="noopener noreferrer" className="group">
                <span className="sr-only">{label}</span>
                <Icon className="h-6 w-6 text-gray-500 transition hover:text-blue-500 dark:hover:text-blue-400" />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="text-left">
        <h3 className="text-lg font-semibold text-black text-center">Code of Conduct</h3>
        <p className="text-sm text-black">
          By participating in this event, you agree to the{' '}
          <a
            href="https://www.hackoverflow.org/code-of-conduct/"
            target="_blank"
            className="text-blue-500 underline hover:text-blue-700"
            rel="noopener noreferrer"
          >
            HackOverflow Code of Conduct
          </a>{' '}
          and the{' '}
          <a
            href="https://studentconduct.gmu.edu/wp-content/uploads/2021/08/2021-22-Code_of_Student_Conduct.pdf"
            target="_blank"
            className="text-blue-500 underline hover:text-blue-700"
            rel="noopener noreferrer"
          >
            George Mason Student Code of Conduct [PDF]
          </a>.
        </p>
        <p className="mt-4 text-sm text-black">© {year} HackOverflow. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default MinFooter;
