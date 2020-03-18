def max_end3(nums):
  max = nums[0]
  if(max < nums[len(nums)-1]):
    max = nums[len(nums)-1]
  for i in range(0,len(nums)):
    nums[i] = max
  return nums