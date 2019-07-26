import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRoom from '../components/FeaturedRoom';

export default function Home() {
	return (
		<>
			<Hero>
				<Banner title="Luxurious rooms" subtitle="Deluxe rooms strarting at $29">
					<Link to="/" className="btn btn-primary">
						our rooms
					</Link>
				</Banner>
			</Hero>
			<Services />
			<FeaturedRoom />
		</>
	);
}
