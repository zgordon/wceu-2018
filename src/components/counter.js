export const Counter = props => {
	const { count } = props;

	return (
		<div className="count-wrap">
			<div className="reacts-block-count">
				{ count }
			</div>
		</div>
	);
};
