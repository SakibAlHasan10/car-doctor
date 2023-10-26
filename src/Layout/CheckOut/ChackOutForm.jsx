
const ChackOutForm = () => {
    return (
        <div className="bg-[#F3F3F3] rounded-lg lg:p-20">
            <form >
                <div className="mb-5 flex justify-between gap-6">
                    <input type="text" placeholder="First Name" className="h-12 px-6 w-full rounded-lg" />
                    <input type="text" placeholder="Last Name" className="h-12 px-6 w-full rounded-lg"/>
                </div>
                <div className="mb-5 flex justify-between gap-6">
                    <input type="text" placeholder="Your Phone" className="h-12 px-6 w-full rounded-lg" />
                    <input type="email" placeholder="Your Email" className="h-12 px-6 w-full rounded-lg"/>
                </div>
                <textarea name="message" placeholder="Your Message" id="" className="w-full h-64 rounded-lg p-6"></textarea>
                <button type="submit" className="w-full btn bg-primary text-white btn-neutral border-none mt-5">Order Confirm</button>
            </form>
        </div>
    );
};

export default ChackOutForm;