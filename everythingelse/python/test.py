
w = int(input())
c = int(input())
d = int(input())

import math 

# math.pi * w**2 * c * (w * c + 2,540 * d) / 10000000 
w = abs(w)

c = abs(c)

d = abs(d)

v = w ** 2

f = w * c + 2540 * d

v = v * math.pi * c

v = f * v 

v = v / 10000000

print(v)











