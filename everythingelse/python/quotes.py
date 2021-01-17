#Quotes 

#imports
import random
import textwrap
 
#make empty list

quote_list = []

with open("python/quotes.txt", "r") as f:
    for line in f:
        quote_list.append(line)  

x = int(input("How many quotes would you like to see?"))

for _ in range (0, x):
    print(random.choice(textwrap.wrap(quote_list, 30)))




