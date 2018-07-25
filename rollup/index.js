import { version } from './package.json'
import answer from 'the-answer'
import _ from 'lodash'

import foo from './foo.js';
export default function () {
  console.log(`version is ${version}, the answer is ${answer}`);
}