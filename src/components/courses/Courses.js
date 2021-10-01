import React, { useEffect } from "react";
import { CgArrowLongRight } from "react-icons/cg";
import "./Courses.css";
import Aos from "aos";
import "aos/dist/aos.css";
const Courses = () => {
	useEffect(() => {
		Aos.init({ duration: 1000, once: true });
	}, []);
	const courses = [
		{ img: "https://www.careerstepladder.com/images/careerladders/course_thumbnail/new/thumb/34.png", text: "Vedic Mathematics Magic (Advanced)" },
		{ img: "https://www.careerstepladder.com/images/careerladders/course_thumbnail/new/thumb/33.png", text: "Vedic Mathematics Magic (Senior)" },
		{ img: "https://www.careerstepladder.com/images/careerladders/course_thumbnail/new/thumb/32.png", text: "Vedic Mathematics Magic (Primary)" },
		{ img: "https://www.careerstepladder.com/images/careerladders/course_thumbnail/new/home/27.jpg", text: "Advanced Technologies and their application in industry" },
		{ img: "https://www.careerstepladder.com/images/careerladders/course_thumbnail/new/home/26.jpg", text: "Handwriting and Signature Analysis Mastery Program" },
		{ img: "https://www.careerstepladder.com/images/careerladders/course_thumbnail/new/home/28.jpg", text: "Introduction to Lean Six Sigma" },
	];
	return (
		<section className='bg-customBlue relative pb-20'>
			<h1 className='text-center pt-20 pb-9 text-2xl sm:text-5xl font-extrabold sm:font-bold' style={{ color: "#243141" }}>
				Top instructor led courses
			</h1>
			<div>
				<img src='https://www.careerstepladder.com/images/careerladders/csl/popular_courses_top_dots.png' alt='dots' className=' absolute top-20 ' />
			</div>
			<div className='mx-8 h-auto lg:mx-11 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6'>
				{courses.map((course, index) => {
					return (
						<div key={index} data-aos='fade-up'>
							<div className='relative rounded-2xl  overflow-hidden courses-card  '>
								<img src={course.img} alt='text' className='hover:scale-125 transform duration-500' />
								<div className='absolute z-30 top-0  text-white  flex flex-col justify-end lg:w-full items-center px-5  h-full lg:px-8 ' onMouseEnter={(e) => console.log(e.isHover)}>
									<h1 className='text-xl text-center font-bold'>{course.text}</h1>
									<button className=' courses-btn font-bold '>Enrol Now</button>
								</div>
							</div>
						</div>
					);
				})}
			</div>
			<div>
				<img src='https://www.careerstepladder.com/images/careerladders/csl/popular_courses_top_dots.png' alt='dots' className=' absolute right-0 bottom-40 ' />
			</div>
			<div className='mt-20 flex justify-end mx-10 items-center cursor-pointer'>
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

export default Courses;
