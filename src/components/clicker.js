// Use wp-data package for our store
const { data, apiRequest } = wp;
const { registerStore, dispatch, select } = data;

const DEFAULT_STATE = {
	reacts: 0,
	clickable: false,
	active: true,
};

/**
 * Register our store!! (wceu-2018-reacts)
 */
registerStore( 'wceu-2018-reacts', {
	reducer( state = DEFAULT_STATE, action ) {
		switch ( action.type ) {
			case 'INCREMENT_COUNT':
				return {
					...state,
					reacts: state.reacts + 1,
				};

			case 'ACTIVATE':
				return {
					...state,
					active: false,
				};

			case 'DISABLE_CLICK':
				return {
					...state,
					clickable: false,
				};
		}
	},

	actions: {
		incrementCount() {
			return {
				type: 'INCREMENT_COUNT',
			};
		},
		activate() {
			return {
				type: 'ACTIVATE',
			};
		},
		disableClick() {
			return {
				type: 'DISABLE_CLICK',
			};
		},
	},

	selectors: {
		getReacts( state ) {
			const { reacts } = state;

			return reacts;
		},
	},
} );

/**
 * Click Handler
 * @param props
 * @returns {*}
 * @constructor
 */
export const Clicker = props => {
	const { children, clickable } = props;

	function handleClick( event ) {
		dispatch( 'wceu-2018-reacts' ).incrementCount();

		console.log( select( 'wceu-2018-reacts' ).getReacts() );
	}

	return (
		<div className="click-wrapper" onClick={handleClick}>
			{ children }
		</div>
	);
}
