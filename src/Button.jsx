// import React from 'react';

// export default function Button({ onClick }) {
//   return (
//     <button onClick={onClick} className="bg-orange-400 text-white px-6 py-2 rounded-md hover:bg-orange-500 transition-all shadow-md">
//       Search
//     </button>
//   );
// }
import React from 'react';

export default function Button({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-orange-400 hover:bg-orange-500 text-white px-4 py-2 rounded-md"
    >
      Search
    </button>
  );
}
