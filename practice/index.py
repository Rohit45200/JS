print("rohit kumar")
print("rohit kumar \n priya kumari ")
'''this i my first vllage so i can ingnore'''
a = "rohit kumar"
print(a)
name_age = "rohit kumar and 90 years old"
print(name_age)
# name = input('neter youe name here!')
# print(name)
# age = int(input("Enter here age please:"))
# print(age)
exe1 = eval(input("enter any equation here"))
print(exe1)

# chek given number is prime yes or not
num = int(input("plese here Enter the our number"))
if num <= 1:
    print("given number is not a prime number")
else:
    for i in range(2,num):
        if num % i == 0:
            print("the given number is not a prime number")
        else:
            print("the given number is prime number") 