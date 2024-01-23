import "./App.css";
import CharacterList from "./pages/CharacterList";
import Character from "./pages/Character";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" Component={CharacterList} />
        <Route path="/:id" Component={Character} />
      </Routes>
    </div>
  );
}

export default App;
