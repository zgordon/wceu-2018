/**
 * Block dependencies and components
 */
import './style.scss';
import { Wrapper } from '../../components/wrapper.js';

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
				default: '0',
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
				<Wrapper reacts={ reacts }/>
			];
		},
		save() {
			// We're rendering in PHP because this needs to be dynamic...
			return null;
		},
	},
);
