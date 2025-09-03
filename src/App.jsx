import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"

import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import Product from "./pages/Product"
import Gallery from "./pages/Gallery"
import Enquiry from "./pages/Enquiry"
import NotFound from "./pages/NotFound"
import Layout from "./components/Layout"
import BuyNow from "./pages/BuyNow"
import Services from "./pages/Services"
import ProductDetail from "./pages/ProductDetail"
import ScrollToTop from "./components/ScrollToTop"

export default function App() {
  const location = useLocation()

  return (
    <>
      <ScrollToTop />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route element={<Layout />}>
            <Route
              path="/"
              element={
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.4 }}
                >
                  <Home />
                </motion.div>
              }
            />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/product" element={<Product />} />
            <Route path="/:category/:id" element={<ProductDetail />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/enquiry" element={<Enquiry />} />
            <Route path="/buy-now" element={<BuyNow />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  )
}
