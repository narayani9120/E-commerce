import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import Heart from 'react-animated-heart'
const Westernwear = () => {

  const [Western,setWestern]=useState([])
  const [error,setError]=useState()
  const [ClickState, setClick] = useState(Array(Western.length).fill(false));

  const handleclick = (index) => {
    const newClickState = [...ClickState];
    newClickState[index] = !newClickState[index];
    setClick(newClickState);
  };
  useEffect(() => {
    axios
      .get("http://localhost:4000/Westernwear")
      .then((response) => {
        setWestern(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  return (
    <div>
      <div className='image_W'>
      <img src="Back_Wes.jpg"></img>
      </div>
      
    <div className="articles">
 <div className="Container_C_W"> 
   {Western.map((post, index) => (
     <article key={index} className="Category_list"> 
       <div className="article-wrapper_W">
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

export default Westernwear
