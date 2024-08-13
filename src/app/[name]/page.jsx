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
      paragraphs: [
        "Find top executives with our specialized search services.",
        "We ensure a perfect match for your leadership needs.",
      ],
    },
    {
      id: 2,
      title: "Training & Development",
      paragraphs: [
        "Empower your team with cutting-edge training programs.",
        "Our development services enhance skills and productivity.",
      ],
    },
    {
      id: 3,
      title: "Permanent Staffing",
      paragraphs: [
        "Hire the best talent for long-term success.",
        "We provide candidates who are a great fit for your company culture.",
      ],
    },
    {
      id: 4,
      title: "Contract Staffing",
      paragraphs: [
        "Flexible staffing solutions for temporary needs.",
        "Find skilled professionals for your short-term projects.",
      ],
    },
    {
      id: 5,
      title: "RPO",
      paragraphs: [
        "Recruitment Process Outsourcing to streamline hiring.",
        "Let us manage your recruitment processes efficiently.",
      ],
    },
    {
      id: 6,
      title: "Information Technology",
      paragraphs: ["Explore innovations and solutions in the IT sector."],
    },
    {
      id: 7,
      title: "Telecom",
      paragraphs: [
        "Discover the latest in telecommunications and network technology.",
      ],
    },
    {
      id: 8,
      title: "BFSI",
      paragraphs: [
        "Insights and advancements in Banking, Financial Services, and Insurance.",
      ],
    },
    {
      id: 9,
      title: "Retail",
      paragraphs: ["Trends and technologies shaping the retail industry."],
    },
    {
      id: 10,
      title: "BPO/ITES",
      paragraphs: [
        "Business Process Outsourcing and IT Enabled Services overview.",
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
          <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-lg mb-6">
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
        <Image
          src={"/serbanner.jpg"}
          width={1000}
          height={1000}
          className="w-screen absolute -z-30 object-cover object-center h-[400px] inset-0"
        />
        <h3 className="text-4xl p-10 font-bold text-white ">
          {category.title}
        </h3>

      </div>

      <div className="text-center pt-20  pb-10">
          <h2 className="text-xl font-semibold text-green-600 mb-2">WE ARE SPECIALIZED AT</h2>
          <h3 className="text-4xl font-bold text-blue-700">{category.title}</h3>
        </div>
      <div className="px-10 py-10 max-w-4xl mx-auto">
        {category.paragraphs.map((para, index) => (
          <p key={index} className="mb-6 text-center text-gray-600 text-lg">
            {para}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Page;
