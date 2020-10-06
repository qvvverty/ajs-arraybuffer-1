import Magician from '../magician';

const magician = new Magician();

test("Expect setter .attack to set character's baseAttack", () => {
  magician.attack = 100;
  expect(magician.baseAttack).toBe(100);
});

test('Expect magician to have reduced attack over distance', () => {
  magician.distanceToTarget = 2;
  expect(magician.attack).toBe(80);
});

test('Expect setter & getter .stoned to work correct', () => {
  magician.stoned = true;
  expect(magician.stoned).toBe(true);
});

test('Expect attack with "stoned" state to be reduced', () => {
  expect(magician.attack).toBe(75);
});

test('Expect distance = 0 and "stoned" state not to collapse attack calc farmula', () => {
  magician.distanceToTarget = 0;
  expect(magician.attack).toBe(100);
});

test('Expect attack with "stoned" state not to be negative', () => {
  magician.attack = 10;
  magician.distanceToTarget = 5;
  expect(magician.attack).toBe(0);
});
