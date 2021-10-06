import React from "react";
import "./Footer.css";
const Footer = () => {
	return (
		<section className=' bg-customGray px-10 py-10 '>
			<div className='flex justify-between flex-col sm:flex-row mb-6 footer-links'>
				<ul className='sm:mr-20 sm:space-y-4 text-white font-semibold text-center '>
					<li>
						<a href='https://www.careerstepladder.com/home'>Home</a>
					</li>
					<li>
						<a href='https://www.careerstepladder.com/about-us'>About Us</a>
					</li>
					<li>
						<a href='https://www.careerstepladder.com/contact-us'>Contact Us</a>
					</li>
				</ul>
				<ul className='sm:mr-20 sm:space-y-4 text-white font-semibold text-center'>
					<li>
						<a href='https://www.careerstepladder.com/kickstarters'>Kickstarters</a>
					</li>
					<li>
						<a href='https://www.careerstepladder.com/explorers'>Explorers</a>
					</li>
					<li>
						<a href='https://www.careerstepladder.com/leaders'>Leaders</a>
					</li>
				</ul>
				<ul className='sm:mr-20 sm:space-y-4 text-white font-semibold text-center'>
					<li>
						<a href='https://grad.careerstepladder.com/'>Courses</a>
					</li>
					<li>
						<a href='https://www.careerstepladder.com/teach-on-csl'>Teach on CSL</a>
					</li>
					<li>
						<a href='https://www.careerstepladder.com/blog'>Blog</a>
					</li>
				</ul>
				<div className=' sm:w-5/12 sm:flex sm:flex-col  sm:pl-56 '>
					<p className='text-white mb-5 hidden sm:block'>Follow Us On</p>
					<ul className='flex  w-full sm:justify-start justify-center my-7 sm:my-0 space-x-5'>
						<a href='https://www.linkedin.com/company/career-stepladder'>
							<img src='https://www.careerstepladder.com/modules/mod_cslfooter/assets/linkedin.svg' alt='linkedin' />
						</a>
						<a href='https://www.facebook.com/careerstepladder/'>
							<img src='https://www.careerstepladder.com/modules/mod_cslfooter/assets/facebook.svg' alt='facebook' />
						</a>
						<a href='https://twitter.com/CStepladder'>
							<img src='https://www.careerstepladder.com/modules/mod_cslfooter/assets/twitter.svg' alt='twitter' />
						</a>
						<a href='https://www.instagram.com/careerstepladder/'>
							<img src='https://www.careerstepladder.com/modules/mod_cslfooter/assets/instagram.svg' alt='instagram' />
						</a>
					</ul>
				</div>
			</div>
			<div className='hidden sm:block'>
				<hr />
			</div>
			<div className='text-center p-5 text-white text-lg space-x-4 hidden sm:block'>
				<a href='https://www.careerstepladder.com/privacy-policy'>Privacy Policy</a>
				<span>|</span>
				<a href='https://www.careerstepladder.com/cancellation-and-refund-policy'>Cancellation and refund policy</a>
				<span>|</span>
				<a href='https://www.careerstepladder.com/cookie-policy'>Cookie Policy</a>
				<span>|</span>
				<a href='https://www.careerstepladder.com/terms-of-use'>Terms of Use</a>
				<span>|</span>
				<a href='https://www.careerstepladder.com/site-map'>Site Map</a>
			</div>
			<div className='w-full sm:hidden  my-5'>
				<img src='https://www.careerstepladder.com/images/careerladders/img/csl_logo.svg' alt='logo' className='mx-auto' />
			</div>
			<div className='text-center text-sm sm:text-base  text-white mx-5'>
				<p>Copyright © 2021 Career Stepladder</p>
			</div>
		</section>
	);
};

export default Footer;
