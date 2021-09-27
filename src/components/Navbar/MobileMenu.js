import React from "react";

const MobileMenu = ({ lists }) => {
	return (
		<div className='menu bg-white p-2'>
			<ul className='flex flex-col justify-center items-start'>
				{lists.map((list, index) => {
					return (
						<li key={index} className='p-2 text-lg mb-1'>
							{list}
						</li>
					);
				})}
			</ul>
			<div>
				<button className='text-primary border-2 border-primary px-1 w-28 mr-1 py-1 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors duration-500 '>Login</button>
				<button className='text-white bg-primary border-2 border-primary px-1 w-28 py-1 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors duration-500 '>Sign up</button>
			</div>
		</div>
	);
};

export default MobileMenu;
