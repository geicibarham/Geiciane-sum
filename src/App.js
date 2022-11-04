import Form from "./components/form/Form";
import Landing from "./components/landingPage/Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Score from "./components/score/Score";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/scores" element={<Score/>} />
          <Route path="/play" element={<Form/>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
