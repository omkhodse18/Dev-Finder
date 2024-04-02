import { useEffect, useState } from 'react'
import Card from './components/Card';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import './App.css'

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

    <div className='flex flex-col  items-center w-[100vw] h-[100vh] bg-[rgb(234, 234, 236)]'>

      
      <div className="app flex flex-col space-y-3 w-[724px]" id='app-main-div'>
        
        <Navbar/>

        <div className='p-2 shadow-sm'>
          <div className='flex flex-row justify-between h-14 mt-7' id='searchbar-container'>
            <input 
              type='search'
              placeholder='Search user'
              id='search'
              value={inputValue}
              onChange={changeHandler}
              required
              onKeyDown={keyPressHandler}
              className='border rounded-3xl px-4 py-2 mr-2 w-[70%] focus:outline-none border-black focus:border-black font-inter text-lg '
            />

            <button onClick={clickHandler} className='bg-black text-white px-4 py-2 w-[30%] rounded-3xl font-poppins text-lg font-medium shadow-gray-500 shadow-md hover:shadow-gray-700 transition-shadow' id='search-btn'>
              SEARCH
            </button>
          </div>
        </div>


        <Card userData={userData}/>

      </div>
    </div>
  )
}

export default App
