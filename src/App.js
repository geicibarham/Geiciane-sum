import Form from "./components/form/Form";
import Landing from "./components/landingPage/Landing";
import { HashRouter as Router, Routes, Route } from "react-router-dom"; // Import HashRouter and alias it as Router
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Score from "./components/score/Score";

function App() {
  return (
    <>
      <Router> {/* Use HashRouter for handling routes */}
        <Header />
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/scores" element={<Score/>} />
          <Route path="/play" element={<Form/>} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
