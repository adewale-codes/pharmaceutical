import { useState } from "react";

interface CompanyDetailsProps {
  onSubmit: () => void;
}

const CompanyDetails: React.FC<CompanyDetailsProps> = ({ onSubmit }) => {
  const [companyName, setCompanyName] = useState("");
  const [country, setCountry] = useState("");
  const [description, setDescription] = useState("");
  const [interests, setInterests] = useState({
    buying: false,
    selling: false,
    license: false,
  });

  const handleSave = () => {
    if (companyName && country) {
      onSubmit();
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Introduce your company</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Company name*</label>
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="Pharmit"
              className="w-full border rounded-lg px-3 py-2 mt-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Country*</label>
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 mt-2"
            >
              <option value="">Select your country</option>
              <option value="Afghanistan">Afghanistan</option>
              <option value="Albania">Albania</option>
              <option value="Algeria">Algeria</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">
              Provide a short description about your company
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Write here"
              className="w-full border rounded-lg px-3 py-2 mt-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">We are interested in*</label>
            <div className="flex space-x-4 mt-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={interests.buying}
                  onChange={() =>
                    setInterests({ ...interests, buying: !interests.buying })
                  }
                />
                <span className="ml-2">Buying</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={interests.selling}
                  onChange={() =>
                    setInterests({ ...interests, selling: !interests.selling })
                  }
                />
                <span className="ml-2">Selling</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={interests.license}
                  onChange={() =>
                    setInterests({ ...interests, license: !interests.license })
                  }
                />
                <span className="ml-2">License</span>
              </label>
            </div>
          </div>
          <button
            type="button"
            onClick={handleSave}
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default CompanyDetails;
