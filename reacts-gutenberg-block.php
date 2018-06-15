<?php
/**
 * Plugin's bootstrap file to launch the plugin.
 *
 * @package     Reacts_Block
 * @author      Julien Melissas (@julienmelissas)
 * @license     GPL2+
 *
 * @wordpress-plugin
 * Plugin Name: Post Reacts Gutenberg Block
 * Plugin URI:  https://github.com/zgordon/wceu-2018
 * Description: A Gutenberg Block to allow users to "react" to posts on the frontend. Built for the WordCamp Europe 2018 workshop with Zac Gordon & Julien Melissas.
 * Version:     1.0.0
 * Author:      Julien Melissas & Zac Gordon
 * Author URI:  https://2018.europe.wordcamp.org/session/gutenberg-block-development-with-react/
 * Text Domain: reactsblock
 * Domain Path: /languages
 * License:     GPL2+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.html
 */

namespace Reacts_Block;

//  Exit if accessed directly.
defined('ABSPATH') || exit;

/**
 * Gets this plugin's absolute directory path.
 *
 * @since  1.0.0
 * @ignore
 * @access private
 *
 * @return string
 */
function _get_plugin_directory() {
	return __DIR__;
}

/**
 * Gets this plugin's URL.
 *
 * @since  1.0.0
 * @ignore
 * @access private
 *
 * @return string
 */
function _get_plugin_url() {
	static $plugin_url;

	if ( empty( $plugin_url ) ) {
		$plugin_url = plugins_url( null, __FILE__ );
	}

	return $plugin_url;
}

// Enqueue JS and CSS
include __DIR__ . '/lib/enqueue-scripts.php';

// Register meta boxes
include __DIR__ . '/lib/meta-boxes.php';

// Code for the dynamic portion of the block
include __DIR__ . '/src/blocks/reacts/index.php';

// Code for the API Endpoint
include __DIR__ . '/lib/api.php';
