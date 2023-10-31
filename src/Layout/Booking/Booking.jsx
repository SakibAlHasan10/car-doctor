import { useEffect, useState } from "react";
import useApi from "../../ContextApi/useApi";
import ShortBanner from "../../Sheare/shortBanner";
import axios from "axios";

const Booking = () => {
  const [bookings, setBookings] = useState([]);
  const { user } = useApi();
  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  useEffect(() => {
    axios.get(url, {withCredentials: true})
    .then(res=>{
      setBookings(res.data)
    })
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setBookings(data);
    //   });
  }, [url]);
  const handleDelete = (id)=>{
    // console.log(id)
    const proceed = confirm("are you sure you went to delete")
    if(proceed){

        fetch(`http://localhost:5000/bookings/${id}`,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount>0){
                const remainder = bookings?.filter(book => book._id !==id)
                setBookings(remainder)
            }
        })
    }
  }

 




  const handleCOnfirm =(id)=>{
    console.log(id)
    fetch(`http://localhost:5000/bookings/${id}`, {
        method:"PATCH",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify({status:"Confirm"})
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.matchedCount>0){
            alert("your booking confirm")
            const remainder = bookings?.filter(book => book._id !==id)
            const update = bookings?.find(book => book._id=== id)
            update.status="Confirm"
            const newBookings = [update, ...remainder]
                setBookings(newBookings)
        }
    })
  }
  return (
    <div className="">
      <ShortBanner>Cart Details</ShortBanner>
      <div className="my-32">
        {bookings?.map((booking) => (
          <div
            key={booking._id}
            className="text-xl font-semibold flex justify-between mt-5 items-center border p-5 rounded-lg"
          >
            <button onClick={()=>handleDelete(booking?._id)} className="w-8 h-8 rounded-full btn-neutral">X</button>
            <img src={booking?.img} alt="" className="w-36 h-36 rounded-xl" />
            <h2>{booking?.title}</h2>
            <p>${booking?.price}</p>
            <p>${booking?.date}</p>
            <button onClick={()=>handleCOnfirm(booking?._id)} className="btn-sm">
                {
                booking?.status? <span className="text-green-500">Confirm</span>: <span>Pending</span>
                }
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Booking;
