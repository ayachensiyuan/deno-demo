import { assertEquals } from 'https://deno.land/std@0.156.0/testing/asserts.ts';
import { say } from '../demo0/demo0.ts';
Deno.test('test say', () => {
	assertEquals(say('hello world'), 'hello world!!!');
});
