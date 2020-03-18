def cat_dog(str):
  cnt_cat = 0
  cnt_dog = 0
  for i in range(2,len(str)):
    if(str[i-2] == "c" and str[i-1] == "a" and str[i] == "t"):
      cnt_cat = cnt_cat + 1
    if(str[i-2] == "d" and str[i-1] == "o" and str[i] == "g"):
      cnt_dog = cnt_dog + 1
  if(cnt_cat == cnt_dog):
    return True
  else:
    return False
