import logo from "./logo.svg";
import "./App.css";
import ClickCount from "./Components/ClickCount";
import Hovered from "./Components/Hovered";
import UpdateComp from "./Components/CounterHoc";
function App() {
  return (
    <div className="App">
      <ClickCount></ClickCount>
      <Hovered></Hovered>
      <UpdateComp>c</UpdateComp>
    </div>
  );
}

export default App;
