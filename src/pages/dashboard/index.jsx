// src/pages/dashboard/index.jsx
import Navigation from "../../components/navs"; 
import HeroSection from "../../pages/dashboard/components/hero";
import Dashboard from "./components/overview";
import { capitalize } from "lodash";
import { useLoaderData } from "react-router-dom";



function App() {
  const data = useLoaderData();
  console.log("🚀 ~ Preview ~ data:", data);
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <div className="flex-1 pt-16 lg:ml-64"> 
        <HeroSection username={capitalize(data.userName)} />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
