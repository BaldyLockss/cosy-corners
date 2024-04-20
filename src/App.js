// import Header from "./components/header/header";
// import { Route, Routes } from "react-router-dom";
// import Landing from "./pages/landing/landing";
// import About from "./pages/about/about";
// import Shop from "./pages/shop/shop";
// import Contact from "./pages/contact/contact";
// import { ShopHeadings } from "./data/Headings";
import Tester from "./pages/tester";

const App = () => {
  return (
    <div className="App">
      {/* <Header /> */}
      <main>
        <Tester />
        {/* <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop data={ShopHeadings} />} />
          <Route path="/contact" element={<Contact />} />
        </Routes> */}
      </main>
    </div>
  );
};

export default App;
