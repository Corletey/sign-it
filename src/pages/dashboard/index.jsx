//src/pages/dashboard/index.jsx
import Sidebar from "../../components/sidebar";
import HeroSection from "../../pages/dashboard/components/hero";
import Dashboard from "./components/overview";
function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <HeroSection />
        <Dashboard/>
      </div>
    </div>
  );
};

export default App;
