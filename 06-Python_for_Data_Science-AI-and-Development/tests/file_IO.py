import pdb

def cleanFiles(currentMem, exMem):
    with open(currentMem, 'r+') as writeFile:
        with open(exMem, 'a+') as appendFile:
            writeFile.seek(0)
            members = writeFile.readlines()
            header = members[0]
            members.pop(0)
            inactive = []
            for member in members:
                if 'no' in member:
                    inactive.append(member)

            writeFile.seek(0)
            writeFile.write(header)
            for member in members:
                if member in inactive:
                    appendFile.write(member)
                else:
                    writeFile.write(member)

            writeFile.truncate()


memReg = 'mem_active.txt'
exReg = 'mem_inactive.txt'
cleanFiles(memReg, exReg)

with open(memReg, 'r') as readFile:
    print("Active Members: \n")
    print(readFile.read())

with open(exReg, 'r') as readFile:
    print("Inactive Members: \n")
    print(readFile.read())
