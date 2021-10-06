// 1
let prenom=["hilal","ayhna","wassim","hussein"];
console.log(prenom);
console.log(prenom.indexOf("hussein"));
// ou
console.log(prenom[3]);
console.log(prenom.length);
console.log("_______________");



// 2
let prenoms=["hilal"];
console.log(prenoms);
prenoms.push("hilal1");
console.log(prenoms);

// 3
let classeCoding=[];
classeCoding.push("ayhan");
classeCoding.push("ayhan est arrivé à 8h43");
classeCoding.push("Béné");
classeCoding.push("Béné est arrivé à 8h44 et met ses notes à jours");
classeCoding.push("Louiise","jamila");
classeCoding.push("louise et jamila sont arrivées à 8h45");
classeCoding.push("Seb", "adam");
classeCoding.push("seb et adame sont rentré mais ils voient nicolas et decidert de sortir");
console.log(classeCoding);
//2 seb c'est 1 et le 2eme a droite de seb
console.log(classeCoding.indexOf("seb"),2);
console.log(classeCoding);
classeCoding.push("dawid", "nalo");
classeCoding.push("alex");
console.log(classeCoding.indexOf("alex"),1);
classeCoding.push("maxence", "mohamed");

classeCoding.push("saliou");
classeCoding.push("zulna","maximilien");
classeCoding.push("natchez");
classeCoding.push("zak","ayoub");
console.log(classeCoding.indexOf("zak"),2);
classeCoding.push("achraf");
classeCoding.push("abder");
console.log(classeCoding);

// 4
let myTab=["test1","test2","test3sssssssssss"];
console.log(myTab);
const result = myTab.filter(myTab => myTab.length
    > 5);
    console.log(result);


    myTab.forEach(hilal=>{
        console.log(hilal);
    })










