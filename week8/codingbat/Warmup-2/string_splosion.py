def string_splosion(str):
  newstr = ""
  for i in range(0,len(str)):
    for j in range(0,i+1):
      newstr = newstr + str[j]
  return newstr
