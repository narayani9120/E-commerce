import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import Heart from "react-animated-heart";
const Indian = () => {

  const [Indian,setIndian]=useState([])
  const [error,setError]=useState()
  const [ClickState, setClick] = useState(Array(Indian.length).fill(false));

  const handleclick = (index) => {
    const newClickState = [...ClickState];
    newClickState[index] = !newClickState[index];
    setClick(newClickState);
  };
  useEffect(() => {
    axios
      .get("http://localhost:4000/Indianwear")
      .then((response) => {
        setIndian(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  return (
    <div>
      <div className='image_I'>
        <img src="back_T.jpg"></img>
      </div>
    <div className="articles">
 <div className="Container_C_I"> 
   {Indian.map((post, index) => (
     <article key={index} className="Category_list"> 
       <div className="article-wrapper">
         <img src={post.Thumbnail} alt={`Foot post ${index}`} />
           <div className="article-body">
           <p>Rupee:${post.SellPrice}</p>
           <p>Discount:{post.Discount}</p>
           <p>Size:{post.Sizes}</p>
           <Heart isClick={ClickState[index]} onClick={() => handleclick(index)} />
           <button type="submit" >Buy</button>
         </div>
         
       </div>
     </article>
   ))}
 </div>
</div>
   </div>
  )
}

export default Indian
