/**
 * WP Dependencies
 */
const { select, dispatch } = wp.data;
const apiRequest = wp.apiRequest;

/**
 * Click Handler
 * @param props
 * @returns {*}
 * @constructor
 */
export const Clicker = (props) => {
	const { children } = props;

	return (
		<div className="click-wrapper">
			{ children }
		</div>
	);
};
