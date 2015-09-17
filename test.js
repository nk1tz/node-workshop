var str ="bubblelicious";
console.log(str.search("l"));

var str = "scissors";
var indices = [];
for(var i=0; i<str.length;i++) {
    if (str[i] === "s") indices.push(i);
}
console.log(indices);