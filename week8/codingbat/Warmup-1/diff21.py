def diff21(n):
  if(n == 21):
    return 0
  elif(n > 21):
    return abs(n-21)*2
  else:
    return 21-n
