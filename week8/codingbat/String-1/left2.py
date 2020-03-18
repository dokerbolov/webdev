def left2(str):
    newstr = ""
    if (len(str) < 3):
        return str
    else:
        for i in range(2, len(str)):
            newstr = newstr + str[i]
        newstr = newstr + str[0] + str[1]
    return newstr

