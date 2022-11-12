var contacts = [ { "firstName": "Akira",
 "lastName": "Laine", 
 "number": "0543236543",
  "likes": ["Pizza", "Coding", "Brownie Points"] },
   { "firstName": "Harry",
    "lastName": "Potter",
     "number": "0994372684",
      "likes": ["Hogwarts", "Magic", "Hagrid"] }, 
      { "firstName": "Sherlock",
       "lastName": "Holmes",
        "number": "0487345643",
         "likes": ["Intriguing Cases", "Violin"] },
        { "firstName": "Kristian", 
        "lastName": "Vos", 
        "number": "unknown", 
        "likes": ["JavaScript", "Gaming", "Foxes"] } ];

function printValues() {
    for (let i = 0; i < contacts.length; i += 1) {
        contacts[i].firstName
    }
}

function doesNameExist(name) {
    for (let i = 0; i < contacts.length; i += 1) {
        if (contacts[i].firstName === name) {
            return true
        }
    }
    return false
}

function doesPropertyExist(prop) {
    for (let i = 0; i < contacts.length; i += 1) {
        if (contacts[i].hasOwnProperty(prop)) {
            return true
        }
    }
    return false
}

function lookUpProfile(name, prop) {
    if (!doesNameExist(name)) {
        return "No such contact"
    } else if (!doesPropertyExist(prop)) {
        return "No such property"
    }

    for (let i = 0; i < contacts.length; i += 1) {
        if (contacts[i].firstName === name && contacts[i].hasOwnProperty(prop)) {
            return contacts[i][prop]
        }
    }
}


console.log(lookUpProfile("Akira", "likes"))