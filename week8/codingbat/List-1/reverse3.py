def reverse3(nums):
  a = []
  for i in range(0,len(nums)):
    a.append(nums[len(nums)-1-i])
  return a
