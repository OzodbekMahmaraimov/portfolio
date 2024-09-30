import {FaBootstrap, FaCss3, FaHtml5, FaReact, FaSass} from 'react-icons/fa';
import {
  SiJavascript,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

export const skillset = [
  {
    name: '',
    items: [
      {
        label: 'Javascipt',
        icon: <SiJavascript color="#E9D54B" className="text-[48px] sm:text-[64px]" />,
        expirience: 1,
      },
      {
        label: 'TypeScript',
        icon: <SiTypescript color="#2F75C0" className="text-[48px] sm:text-[64px]" />,
        expirience: 1,
      },
    ],
  },
  {
    name: 'Front-End',
    items: [
      {
        label: 'React',
        icon: <FaReact color="#5ED4F4" className="text-[48px] sm:text-[64px]" />,
        expirience: 1,
      },
      {
        label: 'Next.js',
        icon: <SiNextdotjs className="text-[48px] text-white light:text-black sm:text-[64px]" />,
        expirience: 0.5
      },
      {
        label: 'Redux',
        icon: <SiRedux color="#7B51BE" className="text-[48px] sm:text-[64px]" />,
        expirience: 0.7,
      },
      {
        label: 'HTML5',
        icon: <FaHtml5 color="#DE4B25" className="text-[48px] sm:text-[64px]" />,
        expirience: 1,
      },
      {
        label: 'CSS3',
        icon: <FaCss3 color="#2873BC" className="text-[48px] sm:text-[64px]" />,
        expirience: 1,
      },
      {
        label: 'SASS/SCSS',
        icon: <FaSass color="#CE6C9C" className="text-[48px] sm:text-[64px]" />,
        expirience: 1,
      },
      {
        label: 'Bootstrap',
        icon: <FaBootstrap color='#7611F7' className='text-[48px] sm:text-[64px]' />,
        expirience: 1
      },
      {
        label: 'Tailwind',
        icon: <SiTailwindcss color="#3FBDCC" className="text-[48px] sm:text-[64px]" />,
        expirience: 1,
      },
    ],
  },
];
