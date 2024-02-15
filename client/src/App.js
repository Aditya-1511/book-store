import "./App.css";
import Footer from "./components/footer/Footer";
import LandingPage from "./components/landingPage/LandingPage";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <LandingPage />
      </main>
      <Footer />
    </>
  );
}

export default App;
