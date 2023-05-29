// import axios from 'axios';

// async function callAPI(text) {
//     try {
//         const response = await axios.post('./api/custom_endpoint', { text });
//         console.log(response.data);
//         // Handle the response data as needed
//     } catch (error) {
//         console.error(error);
//         // Handle errors if any
//     }
// }

// import { useState } from 'react';

// export default function YourComponent() {
//     const [inputText, setInputText] = useState('');

//     const handleInputChange = (event) => {
//         setInputText(event.target.value);
//     };

//     const handleButtonClick = () => {
//         callAPI(inputText);
//     };

//     return (
//     <div>
//         <input type="text" value={inputText} onChange={handleInputChange} backgroundcolor="green" />
//         <button onClick={handleButtonClick}>Make API Request</button>
//     </div>
//     );
// }
