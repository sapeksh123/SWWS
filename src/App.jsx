
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import Product from "./pages/Product"
// import ShopOnline from "./pages/ShopOnline"
import Gallery from "./pages/Gallery"
// import YoutubeVideos from "./pages/YoutubeVideos"
// import Payment from "./pages/Payment"
import Enquiry from "./pages/Enquiry"
import NotFound from "./pages/NotFound"
import Layout from "./components/Layout"
import BuyNow from "./pages/BuyNow"
// import EarnRefer from "./pages/EarnRefer"
import Services from "./pages/Services"
import ProductDetail from "./pages/ProductDetail"


export default function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/product" element={<Product />} />
       <Route path="/:category/:id" element={<ProductDetail />} />

          <Route path="/services" element={<Services />} />
          {/* <Route path="/shop" element={<ShopOnline />} /> */}
          <Route path="/gallery" element={<Gallery />} />
          {/* <Route path="/videos" element={<YoutubeVideos />} /> */}
          {/* <Route path="/payment" element={<Payment />} /> */}
          <Route path="/enquiry" element={<Enquiry />} />
          <Route path="/buy-now" element={<BuyNow />} />
          {/* <Route path="/earn-refer" element={< EarnRefer />} /> */}


          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>

    </>
  )
}
