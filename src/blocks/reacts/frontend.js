// Use wp-element, which has been enqueued as a dependency
const { createElement, render } = wp.element;

// Make our FrontendRenderer component
const FrontendRenderer = props => {
	const { reacts } = props;
	return createElement( 'div', null,
		`count: ${ reacts }`
	);
};

// Mount our component!
render(
	FrontendRenderer( { reacts: 100 } ),
	document.getElementById( 'reacts-block' )
);
