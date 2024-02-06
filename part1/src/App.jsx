import Hello from "./Tweeter"
import './App.css';
const App = () =>  {
  const num = 32;
  // const now  = new Date()
  // const a = 10 
  // const b =20 
  // console.log(now , a+b);
  // console.log("Hello From Component")

  const friends = [
    {name:"Peter" , age:4},
    {name:"Kumar" , age:35},
  ]
  
  return (
    <>
      <div>
        {/* <p>Hello World</p> */}
        {/* {a} plus {b} is {a+b} */}
        <Hello name="Kumar" age={32} />
        <Hello name="Shubham" age={num - 10} />
        <Hello name="Kohinoor" age={num -10 -19} />
        <Hello name="Kammo" age={num - 2*3} />
      </div>
      <p>
        My Friends are as follows :
        <br /><br />
        {friends[0].name} with age  {friends[0].age} <br />
        {friends[1].name} with age  {friends[1].age}
      </p>

    </>
  );
}

export default App
