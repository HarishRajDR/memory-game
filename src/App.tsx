import Board from "./components/Board";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Board />
      <div className="absolute bottom-5 right-5">
        <Footer />
      </div>
    </div>
  );
}

export default App;
