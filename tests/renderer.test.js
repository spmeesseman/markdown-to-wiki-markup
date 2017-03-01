
'use strict';

const renderer = require( '../src/renderer' );

describe( 'renderer', () => {
	describe( 'heading', () => {
		it( 'works with a header level 1', () => {
			expect( renderer.heading( 'abcDEF', 1 ) ).to.be.eql( '= abcDEF\n' );
		} );
		it( 'works with a header level 6', () => {
			expect( renderer.heading( 'aa', 6 ) ).to.be.eql( '====== aa\n' );
		} );
	} );

	describe( 'paragraph', () => {
		it( 'works', () => {
			expect( renderer.paragraph( 'foo bar BAZ!' ) ).to.be.eql( 'foo bar BAZ!\n' );
		} );
	} );

	describe( 'link', () => {
		it( 'works with a title', () => {
			expect( renderer.link( 'http://foo', 'title', 'text' ) ).to.be.eql( '[http://foo text]' );
		} );

		it( 'works without a title', () => {
			expect( renderer.link( 'http://foo', '', 'text' ) ).to.be.eql( '[http://foo text]' );
		} );
	} );

	describe( 'code', () => {
		it( 'works with a lang', () => {
			let input = '<ol>\n' +
					'	<li>foo</li>\n' +
					'	<li>foo</li>\n' +
					'</ol>',
				expected = '{{{#!html\n' +
					'<ol>\n' +
					'	<li>foo</li>\n' +
					'	<li>foo</li>\n' +
					'</ol>\n' +
					'}}}\n';
			expect( renderer.code( input, 'html' ) ).to.be.eql( expected );
		} );

		it( 'works without a lang', () => {
			let input = '<ol>\n' +
					'	<li>foo</li>\n' +
					'	<li>foo</li>\n' +
					'</ol>',
				expected = '{{{\n' +
					'<ol>\n' +
					'	<li>foo</li>\n' +
					'	<li>foo</li>\n' +
					'</ol>\n' +
					'}}}\n';
			expect( renderer.code( input ) ).to.be.eql( expected );
		} );
	} );
} );