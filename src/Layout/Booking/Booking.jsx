import { useEffect, useState } from "react";
import useApi from "../../ContextApi/useApi";
import ShortBanner from "../../Sheare/shortBanner";

const Booking = () => {
  const [bookings, setBookings] = useState([]);
  const { user } = useApi();
  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
      });
  }, [url]);
  const handleDelete = (id)=>{
    console.log(id)
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Booking;
