#A
n = int(input())
a = list(map(int, input().split()))

for i in range(n // 2):
    a[i], a[n - 1 - i] = a[n - 1 - i], a[i]

print(*a)


#B
n = int(input())
a = list(map(int, input().split()))

count = 0
for i in range(1, n - 1):
    if a[i] > a[i - 1] and a[i] > a[i + 1]:
        count += 1

print(count)


#C
n = int(input())
a = list(map(int, input().split()))

ok = False
for i in range(n - 1):
    if a[i] * a[i + 1] > 0:
        ok = True

if ok:
    print("YES")
else:
    print("NO")


#D
n = int(input())
a = list(map(int, input().split()))

count = 0
for i in range(1, n):
    if a[i] > a[i - 1]:
        count += 1

print(count)


#E
n = int(input())
a = list(map(int, input().split()))

count = 0
for x in a:
    if x > 0:
        count += 1

print(count)


#F
n = int(input())
a = list(map(int, input().split()))

for x in a:
    if x % 2 == 0:
        print(x, end=" ")


#G
n = int(input())
a = list(map(int, input().split()))

for i in range(0, n, 2):
    print(a[i], end=" ")
