<?php

namespace Reacts_Block;

// Only load if Gutenberg is available.
if ( ! function_exists( 'register_block_type' ) ) {
	return;
}

add_action( 'init', __NAMESPACE__ . '\register_reacts_block' );
/**
 * Register the Reacts block.
 *
 * @since 1.0.0
 *
 * @return void
 */
function register_reacts_block() {
	// Hook server side rendering into render callback
	register_block_type( 'wceu-2018/reacts-block', [
		'render_callback' => __NAMESPACE__ . '\render_reacts_block',
	] );
}

/**
 * Server rendering for the Reacts block
 */
function render_reacts_block() {
	$reacts = get_post_meta( get_the_ID(), 'wceu_2018_gb_reacts', true );

	// Start our output buffer for templates
	ob_start();
	?>
	<div id="reacts-block" class="reacts-block-wrap">
		<div class="reacts-block-wrap-temp-counter">
			<?php echo esc_html( $reacts ); ?>
		</div>
	</div>
	<?php
	return ob_get_clean();
}
