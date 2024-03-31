import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [username, setUsername] = useState("omkhodse18");
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState("omkhodse18") 

  const url = "https://api.github.com/users/"
 
  async function fetchData() {
    setLoading(true);

    try {
      const response = await fetch(url+`${username}`)
      const data = await response.json();
      console.log(data);
      if(data.message === "Not Found"){
        toast.error("User not found");
        return;
      }
      setUserData(data);

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
    if(inputValue === ""){
      toast.warning("Enter username");
      return;
    }

    console.log(inputValue); 
    setUsername(inputValue);
  }

  function changeHandler(event){
    setInputValue(event.target.value);
  }
  
  function keyPressHandler(event){
    if(event.key === "Enter"){
      clickHandler();
    }
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
          required
          onKeyPress={keyPressHandler}
        />

        <button onClick={clickHandler}>
          Search
        </button>
      </div>


      <Card userData={userData}/>

    </div>
  )
}

export default App
