// import React from 'react';
// import { useStudents } from '../../contexts/StudentContext';
// import StudentCard from './StudentCard';
// import FilterDropdown from '../shared/FilterDropdown';
// import ViewToggle from '../shared/ViewToggle';
// import { mockData } from '../../data/mockData';

// const StudentsOverview = () => {
//   const { 
//     filteredStudents, 
//     filters, 
//     updateFilters, 
//     clearFilters, 
//     viewMode, 
//     setViewMode 
//   } = useStudents();

//   const handleFilterChange = (filterType, value) => {
//     updateFilters({ [filterType]: value });
//   };

//   return (
//     <div className="students-overview">
//       <div className="overview-header">
//         <h2>Students Overview</h2>
//         <ViewToggle viewMode={viewMode} onViewModeChange={setViewMode} />
//       </div>

//       <div className="filters-container">
//         <FilterDropdown
//           label="Grade Level"
//           value={filters.grade}
//           options={mockData.grades}
//           onChange={(value) => handleFilterChange('grade', value)}
//         />

//         <FilterDropdown
//           label="Risk Level"
//           value={filters.riskLevel}
//           options={mockData.riskLevels}
//           onChange={(value) => handleFilterChange('riskLevel', value)}
//         />

//         <FilterDropdown
//           label="Subject Area"
//           value={filters.subject}
//           options={mockData.subjects}
//           onChange={(value) => handleFilterChange('subject', value)}
//         />

//         <div className="search-container">
//           <input
//             type="text"
//             placeholder="Search students..."
//             className="search-input"
//             value={filters.search}
//             onChange={(e) => handleFilterChange('search', e.target.value)}
//           />
//           <i className="fas fa-search search-icon"></i>
//         </div>

//         {Object.values(filters).some(filter => filter !== '' && !filter.startsWith('All')) && (
//           <button className="clear-filters-btn" onClick={clearFilters}>
//             <i className="fas fa-times"></i>
//             Clear Filters
//           </button>
//         )}
//       </div>

//       <div className="students-count">
//         Showing {filteredStudents.length} of {mockData.students.length} students
//       </div>

//       <div className={`students-container ${viewMode}`}>
//         {filteredStudents.length === 0 ? (
//           <div className="no-results">
//             <i className="fas fa-search"></i>
//             <h3>No students found</h3>
//             <p>Try adjusting your filters to see more results.</p>
//           </div>
//         ) : (
//           filteredStudents.map(student => (
//             <StudentCard 
//               key={student.id} 
//               student={student} 
//               viewMode={viewMode}
//             />
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default StudentsOverview;
import React from 'react';
import { useStudents } from '../../contexts/StudentContext';
import StudentCard from './StudentCard';
import FilterDropdown from '../shared/FilterDropdown';
import ViewToggle from '../shared/ViewToggle';
import { mockData } from '../../data/mockData';

const StudentsOverview = () => {
  const { 
    filteredStudents, 
    filters, 
    updateFilters, 
    clearFilters, 
    viewMode, 
    setViewMode 
  } = useStudents();

  const handleFilterChange = (filterType, value) => {
    updateFilters({ [filterType]: value });
  };

  return (
    <div className="students-overview">
      <div className="overview-header">
        <h2>Students Overview</h2>
        <ViewToggle viewMode={viewMode} onViewModeChange={setViewMode} />
      </div>

      <div className="filters-container">
        <FilterDropdown
          label="Grade Level"
          value={filters.grade}
          options={mockData.grades}
          onChange={(value) => handleFilterChange('grade', value)}
        />
        
        <FilterDropdown
          label="Risk Level"
          value={filters.riskLevel}
          options={mockData.riskLevels}
          onChange={(value) => handleFilterChange('riskLevel', value)}
        />
        
        <FilterDropdown
          label="Subject Area"
          value={filters.subject}
          options={mockData.subjects}
          onChange={(value) => handleFilterChange('subject', value)}
        />

        <div className="search-container">
          <input
            type="text"
            placeholder="Search students..."
            className="search-input"
            value={filters.search}
            onChange={(e) => handleFilterChange('search', e.target.value)}
          />
          <i className="fas fa-search search-icon"></i>
        </div>

        {Object.values(filters).some(filter => filter !== '' && !filter.startsWith('All')) && (
          <button className="clear-filters-btn" onClick={clearFilters}>
            <i className="fas fa-times"></i>
            Clear Filters
          </button>
        )}
      </div>

      <div className="students-count">
        Showing {filteredStudents.length} of {mockData.students.length} students
      </div>

      <div className={`students-container ${viewMode}`}>
        {filteredStudents.length === 0 ? (
          <div className="no-results">
            <i className="fas fa-search"></i>
            <h3>No students found</h3>
            <p>Try adjusting your filters to see more results.</p>
          </div>
        ) : (
          filteredStudents.map(student => (
            <StudentCard 
              key={student.id} 
              student={student} 
              viewMode={viewMode}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default StudentsOverview;