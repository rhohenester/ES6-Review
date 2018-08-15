var names = ["Mike","Matt","Nancy","Adam","Jenny","Nancy","Carl"];

function uniq(a){
    var seen = {};

    return a.filter(function(item){
        return seen.hasOwnProperty(item) ? false : (seen[item] = true);
    });
}

console.log(uniq(names));