import React from "react";
import TopBar from "./components/topbar/TopBar";
import CreateListing from "./pages/create-listing/CreateListing";
import Home from "./pages/homepage/Home";
import Detail from "./pages/listingdetail/Detail";

function App() {
  return (
    <div className="App">
      <TopBar />
      <Home />
      <Detail />
      <CreateListing />
    </div>
  );
}

export default App;
