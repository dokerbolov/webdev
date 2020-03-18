def make_chocolate(small, big, goal):
    sum = int(0)
    big_Amount = int(0)
    cnt = int(0)
    ok = bool(False)

    while sum < goal and big != big_Amount:
        sum = sum + 5
        big_Amount = big_Amount + 1

    if (sum > goal):
        sum = sum - 5

    for i in range(0, small):
        if (sum == goal):
            ok = True
            break
        sum = sum + 1
        cnt = cnt + 1
        if (sum == goal):
            ok = True
            break

    if (ok):
        return cnt
    else:
        return -1

