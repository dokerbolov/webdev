import cmath

a = int(input())
b = int(input())

for i in range(a,b+1):
    if(i != 0):
        c = cmath.sqrt(i)
        if(c*c == i):
            print(i, sep=" ", end=" ", flush=True)