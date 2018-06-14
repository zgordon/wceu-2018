/**
 * Import required libraries
 */
import classNames from 'classnames';

const icon = <svg width='20px' height='20px' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
	<rect fill='none' width='20' height='20' />
	<path d='M10 17.12c3.33-1.4 5.74-3.79 7.04-6.21 1.28-2.41 1.46-4.81.32-6.25-1.03-1.29-2.37-1.78-3.73-1.74s-2.68.63-3.63 1.46c-.95-.83-2.27-1.42-3.63-1.46s-2.7.45-3.73 1.74c-1.14 1.44-.96 3.84.34 6.25 1.28 2.42 3.69 4.81 7.02 6.21z'
	/>
</svg>;

export const Heart = props => {
	const { active } = props;

	// Add the filled class if it's in the props using classNames
	let classes = classNames(
		'heart',
		{ 'active': active }
	);

	// Return the heart icon
	return (
		<div className={classes}>
			{ icon }
		</div>
	);
};
