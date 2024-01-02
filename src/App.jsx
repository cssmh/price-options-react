import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import PriceOptions from "./PricOptions/PriceOptions";
import Chart from "./Chart/Chart";
import Phones from "./Phones/Phones";

function App() {
  const toastFunction = () => {
    clickToast()
  }
  const clickToast = () => toast("It's not gonna work!");
  return (
    <>
      <ToastContainer />
      <Navbar></Navbar>
      <PriceOptions toastFunction={toastFunction}></PriceOptions>
      <Chart></Chart>
      <Phones></Phones>
    </>
  );
}

export default App;
