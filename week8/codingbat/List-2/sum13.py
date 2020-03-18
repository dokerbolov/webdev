def sum13(nums):
  sum = 0;
  if(len(nums) == 0):
    return 0
  for i in range(0,len(nums)-1):
    if(nums[i] != 13):
      sum = sum + nums[i]
    else:
      nums[i+1] = 0;
  if(nums[len(nums)-1] != 13):
    sum = sum + nums[len(nums)-1]
  return sum
