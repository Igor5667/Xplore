import NavBar from "./components/NavBar";
import "./App.css";
import Background from "./components/Background";
import Content from "./components/Content";

function App() {
  return (
    <div className="h-[100svh] md:h-screen -z-20 text-white">
      <Background />
      <NavBar className="h-[15%]" />
      <Content className="h-[85%]" />
    </div>
  );
}

export default App;
