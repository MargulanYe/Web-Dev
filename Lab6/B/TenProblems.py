#A
print("Hello, World!")


#B
if __name__ == '__main__':
    n = int(input())
    for i in range(n):
        print(i * i)


#C
if __name__ == '__main__':
    a = int(input())
    b = int(input())

    print(a // b)
    print(a / b)


#D
if __name__ == '__main__':
    a = int(input())
    b = int(input())

    print(a + b)
    print(a - b)
    print(a * b)


#E
if __name__ == '__main__':
    n = int(input())

    if n % 2 == 1:
        print("Weird")
    elif n % 2 == 0 and 2 <= n <= 5:
        print("Not Weird")
    elif n % 2 == 0 and 6 <= n <= 20:
        print("Weird")
    else:
        print("Not Weird")
