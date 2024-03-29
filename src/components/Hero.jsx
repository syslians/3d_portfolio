import { motion } from 'framer-motion';

import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex
       flex-row items-start gap-5`}>
      <div className="flex flex-col justify-center items-center mt-5">
        <div className="w-5 h-5 rounded-full bg-[#915eff]" />
        <div className="w-1 sm:h-80 h-40 violet-gradient"/>
      </div>

      <div className="relative z-[1]">
        <h1 className={`${styles.heroHeadText} text-white text-left`}>사용자경험을 중심으로 생각하는 <br/> 소프트웨어 개발자
        <span className="text-[#915eff]"> 김현제</span> 입니다.</h1>
        <p className={`${styles.heroSubText} mt-2 text-white-100 whitespace-pre-wrap flex items-start mx-auto text-left`}>
         저는 다양한 아이디어를 머릿속에서 그치지 않고 실현하여 고객감동을 창출하기 위해 끊임없이 노력하는 지원자입니다.
        </p>
      </div>
      </div>
      
      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
         <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
          <motion.dev 
            animate={{
              y: [0, 24, 0] //24px 위아래로 이동
            }}
            transition={{ //transition 1.5초 간격으로 무한루프 
              duration: 2.0,
              repeat: Infinity,
              repeatType: 'loop'
            }}
            className="w-3 h-3 rounded-full bg-secondary mb-1"
          />
         </div>
        </a>
      </div>
    </section>
  )
}

export default Hero