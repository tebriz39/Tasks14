

// const numbers = [1, 3, -1, 5, 7, 8, 12, -6, 3, 9]

let numbers = [1, 3, -1, 5, 7, 8, 12, -6, 3, 9];
let cem = 0;
for (const num of numbers) {
  if (num % 2 === 1 || num<0) {
    cem+=num
  }
}
console.log(cem)
let splice = 0
let z = numbers.length
for (let i = 0 ; i<z; i++) {
    if (numbers[splice] % 2 === 1 || numbers[splice]<0){
        numbers.splice(splice,1)
    }else{
        splice+=1
    }
}
console.log(numbers)

numbers = [1, 3, -1, 5, 7, 8, 12, -6, 3, 9];
let big = numbers[0]
let small = numbers[0]
for (let i = 0 ; i<z; i++) {
    if (big<numbers[i]){
        big=numbers[i]
    }
    if (small>numbers[i]){
        small=numbers[i]
    }
}
console.log(big,small)

let orta = 0
for (let i = 0 ; i<z; i++) {
    orta += numbers[i]
}
console.log(orta/numbers.length)

// numbers = [1, 3, -1, 5, 7, 8, 12, -6, 3, 9];
let cut = []
for (let i = 0 ; i<z; i++) {
    if (numbers[i] % 2 == 0 && numbers[i]<0){
        cut.push(numbers[i])
    }

}
console.log(cut)
let array = ['baku', 22, true , undefined, 'hello']
let string =[]

for (let i = 0 ; i<array.length; i++){
    if (typeof array[i]=='string'){
        string.push(array[i])
    }
}
console.log(string)

let telebe = {
    firstName: 'kamil',
    surName: 'eliyev',
    age: 19,
    school: 'bdu'
}
for (let i = 0 ; i<Object.values(telebe).length; i++)(
    console.log(Object.keys(telebe)[i],':',Object.values(telebe)[i])
)
let fruit = ["cherry","orange","apple","banana" ];
console.log(fruit.sort())

// let faktor = +prompt('reqem girin')
// let f = 1
// if (faktor>0){
//     for (let i = 1 ; i<=faktor; i++){
//         f = f*i
//     }
//     console.log(f)

// }else if(faktor<0){
//     for (let i = -1 ; i>=faktor; i--){
//         f*=i
//     }
//     console.log(f)
// }else {
//     console.log('0 ferqli reqem daxil edin veya emin olun')
// }

let metn = 'Mətndə müəyyən hərfin neçə dəfə göründüyünü hesablayin. meselen "a" herfi.'
let herf = 0

for (let i = 0 ; i<metn.length; i++){
    // console.log(metn)
    if ('a'==metn[i]){
        herf+=1
    }
}
console.log(`'a' - herfinden metnin icinde ${herf}-ededdir`)

let q = 2
let r = 5
function toplama(x,z){
    let m=x+z 
    return m
}
console.log(toplama(q,r))

function cemFunk(){
    let cem = 0
    for (const num of numbers) {
        
          cem+=num
        
      }
      return cem
}
console.log(cemFunk())
 function ters(x){
    x.reverse()
    return x
 }
 console.log(ters(numbers))

//  !!!!!!!!!!!!!!

 const arr = [
    {
        name: 'fazil',
        age: 43
    },
    {
        name: 'samir',
        age: 13
    },
    {
        name: 'teymur',
        age: 17
    },
    {
        name: 'mikayil',
        age: 25
    },
    {
        name: 'leyla',
        age: 14
    },
    ];
    const under18 = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i].age < 18) {
        under18.push(arr[i]);
    }
}

console.log(under18);



// !! Qeyd Tamamile Ugurun komekliyi ile yazilib

