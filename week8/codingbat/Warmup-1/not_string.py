def not_string(str):
  if(len(str) > 2):
    if(str[0] == "n" and str[1] == "o" and str[2] == "t"):
      return str
    else:
      newstr = "not " + str
      return newstr
  else:
    newstr = "not " + str
    return newstr
