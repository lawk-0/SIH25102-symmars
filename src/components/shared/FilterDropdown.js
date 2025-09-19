// import React from 'react';

// const FilterDropdown = ({ 
//   label, 
//   value, 
//   options, 
//   onChange, 
//   className = '' 
// }) => {
//   return (
//     <div className={`filter-dropdown ${className}`}>
//       <label className="filter-label">{label}</label>
//       <select 
//         className="filter-select"
//         value={value}
//         onChange={(e) => onChange(e.target.value)}
//       >
//         {options.map(option => (
//           <option key={option} value={option}>
//             {option}
//           </option>
//         ))}
//       </select>
//       <i className="fas fa-chevron-down filter-arrow"></i>
//     </div>
//   );
// };

// export default FilterDropdown;
import React from 'react';

const FilterDropdown = ({
  label,
  value,
  options,
  onChange,
  className = '',
}) => {
  return (
    <div className={`filter-dropdown ${className}`}>
      <label className="filter-label">{label}</label>
     <div className="relative w-full">
  <select
    className="filter-select"
    value={value}
    onChange={(e) => onChange(e.target.value)}
  >
    {options.map((option) => (
      <option key={option} value={option}>
        {option}
      </option>
    ))}
  </select>
</div>

    </div>
  );
};

export default FilterDropdown;
