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
		[],
		[
			['lang-in.tag',  /^(<\/?[a-z][^<>]*>)/i],
			//['lang-html', /<([a-z][a-z0-9]*)\b[^>]*>/i],
			[PR.PR_COMMENT, /^\{(?=\*)[\s\S]+\*\}/],
			['opn', /\{(?!\*)\/{0,1}/],
			['clo', /\}/],
			[PR.PR_STRING, /^[\"\'].*[\"\']/i],
			[PR.PR_LITERAL, /^\x24(?=[a-z])[a-z]+/i, null],			
			[PR.PR_KEYWORD, /^(?:as|if(?:set|Current)?|elseifset|elseif|else|var|default|first|last|sep|debugbreak|dump|capture|cache|layout|extends|contentType|status|link|plink|block|include|widget|control|snippet|foreach|for)/]
		]
	),
	['latte']
);