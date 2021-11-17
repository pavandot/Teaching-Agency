import React, { useState, useEffect } from "react";
import { AiOutlineDown, AiOutlineLeft, AiOutlineRight, AiOutlinedown } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";

import Slides from "./Slides";
import SlideOne from "./Videos/Slide-1.mp4";
import SlideTwo from "./Videos/Slide-2.mp4";
import SlideThree from "./Videos/Slide-3.mp4";
import "./Slide.css";
const Slider = () => {
	const slides = [
		{
			img: "https://www.careerstepladder.com/modules/mod_cslhomebanner/video/1.mp4",
			textOne: "I want to kickstart my career.",
			textTwo: "Build your skillset, get empowered, become the perfect candidate.",
			textThree: "Learn from industry experts in a personalised environment.",
			buttonText: "	Get started. Boost sour skill",
		},
		{
			img: "https://www.careerstepladder.com/modules/mod_cslhomebanner/video/2.mp4",
			textOne: "I need a change. A new path. A new goal.",
			textTwo: "Learn the skills you need online, then follow your passion.",
			textThree: "LIVE online courses, delivered by seasoned pros.",
			buttonText: "Get started. Make the change",
		},
		{
			img: "https://www.careerstepladder.com/modules/mod_cslhomebanner/video/3.mp4",
			textOne: "I love what I do & I want to get better.",
			textTwo: "Diversify your skills. Evolve & Improve. All the way to the top.",
			textThree: "Upskill in your own time & get that promotion you’re aiming for.",
			buttonText: "Get started. Level UP ",
		},
	];
	const [slideNumber, setSlideNumber] = useState(0);
	useEffect(() => {
		const intervalId = setInterval(() => {
			incSlideNumber();
		}, 6400);
		return () => clearInterval(intervalId);
	}, [slideNumber]);
	function incSlideNumber() {
		if (slideNumber >= slides.length - 1) {
			setSlideNumber(0);
		} else {
			setSlideNumber(slideNumber + 1);
		}
	}
	function decSlideNumber() {
		if (slideNumber <= 0) {
			setSlideNumber(slides.length - 1);
		} else {
			setSlideNumber(slideNumber - 1);
		}
	}
	return (
		<section className='overflow-hidden  '>
			<div className=''>
				<Slides slide={slides} slideNumber={slideNumber} />

				<div className='w-full flex justify-between absolute direction sm:px-7'>
					<AiOutlineLeft className='text-4xl sm:text-6xl text-white cursor-pointer hover:text-gray-300' onClick={() => decSlideNumber()} />
					<AiOutlineRight className='text-4xl sm:text-6xl text-white cursor-pointer hover:text-gray-300' onClick={() => incSlideNumber()} />
				</div>
				<a href='#section-1'>
					<div className=' hidden lg:flex w-full  justify-center items-center absolute down-link'>
						<div>
							<BsChevronDown className='down-arrow-1' />
							<BsChevronDown className='down-arrow-2' />
							<BsChevronDown className='down-arrow-3' id='section-1' />
						</div>
					</div>
				</a>
			</div>
		</section>
	);
};

export default Slider;
