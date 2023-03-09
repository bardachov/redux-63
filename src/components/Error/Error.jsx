import React from 'react';
import { Link } from 'react-router-dom';

export const Error = () => {
	return (
		<main className='container'>
			<section className='row'>
				<div className='col'>
					<h1>Sorry, we don't have such a page!</h1>
					<Link to='/'>Go Home</Link>
				</div>
			</section>
		</main>
	);
};
