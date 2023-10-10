/*
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 4.1

/**
* Tests if a single-precision floating-point numeric value is finite.
*
* @param x - value to test
* @returns boolean indicating whether the value is finite
*
* @example
* var bool = isfinitef( 5.0 );
* // returns true
*
* @example
* var bool = isfinitef( -2.0e64 );
* // returns true
*
* @example
* var bool = isfinitef( Infinity );
* // returns false
*
* @example
* var bool = isfinitef( -Infinity );
* // returns false
*/
declare function isfinitef( x: number ): boolean;


// EXPORTS //

export = isfinitef;