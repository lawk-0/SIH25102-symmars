// import React from 'react';

// const StatsCard = ({ 
//   icon, 
//   iconColor, 
//   number, 
//   label, 
//   className = '',
//   onClick = null 
// }) => {
//   const cardClass = `stats-card ${className} ${onClick ? 'clickable' : ''}`;

//   return (
//     <div className={cardClass} onClick={onClick}>
//       <div className="stats-icon" style={{ color: iconColor }}>
//         <i className={icon}></i>
//       </div>
//       <div className="stats-content">
//         <div className="stats-number">{number}</div>
//         <div className="stats-label">{label}</div>
//       </div>
//     </div>
//   );
// };

// export default StatsCard;
import React from 'react';

const StatsCard = ({ 
  icon, 
  iconColor, 
  number, 
  label, 
  className = '',
  onClick = null 
}) => {
  const cardClass = `stats-card ${className} ${onClick ? 'clickable' : ''}`;
  
  return (
    <div className={cardClass} onClick={onClick}>
      <div className="stats-icon" style={{ color: iconColor }}>
        <i className={icon}></i>
      </div>
      <div className="stats-content">
        <div className="stats-number">{number}</div>
        <div className="stats-label">{label}</div>
      </div>
    </div>
  );
};

export default StatsCard;
