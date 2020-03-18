def front_back(str):
  if (len(str) < 2):
    return str
  else:
    newstr = str[len(str)-1]
    for i in range(1,len(str)-1):
      newstr = newstr + str[i]
    newstr = newstr + str[0]
    return newstr
