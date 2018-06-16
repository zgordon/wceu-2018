/**
 * WordPress Libraries
 */
const { createElement, render } = wp.element;
const apiRequest = wp.apiRequest;
const { registerStore, dispatch, subscribe } = wp.data;

/**
 * Our Components
 */
import { Clicker } from "../../components/clicker";
import { SmartWrapper } from "../../components/wrapper";

/**
 * Create our store
 */
// Store Default State
const DEFAULT_STATE = { };

// Get the reacts block
const reacts_block = document.getElementById( 'reacts-block' );

// Register Our Store
// registerStore( 'wceu-2018-reacts' );
render(
	createElement( 'div', null,
		'Hello!'
	),
	reacts_block
);
