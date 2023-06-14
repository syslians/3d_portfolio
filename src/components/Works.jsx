import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { github } from '../assets'; 
import { SectionWrapper } from '../hoc';
import { projects } from '../costants';
import { fadeIn,textVariant } from '../utils/motion';

const ProjectCard = ({ index, name, description, tags, image, source_code_Link }) => {
  return(
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
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
            onClick={() => window.open(source_code_Link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center
            items-center cursor-pointer"
           >
            <img 
              src={github}
              alt="github"
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
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
         variants={fadeIn("","", 0.1, 1)}
         className="mt-3 text-secondary text-[17px] max-x-3xl leading-[30px]"
        >
          아래 프로젝트에서 저의 기술과 경험을 소개합니다.
          제 작업의 실례입니다. 각 프로젝트에 대해 간단히 설명하겠습니다.
          코드 저장소 링크와 그 안의 라이브데모버전이 들어있습니다.
          복잡한 문제를 해결하고 다양한 기술로 작업하는 능력,
          프로젝트를 효율적으로 관리하는 저의 역량이 담겨있습니다.
        </motion.p>
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