# @sciactive/splitn - Split with Remainder

A split function that returns [limit] elements, the last being the remainder.

How "split" often works in other languages, sometimes called "splitn".

## Usage

```ts
import splitn from '@sciactive/splitn';

splitn('a list of words', ' ', 2);
// ['a', 'list of words']

splitn('Some-Header: a-value: 1; another-value: 2;', /:\s*/, 2);
// ['Some-Header', 'a-value: 1; another-value: 2;']
```

# License

Copyright 2022 SciActive Inc

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
