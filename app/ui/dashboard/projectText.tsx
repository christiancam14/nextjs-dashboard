import { useEffect, useState } from "react";

interface Props {
  text: string;
  wordsPerSegment?: number;
  isPaused: boolean;
}

const splitTextIntoSegments = (text: string, wordsPerSegment: number) => {
  const words = text.split(" ");
  const segmentsArray = [];

  for (let i = 0; i < words.length; i += wordsPerSegment) {
    segmentsArray.push(words.slice(i, i + wordsPerSegment).join(" "));
  }

  return segmentsArray;
};

export const ProjectText = ({ text, wordsPerSegment = 4, isPaused }: Props) => {
  const [segments, setSegments] = useState<string[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  // Split the text into segments whenever the text or wordsPerSegment changes
  useEffect(() => {
    const segmentsResult = splitTextIntoSegments(text, wordsPerSegment);
    setSegments(segmentsResult);
  }, [text, wordsPerSegment]);

  // Control the interval for segment changes
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) =>
          prevIndex < segments.length - 1 ? prevIndex + 1 : 0
        );
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [segments, isPaused]);

  return (
    <div className="cont-desc">
      {segments.map((segment, index) => (
        <p
          className={`text-sm py-1 ${index === activeIndex ? "active" : ""}`}
          key={index}
        >
          {segment}
        </p>
      ))}
      <p>{`isPaused: ${isPaused}`}</p>
    </div>
  );
};
