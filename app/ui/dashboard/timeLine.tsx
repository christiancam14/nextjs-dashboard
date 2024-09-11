import Reveal from "./reveal";

const timelineData = [
  {
    title: "Freelancer",
    time: "2024 - present",
    description:
      "Develops content updates and improvements for company websites built on WordPress, implementing custom adjustments, optimizing SEO, and enhancing site functionality and security.",
  },
  {
    title: "Hexa Solutions S.A.S.",
    time: "2022 - 2024",
    description:
      "Led web portal development in WordPress, creating custom PHP plugins for content management and SEO improvements. Revamped an Angular-based payment gateway, reducing abandonment rates and increasing digital transactions. Developed web applications, including a pet tracking manager and a business data collection platform.",
  },
  {
    title: "Hyperlink S.A.S",
    time: "2021 - 2022",
    description:
      "Designed dynamic, client-specific web templates using HTML, jQuery, and Bootstrap, optimizing for fast load times and seamless user experiences.",
  },
  {
    title: "Roojotech S.A.S",
    time: "2021",
    description:
      "Developed a custom administrative platform using Microsoft Power Platform, streamlining operations and automating processes to enhance productivity.",
  },
];

const Timeline = () => (
  <ul className="timeline">
    {timelineData.map((item, index) => (
      <li key={index}>
        <div className={`direction-${index % 2 === 0 ? "l" : "r"}`}>
          <div className="flag-wrapper">
            <span className="flag text-gray-800 font-extrabold">
              {item.title}
            </span>
            <span className="time-wrapper">
              <span className="time text-gray-800 font-semibold">
                {item.time}
              </span>
            </span>
          </div>
          <Reveal>
            <div className="desc text-gray-800 md:text-sky-100 font-bold rounded-md">
              {item.description}
            </div>
          </Reveal>
        </div>
      </li>
    ))}
  </ul>
);

export default Timeline;
