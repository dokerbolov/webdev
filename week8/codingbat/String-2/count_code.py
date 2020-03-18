def count_code(str):
  cnt = int(0)
  for i in range(4,len(str)+1):
    if(str[i-4] == "c" and str[i-3] == "o" and str[i-1] == "e"):
      cnt = cnt + 1
  return cnt
