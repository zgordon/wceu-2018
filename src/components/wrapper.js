/**
 * Import Child Components
 */
import { Heart } from './heart.js';
import { Counter } from './counter.js';

/**
 * Wrapper Component
 */
export const Wrapper = props => {
	const { reacts } = props;

	return (
		<div className="reacts-block-wrap">
			<div className="heart-wrap">
				<Heart/>
			</div>
			<Counter count={ reacts } />
		</div>
	);
};
