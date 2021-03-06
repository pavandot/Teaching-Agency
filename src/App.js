import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Slider from "./components/Slider/Slider";
import Features from "./components/features/Features";
import Courses from "./components/courses/Courses";
import Teachers from "./components/teachers/Teachers";
import Community from "./components/community/Community";
import Footer from "./components/footer/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function App() {
	useEffect(() => {
		Aos.init({ duration: 1000, once: true });
	}, []);
	return (
		<div className='App'>
			<Navbar />
			<Slider />
			<div data-aos='fade-up'>
				<Features />
			</div>
			<Courses />
			<div data-aos='fade-up'>
				<Teachers />
			</div>
			<div date-aos='fade-up'>
				<Community />
			</div>
			<Footer />
		</div>
	);
}

export default App;
