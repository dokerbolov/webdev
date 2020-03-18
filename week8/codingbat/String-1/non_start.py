def non_start(a, b):
    newstr = ""
    for i in range(1, len(a)):
        newstr = newstr + a[i]
    for i in range(1, len(b)):
        newstr = newstr + b[i]
    return newstr
