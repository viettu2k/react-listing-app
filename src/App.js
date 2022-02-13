import React from "react";
import TopBar from "./components/topbar/TopBar";
import Home from "./pages/homepage/Home";
import Detail from "./pages/listingdetail/Detail";

function App() {
  return (
    <div className="App">
      <TopBar />
      {/* <Home /> */}
      <Detail />
    </div>
  );
}

export default App;
