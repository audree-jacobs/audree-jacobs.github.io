#Canada 

#get Canada locations file 
filename = "python/locations.txt"
    
#make new file to write unabbreviated names in
file = "loc_names.txt" 

#make empty list for the unabbreviated names    
fullNames = []   

#dictionary
dumbCanadaDictionary = {
  "AB" : "Alberta\n",
  "MB" : "Manitoba\n",
  "NB" : "New Brunswick\n",
  "NL" : "Newfoundland and Labrador\n",
  "NS" : "Nova Scotia\n",
  "NT" : "Northwest Territories\n",
  "NU" : "Nunavut\n",
  "ON" : "Ontario\n",
  "PE" : "Prince Edward Island\n",
  "QC" : "Quebec\n",
  "SK" : "Saskatchewan\n",
  "YT" : "Yukon\n",
  "BC" : "British Columbia\n"
}

#open and read file 
with open(filename, "rt") as textfile:

    for line in textfile: 

        #replace abbreviations with full names referencing the dictionary
        if line == 'AB\n':

            #name = "Alberta"
            #fullNames.append(name) 

           x = dumbCanadaDictionary["AB"] 
           fullNames.append(x)

        elif line == 'MB\n':
            x = dumbCanadaDictionary["MB"] 
            fullNames.append(x)

        elif line == 'NB\n':
            x = dumbCanadaDictionary["NB"] 
            fullNames.append(x)
        elif line == 'NL\n':
            x = dumbCanadaDictionary["NL"] 
            fullNames.append(x)
        elif line == 'NS\n':
            x = dumbCanadaDictionary["NS"] 
            fullNames.append(x)
        elif line == 'NT\n':
            x = dumbCanadaDictionary["NT"] 
            fullNames.append(x)
        elif line == 'NU\n':
            x = dumbCanadaDictionary["NU"] 
            fullNames.append(x)
        elif line == 'ON\n':
            x = dumbCanadaDictionary["ON"] 
            fullNames.append(x)
        elif line == 'PE\n':
            x = dumbCanadaDictionary["PE"] 
            fullNames.append(x)
        elif line == 'QC\n':
            x = dumbCanadaDictionary["QC"] 
            fullNames.append(x)
        elif line == 'SK\n':
            x = dumbCanadaDictionary["SK"] 
            fullNames.append(x)
        elif line == 'YT\n':
            x = dumbCanadaDictionary["YT"] 
            fullNames.append(x)   
        elif line == 'BC\n':
            x = dumbCanadaDictionary["BC"] 
            fullNames.append(x) 

        #read the rest of the names                                       
        else:
            name = (line)
            fullNames.append(name)                                                 


#open new file and write new unabbreviated names 
with open("python/loc_names.txt", 'w') as f:
     for name in fullNames:
        f.writelines('\n' + name) 
       

#print names just to see if its working correctly 
print(fullNames) 
