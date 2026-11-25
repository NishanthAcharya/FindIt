import { useState } from "react";

function ReportForm({ addItem }) {

    const [name,setName] = useState("");
    const [categories,setCategories] = useState("");
    const [status,setStatus] = useState("");
    const [location,setLocation] = useState("");
    const [date,setDate] = useState("");
    const [description,setDescription] = useState("");
    const [image,setImage] = useState("");
    const [imgUrl,setImgUrl] = useState("");
    const [mobNo,setMobNo] = useState("");

    function storeName(e)
    {
        setName(e.target.value);
    }

    function storeCategory(e)
    {
        setCategories(e.target.value);
    }

    function storeStatus(e)
    {
        setStatus(e.target.value);
    }

    function storeLocation(e)
    {
        setLocation(e.target.value);
    }

    function storeDate(e)
    {
        setDate(e.target.value);
    }

    function storeDescription(e)
    {
        setDescription(e.target.value);
    }

function storeImage(e) {
    let imgFile = e.target.files[0];

    if (!imgFile) return;

    // Maximum size: 1 MB
    if (imgFile.size > 1 * 1024 * 1024) {
        alert("Image size must be less than 1 MB!");
        e.target.value = "";
        return;
    }

    setImage(imgFile);

    const reader = new FileReader();

    reader.onload = () => {
        setImgUrl(reader.result);
    };

    reader.readAsDataURL(imgFile);
}

    function storeMobileNo(e)
    {
        setMobNo(e.target.value);
    }

    function submitReport(e)
    {
        e.preventDefault();
        console.log(name, categories, status, location, date, description, image);
    
        if (name!=="" && categories!=="" && status!==""&&location!==""&&date!==""&&description!==""&&image!==""&&mobNo!=="")
        {
            const newItem = {
                name : name,
                categories : categories,
                status : status,
                location : location,
                date : date,
                description : description,
                image : imgUrl,
                mobNo : mobNo
            }
        addItem(newItem); 
        setName("");
        setCategories("");
        setStatus("");
        setLocation("");
        setDate("");
        setDescription("");
        setImage("");
        setImgUrl("");
        setMobNo("");
        }
        else{
            alert("Please Fill All Details !!")
        }
        
    }


  return (

    <div className="report-form">
      <h2>Report an Item</h2>

      <form onSubmit={submitReport}>
            <label>Item Name</label>
            <input type="text" value={name} onChange={storeName} placeholder="Enter Item Name" />

            <label htmlFor="categories"></label>
            <select onChange={storeCategory}  value={categories}>
                <option value="">Select Category</option>
                <option >Electronics</option>
                <option >Wallet</option>
                <option >ID Cards</option>
                <option >Bags</option>
                <option >Others</option>
            </select>
                
            <label>Report Type</label>
            <select onChange={storeStatus} value={status}>
                <option value="">Select Type</option>
                <option>Lost</option>
                <option>Found</option>
            </select>

            <label>Location</label>
            <input type="text" placeholder="Enter Location" onChange={storeLocation} value={location} />

            <label>Date</label>
            <input type="date"  onChange={storeDate} value={date}/>

            <label>Description</label>
            <textarea placeholder="Describe the item..." rows="4" onChange={storeDescription} value={description}></textarea>

            <label>
                {status === "Lost"?"Your Mobile Number":"Founder's Mobile number"}
            </label>
            <input type="tel" value={mobNo} onChange={storeMobileNo} placeholder="Ex: 9087654321"/>

            <label>Upload Image</label>
            <input type="file" accept="image/*" onChange={storeImage}/>
            <img src={imgUrl} alt={name} />

            <button type="submit" >Submit Report</button>
      </form>
    </div>
  );
}

export default ReportForm;