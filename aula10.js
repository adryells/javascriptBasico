/*document.write("<h1><center><a href = 'https://medium.com/@alcidesqueiroz/javascript-ass%C3%ADncrono-callbacks-promises-e-async-functions-9191b8272298'>Programação Assincrona</a></center></h1>");
document.write("ainda n usou o callback<br>")
setTimeout(function() {
    document.write("chamou o callback")
}, 12000);
num = prompt("num:");
num = parseFloat(num);
let promessa = Promise.resolve(num + 9);

console.log('algum codigo');
promessa.then((value) => console.log('<br>a soma é ' + value));
promessa.then((value) => console.log('<br>a soma é ' + value));
promessa.then((value) => console.log('<br>a soma é ' + value));
let promiseErrada = Promise.resolve(new Error("algu deu erradu"));
promiseErrada.then(value => console.log(value))
    .catch(reason => console.log("faqlha: " + reason));
function verifica(num) {
    return new Promise((resolve, reject) => {
        if (num == 2) {
            resolve(console.log("the number is two"));
        } else {
            reject(new Error("Falhou"));
        }
    })
}
verifica(3);
verifica(2);
const p1 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve(10);
    }, 4000);
});
const p3 = new Promise((resolve, reject) => {
    resolve(14);
});
const p2 = Promise.resolve(30);

Promise.all([p1, p2, p3]).then((values) => document.write(values));
async function somar(a, b) {
    return a + b;
}
somar(2, 2).then(function(value) {
    console.log(value);
})
function somaWithDelay(a, b) {
    return new Promise(resolve => {
        setTimeout(function() {
            resolve(a + b);
        }, 3500);
    })
}
async function soma(a, b, c, d) {
    let x = somaWithDelay(a, b);
    let y = somaWithDelay(c, d);
    return await x + await y;
}
soma(2, 4, 5, 6).then(v => console.log(v));
function* genTest() {
    let id = 0;
    while (true) {
        yield id++;
    }
}
let criarId = genTest();
console.log(criarId.next().value);
console.log(criarId.next().value);
console.log(criarId.next().value);*/
