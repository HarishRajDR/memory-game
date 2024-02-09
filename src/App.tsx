import Board from "./components/Board";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col items-center justify-center gap-11">
      <h1 className="text-5xl font-bricolageGrotesque mt-16">
        {"Match the Symbols"}
      </h1>
      <Board />
      <Footer />
    </div>
  );
}

export default App;
