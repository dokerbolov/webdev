def front3(str):
  newstr = ""
  if(len(str) < 3):
    for j in range(0,3):
        for i in range(0,len(str)):
          newstr = newstr + str[i]
  else:
    for j in range(0,3):
      for i in range(0,3):
        newstr = newstr + str[i]
  return newstr
