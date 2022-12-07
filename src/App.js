import React from "react";
import axios from "axios";
import { useState } from "react";
const App=()=> {

  // states
const [image, setImage] = useState('office');
const clientId = "-vnra-cQVJk5Tm8pnUStm65eT6pyKFErwHzDy6GSzws";
const [result, setResult] = useState([]);


// handle change funtion
const handleChange = (event) => {
 setImage(event.target.value);
};

// handle submit funtiono
const handleSubmit = () => {
console.log(image);
const url = "https://api.unsplash.com/search/photos?page=1&query=" + image + "&client_id=" + clientId;
axios.get(url).then((response) => {
console.log(response);
setResult(response.data.results);
});
};
return (



<div className="app">
 <div className="heading">
   <h1>React Image Search Using Unsplash API.</h1>
 </div>
 
 <div className="input">
  <input onChange={handleChange} type="text" name="image" 
    value={image}
     placeholder="Search for images"/>
 </div>
  <button onClick={handleSubmit} type="submit">Search</button>
<div className="result">
  {result.map((image) => (
  <>
   <div className="card">
    <img src={image.urls.small} />
    <p className="username"> Photo by {image.user.name}</p>
    <p className="like">👍 {image.likes}</p>
   </div>
  </>
   ))}
</div>
</div>
);
  }
export default App;