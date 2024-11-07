import { Link } from "react-router-dom";
import { cardContents } from "./constant.js"; // Import the card contents
import Card from "./Card";
import Title from "./Title";
import arch from "./asserts/arch.jpg"; // Example image, can be used for default

const Hero = () => {
  return (
    <div className="hero flex flex-col items-center w-full mt-52">
      <Title />
      <div className="flex flex-col items-center w-full mt-52 gap-48">
        {cardContents.map((content, index) => (
          <Card
            key={index} // Use index as a key (or a unique identifier if available)
            content={content}
            image={content.image || arch} // Fallback to `arch` if image is not defined
            imagePosition={content.imagePosition}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
