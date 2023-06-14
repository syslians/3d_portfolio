import { Flight } from "@mui/icons-material";
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    python,
    kalilinux,
    java,
    nextjs,
    mysql,
    crypto,
    car,
    puddle,
    Python,
    Benford

  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "웹 개발자",
      icon: web,
    },
    {
      title: "React Native 개발자",
      icon: mobile,
    },
    {
      title: "Backend 개발자",
      icon: backend,
    },
    {
      title: "application 개발자",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "next.js",
      icon: nextjs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "java",
      icon: java,
    },
    {
      name: "python",
      icon: python,
    },
    {
      name: "kalilinux",
      icon: kalilinux,
    },
    {
      name: "mysql",
      icon: mysql,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "음악 플랫폼",
      description:
        "저는 음악을 매우 좋아하고, 장르별로 매력을 느끼면서 다양한 음악을 매일 들으면서 정신적으로 치유를 받는 느낌을 받습니다.그래서 꼭 한번 음악 플랫폼을 만들어보고자 했고,그렇게 시작한 프로젝트입니다.먼저 음악데이터는 rapidapi 로 reduxtoolkit을 사용하여 shazm core 서버에서 각 장르별,순위별 정렬이 가능합니다.위치 api로 현재위치 ip를 파악하여 위치에 해당하는 국가의 차트를 보여줍니다.저는 한국에 있기때문에 K-POP차트가 나옵니다.각 노래의 디테일 정보에는 노래가사,아티스트,관련된 곡 또한 확인이 가능합니다.디자인과 사용자관점UI에 치중을 많이두고 부드러운느낌을 주기위하여 연구를 많이하며 개발했습니다.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "redux",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "vite",
          color: "yellow-text-gradient",
        }
      ],
      image: carrent,
      source_code_Link: "https://relaxed-scone-26ea91.netlify.app/",
    },
    {
      name: "기업재무 대시보드",
      description:
        "저는 항상 기업경영 쪽에 관심이 많았습니다.기업의 제일 후방에서 가장 중요한 역할을 하는것은 당연히 '돈'이라고 생각했습니다.일반적인 기업 재무제표나, 회계처리를 보면 항상 딱딱하고 지루한느낌을 받았습니다.그렇기에 조금 더 지루하지 않고, 한눈에 알아보기 좋은 페이지를 만들어보고자 했고,그렇게 시작한 프로젝트입니다.기업의 수입과 비용, 이익과 수입, 운영비, 월별 수입, 상품의 가격과 지출, 등의 데이터베이스에 있는 데이터를 서버에서 가져와 시각화로 한눈에 파악하게 합니다.또한 주문별 트랜잭션을 가져와 상품리스트와 최근 주문을 확인하게 합니다.아주 간단한 ERD로 테이블은 세개가 존재합니다.마지막으로 통계학적 선형회귀 모델을 사용하여 머신러닝을 돌려서 내년 월별 예상매출을 예측하고, 시각화합니다.UI가 전체적으로 부드러운 느낌을 주게하기 위해 노력을 많이 기울였습니다.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "node.js",
          color: "green-text-gradient",
        },
        {
          name: "mongoDB",
          color: "pink-text-gradient",
        },
        {
          name: "vite",
          color: "Typescript",
        },
      ],
      image: jobit,
      source_code_Link: "https://beamish-smakager-b15c75.netlify.app/",
    },
    {
      name: "이커머스 쇼핑몰",
      description:
        "이커머스 산업은 편리성, 다양성, 경제 성장, 일자리 창출 등을 통해 현대 사회에 큰 영향을 미치고 있으며, 더욱 발전하고 혁신해 나가는 중요한 산업일뿐만 아니라,산업구조 자체를 바꿨다고 생각합니다.때문에 개발을하고싶어 프로젝트를 시작했고,그렇게 만들어졌습니다.상품디테일 페이지에 들어가면 상품에대한 설명,디테일 사진, 관련상품이 나옵니다.원하는 상품을 장바구니에 담을수 있고, 그 후 결제를 누르시면 결제 페이지가 나옵니다.결제정보창에 카드정보와 개인정보등을 입력하고 결제를 누르시면 트랜잭션이 생성되고 stripe 관리자 페이지에 정보가 전송됩니다.결제가 완료되면 완료되었다는 메시지와 함께 페이지 첫 페이지로 리다이렉트됩니다.sanity 데이터베이스로 상품을 등록,수정, 삭제할수 있습니다.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "react",
          color: "green-text-gradient",
        },
        {
          name: "sanity",
          color: "pink-text-gradient",
        },
        {
          name: "stripe",
          color: "pink-text-gradient",
        },
        {
          name: "sanity",
          color: "pink-text-gradient",
        },
        
      ],
      image: tripguide,
      source_code_Link: "https://ecommerce-next-js-zeta.vercel.app/",
    },
    {
      name: "암호화폐 순위 플랫폼",
      description:
        "암호화폐는 디지털 형태의 화폐로, 분산 원장 기술인 블록체인을 기반으로 합니다.화폐수단이라기 보단, 투자상품에 가까운 모습을 보이지만, 그만큼 많은 자본이 흘러가는곳이라고 생각했습니다.때문에 자연히 관심이 가게되었고,순위별로 파악하기쉽고,동향을 알아보는 사이트를 만들고 싶었습니다.프로젝트의 내용을 설명해드리겠습니다.rest api로 coinraking 서버로부터 암호화폐 정보를 받아와 순위별로 정렬하고, 각 디테일페이지에는 암호화폐 일별 거래량을 차트로 표현합니다.아래에는 해당 암호화폐의 몇가지 정보들을 보여주게 구현했습니다.뉴스 페이지에는 마이크로소프트 bing검색 엔진에 해당 암호화폐의 키워드를 가져와 관련된 최신 기사들을 보여줍니다.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "redux",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "vite",
          color: "yellow-text-gradient",
        },
        {
          name: "restapi",
          color: "yellow-text-gradient",
        }
      ],
      image: crypto,
      source_code_Link: "https://unique-klepon-d5e617.netlify.app/",
    },
    {
      name: "뉴럴네트워크 자동차 시뮬레이팅",
      description: "ai는 새로운 혁명을 가지고오고 있습니다.다른 프로제트들에는 구글텐서플로우 라이브러리를 통해 머신러닝을 구현하였지만,머릿속에 어떻게 동작하는건지 항상 궁금했습니다.머신러닝을 논문들과 3blue1brown이라는 유명한 유튜브 채널을 통해 이론상으로 어느정도 다지고, 라이브러리를 사용하지 않고 직접 구현한 프로젝트입니다.자바스크립트와 html, css만으로 만들어져있고, 여러 차량들과 사용자의 차를 구분하여 자동으로 움직이게 구현하였고, 레이캐스팅방식으로 감지센서를 사용자의 차에 달아주었습니다.또한 감지센서로 입력값을 받아 아주 간단한 모형의 뉴럴네트워크를 통과해 어느방향으로 가야하는지 출력합니다.그렇게 1000개의 차를 만들어서 가장 늦게까지 살아남는 차 한대의 데이터를 로컬스토리지에 저장합니다.그렇게 학습된 데이터는 시뮬레이팅을 진행하며 점점 발전합니다.차 한대가 모든 차량을 피하고,벽에 부딪히지 않고 끝까지 도달하는것이 이 프로젝트의 목표입니다.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        }
      ],
      image: car,
      source_code_Link: "https://6486dc9d58c5bd0574c7f094--glittery-bublanina-553a1f.netlify.app/",
    },
    {
      name: "옷 쇼핑몰 사이트",
      description: "장고와 파이썬으로 구현한 쇼핑몰 웹사이트입니다.제가 사고싶거나 마음에 드는 옷이 생길때마다 상품을 추가하면서 코드를 리팩토링하곤 합니다.관리자와 사용자가 존재하며,회원가입과 로그인이 가능합니다.상품을 판매하는 사람은 판매자이고,그외의 사람들은 구매자입니다.구매자는 상품을 누르면 판매자와 연락하기 버튼을 누르고 판매자에게 문의가 가능합니다.둘러보기를 누르시면 전체상품들이 나오고, 검색이 가능합니다.관리자는 생성,수정,삭제의 권한을 가지고 있습니다.판매자또한 수정,삭제의 권한을 가집니다.모든유저는 상품등록이 가능합니다.관리자 페이지는 따로 만들지는 않았고, 장고에서 제공하는 admin기능을 이용하였습니다.",
      tags: [
        {
          name: "django",
          color: "blue-text-gradient",
        },
        {
          name: "python",
          color: "green-text-gradient",
        }
      ],
      image: puddle,
      source_code_link: "https://github.com/",
    },
    {
      name: "파이썬 증권데이터 분석 및 자동매매 알고리즘 구현",
      description: "제가 많이 고생하며 만든 프로젝트라 애정이 조금더 가는 프로젝트입니다.해당 프로젝트에는 다양한 기술들이 결합되었습니다.파이썬과 라이브러리들을 활용하여,KRX 공시사이트,네이버 증권 데이터를 웹 스크래핑한 후,데이터프레임으로 조작하여 저의 mariadb 데이터베이스에 데이터들을 저장합니다.그 후 데이터들을 활용하여 다양한 투자전략 알고리즘 기반으로 백테스팅하고 맷플롯립으로 시각화합니다.또한 텐서플로우 머신러닝을 사용하여 5년치 데이터를 기반으로 다음날 주가를 예측하는 코드도 구현했습니다.마지막으로 주식시장 자동매매는 국내사이트 크레온api를 이용하여 볼린저밴드전략으로 ETF와 국채 혼합물로 포트폴리오를 구성하여 효율적인 투자를 진행합니다.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "beautifulSoup",
          color: "green-text-gradient",
        },
        {
          name: "Mysql",
          color: "green-text-gradient",
        }
      ],
      image: Python,
      source_code_link: "https://github.com/",
    },
    {
      name: "벤포드 법칙을 이용한 사기탐지",
      description: "저는 사회적으로 사기,배임 횡령 등 많은 사람들을 괴롭게 하는것은 큰 범죄라고 생각합니다.그중에서 눈에띄고 흥미로웠던 것이 벤포드법칙입니다.벤포드 법칙은 자연적으로 발생하는 표준분포에서는 1이나올 확률이가장높고,9가 가장 나올확률이 낮다는 것입니다.어떤 데이터의 집합에서는 1이 가장많고,9가 가장 적다는것입니다.이에따라 KT재무제표를 다트공시api로 가져와서,분포도를 분석하고 벤포드의 법칙을 알고리즘으로 구현하여,이상이 없는지 확인합니다.이상이 있다면 회계장부를 임의로 조작했을 가능성이 있다는 것입니다.예시의 KT의 2020년 재무제표에서는 벤포드의 분폳도를 따르므로,이상이 없을 가능성이 크다는것을 나타냅니다.",
      tags: [
        {
          name: "jupyter",
          color: "blue-text-gradient",
        },
        {
          name: "python",
          color: "green-text-gradient",
        },
        {
          name: "pandas",
          color: "green-text-gradient",
        },
      ],
      image: Benford,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  