import { BounceLoader } from "react-spinners";
import clsx from "clsx";

const Loading = ({ isScreen = false }) => {

 const renderSpinner = () => {
   return (<div className={clsx("w-full flex items-center justify-center flex-col", isScreen ? "h-screen" : "h-full")}>
     <BounceLoader color="rgb(31, 41, 55)" />
     <p className="font-bold mt-2">Loading...</p>
   </div>)
 }

 return renderSpinner();
}

export default Loading;
