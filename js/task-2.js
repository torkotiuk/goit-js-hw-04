console.log('--- TASK 2 ---');
const inventory = {
  items: ['Knife', 'Gas mask'],
  add(itemName) {
    console.log(`Adding ${itemName} to inventory`);

    this.items.push(itemName);
  },
  remove(itemName) {
    console.log(`Removing ${itemName} from inventory`);

    this.items = this.items.filter(item => item !== itemName);
  },
};
// inventory.add('111');
// console.log(inventory);


const invokeInventoryAction = function(itemName, action) {
  console.log(`Invoking action on ${itemName}`);
  action(itemName);
};

invokeInventoryAction.bind(inventory.add('Medkit'));
// Invoking action on Medkit
// Adding Medkit to inventory

console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

invokeInventoryAction.bind(inventory.remove('Gas mask'));
// // Invoking action on Gas mask
// // Removing Gas mask from inventory

console.log(inventory.items); // ['Knife', 'Medkit']