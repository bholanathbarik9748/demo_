import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
const HomePage = React.lazy(() => import("./pages/HomePage"));
const AddTask = React.lazy(() => import("./pages/AddTask"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddTask />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
