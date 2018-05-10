# Prompt

Define a **recursive** method `make_change` that will take in an array of coin values and a target sum.  The method should return an array of the least number of "coins," based on value, necessary to reach the target sum.

#### Example:
```Ruby
make_change([1, 5, 10, 25], 87)

#=> [25, 25, 25, 10, 1, 1]

make_change([1, 5, 10, 25], 14)

#=> [10, 1, 1, 1, 1]

make_change([1, 5, 10, 25], 0)

#=> []
```

### Phase 1: 'Greedy'

For the first part of the challenge, write the algorithm assuming the coins are all standard American coins. The array will always be `[1, 5, 10, 25]`.

### Phase 2: 'Not so Greedy'

For the second step in this challenge, refactor the algorithm to accept varying potential coin values.  

#### Example:
```Ruby
make_change([1, 7, 10], 14)

#=> [7, 7]

make_change([2, 19, 21, 27], 40)

#=> [21, 19]

make_change([4, 16, 20], 0)

#=> []

make_change([13, 44, 76], 27)

#=> nil (it's impossible to reach the target sum)
```   

### Phase 3: Optimize

*Skip this phase if the optimized solution has already been achieved.*

For phase three, it's likely that the initial solution to phase 2 is very time complex.  O(2^n) is easy to achieve, but we can do better.  Refactor your algorithm to run in O(n^2) time.
