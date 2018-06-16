<?php

namespace Reacts_Block;

add_action( 'rest_api_init', __NAMESPACE__ . '\register_api_endpoint' );
/**
 * Register the API Endpoint
 */
function register_api_endpoint() {
	register_rest_route( 'wceu-2018-reacts/v1', '/increment/(?P<id>\d+)', [
		'methods' => 'GET',
		'callback' => __NAMESPACE__ . '\increment_reacts',
	] );
};

/**
 * Increments reacts
 * @param $data
 */
function increment_reacts( $data ) {
	$post_id = $data['id'];

	// Get current reacts
	$current_reacts = get_post_meta( $post_id, 'wceu_2018_gb_reacts', true );

	// If there is no value, return false
	if ( $current_reacts === false ) {
		return false;
	}

	// Set the new reacts
	$new_reacts = $current_reacts + 1;

	// Update Reacts
	$updated = update_post_meta( $post_id, 'wceu_2018_gb_reacts', $new_reacts );

	if ( $updated ) {
		return $new_reacts;
	}

	return false;
}
