import { useState } from "react";

interface PersonalDetailsProps {
  onNext: () => void;
}

const PersonalDetails: React.FC<PersonalDetailsProps> = ({ onNext }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleNext = () => {
    if (name && surname && phoneNumber) {
      onNext();
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Introduce yourself</h2>
        <p className="text-gray-500 mb-6">
          This basic information will help us know you
        </p>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Name*</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John"
              className="w-full border rounded-lg px-3 py-2 mt-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Surname*</label>
            <input
              type="text"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              placeholder="Doe"
              className="w-full border rounded-lg px-3 py-2 mt-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">
              Phone number (incl. country code)*
            </label>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="i.e +234"
              className="w-full border rounded-lg px-3 py-2 mt-2"
            />
          </div>
          <button
            type="button"
            onClick={handleNext}
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default PersonalDetails;
