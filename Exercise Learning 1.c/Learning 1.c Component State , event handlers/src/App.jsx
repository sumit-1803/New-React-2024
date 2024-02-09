import { useState } from "react";
import './App.css';

const App = () => {
  const [ counter , setCounter ] = useState(0);
  const [contract , setContract] = useState("Default Contract");
  const [textColor,setTextColor]=useState("Green");

  const handleBlack=()=>{
    setContract("Black Contract")
    setTextColor("Black")
  }
  const handlePurple=()=>{
    setContract("Purple Contract")
    setTextColor("Purple")
  }

  setTimeout(
    () => setCounter(counter+1),
    1000
  )

console.log("rendering...",counter);

  return (
    <>
      <h2>The Website That Does Very Less </h2>

      <div className="contract" style={{ color: textColor }}>
        {contract}
      </div>
      <div className="btns">
        <button onClick={handleBlack}>Black Button</button>
        <button onClick={handlePurple}>Purple Button</button>
      </div>

      <div className="Box">
        You have been on this website since {counter} seconds
      </div>
    </>
  );
};

export default App