import ShortBanner from "../../Sheare/shortBanner";
import ChackOutForm from "./ChackOutForm";

const CheckOut = () => {
    return (
        <div >
            <ShortBanner>Check Out</ShortBanner>
            <div className="my-32">

            <ChackOutForm></ChackOutForm>
            </div>
        </div>
    );
};

export default CheckOut;