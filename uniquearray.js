var names = ["Mike","Matt","Nancy","Adam","Jenny","Nancy","Carl", "Nancy"];

/* function uniq(a){
    var seen = {};

    return a.filter(function(item){
        return seen.hasOwnProperty(item) ? false : (seen[item] = true);
    });
} */

var UniqueValues = (a) => {
    let seen = {};
    return a.filter( (item) => seen.hasOwnProperty(item) ? false : (seen[item] = true));
}

console.log(UniqueValues(names));