def has22(nums):
  ok = bool(False)
  for i in range(1,len(nums)):
    if(nums[i-1] == 2 and nums[i] == 2):
      ok = True
      break
  return ok
