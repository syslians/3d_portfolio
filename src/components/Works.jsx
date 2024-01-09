import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { github } from '../assets';
import { Netlify } from '../assets';
import { notion } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../costants';
import { fadeIn,textVariant } from '../utils/motion';

const ProjectCard = ({ index, name, description, tags, image, source_code_Link, source_Link, notion_Link }) => {
  return(
    <div
      >
      <Tilt
        option={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img 
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
           <div
            onClick={() => window.open(source_Link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center
            items-center cursor-pointer"
           >
            <img 
              src={github}
              alt="github"
              className="w-1/2 h-1/2 object-contain"
            />
           </div>
           {source_code_Link && (           
           <div
            onClick={() => window.open(source_code_Link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center
            items-center cursor-pointer"
           >
            <img 
              src={Netlify}
              alt="Netlify"
              className="w-1/2 h-1/2 object-contain"
            />
           </div>)}

           <div
            onClick={() => window.open(notion_Link)}
            className="black-gradient w-10 h-10 rounded-full flex justify-center
            items-center cursor-pointer"
           >
            <img 
              src={notion}
              alt="notion"
              className="w-1/2 h-1/2 object-contain"
            />
           </div>
          </div>
        </div>

        <div className="mt-5">
         <h3 className="text-white font-bold text-[24px]">{name}</h3>
         <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </div>
  )
}

const Works = () => {
  return (
    <>
      <div>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
      </div>

      <div className="w-full flex">
        <p
        //  variants={fadeIn("","", 0.1, 1)}
         className="mt-3 text-secondary text-[17px] max-x-3xl leading-[30px]"
        >
          저는 다양한 프로젝트를 통해 기술과 경험을 쌓아왔습니다. GitHub에 코드를 공개하고 Netlify를 통해 배포하고 있습니다. 또한, 제 작업 과정과 아이디어, CS 지식, 기술블로그 등을 노션에 기록하여 지속적인 성장을 추구하고 있습니다. 이를 통해 고객들에게 다양한 기술과 창의적인 아이디어를 제공하여 다방면으로 만족시킬 수 있는 능력을 갖추고 있습니다.
          복잡한 문제를 해결하고 다양한 기술로 작업하는 능력,
          프로젝트를 효율적으로 관리하는 저의 역량이 담겨있습니다.아래 포트폴리오를 통해 더 많은 정보를 확인하실 수 있습니다.감사합니다.
        </p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard 
           key={`project-${index}`}
           index={index}
           {...project}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works,"work");