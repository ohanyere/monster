import {  useState,  type ChangeEvent} from 'react';
import CardList from './components/card-list/CardList';
import SearchBox from './components/search-box/SearchBox';
import { useQuery } from '@tanstack/react-query';


type props = {
email: string,
id: number,
name: string,
phone: string,
username: string,
website:string,
address : object,
company : object
}

  const getUsers = async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    if(!response.ok) throw new Error("failed to fetch users");
    const data = await response.json()
    return data
  }
  const App = () => {
    const[searchField, setSearchField] = useState("")
    
    const {data: monsters=[], isLoading, error} = useQuery({
      queryKey:["monster"],
      queryFn : getUsers
    })

   const onsearchChange = (event : ChangeEvent<HTMLInputElement>) : void => {
      setSearchField(event?.target.value);
  };

 
    const filteredMonsters = monsters.filter((monster : props) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    if(isLoading){
      return <p style={{display: "flex",  justifyItems: "center", alignItems : "center", height:"150%", color: "pink", }}>loading...</p>
    }

    if(error)  return <p style={{display: "flex", justifyItems: "center", alignItems : "center", height:"150", color: "red", backgroundColor: "white", fontWeight: "bold", fontSize: "1.2rem" ,  textTransform : "capitalize", textAlign:"center" }}>error occured</p>

      return (
      <div className='App'>
        <h1>Monsters Rolodex</h1>
        <SearchBox onSearchChange={onsearchChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  

  }
export default App;