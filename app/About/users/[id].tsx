import { useRouter } from "next/router";

const UserDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  if (router.isFallback || !id) {
    return <div>Loading...</div>;
  }

  const user = {
    id,
    name: "Static User",
    role: "Placeholder Role",
    image: "/images/m1.svg",
    description: "This is a placeholder description until API is connected.",
  };

  return (
    <div className="p-10">
      <div className="flex items-center">
        <img
          src={user.image}
          alt={user.name}
          className="w-48 h-48 object-cover rounded-full"
        />
        <div className="ml-8">
          <h1 className="text-4xl font-bold">{user.name}</h1>
          <p className="text-gray-600">{user.role}</p>
        </div>
      </div>
      <p className="mt-6 text-lg">{user.description}</p>
    </div>
  );
};

export default UserDetails;
