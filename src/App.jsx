
import './App.css'
import {React, useRef} from 'react'
import img1 from './Frame 1000015418.png'
import img2 from './Frame 1000015416.png'
import img3 from './Frame 1000015418.png'
import img4 from './Frame 1000015416.png'
import img5 from './Frame 1000015418.png'
import img6 from './Frame 1000015416.png'
import img7 from './Frame 1000015418.png'


function App() {
 
  let imageContainerRef = useRef(null)

const images = [img1, img2, img3, img4, img5, img6, img7]

const prev = () => imageContainerRef.current.scrollLeft -= 250
const next = () => imageContainerRef.current.scrollLeft += 250

  return (

    
    <>
      <img id='i5' src="Ellipse 311.png" alt="" />
      <img id='i8' src="Ellipse 312.png" alt="" />
      <img id='i7' src="Ellipse 313.png" alt="" />
      <img id='i2' src="Ellipse 314.png" alt="" />
      <img id='i3' src="Ellipse 315.png" alt="" />
      <img id='i4' src="Ellipse 316.png" alt="" />
      <img id='i1' src="Ellipse 317.png" alt="" />
      
       
       <div id='c1'></div>
       <div id='c2'></div>
       
       <div className='page-container'>
      <div className='content'>
        <div className='prev' onClick={prev}></div>
        <div className='slide-panel'ref={imageContainerRef}>
          {images.map(image => {return (<img src={image}/>)})}
        </div>
        <div className='next' onClick={next}></div>

      </div>
      </div>
       
       

         

    
    </>
  )
}

export default App
