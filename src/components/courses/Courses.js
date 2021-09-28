import React, { useState } from "react";
import "./Courses.css";
const Courses = () => {
	const [isHover, setIsHover] = useState(false);
	console.log(isHover);
	const courses = [
		{ img: "https://www.careerstepladder.com/images/careerladders/course_thumbnail/new/thumb/34.png", text: "Vedic Mathematics Magic (Advanced)" },
		{ img: "https://www.careerstepladder.com/images/careerladders/course_thumbnail/new/thumb/33.png", text: "Vedic Mathematics Magic (Senior)" },
		{ img: "https://www.careerstepladder.com/images/careerladders/course_thumbnail/new/thumb/32.png", text: "Vedic Mathematics Magic (Primary)" },
		{ img: "https://www.careerstepladder.com/images/careerladders/course_thumbnail/new/home/27.jpg", text: "Advanced Technologies and their application in industry" },
		{ img: "https://www.careerstepladder.com/images/careerladders/course_thumbnail/new/home/26.jpg", text: "Handwriting and Signature Analysis Mastery Program" },
		{ img: "https://www.careerstepladder.com/images/careerladders/course_thumbnail/new/home/28.jpg", text: "Introduction to Lean Six Sigma" },
	];
	return (
		<section className='bg-customBlue relative'>
			<h1 className='text-center pt-20 pb-9 text-2xl sm:text-5xl font-extrabold sm:font-bold' style={{ color: "#243141" }}>
				Top instructor led courses
			</h1>
			<div>
				<img src='https://www.careerstepladder.com/images/careerladders/csl/popular_courses_top_dots.png' alt='dots' className=' absolute top-20 ' />
			</div>
			<div className='mx-8 h-auto sm:mx-11 grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6'>
				{courses.map((course, index) => {
					return (
						<div key={index}>
							<div className='relative rounded-2xl  overflow-hidden courses-card'>
								<img src={course.img} alt='text' className={`hover:scale-125 transform duration-500`} />
								<div className='absolute z-30 top-0  text-white  flex flex-col justify-end w-full items-center px-5 h-full sm:px-8 '>
									<h1 className='text-xl text-center font-bold'>{course.text}</h1>
									<button className=' courses-btn font-bold '>Enrol Now</button>
								</div>
							</div>
						</div>
					);
				})}
			</div>
			<div className='p-20 flex justify-end'>
				<div className='text-lg border-0'> {"-->"}</div>
				<button className='text-lg text-primary font-semibold'>View All Courses</button>
			</div>
			<div>
				<img src='https://www.careerstepladder.com/images/careerladders/csl/popular_courses_top_dots.png' alt='dots' className=' absolute right-0 bottom-32 ' />
			</div>
		</section>
	);
};

export default Courses;
