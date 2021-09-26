import React, { useState } from "react";
import { BsChevronDown, BsSearch } from "react-icons/bs";
import "./Nav.css";
import Dropdown from "./Dropdown";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const lists = ["About Us", "Courses", "Teach on CLS", "Contact Us"];
	return (
		<section className=' absolute z-50'>
			<div className='flex items-center h-16 p-2 justify-between fixed top-0 w-full bg-white '>
				<div>
					<a href='https://www.careerstepladder.com/'>
						<img src='https://www.careerstepladder.com/images/careerladders/img/cl.svg' alt='logo' className='h-9 mr-2' />
					</a>
				</div>
				<nav className='sm:flex hidden items-center w-full justify-evenly nav '>
					<button className={` border-2 border-primary px-3 w-28 py-1 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors duration-500 ${isOpen ? "bg-primary text-white" : "text-primary"}`} onClick={() => setIsOpen(!isOpen)}>
						Browse <BsChevronDown className=' inline font-extrabold' />
					</button>
					<div className=' search'>
						<input type='text' style={{ width: "200px", border: "1px solid #8A94A6" }} className=' outline-none rounded-tl rounded-bl font-semibold text-sm px-1 py-2' placeholder='What do you want to learn?' />
						<span className='rounded-tr rounded-br'>
							<BsSearch className='cursor-pointer' />
						</span>
					</div>
					{lists.map((list, index) => {
						return (
							<li className='text-lg list-none' key={index}>
								<a href='https://www.google.com'>{list}</a>
							</li>
						);
					})}
					<button className='text-primary border-2 border-primary px-1 w-28 py-1 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors duration-500 '>Login</button>
					<button className='text-white bg-primary border-2 border-primary px-1 w-28 py-1 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors duration-500 '>Sign up</button>
				</nav>
			</div>
			<div>{isOpen && <Dropdown />}</div>
		</section>
	);
};

export default Navbar;
