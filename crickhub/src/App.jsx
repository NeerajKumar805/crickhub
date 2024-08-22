import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar";

function App() {
  return (
    <div>
      <Navbar />
      {/* Other content of App */}
      <Outlet /> {/* This will render child routes */}
    </div>
  );
}

export default App;
