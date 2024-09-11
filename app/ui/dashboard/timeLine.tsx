const timelineData = [
  {
    title: "Freelancer",
    time: "2013 - present",
    description: "My current employment. Way better than the position before!",
    direction: "r",
  },
  {
    title: "Apple Inc.",
    time: "2011 - 2013",
    description:
      "My first employer. All the stuff I've learned and projects I've been working on.",
    direction: "l",
  },
  {
    title: "Harvard University",
    time: "2008 - 2011",
    description:
      "A description of all the lectures and courses I have taken and my final degree?",
    direction: "r",
  },
];

const Timeline = () => (
  /*
  <ul classNameName="timeline">
    {timelineData.map((item, index) => (
      <li key={index}>
        <div classNameName={`direction-${item.direction}`}>
          <div classNameName="flag-wrapper">
            <span classNameName="flag">{item.title}</span>
            <span classNameName="time-wrapper">
              <span classNameName="time">{item.time}</span>
            </span>
          </div>
          <div classNameName="desc">{item.description}</div>
        </div>
      </li>
    ))}
  </ul>
  */

  <ul className="timeline">
    {timelineData.map((item, index) => (
      <li key={index}>
        <div className={`direction-${item.direction}`}>
          <div className="flag-wrapper">
            <span className="flag text-gray-800 font-bold">{item.title}</span>
            <span className="time-wrapper">
              <span className="time text-gray-800 font-semibold">
                {item.time}
              </span>
            </span>
          </div>
          <div className="desc text-gray-800 font-bold rounded-md">
            {item.description}
          </div>
        </div>
      </li>
    ))}
  </ul>
);

export default Timeline;
