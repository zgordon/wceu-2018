/**
 * WordPress Libraries
 */
const { withSelect } = wp.data;

/**
 * Import Child Components
 */
import { Heart } from './heart';
import { Count } from './count';

/**
 * Wrapper Component
 */
export const Wrapper = props => {
	const { active, reacts } = props;

	return (
		<div className="reacts-block-wrap">
			<div className="heart-wrap">
				<Heart active={ active }/>
			</div>
			<Count count={ reacts } />
		</div>
	);
};

/**
 * SmartWrapper Component
 * This wrapper is aware of the state
 */
export const SmartWrapper = withSelect( ( select ) => {
	return {
		active: select( 'wceu-2018-reacts' ).isActivated(),
		reacts: select( 'wceu-2018-reacts' ).getReacts(),
	};
} )( Wrapper );
