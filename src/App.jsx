// import React, { useState } from 'react';
// import Input from './Input';
// import Button from './Button';
// import Header from './Header';
// import GetRecipre from './GetRecipre';
// import Empty from './Empty';
// import DataFound from './DataFound';

// export default function App() {
//   const [searchText, setSearchText] = useState('');
//   const [data, setData] = useState([]); // Assume fetched or filtered meals
//   const [searched, setSearched] = useState(false); // Track if search clicked

//   const handleSearch = async () => {
//     setSearched(true);

//     if (!searchText.trim()) {
//       setData([]);
//       return;
//     }

//     try {
//       // Example API call (can be changed)
//       const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`

//       );
//       const result = await res.json();
//       setData(result.meals || []); // if null, set to empty array
//     } catch (error) {
//       console.error('Fetch error:', error);
//       setData([]);
//     }
//   };


//   return (
//     <div className="min-h-screen flex items-center justify-center bg-white">
//       <div className="text-center w-full max-w-xl p-3">
//         <Header />
//         <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
//           <Input
//             value={searchText}
//             onChange={(e) => setSearchText(e.target.value)}
//           />
//           <Button onClick={handleSearch} />
//         </div>
//         <div className="mt-8">
//           {!searched ? null : !searchText.trim() ? (
//             <h2 className="text-lg font-semibold text-black">
//               Please Enter Something
//             </h2>
//           ) : data.length === 0 ? (
//             <h2 className="text-gray-600 text-md">Sorry, Data Not Found</h2>
//           ) : (
//             <DataFound data={data} />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';
import Header from './Header';
import Empty from './Empty';
import RecipeCard from './RecipeCard';

export default function App() {
  const [searchText, setSearchText] = useState('');
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    if (!searchText.trim()) {
      setMeals([]);
      setError('Please Enter Something');
      return;
    }

    try {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`);
      const data = await res.json();

      if (data.meals) {
        setMeals(data.meals);
        setError('');
      } else {
        setMeals([]);
        setError('Sorry, Data Not Found');
      }
    } catch (err) {
      console.error(err);
      setMeals([]);
      setError('Something went wrong');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-white p-4">
      <Header />
      <div className="flex flex-col sm:flex-row gap-2 items-center mt-4">
        <Input value={searchText} onChange={(e) => setSearchText(e.target.value)} />
        <Button onClick={handleSearch} />
      </div>

      <div className="text-center mt-6 font-semibold text-lg text-gray-800">
        {error && <p>{error}</p>}
      </div>

      <div
  className={`mt-6 ${
    meals.length === 1
      ? 'flex justify-center'
      : 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'
  }`}
>
  {meals.map((meal) => (
    <RecipeCard key={meal.idMeal} meal={meal} />
  ))}
</div>
    </div>
  );
}
