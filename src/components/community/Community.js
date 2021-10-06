import React from "react";

const Community = () => {
	return (
		<section className='flex bg-customBlue flex-col sm:flex-row items-center px-2 sm:px-10 py-20'>
			<div className=''>
				<img src='https://www.careerstepladder.com/images/careerladders/csl/img2.png' alt='phtot' className='w-full' />
			</div>
			<div className='px-2 sm:px-10 sm:w-1/2'>
				<h1 className=' text-2xl sm:pr-10 sm:text-5xl text-customBlack font-bold mb-3'>Join our community</h1>
				<p className='text-customBlack2 text-lg mb-10'>Get paid to teach what you love! Offer classes to fit your schedule, at your pace.</p>
				<a href='https://www.careerstepladder.com/teach-on-csl' className='text-primary border-2 border-primary rounded py-2 px-3 font-bold hover:bg-primary hover:text-white transition-all  duration-150 ease-in'>
					I want to teach
				</a>
			</div>
		</section>
	);
};

export default Community;
