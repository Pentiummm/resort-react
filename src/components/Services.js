import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import Title from './Title';

export default class Services extends Component {
	state = {
		services: [
			{
				icon: <FaCocktail />,
				title: 'free cocktails',
				info: 'Ut aliqua nulla qui fugiat reprehenderit quis labore eiusmod duis.',
			},
			{
				icon: <FaHiking />,
				title: 'free cocktails 2',
				info: 'Ut aliqua nulla qui fugiat reprehenderit quis labore eiusmod duis.',
			},
			{
				icon: <FaShuttleVan />,
				title: 'free cocktails 3',
				info: 'Ut aliqua nulla qui fugiat reprehenderit quis labore eiusmod duis.',
			},
			{
				icon: <FaBeer />,
				title: 'free cocktails 4',
				info: 'Ut aliqua nulla qui fugiat reprehenderit quis labore eiusmod duis.',
			},
		],
	};
	render() {
		return (
			<section className="services">
				<Title title="Services" />
				<div className="services-center">
					{this.state.services.map((item, index) => {
						return (
							<article key={index} className="service">
								<span>{item.icon}</span>
								<h6>{item.title}</h6>
								<p>{item.info} </p>
							</article>
						);
					})}
				</div>
			</section>
		);
	}
}
