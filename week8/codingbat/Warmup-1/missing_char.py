def missing_char(str, n):
  newstr = ""
  for i in range(0,len(str)):
    if(i != n):
      newstr = newstr + str[i]
  return newstr

