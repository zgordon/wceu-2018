/**
 * WP Dependencies
 */
const { select, dispatch, withSelect } = wp.data;
const apiRequest = wp.apiRequest;

/**
 * Click Handler
 * @param props
 * @returns {*}
 * @constructor
 */
export const Clicker = (props) => {
	const { post_id, active, children } = props;

	// Do this when clicked
	function handleClick( event ) {
		// Prevent default event handling...
		event.preventDefault();

		// See if this has been activated
		let activated = select( 'wceu-2018-reacts' ).isActivated();

		// Bail is this is activated already
		if ( activated ) {
			return;
		}

		// If not, activate this thing so that it can't happen again!
		dispatch( 'wceu-2018-reacts' ).activate();

		// Run an API request to our endpoint
		apiRequest( { path: `/wceu-2018-reacts/v1/increment/${post_id}` } ).then( data => {
			// Wait for the API request to come back and then update the new amount of reacts
			dispatch( 'wceu-2018-reacts' ).setReacts( data );
		} );
	}

	return (
		<div className="click-wrapper" onClick={handleClick}>
			{ children }
		</div>
	);
};
