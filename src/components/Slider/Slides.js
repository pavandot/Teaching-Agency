import React from "react";
import { BsArrowRight } from "react-icons/bs";
const Slides = ({ slide, slideNumber }) => {
	return (
		<div>
			{slide.map((item, index) => {
				const { img, textOne, textTwo, textThree, buttonText } = item;
				return (
					<div className={`${index === slideNumber ? "block" : "hidden"}`} key={index}>
						<video autoPlay preload='true' muted loop className='slide'>
							<source src={img} type='video/mp4' />
						</video>
						<div className='w-full slide-text transition-all '>
							<h1 className={`sm:mb-5 mb-2 ${index === slideNumber && "text-one"} `}>{textOne}</h1>
							<h1 className={`sm:mb-4  mb-2 ${index === slideNumber && "text-two"} `}>{textTwo}</h1>
							<h1 className={`sm:text-2xl font-bold ${index === slideNumber && "text-three"}`}>{textThree}</h1>
							<div>
								<a href=' #' className='flex text-lg justify-center items-center mt-8 text-three  '>
									<p className={`  flex font-normal justify-center items-center  p-2 rounded-lg pr-5 outer__button ${index === slideNumber && "btn-aniamtion  button__left-right"}`}>
										<span className={`mr-3 text-3xl    `}>
											<BsArrowRight className={`${index === slideNumber && "btn-icon-animation"}`} />
										</span>
										{buttonText}
									</p>
								</a>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Slides;
