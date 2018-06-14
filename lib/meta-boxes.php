<?php

namespace Reacts_Block;

add_action( 'init', __NAMESPACE__ . '\register_meta_fields' );
/**
 * Registering meta fields for block attributes that use meta storage
 */
function register_meta_fields() {
	register_meta(
		'post',
		'wceu_2018_gb_reacts',
		[
			'type'         => 'integer',
			'single'       => 'true',
			'show_in_rest' => true,
		] );
}
