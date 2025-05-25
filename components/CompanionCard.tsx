// Import statements
import Image from "next/image";
import Link from "next/link";

// Component interface
interface CompanionCardProps {
  id: string;
  name: string;
  topic: string;
  subject: string;
  duration: number;
  color: string;
}

// Component definition
const CompanionCard = ({ id, name, topic, subject, duration, color }: CompanionCardProps) => {
  return <article className="companion-card" style={{backgroundColor:color}}>
    {/* Header section with subject and bookmark */}
    <div className="flex justify-between items-center">
      <div className="subject-badge">{subject}</div>
      <button className="companion-bookmark">
      <Image
            src="/icons/bookmark.svg"
            alt="bookmark"
            width={12.5}
            height={15}
          />
      </button>
    </div>

    {/* Content section */}
    <h2 className="text-2xl font-bold">{name}</h2>
    <p className="text-sm">{topic}</p>

    {/* Duration display */}
    <div className="flex items-center gap-2">
      <Image
        src="/icons/clock.svg"
        alt="duration"
        width={13.5}
        height={13.5}
      />
      <p className="text-sm">{duration} minutes</p>
    </div>

    {/* Action button */}
    <Link href={`/companions/${id}`} className="w-full">
        <button className="btn-primary w-full justify-center">
          Launch Lesson
        </button>
    </Link>
  </article>;
};

export default CompanionCard;
