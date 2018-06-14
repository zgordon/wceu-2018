<?php

namespace Reacts_Block;

add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\enqueue_block_editor_assets' );
/**
 * Enqueue block editor only JavaScript and CSS.
 */
function enqueue_block_editor_assets() {
	// Make paths variables so we don't write em twice ;)
	$block_path = '/dist/js/editor.blocks.js';
	$style_path = '/dist/css/blocks.editor.css';

	// Enqueue the bundled block JS file
	wp_enqueue_script(
		'wceu-2018-reactsblock-js',
		_get_plugin_url() . $block_path,
		[ 'wp-i18n', 'wp-element', 'wp-blocks', 'wp-components' ],
		filemtime( _get_plugin_directory() . $block_path )
	);

	// Enqueue optional editor only styles
	wp_enqueue_style(
		'wceu-2018-reactsblock-editor-css',
		_get_plugin_url() . $style_path,
		[ 'wp-blocks' ],
		filemtime( _get_plugin_directory() . $style_path )
	);
}

add_action( 'enqueue_block_assets', __NAMESPACE__ . '\enqueue_assets' );
/**
 * Enqueue front end and editor JavaScript and CSS assets.
 */
function enqueue_assets() {
	$style_path = '/dist/css/blocks.style.css';
	wp_enqueue_style(
		'wceu-2018-reactsblock-frontend-css',
		_get_plugin_url() . $style_path,
		[ 'wp-blocks' ],
		filemtime( _get_plugin_directory() . $style_path )
	);
}

add_action( 'enqueue_block_assets', __NAMESPACE__ . '\enqueue_frontend_assets' );
/**
 * Enqueue frontend JavaScript and CSS assets.
 */
function enqueue_frontend_assets() {

	// If in the backend, bail out.
	if ( is_admin() ) {
		return;
	}

	$block_path = '/dist/js/frontend.blocks.js';
	wp_enqueue_script(
		'wceu-2018-reactsblock-frontend-js',
		_get_plugin_url() . $block_path,
		[ 'wp-element', ],
		filemtime( _get_plugin_directory() . $block_path ),
		true // keep this in the footer!!
	);
}
