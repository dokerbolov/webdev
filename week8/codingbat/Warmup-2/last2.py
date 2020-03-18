def last2(str):
  if (len(str)) < 2:
    return 0
  else:
    substr = ""
    for i in range (0,len(str)-2):
      substr = substr + str[i]
    cnt = 0
    for i in range(1,len(str)-2):
        if(substr[i-1] == str[len(str)-2] and substr[i] == str[len(str)-1]):
          cnt = cnt + 1
  return cnt
