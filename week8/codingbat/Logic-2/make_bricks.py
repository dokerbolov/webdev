def make_bricks(small, big, goal):
  ok = bool(False)
  for i in range(1,big):
    for j in range(1,small):
      if(5*i + j == goal):
        ok = True
        break
    if(ok):
      break
  return ok
