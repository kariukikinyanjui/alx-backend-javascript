export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  // removed var keywords to avoid declaration
  if (trueOrFalse) {
   return [task, task2];
  }
  return [task, task2];
}
