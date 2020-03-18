def xyz_there(str):
  ok = bool(False)
  if(len(str) >= 3):
    if(str[0] == "x" and str[1] == "y" and str[2] == "z"):
      ok = True
  for i in range(3,len(str)):
    if(str[i-2] == "x" and str[i-1] == "y" and str[i] == "z"and str[i-3] == "."):
      ok = False
    if(str[i-2] == "x" and str[i-1] == "y" and str[i] == "z"and str[i-3] != "."):
      ok = True
  return ok
