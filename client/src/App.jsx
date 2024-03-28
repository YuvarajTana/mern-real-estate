import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";

const Home = () => <div>Home</div>;
const About = () => <div>About us</div>;
const Profile = () => <div>Profile </div>;
const Sigin = () => <div>Sign In</div>;
const SignOut = () => <div>Sign Out</div>;

function App() {
  return <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/profile" element={<Profile />}></Route>
      <Route path="/sign-in" element={<Sigin />}></Route>
      <Route path="/sign-out" element={<SignOut />}></Route>
    </Routes>
  </BrowserRouter>
}

export default App
