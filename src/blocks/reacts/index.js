/**
 * Block dependencies and components
 */
import './style.scss';
import { Heart } from '../../components/heart.js';
import { Counter } from '../../components/counter.js';

/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { registerBlockType  } = wp.blocks;
const { InspectorControls } = wp.editor;
const { TextControl, PanelBody } = wp.components;

/**
 * Register block
 */
export default registerBlockType(
	'wceu-2018/reacts-block',
	{
		title: __( 'Reacts Block', 'reactsblock' ),
		description: __( 'A Gutenberg Block that keeps track of a post or a pages reacts.', 'reactsblock'),
		category: 'common',
		icon: {
			src: 'heart',
			background: '#F06861',
		},
		keywords: [
			__( 'Meta', 'reactsblock' ),
			__( 'Reacts', 'reactsblock' ),
		],
		attributes: {
			reacts: {
				type: 'integer',
				source: 'meta',
				meta: 'wceu_2018_gb_reacts',
			},
		},
		edit: props => {
			const { attributes: { reacts }, className, setAttributes, isSelected } = props;
			return [
				isSelected && (
					<InspectorControls>
						<PanelBody>
							<TextControl
								label={ __( 'Meta box', 'jsforwpblocks' ) }
								value={ reacts }
								onChange={ reacts => setAttributes( { reacts } ) }
							/>
						</PanelBody>
					</InspectorControls>
				),
				<div className={ className } >
					<div className="reacts-block-wrap">
						<div className="heart-wrap">
							<Heart/>
						</div>
						<Counter count={ reacts } />
					</div>
				</div>
			];
		},
		save: props => {
			const { attributes: { reacts } } = props;
			return (
				<div className="reacts-block-wrap">
					<Counter count={ reacts } />
				</div>
			);
		},
	},
);
