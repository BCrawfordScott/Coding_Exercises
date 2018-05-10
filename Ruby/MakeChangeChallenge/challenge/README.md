# Prompt

Define a method `make_change` that will take in an array of coin values, and a target sum.  The method should return an array of the least number of "coins" based on value necessary to reach the target sum.

#### Example:
```Ruby
make_change([1, 5, 10, 25], 87)

#=> [25, 25, 25, 10, 1, 1]

make_change([1, 5, 10, 25], 14)

#=> [10, 1, 1, 1, 1]

make_change([1, 5, 10, 25], 0)

#=> []
```
