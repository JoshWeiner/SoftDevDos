import random
def make_HTML_heading(f):
    txt = f()
    def inner():
        return '<h1>'+txt+'</h1>'
    return inner

# def greet():
#     greetings = ['Hello', 'Welcome', 'AYO!', 'Hola', 'Bonjour', 'Word Up']
#     return random.choice(greetings)

# greet_heading = make_HTML_heading(greet)
# print(greet_heading())

@make_HTML_heading
def greet():
    greetings = ['Hello', 'Welcome', 'AYO!', 'Hola', 'Bonjour', 'Word Up']
    return random.choice(greetings)

# No longer need to do
# greet_heading = make_HTML_heading(greet)
print(greet())

memo = {}
memo[0] = 1
memo[1] = 1

def memoize(f):
    # print(f)
    def helper(x):
        # print(memo.keys())
        if f(x) in memo.keys():
            return memo[f(x)]
        else:
            memo[f(x)] = fib(f(x)-1) + fib(f(x)-2)
            return memo[f(x)]
    return helper

@memoize
def fib(n):
    return n

print(fib(2))
print(fib(99))
