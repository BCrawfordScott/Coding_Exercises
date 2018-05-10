# Solution

The biggest challenges with this algorithm are as follows:

* Recursion
* Comparing possible change combinations
* Time complexity

Each phase tackles these challenges, and it's encouraged that
only one challenge is addressed at a time.

### Recursion

Remember that in recursion we step towards the base case with each inductive step.  The sample input that shows a target of 0 should be the clue about your base case. From there we recognize  that we can step towards the base case by subtracting the coin values from the target with each recursive call.

### Comparison

Memoization is the key here to being able to compare the lengths of the different possible change arrays.  This, however,  presents a time complexity issue, O(2^n), if we attempt to memoize two similar recursive calls in each stack frame. 

### Time Complexity

We can solve the issue of time complexity and reduce it to O(n^2) by realizing that we are not limited to returning from inside the each_with_index loop.  Instead we can commit to iterating through every coin we have, and use a variable defined outside the scope of the each loop to store the best combinations of change we find.
