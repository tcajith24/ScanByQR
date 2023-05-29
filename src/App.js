import React from 'react';
import './App.css';
// import './fonts.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import NewCar from '../src/components/car/NewCar';
import UsedCar from './components/car/UsedCars';
import SellCar from './components/car/SellCar';
import Header from './components/header';
import NewBike from './components/bike/NewBike';
import UsedBike from './components/bike/UsedBike';
import SellBike from './components/bike/SellBike';
import AboutUs from './components/about-us';
import ContactUs from './components/contactus';
import Footer from './components/Footer';
import CustomerReview from './components/More/CustomerReview';
import Blog from './components/More/Blog';
import FAQ from './components/More/FAQ';
import EAuctionCar from './components/eAuctionVehicle/eAuctionCar';
import EAuctionBike from './components/eAuctionVehicle/eAuctionbike';
import EAuctionVehicleDetail from './components/eAuctionVehicle/eAuctionVehicleDetail';
import CarDetail from './components/car/carDetail';
function App() {
	return (
		<BrowserRouter>
			<Header />
			<div className="App">
				<Routes>
					<Route index path="/" element={<Home />} />
					<Route path='/about-us' element={<AboutUs />} />
					<Route path="/car/new-car" element={<NewCar />} />
					<Route path='/car/used-car' element={<UsedCar />} />
					<Route path='/car/sell-car' element={<SellCar />} />
					<Route path='/car/car-detail/:id' element={<CarDetail />} /> {/* This is for car detail page */}
					<Route path='/bike/new-bike' element={<NewBike />} />
					<Route path='/bike/used-bike' element={<UsedBike />} />
					<Route path='/bike/sell-bike' element={<SellBike />} />
					<Route path='/eAuction/eAuction-car' element={<EAuctionCar />} />
					<Route path='/eAuction/eAuction-bike' element={<EAuctionBike />} />
					<Route path='/eAuction/eAuctionDetail/:id' element={<EAuctionVehicleDetail />} />
					<Route path='/contact-us' element={<ContactUs />} />
					<Route path="/Customer-Reviews" element={<CustomerReview />} />
					<Route path='/more/blog' element={<Blog />} />
					<Route path='/more/faq' element={<FAQ />} />
					<Route path='/more/faq/:id' element={<FAQ />} />
				</Routes>
			</div>
			<Footer />
		</BrowserRouter >
	);
}
export default App;
