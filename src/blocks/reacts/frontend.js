/**
 * WordPress JS Package Dependencies
 */
const { createElement, render } = wp.element;
const apiRequest = wp.apiRequest;

// Import our components
import { Clicker } from "../../components/clicker";
import { Wrapper } from "../../components/wrapper";

// Make our FrontendRenderer component
const FrontendRenderer = props => {
	const { reacts } = props;
	return createElement( 'div', null,
		<Clicker>
			<Wrapper reacts={reacts} />
		</Clicker>
	);
};

// Get the reacts block
const reacts_block = document.getElementById( 'reacts-block' );

// Make sure we have the block and a post ID
if ( reacts_block ) {

	// Grab the post_id from data attributes
	const post_id = reacts_block.dataset.postId;

	// Make sure we have a post ID
	if ( post_id ) {

		// Make an API Request
		apiRequest( { path: `/wp/v2/posts/${post_id}` } ).then( post => {

			// Make sure we have postmeta
			if ( post.meta ) {
				let reacts = post.meta.wceu_2018_gb_reacts;

				// Mount our component!
				render(
					FrontendRenderer( { reacts } ),
					reacts_block
				);
			}
		} );
	}
}
