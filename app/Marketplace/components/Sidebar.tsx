import { useState } from "react";

type FilterItemProps = {
  title: string;
};

const FilterItem: React.FC<FilterItemProps> = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full p-4 text-left"
      >
        {title}
        <span>{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && <div className="p-4"></div>}
    </div>
  );
};

const Sidebar: React.FC = () => (
  <div className="w-full md:w-1/4  p-4">
    <h2 className="text-lg font-bold">Filters</h2>
    <FilterItem title="Form" />
    <FilterItem title="ATC Class" />
    <FilterItem title="Country of origin" />
    <FilterItem title="Dossier type" />
    <FilterItem title="Dossier status" />
  </div>
);

export default Sidebar;
