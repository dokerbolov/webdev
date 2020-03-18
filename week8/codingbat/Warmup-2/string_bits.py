def string_bits(str):
  newstr = ""
  for i in range(0,len(str)):
    if(i%2 == 0):
      newstr = newstr + str[i]
  return newstr
