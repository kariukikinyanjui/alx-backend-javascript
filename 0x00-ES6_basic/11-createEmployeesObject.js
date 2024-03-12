export default function createEmployessObject(departmentName, employees) {
  return {
    [departmentName]: employees,
  };
}
