#A
import math

a = int(input())
b = int(input())

c = math.sqrt(a*a + b*b)

print(c)

#B
n = int(input())

print("The next number for the number", n, "is", n + 1, ".")
print("The previous number for the number", n, "is", n - 1, ".")

#C
n = int(input())
k = int(input())

print(k // n)

#D
n = int(input())
k = int(input())

print(k % n)

#E
v = int(input())
t = int(input())

print((v * t) % 109)
