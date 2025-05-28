const name = "rajshekhar"
const repocount = 7

console.log(name + " " + repocount + " value"); //not used


console.log(`hello my name is ${name} and my repo count is ${repocount}`);

const gameName = new String('rajshekhar')
console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(6));
console.log(gameName.indexOf('e'));

const newString = gameName.substring(0,3)
console.log(newString);

const anotherString = gameName.slice(0,4)
console.log(anotherString);

const anotherString_ = gameName.slice(-9,-2)
console.log(anotherString_);

const newStringone = "      rajshekharjana     "
console.log(newStringone);
console.log(newStringone.trim());

const url ="https://rajshekhar.com/raj%20jana"
console.log(url);
console.log(url.replace('%20', "-"))
console.log(url.includes('sundar'))

const myname ="raj-shekhar-jana" ;
console.log(myname.split('-'));

