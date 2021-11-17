import React, { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import SliderMob from "./SliderMob";
import "./Teachers.css";
import one from "../../img/1.jpg";

const Teachers = () => {
	const [hidden, setHidden] = useState(true);
	const [slideNumber, setSlideNumber] = useState(0);
	const incrementSlide = () => {
		setHidden(false);
	};
	const decrementSlide = () => {
		setHidden(true);
	};
	function incSlideNumber() {
		if (slideNumber >= teachers.length - 1) {
			setSlideNumber(0);
		} else {
			setSlideNumber(slideNumber + 1);
		}
	}
	function decSlideNumber() {
		if (slideNumber <= 0) {
			setSlideNumber(teachers.length - 1);
		} else {
			setSlideNumber(slideNumber - 1);
		}
	}
	const teachers = [
		{
			img: "https://i.ibb.co/K2mMH4x/1.jpg",
			name: "Umama Tabassum",
			field: "Former Software Developer and Certified Corporate Trainer",
			desc:
				"A former software developer with 6 years of IT experience and a certified corporate trainer with immense willingness to uplift people. Things that she finds inspiring and enthralling include coaching, content creation, acrylic paintings, reading books on self-improvement, and baking.",
			paddingTop: "10",
		},
		{
			img: "https://i.ibb.co/yV5tc9p/2.jpg",
			name: "Dr Reena Sharma",
			field: "Training Consultant",
			desc:
				"A hard working and qualified doctorate offering 14+ years of global experience in providing visionary leadership and quality education to a wide range of aspiring individuals. She has training and teaching experience in the USA, South America & Maldives. Her key professional skills include administration, innovative curriculum development, classroom management, parental involvement, student assessment and development schemes.",
		},
		{
			img: "https://i.ibb.co/Bf0bxPs/3.jpg",
			name: "Vanky Kenny Kataria",
			field: "Digital Marketing Trainer, Consultant and Communication Skills Coach",
			desc:
				"Vanky Kenny Kataria is an engineer turned speaker, coach and digital marketing trainer & consultant. He is a two-time TEDx speaker, has delivered over 850 sessions in the past 18 months, and has been featured in publications like Forbes, Entrepreneur, Huffington Post, MSN, Reader’s Digest, and in books like '30 & Under' and 'Unveil Your Purpose'.",
			desc1:
				"'PeopleMaven' named him one of the Top 13 Emerging Communication Skills Coaches from around the world. He helps companies grow their brands digitally and has successfully coached many students and professionals to land their dream opportunity by training them in 'Digital Marketing'.",
		},
		{
			img: "https://i.ibb.co/GQcVj5S/pexels-andrea-piacquadio-943084.jpg",
			name: "Bijay Gautam",
			field: "Co-Founder WYM Studio & Host - The Inspiring Talk and Podcast Unfiltered",
			desc:
				"As India’s leading podcast expert, Bijay Gautam has trained more than 20 thousand people and several organizations to grow their reach and maximize profit using podcasts. Bijay has been featured by national media like The Hindu, Times of India, The Ken and The Sunday Guardian Live. He is a frequent speaker at international podcasting conferences and events like Podfest and International Podcast Day. He is also the Co-founder of WYN Studio, a creative content studio specialising in audio storytelling and podcasts.",
		},
	];
	return (
		<section className='w-full bg-white relative'>
			<div className=' py-24 text-center'>
				<h1 className=' text-3xl sm:text-5xl font-extrabold  pb-4 sm:pb-7 text-customBlack'>Learn from the best</h1>
				<h3 className=' text-xl font-bold text-customBlack'>Personalised, world class online training, delivered LIVE.</h3>
			</div>
			<div className=' hidden sm:grid sm:grid-cols-3 mx-28 '>
				{teachers.map((teacher, index) => {
					const { img, name, field, desc, desc1 } = teacher;
					return (
						<section key={index} className={`overflow-hidden slider-animation ${index === 3 && hidden && "hidden"} ${index === 0 && !hidden && "hidden"} ${index === 1 && " pt-16"} ${index === 2 && " pt-32"} `}>
							<div className=' overflow-hidden '>
								<img src={img} alt={name} className='hover:scale-125 transform duration-700' />
							</div>
							<div className='px-5'>
								<h1 className=' text-primary text-2xl font-bold mt-5'>{name}</h1>
								<h2 className='text-lg text-customBlack font-bold mb-3'>{field}</h2>
								<p className=' text-customBlack2'>{desc}</p>
								{desc1 && <p className='pt-5 text-customBlack2'>{desc1}</p>}
							</div>
						</section>
					);
				})}
			</div>
			<SliderMob slideNumber={slideNumber} teachers={teachers} />
			<div className=' hidden w-full sm:flex justify-between absolute direction sm:px-7'>
				<AiOutlineLeft className={`text-4xl sm:text-6xl ${hidden ? "text-gray-400" : "text-customBlack"} cursor-pointer `} onClick={() => decrementSlide()} />
				<AiOutlineRight className={`text-4xl sm:text-6xl ${!hidden ? "text-gray-400" : "text-customBlack"} cursor-pointer `} onClick={() => incrementSlide()} />
			</div>
			<div className='  w-full flex sm:hidden justify-between absolute teacher-direction '>
				<AiOutlineLeft className={`text-4xl sm:text-6xl cursor-pointer `} onClick={() => decSlideNumber()} />
				<AiOutlineRight className={`text-4xl sm:text-6xl  cursor-pointer `} onClick={() => incSlideNumber()} />
			</div>
			<div className=' my-16 flex justify-end mx-10 items-center cursor-pointer'>
				<div className='border-2 border-primary h-10 w-10 rounded-lg'>
					<svg height='20' viewBox='0 0 30 13' fill='none' className='ml-4 mt-2'>
						<path
							fill='#9933CC'
							d='M29.7204 7.07638C30.0456 6.75118 30.0456 6.22392 29.7204 5.89871L24.4208 0.599184C24.0956 0.273979 23.5684 0.273979 23.2432 0.599184C22.918 0.924389 22.918 1.45165 23.2432 1.77686L27.9539 6.48755L23.2432 11.1982C22.918 11.5234 22.918 12.0507 23.2432 12.3759C23.5684 12.7011 24.0956 12.7011 24.4208 12.3759L29.7204 7.07638ZM0.818359 7.32029L29.1315 7.32029L29.1315 5.65481L0.818359 5.65481L0.818359 7.32029Z'></path>
					</svg>
				</div>
				<span className='ml-8 text-lg text-primary '>View all courses</span>
			</div>
		</section>
	);
};

export default Teachers;
