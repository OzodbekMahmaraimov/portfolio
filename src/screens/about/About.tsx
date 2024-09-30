import {useMediaQuery} from 'react-responsive';
import {mediaBreakpoints} from 'responsive';

export const About = () => {
  const mobileAndTablet = useMediaQuery({
    query: `(max-width: ${mediaBreakpoints.xl}px)`,
  });

  return (
    <div className="flex h-auto w-full items-center overflow-hidden text-primaryColor">
      <div className="w-full xl:w-2/3">
        <span className="html-tag">{'<html>'}</span>
        <br />
        <span className="html-tag pl-4">{'<body>'}</span>
        <br />
        <span className="html-tag pl-8">{'<h1>'}</span>

        <h1 className="pb-2 pl-10 text-3xl font-bold text-primaryColor opacity-70 sm:text-5xl">Hello,</h1>

        <span className="html-tag pl-8">{'</h1>'}</span>
        <br />
        <span className="html-tag pl-8">{'<p>'}</span>
        <p className="pb-4 pl-10 text-lg">
          My name is <span className="text-lg text-themePrimaryColor">Ozodbek Mahmaraimov</span> a passionate junior
          frontend developer with a strong interest in creating intuitive, responsive, and user-friendly web
          applications. I specialize in building websites using{' '}
          <span className="text-lg text-themePrimaryColor">HTML,</span>{' '}
          <span className="text-lg text-themePrimaryColor">CSS,</span>{' '}
          <span className="text-lg text-themePrimaryColor">javascript,</span>{' '}
          <span className="text-lg text-themePrimaryColor">React,</span> and{' '}
          <span className="text-lg text-themePrimaryColor">Tailwind CSS,</span> and I'm continuously expanding my skill
          set by learning <span className="text-lg text-themePrimaryColor">Next.js</span> and exploring new frontend
          technologies.
        </p>
        <p className="pb-4 pl-10 text-lg">
          Currently, I'm honing my skills through hands-on projects, including this portfolio, and I’m always looking
          for new challenges to improve my coding abilities. I enjoy turning complex problems into simple, beautiful,
          and intuitive designs.{' '}
          <span className="text-lg text-themePrimaryColor">
            I also have experience integrating frontend with backend systems and working on collaborative projects.
          </span>
        </p>
        <p className="pb-4 pl-10 text-lg">
          My goal is to contribute to innovative projects and be part of a dynamic team where I can grow as a developer
          and bring value with my creativity and technical skills.
        </p>
        <span className="html-tag pl-8">{'</p>'}</span>
        <br />
        <span className="html-tag pl-4">{'</body>'}</span>
        <br />
        <span className="html-tag pl-2">{'</html>'}</span>
        {mobileAndTablet && (
          <div className="m-auto h-[200px] w-[300px] bg-about bg-cover sm:h-[400px] sm:w-[500px]"></div>
        )}
      </div>
      {!mobileAndTablet && <div className="h-[300px] w-[300px] bg-about bg-cover sm:h-[400px] sm:w-[400px]"></div>}
    </div>
  );
};

export default About;
