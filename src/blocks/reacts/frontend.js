/**
 * WordPress Libraries
 */
const { createElement, render } = wp.element;
const apiRequest = wp.apiRequest;
const { registerStore, dispatch, subscribe } = wp.data;

/**
 * Our Components
 */
import { Clicker } from "../../components/clicker";
import { SmartWrapper } from "../../components/wrapper";

/**
 * Create our store
 */
// Store Default State
const DEFAULT_STATE = {
	reacts: 0,
	active: false,
};

// Register Our Store
registerStore( 'wceu-2018-reacts', {
	reducer( state = DEFAULT_STATE, action ) {
		switch ( action.type ) {
			case 'SET_REACTS':
				return {
					...state,
					reacts: action.reacts,
				};

			case 'ACTIVATE':
				return {
					...state,
					active: true,
				};
		}
	},

	actions: {
		setReacts( reacts ) {
			return {
				type: 'SET_REACTS',
				reacts
			};
		},
		activate() {
			return {
				type: 'ACTIVATE',
			};
		},
	},

	selectors: {
		getReacts( state ) {
			return state.reacts;
		},
		isActivated( state ) {
			return state.active;
		}
	},
} );

// Get the reacts block
const reacts_block = document.getElementById( 'reacts-block' );

// Subscribe listens for changes to the state
//subscribe( () => {
//	console.log(select( 'wceu-2018-reacts' ).getReacts());
//} );

// Make sure we have the block
if ( reacts_block ) {

	// Grab the post_id from data attributes
	const post_id = reacts_block.dataset.postId;

	// Make sure we have a post ID
	if ( post_id ) {

		// Make that initial API Request
		apiRequest( { path: `/wp/v2/posts/${post_id}` } ).then( post => {

			// Make sure we have postmeta
			if ( post.meta ) {
				let reacts = post.meta.wceu_2018_gb_reacts;

				dispatch( 'wceu-2018-reacts' ).setReacts( reacts );

				// Mount our component!
				render(
					createElement( 'div', null,
						<Clicker post_id={post_id}>
							<SmartWrapper/>
						</Clicker>
					),
					reacts_block
				);
			}
		} );
	}
}
