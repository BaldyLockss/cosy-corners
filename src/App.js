<<<<<<< HEAD
// import Header from "./components/header/header";
// import { Route, Routes } from "react-router-dom";
// import Landing from "./pages/landing/landing";
// import About from "./pages/about/about";
// import Shop from "./pages/shop/shop";
// import Contact from "./pages/contact/contact";
// import { ShopHeadings } from "./data/Headings";
import Tester from "./pages/tester";
=======
import Header from "./components/header/header";
// import { Route, Routes } from "react-router-dom";
import Landing from "./pages/landing/landing";
import About from "./pages/about/about";
import Shop from "./pages/shop/shop";
import Contact from "./pages/contact/contact";
>>>>>>> 9786c97d0d00b6cba7c8269d86452ed544cb3c15

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { Suspense } from "react";

import { Foxhound } from "./models/Foxhound";

const App = () => {
  return (
    <div className="App">
<<<<<<< HEAD
      {/* <Header /> */}
=======
      {/* <Header />
>>>>>>> 9786c97d0d00b6cba7c8269d86452ed544cb3c15
      <main>
        <Tester />
        {/* <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop data={ShopHeadings} />} />
          <Route path="/contact" element={<Contact />} />
<<<<<<< HEAD
        </Routes> */}
      </main>
=======
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
>>>>>>> 9786c97d0d00b6cba7c8269d86452ed544cb3c15
    </div>
  );
};

export default App;
