import Navbar from "./components/Navbar";
import HomeScreen from "./screens/HomeScreen";
function App() {
  return (
    <div className="App">
      <Navbar />
      <HomeScreen />
      <div
        style={{
          position: "fixed",
          left: 0,
          bottom: 0,
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          backgroundColor: "white",
          color: "grey",
          textAlign: "center",
        }}
      >
        <p>Copyright bla bla bla</p>
      </div>
    </div>
  );
}

export default App;
