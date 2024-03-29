import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [username, setUsername] = useState("omkhodse18");
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);

  const url = "https://api.github.com/users/"

  async function fetchData() {
    setLoading(true);

    try {
      const response = await fetch(url+`${username}`)
      const data = await response.json();
      console.log(data);

    } catch (error) {
      console.log("Error Occures");
      setUsername("omkhodse18");
    }

    setLoading(false);
  }

  useEffect(()=>{
    fetchData();
  },[username]);

  function clickHandler(){
    console.log(inputValue);
    setUsername(inputValue);
  }

  function changeHandler(event){
    setInputValue(event.target.value);
  }

  return (
    <div>
      <div>
        <input 
          type='text'
          placeholder='Search user'
          id='search'
          value={inputValue}
          onChange={changeHandler}
        />

        <button onClick={clickHandler}>
          Search
        </button>
      </div>


    </div>
  )
}

export default App
