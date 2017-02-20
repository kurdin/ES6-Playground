/**********************************************************************************
 * For ... of
 *
 * Both for..of and for..in statements iterate over lists; the values iterated on are different though,
 * .for..in returns a list of keys on the object being iterated.
 * .for..of returns a list of values of the numeric properties of the object being iterated.
 **********************************************************************************/

const myList = [15, 33, 45];

/* Output: 0, 1, 2 <-- The keys */
for (const i in myList) {
  console.log(i);
}

/* Output: 15, 33, 45 <-- The values */
for (const i of myList) {
  console.log(i);
}

