// import { useState, useEffect } from "react";
// import axios from "axios";

// const useFetch = (dataUrl) => {
//   const [data, setData] = useState([]);
//   const [fetchError, setFetchError] = useState(null);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const fetchData = async (url) => {
//         try {
//           const response = await axios.get(url);
//           setData(response.data);
//           setFetchError(null);
//         } catch (err) {
//           setFetchError(err.message);
//           setData([]);
//         }
//       };
//       fetchData(dataUrl);
//     }, [dataUrl]);
//     return () => clearInterval(interval);
//   }, 2000);
//   return { data, fetchError };
// };

// export default useFetch;
