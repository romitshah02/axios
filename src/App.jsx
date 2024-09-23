import { useState, useEffect } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import Item from './Components/img.jsx'
import './index.css'
import hide from './hide.png'
import show from './unhide.png'
function App() {
  const location = useLocation();
  const {username, password} = location.state;
  const [category, setCategory] = useState('nature')
  const [data, setData] = useState([])
  const [showPassword, setShowPassword] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const key = "lA5FEO5N3tMX1JwnWNzvpig7eIncZSeS5gmIsS1oR36Vv9vvcMP7Oebr"
  
  const fetch = async () => {
    try {
      const response = await axios.get(`https://api.pexels.com/v1/search?query=${category}`, {
        headers: {
          "Authorization": key
        }
      })
      console.log(response.data);
      setData(response.data.photos)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  const handleSearch = () => {
    setCategory(searchTerm);
    fetch();
  }

  useEffect(() => {
    fetch()
  }, [category])

  return (
    <>
      <div className='creds'>
        <h2>Username: {username}</h2>
        <h2>Password: {showPassword ? password : '********'}</h2>
      <img src={showPassword ?  hide:show } onClick={() => setShowPassword(!showPassword)} alt="" style={{height:"20px", width:"20px",backgroundColor:"transparent"}}/>
      </div>
      <div className="s">
      <input className='search' type="text" placeholder='Search ..' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <button className='search-btn' onClick={handleSearch}>
        Search
      </button>
      </div>
    <div className='img-list'>
        {data.map((e)=>{
          return <Item item={e} key={e.id}/>
        })}
    </div>
   
    </>
  )
}

export default App
