export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  // removed var keywords to avoid declaration
  if (trueOrFalse) {
   task = true;
   task2 = false;
  }
  return [task, task2];
}
