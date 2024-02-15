import "./App.css";
import LandingPage from "./components/landingPage/LandingPage";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <LandingPage />
      </main>
    </>
  );
}

export default App;
