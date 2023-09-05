import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter ";
import Welcome from "./components/Welcome";
import AlltheBooks from "./components/AllTheBooks";

function App() {
  return (
    <div className="App">
      <MyNav />
      <Welcome />
      <AlltheBooks />
      <MyFooter />
    </div>
  );
}

export default App;
