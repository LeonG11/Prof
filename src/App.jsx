import "./App.css";
import Head from "./components/Head";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";

function App() {
  return (
    <>
      <Head />
      <div className="main__title">
        <LeftSide />
        <RightSide />
      </div>
    </>
  );
}
export default App;
