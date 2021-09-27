import React from "react";
import "./Features.css";
const Features = () => {
	const featuresList = [
		{ img: "https://www.careerstepladder.com/images/careerladders/img/home/1.png", text: "Small classes (Max 10 persons): Get the attention you need from a live teacher" },
		{ img: "https://www.careerstepladder.com/images/careerladders/img/home/2.png", text: "Choice: A wide range of courses from beginner to advanced" },
		{
			img: "https://www.careerstepladder.com/images/careerladders/img/home/3.png",
			text: "Convenient: Flexible schedules to fit your lifestyle",
		},
		{
			img: "https://www.careerstepladder.com/images/careerladders/img/home/4.png",
			text: "Low cost: Choose from a range of courses that fit your goals without breaking the bank",
		},
		{
			img: "https://www.careerstepladder.com/images/careerladders/img/home/5.png",
			text: "High reward: Gain a new skill, earn your shareable certificate, boost your prospects",
		},
		{
			img: "https://www.careerstepladder.com/images/careerladders/img/home/6.png",
			text: "No risk: Claim a full refund after two lessons if it isn’t the right course for you",
		},
	];
	return (
		<section className='flex justify-between items-start mt-24 mx-10 section-one'>
			<div className=' w-1/2'>
				<h1 className=' font-black main-head mb-3'>Live, online classes by industry leaders</h1>
				<h2 className=' second-head mb-3'>Learn directly from the experts, LIVE in real time.</h2>
				<ul className='mr-2'>
					{featuresList.map((feature, index) => {
						const { img, text } = feature;
						return (
							<li className='flex items-center p-3 feature-list' key={index}>
								<img src={img} alt='info' className='mr-4' />
								<p>{text}</p>
							</li>
						);
					})}
				</ul>
			</div>
			<div>
				<img src='https://www.careerstepladder.com/images/careerladders/csl/img1.png' alt='metting' />
			</div>
		</section>
	);
};

export default Features;
