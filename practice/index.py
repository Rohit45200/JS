# print("rohit kumar")
# print("rohit kumar \n priya kumari ")
# '''this i my first vllage so i can ingnore'''
# a = "rohit kumar"
# print(a)
# name_age = "rohit kumar and 90 years old"
# print(name_age)
# name = input('neter youe name here!')
# print(name)
# age = int(input("Enter here age please:"))
# print(age)
# exe1 = eval(input("enter any equation here"))
# print(exe1)

# # chek given number is prime yes or not
# num = int(input("plese here Enter the our number"))
# if num <= 1:
#     print("given number is not a prime number")
# else:
#     for i in range(2,num):
#         if num % i == 0:
#             print("the given number is not a prime number")
#         else:
#             print("the given number is prime number") 
fruits = ["apple","mango","lichi"]
print(fruits)
print(type(fruits))
print(fruits[::-1])

# iteration using for loop
name = ["rohit kumar","kumar","pandit"]
for i in name:
    print(i)

# iteration using for loop with range and length funtion
for i in range(len(name)):
    print(name[i])
# iteration for while loop
i = 0
while i < len(name):
    print(name[i])
    i += 1
# using shorthand for loop
[print(i) for i in name]
# to find the len of list
print(len(name))
# to count occurence of a partiulaar alement 
print(name.count("rohit kumar"))
# to add to the list
name.append("manish kumar")
print(name)
# to add to asfesfic location
name.insert(1,"manish kumar")
print(name)
# to remove from a list
name.remove("rohit kumar")
print(name)


name.pop(2)
print(name)

#create a copy of the list
name.copy()
print(name)
#to access an element
print(name.index("manish kumar"))
# to entend the list
name2 = ["gita kumari","smriti singh","pavitra kumari"]
name.extend(name2)
print(name)
# to reverse a list
name.reverse()
print(name)
# to sort the list
name.sort()
print(name)
# to clear all the data from the list
name.clear()
print(name)

num = [4,5,6,7]
num2 = []
# list apherence
for i in num:
     num2.append (i)
     print(i) 
# cource = 6:33