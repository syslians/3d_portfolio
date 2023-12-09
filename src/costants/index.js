import { Flight } from "@mui/icons-material";
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    docker,
    Linuxx,
    meta,
    carrent,
    jobit,
    python,
    spring,
    java,
    nextjs,
    mysql,
    crypto,
    Python,
    EDA,
    Airbnb,
    Socket,
    ATM
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
      name: "Linux",
      icon: Linuxx,
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
      name: "spring",
      icon: spring,
    },
    {
      name: "mysql",
      icon: mysql,
    },
  ];
  
  const experiences = [
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
  
  const projects = [
    {
      name: "Next.js 에어비앤비 클론",
      description: [
                  "Next.js와 타입스크립트를 기반으로 한 에어비앤비 클론 사이트를 개발했습니다.Next.js를 선택한 이유는 리액트 기반의 프레임워크로서, SSR과 CSR을 손쉽게 구현할 수 있어 초기 로딩 성능을 최적화할수 있었기 때문입니다.또한 타입스크립트와의 호환성이 뛰어나며, 강력한 개발 경험을 제공하여 안정성을 높이고 디버깅, 유지보수를 용이하게 하며, 서버리스 함수와의 통합을 통해 현대적이고 효율적인 웹 개발을 가능하게 하며, 풍부한 생태계와 커뮤니티 지원을 통해 빠르게 발전하고 있는 프레임워크입니다.", 
                  "프로젝트에 대해 설명하겠습니다.프로젝트의 UI는 tailwindCss와 리액트를 사용하여 구현했으며, 데이터베이스는 Mongodb와 Prismadb로 조작합니다. 회원가입 및 로그인 기능은 nextauth를 통해 구현되었고, OAuth 2.0을 적용하여 구글 계정으로 간편하게 로그인할 수 있습니다. 또한, JWT를 사용해 사용자 인증을 관리합니다",
                  "숙소 호스트는 카테고리, 제목, 방 수, 수용 인원, 사진, 위치, 가격 등의 정보를 기재해 숙소를 등록할 수 있습니다. 이용자는 관심있는 숙소를 좋아요하여 리스트에 저장하거나 사이트의 달력 기능을 이용해 예약할 수 있습니다. 마이페이지에서는 예약 내역, 좋아한 숙소, 내 숙소를 예약한 손님 등을 확인할 수 있습니다. 위치와 여행 날짜를 선택하면 관련 숙소를 검색할 수 있습니다. 모든 HTTP 요청은 axios로 처리되며, 이는 Next.js의 API 디렉토리에 정의된 핸들러를 통해 관리됩니다.",
                  "이 프로젝트를 통해 Next.js 프레임워크에 대한 깊은 이해를 얻었고, jwt 토큰 방식의 장단점에 대해 인지하였습니다. 또한, Prisma의 강력한 기능들을 활용해보면서 데이터베이스 조작에 대한 실전 경험을 쌓을 수 있었습니다. 프로젝트 진행 과정에서 여러 리액트 컴포넌트들을 활용하면서 코드의 추상화에 대해 고민해보는 계기가 되었습니다.",
                  "이 프로젝트를 통해 효과적인 웹 개발 방법론 및 도구 사용, 데이터베이스 연동, 보안 등에 대한 경험을 쌓을 수 있었고, 면접에서 더 자세한 설명이 필요한 부분들을 준비할 수 있게 되었습니다."
                  ],
      tags: [
        {
          name: "Next.js",
          color: "blue-text-gradient",
        },
        {
          name: "typescript",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
        {
          name: "React.js",
          color: "yellow-text-gradient",
        },
        {
          name: "Prismadb",
          color: "purple-text-gradient",
        },
        {
          name: "mongodb",
          color: "orange-text-gradient",
        },
        {
          name: "next-auth",
          color: "chocolate-to-saddlebrown-gradient",
        },
        {
          name: "jwt",
          color: "teal-to-cyan-gradient",
        },
        {
          name: "OAuth 2.0",
          color: "indigo-to-pink-gradient",
        },
        {
          name: "axios",
          color: "gold-to-green-gradient",
        },
      ],
      image: Airbnb,
      source_code_link: "https://mls0q9h2-3000.asse.devtunnels.ms/",
      source_Link: "https://github.com/syslians/airbnb-clone",
      notion_Link: "https://www.notion.so/next-js-with-airbnb-f535252af0de428ea843eeb5c664442f?pvs=4"
    },
    {
      name: "시세 DB 구축 및 시세조회 API 개발,및 증권데이터 분석",
      description: ["금융과 주식시장에 대한 깊은 흥미를 바탕으로 시작한 제 프로젝트는,파이썬 라이브러리를 활용하여 KRX 공시 사이트와 네이버 증권 데이터를 웹 스크래핑하고, 이를 데이터프레임으로 조작하여 MariaDB 데이터베이스에 저장하는 작업등을 포함하고 있습니다.이 과정을 통해, 저는 시세조회 DB를 구축하고 조회 API를 개발하는 경험을 쌓았습니다. ",
                   "데이터를 기반으로 다양한 투자전략 알고리즘을 개발하고 백테스팅을 수행하면서, 저는 데이터 분석과 금융 기술에 대한 심도있는 지식을 쌓았습니다.이러한 분석과정에서 데이터에 대한 애정을 키웠으며, matplotlib을 이용한 결과 시각화를 통한 분석의 효과를 극대화했습니다.특히, 데이터프레임의 강력한 기능들과 텐서플로우를 사용한 주가 예측 모델 개발은 제게 파이썬의 강력한 머신러닝 능력을 체험하게 해주었고, 이를 통해 다음 날의 주가 변동을 예측하는 코드를 구현했습니다.",
                   "주식시장 자동 매매 시스템을 구축하면서 저는 크레온 API를 활용해 '변동성돌파' 전략을 실제 시장에 적용해보며, 이론과 실무의 결합을 경험했습니다.이 과정에서 주식 데이터를 수집하고 분석하여, 단순한 숫자에서 유의미한 정보로 재가공하는 과정에서 새로운 가치를 창출하는 방법을 배웠습니다.",
                   "이러한 경험들은 저에게 파이썬이라는 언어의 매력을 깊이 느끼게 해주었습니다."],
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
          name: "MariaDB",
          color: "pink-text-gradient",
        },
        {
          name: "pymysql",
          color: "yellow-text-gradient"
        },
        {
          name: "matplotlib",
          color: "purple-text-gradient"
        },
        {
          name: "tensorflow",
          color: "orange-text-gradient"
        }
      ],
      image: Python,
      source_code_link: "https://github.com/",
      source_Link: "https://github.com/syslians/airbnb-clone",
      notion_Link: "https://www.notion.so/Python-27818aa0deeb4af895331e42ebdf562f?pvs=4"
    },
    {
      name: "기업재무 대시보드",
      description: [
        "복잡한 비즈니스 데이터를 시각적으로 쉽게 표현하고자 시작한 프로젝트는 저에게 기술적 역량과 분석능력을 동시에 성장시키는 기회가 되었습니다.",
        "React와 Node.js를 활용하여, 사용자가 한 눈에 이해하기 쉬운 인터랙티브한 페이지를 개발하는 과정에서, 저는 프론트앤드와 백엔드 개발에 대한 이해도를 높일수 있었습니다.",
        "특히 MongoDB에 저장된 데이터를 시각적으로 표현하기 위해, 기업의 비즈니스 데이터를 그래픽적으로 재구성하는데 많은 노력을 기울였습니다.이 과정에서 데이터 시각화의 ",
        "중요성과 그 효과를 깊이 이해하게 되었습니다.또한, 상품 주문에 대한 트랜잭션 데이터를 활용하여 상품 리스트와 주문 내역을 효과적으로 연결하는 작업을 통해, 데이터관계의 매핑의 복잡성과",
        "중요성을 경험했씁니다.이 프로젝트는 간단한ERD를 기반으로 구현되었으나, 그 과정에서 데이터베이스 설계의 미묘한 측면들을 파악하는데 큰 도움이 되었습니다.마지막으로, 선형회귀 모델을 사용해 내년 월별",
        "예상 매출을 예측하고 시각화하는 기능을 추가함으로 직관적이고 친화적인 경험을 제공하고자 노력을 기울였습니다.이 과정에서 저는 선형회귀 분석과 같은 복잡한 통계적 방법을 사용자가 쉽게 이해할수 있는 형태로",
        "변환하는 방법을 배웠으며,이는 데이터 과학과 사용자 경험 디자인이 어떻게 융합될수 있는지를 깨닫는 귀중한 경험이였습니다."
      ],
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
          color: "yellow-text-gradient",
        },
      ],
      image: jobit,
      source_code_Link: "https://charming-zuccutto-95d431.netlify.app/",
      source_Link: "https://github.com/syslians/finance_dashboard.git",
      notion_Link: "https://www.notion.so/bebcfef66ce249e9b35283944cc52406?pvs=4"
    },
    {
      name: "음악 플랫폼",
      description:[
        "이 플랫폼은 RAPID API와 redux toolkit을 사용해 다양한 음악 데이터를 수집하고 분석합니다.각종 데이터는 shazamcore 에서 제공하는 API를 사용하여 데이터를 얻습니다.사용자의 위치에 따라 맞춤형 차트를 제공합니다. 예를 들어, 한국에 있을 때는 K-POP 차트가 나타납니다.",
        "플랫폼은 각 노래의 상세 정보를 포함하여, 사용자가 가사와 아티스트 정보를 쉽게 접근할 수 있도록 합니다. 부드러운 디자인과 직관적인 사용자 인터페이스로, 음악 탐색과 청취 경험을 즐겁고 편안하게 만들었습니다.",
        "이 프로젝트를 통해, 저는 음악과 기술의 결합으로 새로운 사용자 경험을 창출하는데 중점을 두었습니다.이 프로젝트를 진행하며, 저는 RAPID API와 Redux Toolkit을 활용하여 복잡한 데이터를 효율적으로 처리하고 분석하는 과정에서, 제 데이터 관리 및 프로그래밍 능력이 향상되었습니다.",
        "사용자 인터페이스와 경험 디자인에 이해를 바탕으로 직관적이고 사용자 친화적인 플랫폼을 어떻게 하면 개발할수 있을까 고민을하며 성장하는 계기가 되었습니다."
      ],
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
      source_code_Link: "https://incandescent-travesseiro-6057e5.netlify.app/",
      source_Link: "https://github.com/syslians/lyriks.git",
      notion_Link: "https://www.notion.so/Lyrik-with-ShazamCore-1123ab295e014bcc81bb5d23208ae2e0?pvs=4"
    },
    {
      name: "암호화폐 순위 플랫폼",
      description:[
        "암호화폐와 블록체인의 기술에 대한 부분에 대한 관심을 바탕으로, 사용자가 암호화폐 순위와 동향을 쉽게 파악할수있는 웹사이트 개발을 시작했습니다.",
				"이 사이트는 REST API를 통해 coinranking 서버로부터 암호화폐 정보를 실시간으로 가져와 순위를 정렬하며, 각 암호화폐의 일별 거래량을 시각적으로 차트에 나타냅니다.",
				"이를 통해 사용자들은 복잡한 데이터를 직관적으로 이해하고 분석할 수 있습니다.또한 암호화폐의 주요정보를 한눈에 볼수있는 구조를 마련함으로, 효율적인 정보 접근성을 제공합니다.",
				"사이트의 뉴스 섹션에서는 마이크로소프트의 Bing 검색엔진을 활용하여 해당 암호화폐와 관련된 최신 기사를 제공합니다.이 기능은 사용자들이 암호화폐 시장의 최신 동향을 신속하고 정확하게",
				"파악하는데 중요한 역할을 합니다.이 프로젝트를 통해, 저는 기술적 능력과 시장분석 능력을 동시에 발전시킬수 있었습니다.특히, 다양한 데이터 소스와 API를 효과적으로 통함하고, 사용자에게 유용한 정보를",
				"쉽게 제공하는 방법에 대해 많은것을 배웠습니다.이 경험은 제가 디지털 화폐의 세계를 더 깊이 이해하는데 큰 도움이 되었습니다."
      ],
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
          color: "blue-text-gradient",
        }
      ],
      image: crypto,
      source_code_Link: "https://unique-klepon-d5e617.netlify.app/",
      source_Link: "https://github.com/syslians/crypto_ranking.git",
      notion_Link: "https://www.notion.so/c7da26b7fac34d858c72fb17cfef2e65?pvs=4"
    },
    // {
    //   name: "뉴럴네트워크 자동차 시뮬레이팅",
    //   description: "ai는 새로운 혁명을 가지고 오고 있습니다. 다른 프로젝트들에는 구글 텐서플로 라이브러리를 통해 기계학습을 구현하였지만, 머릿속으로 어떻게 동작하는 건지 항상 궁금했습니다. 기계학습을 논문들과 3 blue 1 brown이라는 유명한 수학 유튜브 채널을 통해 이론상으로 어느 정도 다진 다음, 라이브러리를 사용하지 않고 직접 구현한 프로젝트입니다. 프로젝트의 내용을 설명해드리겠습니다. 자바스크립트와 html, CSS만으로 만들어져있고, 여러 차들과 사용자의 차를 구분하여 자동으로 움직이게 구현했습니다. 또한 레이 캐스팅 방식으로 감지 센서를 사용자의 차에 달아주었습니다. 감지 센서로 입력값을 받아 아주 간단한 모형의 신경망을 통과해 어느 방향으로 가야 하는지 출력합니다. 그렇게 1,000개의 차를 만들어서 가장 늦게까지 살아남는 차 한 대의 데이터를 브라우저의 로컬스토리지에 저장합니다. 그렇게 학습된 데이터는 시뮬레이션 평가를 진행하며 점점 발전합니다. 차 한대가 모든 차량을 피하고, 벽에 부딪히지 않고 끝까지 도달하는 것이 이 프로젝트의 목표입니다.",
    //   tags: [
    //     {
    //       name: "html",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "javascript",
    //       color: "green-text-gradient",
    //     }
    //   ],
    //   image: car,
    //   source_code_Link: "https://6486dc9d58c5bd0574c7f094--glittery-bublanina-553a1f.netlify.app/",
    //   source_Link: "https://github.com/syslians/car_simulate.git"
    // },
    
    
    {
      name: "Node.js express,웹소켓을 이용한 실시간 채팅",
      description: [
        "HTTP 및 TCP/IP 프로토콜 통신에 대한 학습을 통해 실시간 통신에 대해 궁금점을 가진 저는, 웹소켓을 기반으로 한 프로젝트를 시작했습니다.Node.js와 Express를 사용하여 서버를 구축하고, socket.io 라이브러리를 활용해 실시간 채팅 기능을 구현함으로써, 웹 기반 실시간 통신의 다양한 측면을 경험했습니다.",
        "프론트앤드와 백엔드를 모두 socket.io로 연결하여 통신을 가능하게 했습니다.이 과정에서 CORS문제를 cors 모듈을 이용해 해결하고, socket.io의 서버 인터페이스로 서버를 구성했습니다.사용자가 특정 채널에 입장하면, 그 채널의 모든 사용자에게 메시지가 브로드캐스팅되는 방식을 통해 실시간 통신의 핵심 원리를 체험했습니다.",
        "이 프로젝트를 통해 저는 socket.io를 사용한 실시간 양방향 통신의 중요성을 깊이 이해했습니다.특히, HTTP와는 다르게 socket.io는 한번의 연결 설정 이후 별도의 요청없이도 지속적인 데이터 교환이 가능하다는 점에서 실시간 상호작용에 매우 적합하다는것을 깨달았습니다.이 경험은 저에세 웹소켓과 전통적인 HTTP 통신의 차이점을",
        "명확히 이해하는데 큰 도움이 되었으며, 실시간 데이터 통신 기술의 발전에 대한 통찰을 제공했습니다."
      ],
      tags: [
        {
          name: "Node.js",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "green-text-gradient",
        },
        {
          name: "react",
          color: "pink-text-gradient",
        },
        {
          name: "express",
          color: "yellow-text-gradient",
        },
        {
          name: "Nodemon",
          color: "purple-text-gradient",
        },
        {
          name: "socket.io",
          color: "orange-text-gradient",
        },
        {
          name: "cors",
          color: "indigo-to-pink-gradient",
        },
      ],
      image: Socket,
      source_code_link: "https://github.com/",
      source_Link: "https://github.com/syslians/socket.io",
      notion_Link: "https://www.notion.so/Node-js-Realtime-chat-app-4c2ecb6598bb4fdc91fc1d56cdeb57b6?pvs=4"
    },
    { 
      name: "rabbitMQ를 활용한 이벤트드리븐 아키텍쳐",
      description: [
        "시스템 디자인과 아키텍쳐에 대한 공부를 진행하면서, Kafka와 유사하지만 더 단순한 RabbitMQ를 사용하여 이벤트 스트리밍 시스템을 개발한 경험은 저에게 큰 학습기회였습니다.",
        "이 프로젝트는 Node.js로 구현되었으며, Main 앱과 Admin앱을 포함합니다.Admin 앱은 MySQL과 연동되어 있고, Main 앱은 MongoDB와 연동됩니다.이 두앱은 Type ORM을 사용하여 데이터를 관리하며, RabbitMQ를 통해 이벤트 기반 통신을 합니다.",
        "RabbitMQ를 활용한 이벤트 스트리밍의 개발 과정에서, 저는 메시지 브로커를 통한 분산 시스템의 효율적인 데이터 동기화 방법에 대해 이해할수 있었습니다.Admin 앱에서 상품을 생성하면, RabbitMQ를 통해 이 이벤트가 Main앱에 전달되어 상품 데이터가 동기화되는 구조를 설계했습니다.",
        "이러한 구조는 Producers(Admin 앱)->[Exchange -> Binding -> Queue] -> Consumer(Main 앱) 형태로 구현되었습니다.이를 통해, 저는 메시지 큐를 통한 이벤트 기반 아키텍쳐의 중요성과 그 구현방법을 실질적으로 경험했습니다.",
        "또한, 이 프로젝트는 Postman을 사용하여 Admin 앱 엔드포인트에 HTTP 요청을 보내면, MySQL과 MongoDB 에서 데이터가 생성,조회, 삭제되는 과정을 관찰하고 이해하는 기회가 되었습니다.Main 앱과 Admin 앱간의 통신은 axios를 통해 구현되어, 이벤트 스트리밍 시스템에서의 양방향 통신의",
        "배울수 있었습니다.이 프로젝트를 통해, 저는 RabbitMQ를 활용한 메시지 브로커 시스템의 설계와 구현에 대한 실용적인 지식을 얻었으며, 분산 데이터베이스의 동기화와 이벤트 기반 아키텍쳐에 대한 이해를 가질수 있었습니다."
      ],
      tags: [
        {
          name: "TypeScript",
          color: "blue-text-gradient",
        },
        {
          name: "Node.js",
          color: "green-text-gradient",
        },
        {
          name: "express",
          color: "pink-text-gradient",
        },
        {
          name: "nodemon",
          color: "yellow-text-gradient",
        },
        {
          name: "axios",
          color: "purple-text-gradient",
        },
        {
          name: "Mysql",
          color: "orange-text-gradient",
        },
        {
          name: "mongoDB",
          color: "indigo-to-pink-gradient",
        },
        {
          name: "RabbitMQ",
          color: "green-text-gradient",
        },
      ],
      image: EDA,
      source_code_link: "https://github.com/",
      source_Link: "https://github.com/syslians/EDA",
      notion_Link: "https://www.notion.so/Node-js-MicroServices-4db89a19827749e680155adbdd9319fc?pvs=4"
    },
    { 
      name: "JAVA ATM 시스템",
      description: [
        "JAVA GUI를 사용하여 ATM 시스템을 개발한 이 프로젝트는 저에게 자바 프로그래밍과 GUI 설계에 대한 경험을 제공했습니다.로그인 화면을 구현하기위해",
        "JLabel을 활용했으며, MariaDB와 연동하는 과정에서 JDBC의 사용법을 체득했습니다.이 과정에서 데이터베이스 연동과 쿼리 실행에 대한 이해도를 높일 수 있었습니다.",
        "프로그램은 예금, 출금, 빠른 현금 서비스, 간단 명세서 확인, 잔액 조회, PIN 번호 변경등 다양한 은행서비스를 제공합니다.이러한 기능들을 구현하였습니다.특히 출금 기능은 잔액내에서만",
        "수행되도록 제한하는 로직을 구현함으로써, 트랜잭션 격리와 데이터 무결성 유지에 대한 중요성을 깊이 이해할수 있었습니다.",
        "이 프로젝트를 통해, 저는 ATM 시스템의 작동 원리와 사용자 인터페이스 설계에 대한 실질적인 경험을 쌓았습니다.또한 비즈니스 로직을 자바 GUI 프로그램 내에서 구현하고,사용자 경험을 개선하기 위한",
        "다양한 시도를 해봄으로써, 프로그래밍과 사용자 중심 디자인의 결합에 대해 더 깊이 이해하게 되었습니다."
      ],
      tags: [
        {
          name: "JAVA",
          color: "blue-text-gradient",
        },
        {
          name: "JLABEL",
          color: "green-text-gradient",
        },
        {
          name: "JDBC",
          color: "pink-text-gradient",
        },
        {
          name: "MaridDB",
          color: "yellow-text-gradient",
        },
      ],
      image: ATM,
      source_code_link: "https://github.com/",
      source_Link: "https://github.com/syslians/JAVA-ATM.git",
      notion_Link: "https://www.notion.so/JAVA-ATM-e33f6553af4642328127cc1e2421bd3f?pvs=4"
    }
  ];
  
  export { services, technologies, experiences, projects };
  