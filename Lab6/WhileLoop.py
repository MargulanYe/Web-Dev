#A
n = int(input())
k = 0
p = 1

while p < n:
    p *= 2
    k += 1

print(k)


#B
n = int(input())
p = 1

while p < n:
    p *= 2

if p == n:
    print("YES")
else:
    print("NO")


#C
n = int(input())
p = 1

while p <= n:
    print(p, end=" ")
    p *= 2


#D
n = int(input())

for i in range(2, n + 1):
    if n % i == 0:
        print(i)
        break


#E
n = int(input())
i = 1

while i * i <= n:
    print(i * i)
    i += 1
