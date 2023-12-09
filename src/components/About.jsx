import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../costants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {

  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "sprig", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} 
           className="w-16 h-16 object-contain" />
           <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
};

const About = () => {
  return (
    <>
     <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview</h2>
     </motion.div>

     <motion.p
       variants={fadeIn("","", 0.1, 1)}
       className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] mx-auto text-left"
     >
      저는 JavaScript와 TypeScript, Python, Java등의 언어들을 다룰줄 아는 소프트웨어 개발자입니다.
      React, Node.js, Next.js, Spring boot 등 프레임워크에 관한 지식또한 갖추고 있고, 운영체제와 데이터를 다루는것에도 익숙합니다.
      저의 빠른 습득력과 학습력을 이용하여 클라이언트와 긴밀히 협력하여 문제를
      해결하고 효율적이고 확장 가능하며 사용하기 쉬운 솔루션을 도출하는 역량을 활용하여 함께 일하고 싶습니다.
      {/* 저는 다양한 아이디어와 서비스를 융합하여 고객이 원하는 것을 정확히 파악하고 이에 알맞는
      정밀화된 서비스를 제공해드리기 위해 아래의 8개 프로젝트들을 제작해보며 다각화된 포트폴리오를 만들 수 있었습니다.
      아래에 기입한 다양한 콘텐츠를 통해 고객에게 어떻게 더 높은 만족을 드릴 수 있을지 고민하였습니다.
      저의 이러한 경험들과 금융서비스를 결합한다면 정량적인 만족을 넘어 정성적인 만족을 드리며 고객감동을 창출할 수 있을 것입니다. */}
     </motion.p>

     <div className="mt-20 flex flex-wrap gap-10">
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service} />
        ))}
     </div>
    </>
  )
}

export default SectionWrapper(About, "about");