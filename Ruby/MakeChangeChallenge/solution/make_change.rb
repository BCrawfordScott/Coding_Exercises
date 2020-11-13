# Phase 1:
# This solution is considered greedy because it continuously collects
# the larget value coins, then recursively calls `make_change` until
# the target reaches 0.  This is the optimal solution if we are using
# standard American demoninations of coins.

def make_change(arr, target)
  # establish a base case
  return [] if target == 0

  # sort and reverse the array as an optimization
  coins = arr.sort.reverse

  # iterate through the array and make the inductive step with the
  # decremented target
  coins.each_with_index do |coin, idx|
    next if coin > target

    new_target = target - coin

    # To avoid double counting, we should require that we use *larger
    # coins first*. This is what `coins.drop(index)` enforces, and why we
    # sorted and reversed our array; if we use a smaller coin, we can
    # never go back to using larger coins later.
    return [coin] + make_change(coins.drop(idx), new_target)
  end
end


# Phase 2 (potential solution):
# This solution accounts for any possible values of coins, but it
# extremely time complex. Because at every stack frame
# we make 2 recursive calls, this solution's time complexity is O(2^n))

def make_change(arr, target)

  # Establish two base cases: 1 First for if we reach 0, second
  # for if there is no possible combination of coins.
  return [] if target == 0 #O(1)
  return nil if arr.none? { |coin| coin <= target } #O(1)

  # sort and reverse the array as an optimization
  coins = arr.sort.reverse

  coins.each_with_index do |coin, idx| #O(n)
    next if coin > target

    # Store the values of the inductive step in two possible scenarios:
    # The first is if we want to keep the current coin, the second is
    # if there is a solution not including the current coin.
    option1 = make_change(coins.drop(idx), target - coin) #O(k) where k is the 'target'

    change2 = make_change(coins.drop(idx + 1), target)

    change1 = [coin] + option1 unless option1.nil?

    # compare the lengths of the two possible change options and
    # choose the shortest.  Return nil if both are nil.
    if option1.nil? && change2.nil?
      return nil
    elsif change2.nil?
      return change1
    elsif option1.nil?
      return change2
    else
      return change1.length <= change2.length ? change1 : change2
    end
  end

end


# Phase 3 (Optimized):
# We know we're going to iterate through every coin, so if we keep a reference
# to the best possible solution we've found through each iteration, we can
# regularly compare the lengths of our saved best change to our current change option
# and reassign the best change if we have a solution with fewer coins.  The time
# complexity for this solution is O(n^2).  It is the best possible outcome for
# this algortihm.

def make_change(arr, target)
  # Establish the two base cases
  return [] if target == 0
  return nil if arr.none? { |coin| coin <= target }

  # Sort and reverse the array as an optimization
  coins = coins.sort.reverse

  # Establish a variable to record the best change we have found as
  # we iterate through the coins.
  best_change = nil
  coins.each_with_index do |coin, index|

    next if coin > target

    # use this coin
    new_target = target - coin


    # Our inductive step.
    # It's important to note that we will not return from inside this iteration like
    # in the previous solution, instead we will only update the best_change we've
    # found if appropriate.
    best_remainder = make_change(coins.drop(index), new_target)

    # We may not be able to make the remaining amount of change (e.g.,
    # if coins doesn't have a 1cent piece), in which case we shouldn't
    # use this coin.
    next if best_remainder.nil?

    # Otherwise, the best way to make the change **using this coin**,
    # is the best way to make the remainder, plus this one coin.
    this_change = [coin] + best_remainder

    # Is this better than anything we've seen so far? If so, reassign best_change
    if best_change.nil? || (this_change.count < best_change.count)
      best_change = this_change
    end
  end

  # Finally, return best change.
  best_change
end
