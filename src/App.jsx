
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import ProductServices from "./pages/ProductServices"
import ShopOnline from "./pages/ShopOnline"
import Gallery from "./pages/Gallery"
import YoutubeVideos from "./pages/YoutubeVideos"
import Payment from "./pages/Payment"
import Enquiry from "./pages/Enquiry"
import NotFound from "./pages/NotFound"
import Layout from "./components/Layout"
import BuyNow from "./pages/BuyNow"
import EarnRefer from "./pages/EarnRefer"

export default function App() {
  return (
    <>
      <Routes>
    <Route element={<Layout/>}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<ProductServices />} />
            <Route path="/shop" element={<ShopOnline />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/videos" element={<YoutubeVideos />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/enquiry" element={<Enquiry />} />
            <Route path="/buy-now" element={<BuyNow />} /> 
            <Route path="/earn-refer" element={< EarnRefer/>} /> 


            <Route path="*" element={<NotFound />} />
               </Route>
          </Routes>
       
    </>
  )
}
