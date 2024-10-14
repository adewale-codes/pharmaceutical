"use client";
import Link from "next/link";
import Image from "next/image";

interface UserCardProps {
  id: string;
  name: string;
  role: string;
  image: string;
  description: string;
}

const UserCard: React.FC<UserCardProps> = ({
  id,
  name,
  role,
  image,
  description,
}) => {
  return (
    <div className="group relative w-64 p-4 bg-white shadow-lg rounded-lg overflow-hidden">
      <Image
        className="w-full h-64 object-cover rounded-t-lg"
        src={image}
        alt={name}
        width={200}
        height={200}
      />
      <div className="absolute inset-0 flex flex-col justify-end bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="p-4">
          <h3 className="text-white font-bold text-base">{name}</h3>
          <p className="text-gray-300 text-base">{role}</p>
          <ul className="text-gray-300 list-disc pl-5 mt-2 text-base">
            {description.split(". ").map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <Link
            href={`/Staffs/${id}`}
            className="text-blue-400 text-base mt-2 block"
          >
            Read more about {name}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
