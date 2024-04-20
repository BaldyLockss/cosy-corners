import Header from "./components/header/header";
// import { Route, Routes } from "react-router-dom";
import Landing from "./pages/landing/landing";
import About from "./pages/about/about";
import Shop from "./pages/shop/shop";
import Contact from "./pages/contact/contact";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { Suspense } from "react";

import { Foxhound } from "./models/Foxhound";

const App = () => {
  return (
    <div className="App">
      {/* <Header />
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main> */}
      <Canvas>
        <OrbitControls autoRotate />
        <ambientLight intensity={Math.PI / 2} />
        <Environment background={true} preset="warehouse" />
        <Suspense fallback={null}>
          <Foxhound />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default App;
