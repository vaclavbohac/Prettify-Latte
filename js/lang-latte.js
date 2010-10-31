// Vaclav Bohac (c) 2010
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview
 * 
 * Registers a language handler for Nette Framework Latte.
 * 
 * @author bohac.v@gmail.com
 */
PR.registerLangHandler(
	PR.createSimpleLexer(
		[
		],
		[
			['lang-latte-n-attributes',  /^(<\/?[a-z][^<>]*>)/i],
			[PR.PR_COMMENT, /^\{(?=\*)[\s\S]+\*\}/],
			['opn', /\{(?![\*\"\'\s])\/{0,1}/],
			['clo', /\}/],
			['lang-latte-array-literal', /^\[(.*)\]/],
			[PR.PR_STRING, /^[\"\'].*[\"\']/i],
			[PR.PR_LITERAL, /^\x24(?=[a-z])[a-z]+/i],			
			[PR.PR_KEYWORD, /^(?:as|if(?:set|Current)?|elseifset|elseif|else|var|default|first|last|sep|debugbreak|dump|capture|cache|layout|extends|contentType|status|link|plink|block|include|widget|control|snippet|foreach|for)/]
		]
	),
	['latte']
);

// Match numbers and strings in array literal.
PR.registerLangHandler(
	PR.createSimpleLexer(
		[],
		[
			[PR.PR_LITERAL, /^(?:\d+|\d*.\d+)/i],
			[PR.PR_STRING, /^[\'][^\']*[\']/i],
			[PR.PR_STRING, /^[\"][^\"]*[\"]/i],
			[PR.PR_STRING, /^[a-z]+/i]
		]
	),
	['latte-array-literal']
);


// Match special Latte n: attribute syntax. 
PR.registerLangHandler(
	PR.createSimpleLexer(
		[],
		[
			['lang-latte-n-keywords', /^n:([a-z]+)/],
			['opn', /\{(?![\*\"\'])/],
			['clo', /\}/],
			[PR.PR_LITERAL, /^\x24(?=[a-z])[a-z]+/i],
			['lang-in.tag', /^([<a-z0-9\"\':\/\.\=]+)/i],
			[PR.PR_TAG, /^>/]
		]
	),
	['latte-n-attributes']
);


// Match keyword tag names in Latte n: attributes.
PR.registerLangHandler(
	PR.createSimpleLexer(
		[],
		[
			[PR.PR_KEYWORD, /^(?:if|ifset|foreach|first|sep|last|class|href)/]
		]
	),
	['latte-n-keywords']
);
