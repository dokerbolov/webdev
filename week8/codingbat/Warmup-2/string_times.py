def front_times(str, n):
  newstr = ""
  if(len(str) < 3):
    for j in range(0,n):
        for i in range(0,len(str)):
          newstr = newstr + str[i]
  else:
    for j in range(0,n):
      for i in range(0,3):
        newstr = newstr + str[i]
  return newstr

