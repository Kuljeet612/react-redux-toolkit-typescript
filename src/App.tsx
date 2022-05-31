import "./App.module.css";
import { Navbar } from "./app/components/Navbar";
import { Offers } from "./app/features/offers/Offers";

const App = () => {
  return (
    <>
      <Navbar />
      <Offers />
    </>
  );
};

export default App;
