import React from "react";
import Navbar2 from "../components/Navbar2";
import Tags from "../components/Tags";
import ProfileCard from "../components/ProfileCard";

const Browse = () => {
  const TagsArray = [
    "React Native",
    "Node.js",
    "React.js",
    "Django",
    "C#",
    "Flutter",
    "AWS",
    "Flutter",
    "Angular.js",
    "Python",
    "Java",
    "HTML/CSS",
    "TailwindCSS",
    "Kubernetes",
    "Docker",
    "php",
    "Laravel",
    "ASP.net",
    "Wordpress",
    "Firebase",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "iOS Swift",
    "Kotlin",
    "TypeScript",
    "DevOps",
    "Cloud Computing",
    "Laravel",
    "AWS Cloud",
    "Cloud development",
    "Cloud DevOps",
    "Data Architecture",
  ];

  return (
    <div className="w-full h-full flex flex-col items-center min-h-screen overflow-x-hidden">
      <Navbar2 light />
      <div
        style={{ maxWidth: "1280px" }}
        className="w-full h-full px-4 flex-shrink-0"
      >
        <div className="w-full flex flex-wrap h-full items-center flex-shrink-0 gap-3 py-6">
          {TagsArray.map((item) => (
            <Tags key={item} item={item} />
          ))}
        </div>

        <div className="w-full grid grid-cols-4 h-full items-center flex-shrink-0 gap-x-4 gap-y-6 py-6">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((item) => (
            <ProfileCard />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Browse;
