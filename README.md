# JavaScript Array Methods

## 1. forEach

- **Description**: The `forEach` method executes a provided function once for each array element. It is typically used for side effects, such as logging values or modifying external states.
- **Key Use Case**: Performing an action on each element in an array without returning a new array.
- **Example Use Cases**:
  - Logging each element in an array.
  - Modifying elements of the array outside the array scope.

## 2. map

- **Description**: The `map` method creates a new array populated with the results of calling a provided function on every element in the array. It is commonly used for transforming data.
- **Key Use Case**: Transforming each element in an array to create a new array with modified values.
- **Example Use Cases**:
  - Creating an array of transformed values from another array.
  - Mapping an array of objects to extract a specific property.

## 3. filter

- **Description**: The `filter` method creates a new array containing all the elements that pass a test provided by a function. It is useful for filtering data based on certain conditions.
- **Key Use Case**: Extracting elements from an array that meet specific criteria, leaving out those that don't.
- **Example Use Cases**:
  - Filtering out specific items from an array based on a condition.
  - Creating a list of users above a certain age.

## 4. reduce

- **Description**: The `reduce` method executes a reducer function on each element of the array, resulting in a single output value. It is typically used for accumulating or combining data.
- **Key Use Case**: Reducing an array to a single value, such as summing values or finding an average.
- **Example Use Cases**:
  - Summing all elements in an array.
  - Calculating a combined result such as a product or a total from a list.

## Summary of Use Cases:

- **forEach**: Ideal for executing side effects (logging, updating UI) on each array element without returning a new array.
- **map**: Perfect for transforming or modifying each array element and returning a new array with the results.
- **filter**: Best suited for creating a new array based on a condition, filtering out unwanted elements.
- **reduce**: Useful for aggregating array data into a single value, such as calculating totals, averages, or combined results.
