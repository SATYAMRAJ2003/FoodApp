// import React from 'react';

// export default function Input({ value, onChange }) {
//   return (
//     <input
//       type="text"
//       placeholder="Search Meals"
//       value={value}
//       onChange={onChange}
//       className="w-full sm:w-2/3 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
//     />
//   );
// }
import React from 'react';

export default function Input({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search Meals"
      className="border p-2 rounded-md w-64 bg-gray-100 outline-none"
      value={value}
      onChange={onChange}
    />
  );
}
