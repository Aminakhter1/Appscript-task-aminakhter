"use client";
import { useState } from "react";
import "../styles/filter.css";

const FilterDropdown = ({ title, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="filter-item">
      <button className="filter-header" onClick={toggleDropdown}>
        {title}<span>      {isOpen?'^':'v'}</span>
      </button><hr/>
      {isOpen && (
        <div className="filter-content">
          {options.map((option, index) => (
            <label key={index}>
              <input type="checkbox" /> {option}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

const Filters = () => {
  return (
    <div className="filter-container">
      <FilterDropdown
        title="IDEAL FOR"
        options={["Men", "Women", "Baby & Kids"]}
      />
      <FilterDropdown
        title="OCASSION"
        options={["Party", "Casual", "Formal"]}
      />
      <FilterDropdown
        title="WORK"
        options={["Office", "Freelance", "Remote"]}
      />
      <FilterDropdown
        title="FABRIC"
        options={["Silk", "Cotton", "Mulmul"]}
      />
      <FilterDropdown
        title="SEGMENT"
        options={["Office", "Freelance", "Remote"]}
      />
      <FilterDropdown
        title="SUITABLE FOR"
        options={["Men", "Women", "Kids"]}
      />
      <FilterDropdown
        title="ROW MATERRIALS"
        options={["Fabric", "Plastic", "Iron"]}
      />
      <FilterDropdown
        title="PATTERN"
        options={["Office", "Freelance", "Remote"]}
      />
      {/* Add more dropdowns as needed */}
    </div>
  );
};

export default Filters;
