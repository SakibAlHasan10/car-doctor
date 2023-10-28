import { useLoaderData } from "react-router-dom";
import useApi from "../../ContextApi/useApi";

const ChackOutForm = () => {
    const {user} = useApi()
    const loaderData =useLoaderData()
    const {price, img, title, _id} = loaderData
    const handleBookings = (e)=>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const price2 = price;
        const service = _id;
        const order = {
            customerName: name,
            date,
            img,
            title,
            email,
            price:price2,
            service,
        };
        // console.log(order);
        fetch(`http://localhost:5000/bookings`, {
            method:"POST",
            headers:{
                "content-type": "application/json"
            },
            body:JSON.stringify(order)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                alert('services booked successfully')
            }
            console.log(data)
        })
    }
    return (
        <div className="bg-[#F3F3F3] rounded-lg lg:p-20">
            <form onSubmit={handleBookings}>
                <div className="mb-5 flex justify-between gap-6">
                    <input type="text" 
                    placeholder="Full Name" 
                    name="name"
                    className="h-12 px-6 w-full rounded-lg" />
                    <input type="date" 
                    placeholder="Last Name" 
                    name="date"
                    className="h-12 px-6 w-full rounded-lg"/>
                </div>
                <div className="mb-5 flex justify-between gap-6">
                    <input type="email" 
                    placeholder="Your email" 
                    defaultValue={user?.email}
                    className="h-12 px-6 w-full rounded-lg" />
                    <input type="text" 
                    defaultValue={"price " + price}
                    placeholder="" className="h-12 px-6 w-full rounded-lg"/>
                </div>
                <textarea name="message" placeholder="Your Message" id="" className="w-full h-64 rounded-lg p-6"></textarea>
                <button type="submit" className="w-full btn bg-primary text-white btn-neutral border-none mt-5">Order Confirm</button>
            </form>
        </div>
    );
};

export default ChackOutForm;