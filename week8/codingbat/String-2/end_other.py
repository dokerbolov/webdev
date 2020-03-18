def end_other(a, b):
    a = a.lower()
    b = b.lower()
    if (len(a) > len(b)):
        if (a.endswith(b) == True):
            return True
        else:
            return False
    else:
        if (b.endswith(a) == True):
            return True
        else:
            return False

