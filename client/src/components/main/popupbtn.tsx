import React from 'react'



interface Props {
  trigger: boolean; 
  onClose: () => void
  
}

function PopUpHomeBtn(props:Props) {
  
  return props.trigger ? (
    <div className='popup'>
          <div className="popup-inner">
          <div className='close-btn-area'><button className="close-btn" onClick={props.onClose}>x</button></div>
          {/* if i would like to inherit data from home  */}
          {/* {props.children} */}
          
          <h2>Create Mood Topic</h2>
        <p>Title</p>
       <input type="text" className="titleInput-area" />
       <p>Description</p>
       <input type="text" className="descrip-area" />
       <p>Add a Cover</p>
      
       <br />
        	<button  className="enter-btn">Create</button>
          
          </div>
    </div>
  ) : null 

}

export default PopUpHomeBtn
