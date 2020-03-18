def string_match(a, b):
  cnt = 0
  if(len(a) > len(b)):
    for i in range(1,len(b)):
      if(a[i-1] == b[i-1] and a[i] == b[i]):
        cnt = cnt + 1
  else:
    for i in range(1,len(a)):
      if(a[i-1] == b[i-1] and a[i] == b[i]):
        cnt = cnt + 1
  return cnt
