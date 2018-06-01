export function getRandom(list) {
  const rand = list[Math.floor(Math.random() * list.length)];
  return rand;
}
