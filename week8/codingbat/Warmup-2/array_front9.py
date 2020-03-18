def array_front9(nums):
  ok = bool(False)
  if(len(nums) < 5):
    for i in range(0,len(nums)):
      if(nums[i] == 9):
        ok = True
        break
  else:
    for i in range(0,4):
      if(nums[i] == 9):
        ok = True
        break
  return ok
