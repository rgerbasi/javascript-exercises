const findTheOldest = function(people) {

    let res = people.reduce( (acc, curr) => {
        let thisYear = new Date().getFullYear()
        let age1 = (
            "yearOfDeath" in acc ?
            acc.yearOfDeath - acc.yearOfBirth
            :
            thisYear - acc.yearOfBirth
        );
        let age2 = (
            "yearOfDeath" in curr ?
            curr.yearOfDeath - curr.yearOfBirth
            :
            thisYear - curr.yearOfBirth
        );

        if (age1 < age2){
            return curr;
        }   
        return acc;
    });
    return res;

};

// Do not edit below this line
module.exports = findTheOldest;
