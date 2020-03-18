def extra_end(str):
    newstr = ""
    if (len(str) < 3):
        return str + str + str
    else:
        for j in range(0, 3):
            for i in range(len(str) - 2, len(str)):
                newstr = newstr + str[i]
    return newstr

