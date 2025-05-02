// src/App.jsx
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
