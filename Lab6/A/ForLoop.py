#A
n = int(input())
count = 0

for i in range(n):
    x = int(input())
    if x == 0:
        count += 1

print(count)


#B
n = int(input())
s = 0

for i in range(n):
    x = int(input())
    s += x

print(s)


#C
s = 0

for i in range(100):
    x = int(input())
    s += x

print(s)


#D
x = int(input())
count = 0

i = 1
while i * i <= x:
    if x % i == 0:
        if i * i == x:
            count += 1
        else:
            count += 2
    i += 1

print(count)


#E
x = int(input())

for i in range(1, x + 1):
    if x % i == 0:
        print(i, end=" ")


#F
x = int(input())

for i in range(2, x + 1):
    if x % i == 0:
        print(i)
        break


#G
a = int(input())
b = int(input())

i = 1
while i * i <= b:
    if i * i >= a:
        print(i * i, end=" ")
    i += 1


#H
a = int(input())
b = int(input())
c = int(input())
d = int(input())

for i in range(a, b + 1):
    if i % d == c:
        print(i, end=" ")


#I
a = int(input())
b = int(input())

for i in range(a, b + 1):
    if i % 2 == 0:
        print(i, end=" ")
