// src/pages/dashboard/index.jsx
import Navigation from "../../components/navs"; 
import HeroSection from "../../pages/dashboard/components/hero";
import Dashboard from "./components/overview";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <div className="flex-1 pt-16 lg:ml-64"> 
        <HeroSection />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
