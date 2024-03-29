import asyncIterableMap from './asyncIterableMap.js';
import fromAsyncIterable from './fromAsyncIterable.js';
import toAsyncIterable from './toAsyncIterable.js';

/**
 * Applies a callable to each token of a tape.
 * @param {Function} callable - the callable to apply
 * @param {Tape} tape - the tape to process
 * @returns {Tape} The processed tape.
 */
export default function map(callable, tape) {
	return fromAsyncIterable(asyncIterableMap(callable, toAsyncIterable(tape)));
}
