import "./App.css";
import ReportForm from "./ReportForm.jsx"
import { useEffect,useState } from "react";

function App() {

  const [categories,setCategories] = useState("All")
  const [showForm,setShowForm] = useState(false);
  const [searchText,setSearchText] = useState("")
  const [items,setItems] = useState(()=>{
    return localStorage.getItem("items")
    ? JSON.parse(localStorage.getItem("items"))
    :[];
  })
  console.log(items)
  useEffect(()=>{
    localStorage.setItem("items",JSON.stringify(items))
  },[items])

     console.log("Search text:", searchText);
     
  const filteredItems = items.filter((item)=>{
    const matchesCategory = categories === "All" || item.categories === categories;
    const matchesSearch = item.name.toLowerCase().includes(searchText.toLowerCase());
    console.log(item.name, matchesSearch)
    console.log("Name:", item.name, "| Search:", searchText);
    return matchesCategory && matchesSearch
  })

  function reportItem(){
    setShowForm(true)
  }

  function addItem(newItem)
  {
      setItems([...items,newItem]);
      setShowForm(false);


  }
  function deleting(index)
  {
     const delet = items.filter((item,i)=>
      {
        return i !== index;
     })
     setItems(delet)
  }

  function searching(e)
  {
      setSearchText(e.target.value)

  }

  return (
    <div>
        <nav className="navbar">
            <h2>FindIt</h2>
            <button onClick={reportItem}>Report Item</button>   
        </nav>

        {showForm && <ReportForm addItem={addItem} />}

        <div className="hero">
            <h1>Lost something? Find it here.</h1>
            <p>Find lost items or help someone get their belongings back.</p>
        </div>

        <div className="search">
            <input type="text" placeholder="Search items..." onChange={searching}/>
            <button>Search</button>
        </div>

        <div className="categories">
            <button onClick={()=>setCategories("All")}>All</button>
            <button onClick={()=>setCategories("Electronics")}>Electronics</button>
            <button onClick={()=>setCategories("Wallet")}>Wallet</button>
            <button onClick={()=>setCategories("ID Cards")}>ID Cards</button>
            <button onClick={()=>setCategories("Bags")}>Bags</button>
            <button onClick={()=>setCategories("Others")}>Others</button>
        </div>

      <div className="items">
         {filteredItems.map((item,index)=>(
          <div className="card" key={index}>
               <img src={item.image} alt={item.name} />
               <h3>{item.name}</h3>
               <p>Found/Lost near {item.location}</p>
               <span className={item.status === 'Lost'? "lost" : "found"}>
                  {item.status}
               </span>

               <p>📍 {item.location}</p>
               <p>📞 {item.mobNo}</p>

        
               <button onClick={()=>deleting(index)}>Delete</button>
                    
          </div>
        
         ))}
      </div>
    </div>
  );
}
export default App;