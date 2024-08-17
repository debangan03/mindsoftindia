"use client";
import Image from "next/image"; // Adjust the path as needed
import Link from "next/link";
import { useRouter } from "next/navigation";

function Page({ params }) {
  // lib/data.js
  const categories = [
    {
      id: 1,
      title: "Executive Search",
      subheading: "Customised service for selected people.",
      image:
        "https://rfsonshr.com/wp-content/uploads/2023/10/Reasons-Why-Recruitment-Is-Essential-For-Your-Business-1.jpg",
      paragraphs: [
        "The executive search service for corporate offices is designed to head hunt selective candidates with desired profiles.",
        "We have built our network through print and web media and personal interactions. Our strategic position in the market helps us to understand the corporate governance and leadership factors of today’s organisation and work to become strategic partner by providing market intelligence, judgement and business acumen.",
        "The key component which makes our executive search process a success is the thorough analysis that we perform on every candidate. We look into their professional achievements, managerial philosophy, leadership style and personal ambitions before passing on the profile to our clients for short listing.",
        "The strength of your organization lies in the capability to acquire best quality candidates.",
        "We ensure a perfect match for your leadership needs.",
      ],
    },
    {
      id: 2,
      title: "Training & Development",
      subheading: "Learning without training is lost of labour.",
      image: "/tinu1.jpg",
      paragraphs: [
        "Mindsoft India offers training and development service for the clients interested in getting their employees trained in IT and interpersonal skills. We have been at the forefront of transformational skills development for over a couple of years.",
        "We can help you maximise the forte of your people by introducing them to the most advanced skills in the market. Our consultants are extremely well trained and have always been at the cutting edge of creative and practical development solutions. The service can be customised as per your business needs and organisational culture to achieve better business results through people.",
        "Our understanding of the changing trends in the industry, skills that employers seek in their staff and ability to deliver training programs within strict timeframe has enabled us to offer programs in a range of segments that suit all range of learners.",
      ],
    },
    {
      id: 3,
      title: "Permanent Staffing",
      subheading: "Low risk. High reward.",
      image: "/ps.jpg",
      paragraphs: [
        "As the manager who needs to hire new recruits, you know the value of talented people. Mindsoft India understands your challenges and understands that in today’s marketplace, locating and securing good employees is as difficult as ever.",
        "To help you at this task we offer our expert recruiting solutions, tailored to meet your specific demands. You can leave your permanent recruitment work to us and we will show you that adding new people to your squad doesn’t have to be stressful. Our placement division has direct access to a wide range of candidates, including those professionals who have not listed their resume anywhere. And, since we are deeply committed to find the appropriate people for your organisation, the only candidates you will meet are those who have passed our comprehensive screening process.",
        "Partnering with Mindsoft India also significantly lowers your risk of losing a good candidate to another company.",
      ],
    },
    {
      id: 4,
      title: "Contract Staffing",
      subheading:
        "To ensure you hire professionals and not amateurs who waste your time and money.",
      image: "/cs.jpeg",
      paragraphs: [
        "India is one of those progressive economies which is getting used to temporary staffing. In the western world, almost 73% of businesses use contract staffing as a management strategy to bring stability to workforce needs throughout the year.",
        "If you are seeking to partner with a recruitment firm that can help you find temporary staff for your changing business needs, consider Mindsoft India. Regardless of the size of your company, we can provide skilled talent within the shortest possible duration and help you to keep your company productive in today’s competitive environment. With us, you get a unique advantage of hiring an employee for whom you don’t need to worry about administrative processing, payroll, taxes, leaves and quitting. With our service, you get a trained worker without the boundation of keeping the candidate permanently.",
        "Our temporary staffing experts know the job market inside and out and can help you find the best candidates for the job.",
      ],
    },
    {
      id: 5,
      title: "Resource Process Outsourcing",
      subheading: "Making a difference with the 'right' People.",
      image: "/rpo.jpg",
      paragraphs: [
        "Mindsoft India offers bespoke and quantifiable recruitment process outsourcing solutions that help our clients gain a competitive advantage over their business rivals. Our recruitment process outsourcing service takes up the responsibility to find the suitable talent acquisition for your organisation, making you free to focus on your long term corporate goals.",
        "We build integrated recruitment delivery models that administer the complete end-to-end recruitment process at all levels and across all categories of hire. This is achieved by centralising all the hiring-related activity through expert workers, systems and tools. We create simple, steady and standardised recruitment processes that boost the effectiveness of staffing procedures and lower overheads.",
      ],
    },
    {
      id: 6,
      title: "Information Technology",
      subheading: "Explore innovations and solutions in the IT sector.",
      image: "/it.jpg",
      paragraphs: [
        "Recognising the right IT talent that helps you gain a competitive advantage requires more than a job portal. You need experienced sources that can connect to their personal network for the fastest, most relevant results.",

        "At Mindsoft India, we understand this changing scenario of today’s IT market and work to find the best talent within your local areas. Our candidates are wisely picked and short listed to best suit your specific needs. Our track record and expertise extends to all areas of information technology and technical recruitment for the organisational development and other vertical markets. From a single IT technician to the smooth coordinated recruitment of a whole team, we’ll bring the people you need in a constantly developing IT services industry.",
      ],
    },
    {
      id: 7,
      title: "Telecom",
      subheading:
        "Discover the latest in telecommunications and network technology.",
      image: "/telecom.jpg",
      paragraphs: [
        "The telecommunications job market segment is considered by many to be dynamic and extremely volatile. Owing to this reason, it is generating new jobs far faster than companies can fill them, making quality people the major issue in the industry as there are just not enough of them.",

        "We can help you recruit telecom professionals that perfectly suit your work requirements. We deliver staffing solutions not CVs and have placed numerous candidates with multinationals in the telecom industry. As a recruitment firm with a responsibility for recruiting technical people, we put forward people only if we believe that there is a genuine match between the candidate and the client. We do not waste your time by sending you people we know you wouldn’t like. This approach helps us in filling vacancies faster and with better quality people",
      ],
    },
    {
      id: 8,
      title: "BFSI",
      subheading:
        "Insights and advancements in Banking, Financial Services, and Insurance.",
      image: "/bfsi.jpg",
      paragraphs: [
        "The Banking, Financial Services, and Insurance (BFSI) sector is undergoing rapid transformations driven by technological advancements and evolving customer expectations. In recent years, the industry has seen significant shifts due to the adoption of digital banking, the rise of fintech startups, and the increasing demand for personalized financial solutions. Innovations such as blockchain technology, artificial intelligence, and big data analytics are revolutionizing traditional banking processes, enhancing operational efficiency, and improving customer experience. As financial institutions strive to stay competitive, they are investing in new technologies to streamline operations, ensure regulatory compliance, and offer cutting-edge services. The integration of advanced analytics allows for better risk management and fraud detection, while customer-centric digital platforms enable personalized service and engagement. Additionally, the emphasis on cybersecurity is paramount to protect sensitive financial data from emerging threats. The BFSI sector's adaptability and focus on innovation are crucial in navigating the complexities of the modern financial landscape and meeting the diverse needs of today's consumers.",
      ],
    },
    {
      id: 9,
      title: "Retail",
      subheading: "Trends and technologies shaping the retail industry.",
      image: "/retail.jpg",
      paragraphs: [
        "FMCG sector deals with the production, marketing and distribution of consumer packaged goods. It is a stable sector with diversely growing product line and hence offers numerous employment opportunities to people at all levels. The segment also engages employees in supply chain management, operations, finance and general administration. , operations, supply chain, production and general management.",

        "For a candidate, finding the right brand to work for is a challenge. With the presence of multiple options, focussing on the most beneficial career path can sometimes be confusing. For this reason, Mindsoft offers services to all those seeking to create a niche in this industry.",

        "Similarly, finding the right talent is a test for companies because this decision can make or break a brand. Being in the sector for long, we have a deep understanding of FMCG and can help you find the desirable candidates within shortest period of time. Our team of consultants have diverse experience in the field and understand the value of exceptional screening and reference process.",
      ],
    },
    {
      id: 10,
      title: "BPO/ITES",
      subheading:
        "Business Process Outsourcing and IT Enabled Services overview.",
      image: "/bpo.jpg",
      paragraphs: [
        "Mindsoft India recruits for all levels of ITES/BPO/Contact Centres, from telesales and customer service to analysts, team leaders and managers. We operate through a national network across India, dealing in temporary assignments and permanent positions for a range of organisations, big and small.",
        "We understand that ITES and BPO are 24*7 working environments which are persistently advancing with contemporary technology. Our recruitment experts have the unique skills that are required to deliver superior customer service candidates and the unmatched database that we have gives us instantaneous access to talent at all levels of seniority. When you send us your requirement, we take our time to really understand the qualities that are needed in your employees and identify the right applicants who can add real value to your organisation.",
      ],
    },
  ];

  const { name } = params; // Extract id from params
  const categoryId = parseInt(name);
  const category = categories.find((cat) => cat.id === categoryId);

  // Redirect to 404 if category not found
  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-700 text-white">
        <div className="text-center p-8 bg-white rounded-lg shadow-lg max-w-md">
          <h1 className="text-6xl font-extrabold mb-4 text-blue-600">404</h1>
          <h2 className="text-3xl font-semibold mb-4 text-black">
            Page Not Found
          </h2>
          <p className="text-lg mb-6 text-black">
            Sorry, the page you’re looking for doesn’t exist.
          </p>
          <Link
            href="/"
            className="inline-block px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded hover:bg-blue-700 transition"
          >
            Go Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="relative lg:pt-20 pt-10 h-[400px]">
        <img
          src={category.image}
          width={1000}
          height={1000}
          className="w-screen absolute -z-30 object-cover object-center h-[400px] inset-0"
        />
        <h3 className="text-2xl p-10 font-bold text-zinc-400 ">
          {category.subheading}
        </h3>
        <Link
          href={"/Contact"}
          className="ml-10 bg-blue-600 text-white font-semibold px-5 py-3 rounded-full"
        >
          Talk To An Expert
        </Link>
      </div>

      <div className="text-center pt-20  pb-10">
        <h2 className="text-sm font-semibold text-teal-400 mb-2">
          WE ARE SPECIALIZED AT
        </h2>
        <h3 className="text-4xl font-bold text-blue-700">{category.title}</h3>
      </div>
      <div className="px-10  max-w-6xl mx-auto">
        {category.paragraphs.map((para, index) => (
          <p key={index} className="mb-6 text-center text-gray-600 ">
            {para}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Page;
