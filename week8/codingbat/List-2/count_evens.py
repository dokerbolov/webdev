def count_evens(nums):
  cnt = 0
  for i in range(0,len(nums)):
    if(nums[i]%2 == 0):
      cnt = cnt + 1
  return cnt
