
#take input values 
w = int(input())
c = int(input())
d = int(input())

# make all input values positive
w = abs(w)
c = abs(c)
d = abs(d)

# import math to use pi function
import math 

#  math.pi * w**2 * c * (w * c + 2,540 * d) / 10000000 
v = w ** 2
f = w * c + 2540 * d
v = v * math.pi * c
v = f * v 
v = v / 10000000


#output final answer 
print(v)











