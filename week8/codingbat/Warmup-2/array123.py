def array123(nums):
  ok = bool(False)
  if(len(nums) < 3):
    return False
  else:
    for i in range(2,len(nums)):
      if(nums[i-2] == 1 and nums[i-1] == 2 and nums[i] == 3):
        ok = True
        break
  return ok;
