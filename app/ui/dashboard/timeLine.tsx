import { useTranslations } from "next-intl";
import Reveal from "./reveal";

const Timeline = () => {
  const t = useTranslations("Timeline");

  const timelineData = ["data1", "data2", "data3", "data4"];

  return (
    <ul className="timeline">
      {timelineData.map((item, index) => (
        <li key={index}>
          <div className={`direction-${index % 2 === 0 ? "l" : "r"}`}>
            <div className="flag-wrapper">
              <span className="flag text-gray-800 font-extrabold">
                {t(`${item}.title`)}
              </span>
              <span className="time-wrapper">
                <span className="time text-gray-800 font-semibold">
                  {t(`${item}.time`)}
                </span>
              </span>
            </div>
            <Reveal>
              <div className="desc text-gray-800 md:text-sky-100 font-bold rounded-md">
                {t(`${item}.description`)}
              </div>
            </Reveal>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Timeline;
