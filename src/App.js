import './App.css';
import React, { useEffect, useState } from 'react'
import NaviBar from './components/NaviBar';
import { quantum } from 'ldrs'
quantum.register()



function App() {
  const [searchTerm, setsearchTerm] = useState('');
  const [pageNumber, setpageNumber] = useState(0);
  const [isLoading, setIsLoading] = useState(false)
  const [readme, setReadme] = useState(null);
  const [repo, setRepo] = useState([]);
  const [user, setUser] = useState("")
  console.log({ searchTerm });
  const onSearchCoderHub = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loading
    try {
      const response = await fetch(`https://api.github.com/search/repositories?q=${searchTerm}&page=${pageNumber}`);
      const data = await response.json();
      setRepo(data.items);
      setpageNumber(pageNumber + 1);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
    setIsLoading(false); // End loading
  };
  const fetchReadMe = async () => {
    const response = await fetch(`https://api.github.com/repos${window.location.pathname}/readme`)
    const data = await response.json()
    console.log("HI +", {data});
    const decodeBase64 = atob(data.content)
    console.log({data}, {decodeBase64})
    setReadme(decodeBase64)
  }
  const fetchUser = async () => {
    const response = await fetch(`https://api.github.com/search/users?q=${searchTerm}`)
    const data = await response.json()
    console.log("User: ", {data});
    setUser(data.items)
  }
  useEffect(() =>
  {if (window.location.pathname.length > 1 ) 
    {
      fetchReadMe(); 
    }
  }
  , []);
  if (isLoading) {
    // Render your quantum loader here
    return (<div className='loader-container'> 
       {React.createElement('l-quantum', {
      size: "60",
      speed: "1.5",
      color: "black",
    })}
    </div>
    )
  }

  return (
    <div>
      <NaviBar onSearchCoderHub = {onSearchCoderHub}
      fetchUser ={fetchUser}
      setsearchTerm = {setsearchTerm} 
      setpageNumber ={setpageNumber}  
      repo ={repo}
      pageNumber = {pageNumber}
      readme = {readme}
      user = {user}
      />
    </div>


  );
}

export default App;
