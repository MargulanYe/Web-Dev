#A
def xor(x, y):
    return (x and not y) or (y and not x)

x, y = map(int, input().split())
print(int(xor(bool(x), bool(y))))


#B
def power(a, n):
    result = 1
    for i in range(n):
        result *= a
    return result

a, n = map(float, input().split())
n = int(n)
print(power(a, n))


#C
def min4(a, b, c, d):
    m = a
    if b < m:
        m = b
    if c < m:
        m = c
    if d < m:
        m = d
    return m

a, b, c, d = map(int, input().split())
print(min4(a, b, c, d))
