import React, { useEffect, useState } from "react";
import Navbar from "./commons/Navbar.jsx";
import { Footer } from "./commons/Footer.jsx";
import { Loader } from "./commons/Loader.jsx";
import Landing from "./components/Landing.jsx";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 100);
  }, []);
  return (
    <>
      <Navbar />
      {isLoading && <Loader />}
      {!isLoading && <Landing />}
      <Footer />
    </>
  );
};

export default App;
