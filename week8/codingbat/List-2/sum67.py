def sum67(nums):
  ok = bool(True)
  sum = 0
  for i in range(0,len(nums)):
    if(ok == True and nums[i] != 6):
      sum = sum + nums[i]
    elif(ok == False and nums[i] == 7):
      ok = True
    else:
      ok = False
  return sum
