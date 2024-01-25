import "./App.css";
import CharacterList from "./pages/CharacterList";
import Character from "./pages/Character";
import Search from "./pages/Search";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" Component={CharacterList} />
        <Route path="/search" Component={Search} />
        <Route path="/:id" Component={Character} />
      </Routes>
    </div>
  );
}

export default App;
