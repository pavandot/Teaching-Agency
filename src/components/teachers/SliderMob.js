import React from "react";

const SliderMob = ({ teachers, slideNumber }) => {
	const { img, name, field, desc, desc1 } = teachers[slideNumber];
	return (
		<section className={`overflow-hidden mx-7 sm:hidden`}>
			<div className=' overflow-hidden '>
				<img src={img} alt={name} />
			</div>
			<div className='px-5'>
				<h1 className=' text-primary text-2xl font-bold mt-5'>{name}</h1>
				<h2 className='text-lg text-customBlack font-bold mb-3'>{field}</h2>
				<p className=' text-customBlack2'>{desc}</p>
				{desc1 && <p className='pt-5 text-customBlack2'>{desc1}</p>}
			</div>
		</section>
	);
};

export default SliderMob;
