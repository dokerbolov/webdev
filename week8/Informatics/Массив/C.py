n = int(input())
b = input().split()
cnt = int(0)

a = []

for i in range(0,n):
    a.append(int(b[i]))

for i in range(0,n):
    if(a[i] > 0):
        cnt = cnt + 1;

print(cnt)