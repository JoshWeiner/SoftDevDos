'''
Joshua Weiner
SoftDev2 pd6
K#22 -- Closure
2019-04-30
'''

def multiply(n):
    def str(s):
        return s * n
    return str

r1 = multiply(2)
print( r1("hello") )
r2 = multiply(2)
print( r2("GoodBye") )
print( multiply("cool")(3) )


def make_counter():
    count = 0
    def inner():
        nonlocal count
        count += 1
        return count
    return inner

ctr1 = make_counter()
print("Counter 1: " + str(ctr1()) + "... should be 1")
print("Counter 1: " +  str(ctr1()) + "... should be 2")

ctr2 = make_counter()
print("Counter 2: " +   str(ctr2()) + "... should be 1")
print("Counter 1: " +  str(ctr1()) + "... should be 3")
print("Counter 2: " +   str(ctr2()) + "... should be 2")

ctr3 = ctr1
print("Testing Counter 3 = Counter 1")
print("Counter 3: " +   str(ctr3()) + "... should be 4" )
print("Counter 1: " +  str(ctr1()) + "... should be 5")
print("Counter 3: " +  str(ctr3()) + "... should be 6" )
