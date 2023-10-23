import { Route, Routes } from "react-router";
import "./App.css";
import { Layout } from "./shared";
import { Home } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/beginners" element="Beginners" />
        <Route path="/advanced" element="Advanced" />
        <Route path="/characters" element="Characters" />
        <Route path="/enemies" element="Enemies" />
        <Route path="/forum" element="Forum" />
        <Route path="/authorization" element="Authorization" />
        <Route path="/profile" element="Profile" />
      </Route>
    </Routes>
  );
}

export default App;
