import fruits from './fruits';
import {choice, remove} from './helpers';

let fruit = choice(fruits);

console.log(`I'd like one ${fruit}, please`);
console.log(`Here you go: ${fruit}`);
console.log(`Delicious! May I have another?`);

let remaining = remove(fruit, fruits);

console.log(`I'm sorry, we are all out. We have ${remaining.length} left`);