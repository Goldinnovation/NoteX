import { useState } from 'react';
import PopUpHomeBtn from './popupbtn.tsx';



export const Home = () => {
  const [showPopup, setShowPopup] = useState(false)

  const handleButtonClick = () => {
    setShowPopup(true)
  }; 
  
  const handlePopupClose = () => {
    setShowPopup(false)
  }
  return (
    <>
      <h1 className="titlename-home">Back Board </h1>
      <div className="create-area">
        <div className="tryout">hallo</div>
      <div className='popup-center'>
      <PopUpHomeBtn trigger={showPopup} onClose={handlePopupClose} >
      </PopUpHomeBtn>
      </div>
      
      </div>
      <div className="add-btn-area">   
      <button  onClick={handleButtonClick} className='create-btn'>+</button></div>
      
     
       
   
    </>
  );
};


