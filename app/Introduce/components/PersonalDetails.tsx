import { useState } from "react";

interface PersonalDetailsProps {
  onNext: () => void;
}

const PersonalDetails: React.FC<PersonalDetailsProps> = ({ onNext }) => {
  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const handleNext = (): void => {
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;
    if (!name || !surname || !phoneNumber) {
      alert("Please fill in all fields");
    } else if (!phoneRegex.test(phoneNumber)) {
      alert("Please enter a valid phone number including country code");
    } else {
      onNext();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="bg-white rounded-lg p-8 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Introduce yourself</h2>
        <p className="text-gray-500 mb-6 text-small md:text-base">
          This basic information will help us know you
        </p>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-small md:text-base">Name*</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John"
              className="w-full border rounded-lg px-3 py-2 mt-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-small md:text-base">Surname*</label>
            <input
              type="text"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              placeholder="Doe"
              className="w-full border rounded-lg px-3 py-2 mt-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-small md:text-base">
              Phone number (incl. country code)*
            </label>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="i.e +234"
              className="w-full border rounded-lg px-3 py-2 mt-2"
              required
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
