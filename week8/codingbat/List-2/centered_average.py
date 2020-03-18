def centered_average(nums):
    minNum = min(nums)
    maxNum = max(nums)
    minBool = False
    maxBool = False
    sum = 0
    for i in range(0, len(nums)):
        if (nums[i] == minNum and minBool == False):
            minBool = True
        elif (nums[i] == maxNum and maxBool == False):
            maxBool = True
        else:
            sum = sum + nums[i]
    average = sum / (len(nums) - 2)
    return average

