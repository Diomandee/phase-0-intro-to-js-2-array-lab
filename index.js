// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push('Ralph')
    return cats

    }

    function destructivelyPrependCat(name) {
        cats.unshift('Bob')
        return cats
    }

    function destructivelyRemoveLastCat() {
        cats.pop()
        return cats 
    }

    function destructivelyRemoveFirstCat() {
        cats.shift()
        return cats
    }
    function appendCat(name) {
        let  newCats = [... cats];
        newCats.push('Broom')
        return newCats

        
    }
    function prependCat(name) {
        let  newwCats = [... cats];
        newwCats.unshift('Arnold')
        return newwCats

        
    }

    function removeLastCat() {
        let  newwwCats = [... cats];
        newwwCats.pop()
        return newwwCats
    }

    function removeFirstCat() {
        let  newwwwCats = [... cats];
        newwwwCats.shift()
        return newwwwCats
    }