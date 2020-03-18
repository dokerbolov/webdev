def count_hi(str):
  cnt = int(0)
  for i in range(1,len(str)):
    if(str[i-1] == "h" and str[i] == "i"):
      cnt = cnt + 1
  return cnt
