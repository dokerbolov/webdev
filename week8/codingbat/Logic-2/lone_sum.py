def lone_sum(a, b, c):
    sum = int(0)
    if (a != b):
        if (a != c):
            if (b != c):
                sum = sum + a + b + c
            else:
                sum = sum + a
        else:
            sum = sum + b
    else:
        if (a != c):
            sum = sum + c
    return sum