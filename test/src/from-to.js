import test from 'ava' ;

import stream from '../../src' ;

/**
 * @test {stream#from}
 * @test {stream#to}
 */
test( 'can read from string' , async t => {

	const input = '\n\n\n    1 ,\t22\n, 333\t,\n-44 ,\t-5 \t\n  \t' ;
	const mystream = stream.fromString( input ) ;
	t.deepEqual(await stream.toString( mystream ), input ) ;

} ) ;