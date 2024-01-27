import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Search from './Components/Search/Search';
import Trending from './Components/Trending/Trending';
import Sellers from './Components/Sellers/Sellers';
import Auction from './Components/Auction/Auction';
import Review from './Components/Review/Review';
import Footer from './Components/Footer/Footer';
import CarDetails from './Components/CarDetails/CarDetails';
import BrandDetails from './Components/BrandDetails/BrandDetails';
import HomeDetails from './Components/CategoryProduct/HomeDetails'
import HomeDealers from './Components/DelearDetails/HomeDealers'
import ProductView from './Components/ProductView/ProductView';
import DealerView from './Components/DealerView/DealerView';
import SalesRecord from './Components/SalesRecord/SalesRecord';
import HomeSales from './Components/SalesData/HomeSales';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <Trending />
              <Sellers />
              <Auction />
              <Review />
              <Footer />
            </>
          }
        />
        <Route path="/brand-details/:id" element={<BrandDetails />} />
        <Route path="/car-details/:id" element={<CarDetails />} />
        <Route path="/product-details/:id" element={<ProductView />} />
        <Route path="/dealer-details/:id" element={<DealerView />} />
        <Route path="/home-details/cars" element={<HomeDetails category="cars" />} />
        <Route path="/home-dealers/dealers" element={<HomeDealers category="dealers" />} />
        <Route path="/sold-cars/sales" element={<SalesRecord category="sales" />} />
        {/*<Route path="/home-sales/records" element={<HomeSales category="records" />} />/*}
        {/* <Route path="/home-details/:id" element={<HomeDetails />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
