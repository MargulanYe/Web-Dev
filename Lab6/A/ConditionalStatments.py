#A
a = int(input())
b = int(input())

if a > b:
    print(1)
elif b > a:
    print(2)
else:
    print(0)


#B
x = int(input())

if x > 0:
    print(1)
elif x < 0:
    print(-1)
else:
    print(0)


#C
a = int(input())
b = int(input())

if a == b:
    print("YES")
else:
    print("NO")


#D
year = int(input())

if (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):
    print("YES")
else:
    print("NO")


#E
a = int(input())
b = int(input())

if a > b:
    print(a)
else:
    print(b)
