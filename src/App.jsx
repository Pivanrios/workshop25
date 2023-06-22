import { useState } from "react";{//import the useState hook from react
}

// Write your Color component here
const Color = ({color, setSelectedColor}) => {
  return <div className={color}
          onClick={()=>{setSelectedColor(color)
          console.log("selected color:",color)}}></div> 
          {//use the onclick event to change the sate of our color
          }
}

const App = () => {
  const[selectedColor, setSelectedColor] = useState("");
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>{//makes our current color           
        }
      </div>
      <div id="colors-list">{/* colors go here */
      } <Color color="red" setSelectedColor={setSelectedColor}/>
        <Color color="blue" setSelectedColor={setSelectedColor}/>
        <Color color="yellow" setSelectedColor={setSelectedColor}/>{//          
        }
      </div>
    </div>
  );
};

export default App;
