filename = "responses.txt"

responses = []

with open(filename, "rt") as textfile:

     for line in textfile:
         response = float(line)
         if response >= 0:
             responses.append(response) 

quantity = len(responses)
total = sum(responses)
average = total / quantity

print(f"{count} of the responses are greater than the average.")



