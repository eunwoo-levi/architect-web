import Image from "next/image";
import { LuBuilding2 } from "react-icons/lu";
import { CiPen } from "react-icons/ci";
import { MdOutlineWork } from "react-icons/md";
import { IconType } from "react-icons";

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
}

interface FeatureCardProps {
  icon: IconType;
  title: string;
  description: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  children,
  className = "",
}) => (
  <h1 className={`text-4xl font-bold text-gray-800 py-10 ${className}`}>
    {children}
  </h1>
);

const Paragraph: React.FC<ParagraphProps> = ({ children, className = "" }) => (
  <p className={`text-xl text-gray-600 pb-8 ${className}`}>{children}</p>
);

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
}) => (
  <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
    <Icon className="text-5xl text-blue-500 mb-4" />
    <h3 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600 text-center">{description}</p>
  </div>
);

const Page: React.FC = () => {
  return (
    <main className="w-full min-h-screen flex flex-col items-center bg-gray-50">
      <h1 className="bg-blue-500 text-white p-4 rounded-xl text-4xl font-bold mt-[60px] mb-[60px] shadow-lg">
        About Us
      </h1>

      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] mb-10">
        <Image
          fill
          objectFit="cover"
          src="/aboutpage/architectdesign2.webp"
          alt="about page"
          className="brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
          <span className="text-3xl text-white/60 font-bold mb-2">
            진성 건축사 사무소
          </span>
        </div>
      </div>

      <section className="flex flex-col items-center gap-[80px] px-6 lg:px-24 max-w-7xl">
        <div className="text-center">
          <SectionTitle>
            20년의 지속적인 열정, 무한한 가능성의 실현
          </SectionTitle>
          <Paragraph>
            저희는 20년 이상의 풍부한 경험을 바탕으로 고객의 꿈을 현실로 만드는
            혁신적인 건축 솔루션을 제공합니다.
            <br /> "공간에 생명을 불어넣는" 우리의 철학은 단순한 건물이 아닌,
            삶의 질을 향상시키는 공간을 창조합니다.
          </Paragraph>
        </div>

        <div className="w-full">
          <SectionTitle className="text-center mb-12">전문 역량</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={LuBuilding2}
              title="종합 건축 설계"
              description="주거시설, 교육연구 및 복지시설, 근린생활시설 등 다양한 유형의 건축물 설계"
            />
            <FeatureCard
              icon={CiPen}
              title="공간 혁신 사업"
              description="기존 공간의 가치를 재발견하고 극대화하는 혁신적 접근"
            />
            <FeatureCard
              icon={MdOutlineWork}
              title="건축 감리"
              description="설계의 완벽한 구현을 위한 전문적인 감리 서비스"
            />
          </div>
        </div>

        <div className="bg-white shadow-xl rounded-lg p-8 w-full">
          <ul className="list-disc pl-5 space-y-4">
            <li>
              <strong>맞춤형 설계:</strong> 고객의 니즈를 심층 분석하여 독보적
              가치를 창출하는 맞춤형 솔루션 제공
            </li>
            <li>
              <strong>혁신적 접근:</strong> 최신 트렌드와 기술을 접목한
              미래지향적 설계
            </li>
            <li>
              <strong>풍부한 경험:</strong> 다양한 프로젝트 수행을 통해 축적된
              노하우와 전문성
            </li>
            <li>
              <strong>통합적 서비스:</strong> 설계부터 감리까지 원스톱 서비스로
              프로젝트의 일관성과 효율성 보장
            </li>
          </ul>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-8 w-full">
          <SectionTitle className="text-center mb-6">
            안전하고 전문적인 건축 설계
          </SectionTitle>
          <Paragraph className="text-center">
            저희 진성 건축사 사무소는 고객의 비전과 요구에 완벽히 부합하는
            안전하고 꼼꼼한 설계를 통해, 고품질의 건축 솔루션을 제공하는 것을
            목표로 하고 있습니다. 20년 이상의 경험을 바탕으로, 저희는 각
            프로젝트마다 세심한 주의를 기울이며, 고객의 기대를 뛰어넘는 결과물을
            창출하고자 노력합니다.
          </Paragraph>
          <Paragraph className="text-center">
            저희 사무소의 모든 설계 과정은 고객과의 철저한 소통을 통해
            시작됩니다. 고객의 요구와 꿈을 이해하고, 이를 바탕으로 맞춤형
            솔루션을 제안합니다. 각 건축물은 단순한 구조물 이상의 의미를 지니며,
            그 안에는 고객의 이야기가 담겨 있어야 한다고 믿습니다. 따라서 저희는
            안전성을 최우선으로 고려하여, 현행 법규 및 기준을 철저히 준수합니다.
          </Paragraph>
          <Paragraph className="text-center">
            <strong className="text-black font-semibold">
              안전하고 꼼꼼한 설계
            </strong>
            <br />
            <br />
            안전은 건축의 기본입니다. 저희는 모든 설계 과정에서 안정성을
            최우선으로 하여, 사용자의 안전을 보장하는 구조를 설계합니다. 다양한
            환경에서의 리스크를 분석하고, 이를 예방할 수 있는 설계 솔루션을
            제공합니다. 또한, 최신 기술과 자료를 활용하여 꼼꼼한 시뮬레이션을
            진행하며, 모든 세부 사항을 면밀히 검토합니다.
          </Paragraph>
          <Paragraph className="text-center">
            <strong className="text-black font-semibold mb">
              전문적인 감리 서비스
            </strong>
            <br />
            <br />
            설계만큼이나 중요한 것이 바로 감리입니다. 저희 사무소는 설계의
            완벽한 구현을 위한 전문적인 감리 서비스를 제공합니다. 시공
            단계에서의 품질 관리는 물론, 현장 관리 및 안전 점검을 통해 고객의
            기대에 부합하는 결과를 도출해내는 것을 목표로 합니다. 저희 팀은
            풍부한 경험과 전문 지식을 바탕으로 시공 현장에서 발생할 수 있는
            다양한 문제를 사전에 예방하고, 적시에 해결할 수 있는 능력을 갖추고
            있습니다.
          </Paragraph>
          <Paragraph className="text-center">
            <strong className="text-black font-semibold mb">
              고객의 요구에 맞춘 완벽한 설계
            </strong>
            <br />
            <br />
            고객의 요구는 각기 다릅니다. 저희는 모든 프로젝트를 고객의 개별적인
            필요와 선호에 맞춰 설계합니다. 이는 단순한 건축물 설계를 넘어서,
            고객의 생활 방식과 환경에 최적화된 공간을 창출하는 것을 목표로
            합니다. 저희의 철학은 "고객의 요구에 맞춘 맞춤형 설계"이며, 이를
            통해 각 고객이 기대하는 이상적인 공간을 실현할 수 있도록 지원합니다.
          </Paragraph>
          <Paragraph className="text-center text-black mt-4">
            저희 진성 건축사 사무소는 지속적인 혁신과 전문성을 바탕으로, 고객과
            함께 성장하며 새로운 가치를 창출하는 파트너가 되겠습니다. 귀하의
            꿈과 비전을 현실로 만들기 위해, 저희와 함께 하십시오.
          </Paragraph>
        </div>
      </section>
    </main>
  );
};

export default Page;
