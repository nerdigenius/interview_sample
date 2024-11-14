
import profilePic from "../assets/profile.png"
type TestimonialCardProps = {
  quote: string;
  authorName: string;
  location: string;
  profileImage: string;
};

const TestimonialCard = ({ quote, authorName, location, profileImage }: TestimonialCardProps) => {
  return (
    <div className="flex flex-col justify-between w-full bg-yellow-500 border-2 border-dashed border-blue-600 px-[10%] py-[5%] relative text-gray-800 h-[335px] lg:h-[555px]">
      <p className="text-lg italic mb-4">" {quote} "</p>
      <div className="flex items-center justify-between mt-4">
        <div>
          <p className="text-sm font-semibold">{authorName}</p>
          <p className="text-xs text-gray-700">{location}</p>
        </div>
        <img src={profilePic} alt="Author" className="w-10 h-10 rounded-full " />
      </div>
    </div>
  );
};

export default TestimonialCard;