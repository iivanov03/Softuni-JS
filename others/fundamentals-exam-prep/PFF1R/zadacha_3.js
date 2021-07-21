function problemThree(input) {

    let objPeople = {}

    for (let line of input) {

        let [command, ...token] = line.split(":")

        if (command === "Add") {

            let name = token[0]
            let health = Number(token[1])
            let energy = Number(token[2])

            if (objPeople.hasOwnProperty(name)) {

                objPeople[name].health += health


            }
            else {

                objPeople[name] = { health, energy }

            }

        }
        else if (command === "Attack") {

            let attackerName = token[0]
            let defenderName = token[1]
            let damage = Number(token[2])

            if (objPeople.hasOwnProperty(attackerName) && objPeople.hasOwnProperty(defenderName)) {

                objPeople[defenderName].health -= damage
                objPeople[attackerName].energy -= 1

                if (objPeople[defenderName].health <= 0) {

                    delete objPeople[defenderName]
                    console.log(`${defenderName} was disqualified!`)

                }
                if (objPeople[attackerName].energy <= 0) {

                    delete objPeople[attackerName]
                    console.log(`${attackerName} was disqualified!`)

                }

            }

        }
        else if (command === "Delete") {

            let username = token[0]

            if (username === "All") {

                objPeople = {}

            }
            else {

                delete objPeople[username]

            }

        }

    }

    objPeople = Object.entries(objPeople).sort(customSort)

    function customSort(a, b) {

        let [aName, aInfo] = a
        let [bName, bInfo] = b

        let byHealth = bInfo.health - aInfo.health

        if (byHealth === 0) {

            return aName.localeCompare(bName)

        }

        return byHealth

    }

    console.log(`People count: ${objPeople.length}`)

    for (let [name, tokens] of objPeople) {

        console.log(`${name} - ${tokens.health} - ${tokens.energy}`)

    }

}
problemThree(["Add:Mark:1000:5",
    "Add:Clark:1000:3",
    "Attack:Clark:Mark:500",
    "Add:Allison:2500:5",
    "Attack:Clark:Mark:300",
    "Add:Charlie:4000:10",
    "Attack:Clark:Mark:500",
    "Results"])
