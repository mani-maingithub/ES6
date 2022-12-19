// let name = "mani";
// let fullName = "hafiz Usman ahmed siddiqui";
// let mob = 03342849423;

// console.log(name)
// console.log(fullName)
// console.log(mob)

// const name = "mani";
// // name = "suidfuias";

// console.log (name)

// let name = "hafiz usman";

// let nickName = "mani";

// let mob = 5241654654;

// let course = "web and mobile";

// console.log(`my name is ${name}`)
// console.log(`my nick name is ${nickName}`)
// console.log(`my mob number is ${mob}`)
// console.log(`am studying in ${course}`)

// let arr = ["mani","kami","abc"]
// let arr2 = [123,456,789]

// let merge = arr.concat(arr2)

// console.log (merge)

// let arr = ["mani","kami","abc"];

// let arr2 = [46541,6565,6545];

// let merge = [...arr,...arr2]

// console.log (merge)

// let abc = prompt("enter your name");

// // if (abc === "mani"){
// //     alert ("my self")
// // }else {
// //     alert ("incoorect")
// // }

// let result = abc === "mani" ? "my self"
// :
// abc === "kami" ? "brother"
// :
// abc === "imran" ? "brother"
// :
// "incorrect"

// alert (result)

// let obj = {
//     name: "mani",
//     fullName: "hafiz usman",
//     mob: 654684,
//     nickName: "kwdholas",
//     email: "kzhsfkjahbkdsj"
// }

// let {name,fullName,nickName,mob,email} = obj;

// console.log (name)
// console.log (email)
// console.log (mob)
// console.log (fullName)
// console.log (nickName)


// let username = prompt("Enter your name")

// let family = [{
//     mySelf: "usman",
//     bro1: "kami",
//     bro2: "imran"
// }]

// for (var i = 0; i < family.length; i++){
//     let check = username === family[i] ? "value hai"
//     :
//     "value nai hai "

//     alert (check)
// }

// let username = prompt("enter y6our name")

// let arr = ["mani","kami","imran"];

// let check = arr.map((a)=>{
//     a[0] === username 
//     alert("value hai")
// })

// let username = prompt("enter your name");

// let arr = ["mani","kami","immi"];

// for (let i = 0; i < arr.length; i++){
//     let check = arr[i] === username 
//     alert("value hai")
//     break
// }


// let obj = {
//     name: "mani",
//     roll: "45346",
//     mob: 5464614
// }

// let {name,roll,mob} = obj

// console.log(name)
// console.log(roll)
// console.log(mob)


// let names_obj = {
//     name1: "kami",
//     name2: "immi",
//     name3: "jhangir",
//     name4: "asad"
// }

// let {name1,name2,name3,name4} = names_obj

// console.log (name1)
// console.log (name2)
// console.log (name3)
// console.log (name4)

// function Names (name1,name2,name3,name4){
//     this.name1 = name1
//     this.name2 = name2
//     this.name3 = name3
//     this.name4 = name4
//     this.school = "froebel"
// }

// let names_obj = new Names("mani","kami","jahangir","niyazi")

// console.log (names_obj)

// function Data (name,roll,jamat){
//     this.name = name
//     this.roll = roll
//     this.jamat = jamat
//     this.school = "froebel grammar academy"
// }

// let student1 = new Data ("umair",564654,3)
// let student2 = new Data ("ahmed",6545,8)
// let student3 = new Data ("fahad",68789,4)
// let student4 = new Data ("lainda",6547,5)


// console.log(student1)
// console.log(student2)
// console.log(student3)
// console.log(student4)


// let arr = ["mani","kami"];

// let [name1,name2] = arr

// console.log(name2)

// let name1 = prompt("enter your name");

// let obj = {
//     name: ""
// }

// name = name1

// console.log(name)


// let obj = {
//     name: "mani",
//     roll: 441,
//     mob: 654544544694964
// }

// let {name,roll,mob} = obj

// console.log (name)
// console.log (roll)
// console.log (mob)

// function Foo(name,mob,roll){
//     this.name = name
//     this.mob = mob
//     this.roll = roll
// }

// let mani_data = new Foo("mani",477,89798797979)
// let kami_data = new Foo("kami","borram",555555555555)
// let immi_data = new Foo("imran","kalliya",887878787878787)

// console.log (mani_data)
// console.log (kami_data)
// console.log (immi_data)


// let name = prompt("enter your name");
// let age = prompt("enter your age");

// let chk = name === "mani" && age <= 30 ? "you are allowed to use this computer"
// :
// "you are not allowed to use this computer"

// console.log (chk)

// let name = prompt("enter your name");

// let chk = name === `sana` || name === `mano` ? `welcome sisiter`
// :
// name === `imran` || name === `kami` ? `welcome brother`
// :
// `incorrect value`

// console.log(chk)

// let promise = new Promise ((resolve,reject)=>{
//     let name = prompt("enter your name");

//     let chk = name === "mani" ? "mani ji"
//     :
//     "mani nai hai"

//     resolve(chk)

//     reject(chk)
// })


// promise.then ((data)=>{
//     console.log(data)
// })

// .catch((data)=>{
//     console.log(data)
// })


// let foo = ()=>{
//     console.log("hello world")
// }
// foo ()


// let promise = new Promise((resolve,reject)=>{
//     let name1 = prompt("enter your name");
    
//     let chk = name1 === "mani" ? "welcome usman"
//     :
//     "Oops! invalid data"

//     resolve(chk)

//     reject(chk)

// })

// promise.then ((data)=>{
//     console.log(data)
// })
// .catch ((error)=>{
//     console.log(error)
// })


// no:1

// let arr = ["kami",654654,"north"];

// let [name,mob,adress] = arr;

// console.log(adress)

// no:2

// let names =["mani","kami","imi"]

// let [usman_data,kami_data,imi_data] = names;

// console.log(imi_data)

// no:3

// let items = ["piyaz","aloo","timatar","tarbooz","kharbooza","bhindi","leemo"]

// // console.log(items)

// let [onion,potato,tomato,watermallon,watermallon2,ladufinger,lemon] = items;

// console.log (watermallon2)

//no:4

// let rashan = ["chawal",15,"kg","daal masoor",1,"pao","ataa",20,"kg","namak",1,"packet"]

// let [rice,quantity,demand,daal,quantity1,demand1,floar,quantity2,demand2,salt,quantity3,demand3] = rashan;

// console.log(daal)
// console.log(quantity1)
// console.log(demand1)

//no:5

// let family = ["usman","sualeha","kamran","imran","sana"];

// let [myself,mano,kami,imi,sana] = family

// console.log(myself)
// console.log(mano)
// console.log(sana)
// console.log(kami)
// console.log(imi)

//no:6

// let price = [1000,500,400,300,200,100,50]

// let [suit,sleeper,wristwatch,belt,socks,samosa,faqeer] = price

// let plus = suit+sleeper+wristwatch+belt+socks+samosa+faqeer

// console.log(suit)
// console.log(sleeper)
// console.log(wristwatch)
// console.log(belt)
// console.log(socks)
// console.log(samosa)
// console.log(faqeer)

// console.log (plus)

//no:7

// let homes_items = ["furniture","electronics","crockery","cleaning equipment"]

// let [a,b,c,d] = homes_items

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)

//no:8

// let arr = ["usman","mani","sector","hafiz","unitincharge"]

// let [usman,mani,sector,hafiz,incharge] = arr;

// console.log(usman)
// console.log(mani)
// console.log(sector)
// console.log(hafiz)
// console.log(incharge)

//no:8

// let names = ["shahid","jhangir","niyazi","kami"]

// let [name1,name2,name3,name4] = names;

// console.log(name1)
// console.log(name2)
// console.log(name3)
// console.log(name4)


//no:9

// let ali = ["ali bhai","president","osman walfare"]

// let [name,position,comettee] = ali;

// console.log(name)
// console.log(position)
// console.log(comettee)



// no:10

// let personaldata = ["usman","web and mob","2 to 6"]

// let [name,course,timing] = personaldata

// console.log (name)
// console.log (course)
// console.log (timing)

// no:1

// let abc = new Promise((resolve,reject)=>{
//     let name1 = prompt("enter your name");
//     let arr = ["mani","sana","mano","kami"]

//     for (let i = 0; i < arr.length; i++){
//         let check = arr[i] == name1 ? "family"
//         :
//         "invalid data"

//         resolve(check)

//         reject(check)
//     }
// })

// abc.then ((data)=>{
//     console.log("data ==>",data)
// })

// .catch ((error)=>{
//     console.log("error ==>",error)
// })

// no:2

// let promise = new Promise((resolve,reject)=>{
//     let name = prompt("enter your name")
    
//     let chk = name == "mani" ? "my self"
//     :
//     "invalid data"

//     resolve(chk)

//     reject(chk)

// })

// promise.then ((data)=>{
//     console.log("data ==>",data)
// })

// .catch((error)=>{
//     console.log("error",error)
// })

// no:3

// let promise = new Promise((resolve,reject)=>{
//     let name = prompt("enter your name")

//     if (name === "mani"){
//         resolve("myself")
//     }else{
//         reject("invalid data")
//     }
// })

// promise.then ((data)=>{
//     console.log("data ==>",data)
// })
// .catch((error)=>{
//     console.log("error==>",error)
// })

//no:4

// let abc = new Promise((resolve,reject)=>{
//     let name = prompt("enter your name");
//     if (name === "mani"){
//         resolve ("mani hai")
//     }else {
//         reject("mani nai hai")
//     }
// })

// abc.then ((data)=>{
//     console.log("data==>",data)
// })

// .catch ((error)=>{
//     console.log("error==>",error)
// })

//n0:5


// let name = new Promise ((resolve,reject)=>{
//     // resolve ("ok hai")

//     reject ("ok nai hai")
// })

// name.then((data)=>{
//     console.log("data",data)
// })
// .catch((error)=>{
//     console.log("error==>",error)
// })

//no:6

// let name = prompt("enter your name")

// let promise = new Promise((resolve,reject)=>{
//     if (name == "mani"){
//         resolve ("mani hai")
//     }else{
//         reject("mani nai hai")
//     }
// })

// promise.then((abc)=>{
//     console.log("abc==>",abc)
// })

// .catch((err)=>{
//     console.log("err=>",err)
// })

//no:7

// let arr = ["mani","kami","imi"]

// let name = prompt("enter your name")

// let promise = new Promise((resolve,reject)=>{
//     for (var i = 0; i < arr.length; i++){
//         if (arr[i] === name){
//             resolve("family")
//         }else {
//             reject("not family")
//         }
//     }
// })

// promise.then((data)=>{
//     console.log("data==>",data)
// })
// .catch((error)=>{
//     console.log("error==>",error)
// })

//no:8

// let promise = new Promise((resolve,reject)=>{
//     // resolve("abc")

//     reject("jmn")
// })

// promise.then((data)=>{
//     console.log("data==>",data)
// })

// .catch((error)=>{
//     console.log("error==>",error)
// })

//no:9

// let promise = new Promise ((resolve,reject)=>{
//     let name = "mani"

//     // resolve (name)

//     reject("value nai hai")
// })

// promise.then((data)=>{
//     console.log("data==>",data)
// })

// .catch((err)=>{
//     console.log("error==>",err)
// })

//no:10

// let add = 2+2

// let promise = new Promise ((resolve,reject)=>{
//     if (add === 5){
//         resolve('ok')
//     }else {
//         reject("not ok")
//     }
// })

// promise.then((data)=>{
//     console.log("data==>",data)
// })

// .catch((err)=>{
//     console.log("error==>",err)
// })

//no:1

// let add = 2+4

// let subtract = 5-1

// let multiply = 8*2

// let chk = multiply === 18 ? "multi hogya"
// :
// "some issue"

// console.log(chk)

//no:2

// let country = prompt("enter your country")

// let city = prompt("enter your city")

// let age = prompt("enter your age")

// let chk = country === "pakistan" && city === "karachi" && age >= 12  ? "good job"
// :
// "invalid data"

// console.log(chk)

//no3

// let name = prompt("enter your name")

// let chk = name === "ali" || name === "imran" |name === "kami" ? "freinds"

// :

// "dushman"

// console.log (chk)



//no:1

// let data = {
//     name: "ali",
//     roll: 546546,
//     school: "froebel"
// }

// let {name,roll,school} = data

// console.log(school)


//no:2

// let items = {
//     one: "aloo",
//     two: "piyaaz",
//     three: "kheera",
//     four: "kakri"
// }

// let {one,two,three,four} = items

// console.log(four)

//no:4

// let ali = {
//     school: "saylani",
//     address: "iausdfhsah"
// }

// let {school,address} = ali

// console.log (address)

//no:1

// let name = "mani"

// let name1 = "ali"

// console.log (`my name is ${name} and my freind is ${name1}`)

// let add = 2+2
// console.log (`the addition of 2+2 is equal to ${add}`)

//no:1

// let name = ()=>{
//     console.log ("mani")
// }

// name ()


//no2 

// let hi = ()=>{
//     return "hi"
// }

// console.log (hi())

// let salam = ()=>{
//     alert ("salam")
// }


//no:1

// let arr_obj1 = [
//     {
//         name: "mani",
//         age: 29
//     },
//     {
//         name: "imi",
//         age: 40
//     }
// ]

// let filter = arr_obj1.filter((a)=>{
//     return a.age === 40
// })

// console.log(filter)

//no:2

// let arr1 = [
//     {
//         name : "mani",
//         age: 29
//     },
//     {
//         name: "kami",
//         age: 45
//     },
//     {
//         name: "imi",
//         age: 41
//     },
//     {
//         name: "ali",
//         age: 14
//     },
//     {
//         name: "maaz",
//         age: 19
//     },
//     {
//         name: "haris",
//         age: 8
//     },
//     {
//         name: "asad",
//         age: 10
//     }
// ]


// let abc = arr1.filter((a)=>{
//     return a.age <= 15
// })

// console.log(abc)

//no:3

// let obj = {
//     name: "mani",
//     age: 54
// }

// let arr1 = [
//     {
//         item: "piyaaz",
//     },
//     {
//         item: "aloo",
//     },
//     {
//         item: "bhindi",
//     },
//     {
//         item: "timatar",
//     },
//     {
//         item: "kaddu",
//     },
//     {
//         item: "leemo",
//     },
//     {
//         item: "kheera",
//     },
//     {
//         item: "tinday",
//     },
//     {
//         item: "mirchi",
//     },
//     {
//         item: "podeena",
//     },
//     {
//         item: "dhaniya",
//     },
//     {
//         item: "lehsan",
//     }
// ]

// let filter = arr1.filter((abc)=>{
//     return abc.item === "kaddu" 
// })

// console.log(filter)

//no:4

// let name = prompt("enter your search query");

// let arr = [
//     {
//         name: "ali"
//     },
//     {
//         name: "jibran"
//     },
//     {
//         name: "nasir"
//     },
//     {
//         name: "kazmi"
//     },
//     {
//         name: "mughal"
//     },
//     {
//         name: "qasim"
//     },
//     {
//         name: "farooq"
//     },
//     {
//         name: "mansoor"
//     },
//     {
//         name: "rizwan"
//     },
//     {
//         name: "mushtaq"
//     },
//     {
//         name: "inzi"
//     }
// ]

// let filter = arr.filter((a)=>{
//     for (var i = 0; i < arr.length; i++){
//         if (arr[i] === a.name){
//             alert(name)
//             return filter
//         }
//     }
// })

// console.log(filter)

// let filter = arr.filter((a)=>{
//     return a.name === "inzi"
// })

// console.log(filter)



//no: 5

// let name = prompt("enter your name")

// let arr = [
//     {
//         name: "mani"
//     },
//     {
//         name: "ali"
//     },
//     {
//         name: "kami"
//     },
//     {
//         name: "imi"
//     },
//     {
//         name: "shoq"
//     },
//     {
//         name: "kamil"
//     },
//     {
//         name: "usman"
//     },
//     {
//         name: "asad"
//     },
//     {
//         name: "sana"
//     }
// ]



// for (var i = 0; i < arr.length; i++){
//     var abc = arr.filter((a)=>{
//         return arr[i] === a.name
//     })
// }
// console.log(abc)


//no:6

// let name1 = document.getElementById("val")

// let arr = [{name: "ali"},{name: "mani"}]

// let btn = document.getElementById("search")

// let getNam = arr.filter((a)=>{
    
//     return a.name === name1.value

// })

// console.log(getNam)


//no:7

// let names = [
//     {
//         name: "kami"
//     },
//     {
//         name: 464646
//     }
// ]

// let filter = names.filter((a)=>{
//     return a.name !== "kami"
// })

// console.log(filter)

//no:1

// let a = "mani"

// let b = "ma"

// if (a.startsWith(b)){
//     console.log(a)
// }

//no:2

// let name = "ali";

// let search = ""

// if (name.startsWith(search)){
//     console.log(name)
// }

//no:3

// let arr = ["mani","kami","imi"];

// let search = prompt("enter your serch query","serach here");

// if (arr.startsWith(search)){
//     console.log(arr[i])
// }


// let data = [{name: "ali"},{name: "kami"}]

// let search = prompt("enter your search")

// for (let i = 0; i < data.length; i++){
//     if (data[i].startsWith(search)){
//         console.log(data)
//     }
// }

//no:4

// let name = "mani";
// let name1 = "kami";
// let name2 = "imi";
// let name3 = "ali";

// let search = prompt("search here")

// if (name.startsWith(search)){
//     console.log(name)
// }else if (name1.startsWith(search)){
//     console.log(name1)
// }else if (name2.startsWith(search)){
//     console.log(name2)
// }else if (name3.startsWith(search)){
//     console.log(name3)
// }else {
//     console.log("invalid search")
// }

//no:5

// let name1 = "mani"

// let end = "a"

// if (name1.endsWith(end)){
//     console.log(name1)
// }else {
//     console.log("not")
// }

//no:1 

// let arr = [2,4,6,8,10];
// console.log(arr)
// let multi = arr.map((a)=>{
//     return a*2
// })
// console.log(multi)

// console.log ("mani")


//no:2

// let arr = ["mani","kami","ali"];

// let find = arr.map((a)=>{
//     return a = "ali"
// })
// console.log (find)

// no:3

// let add = 2+2

// console.log(add)

// let addition = add.map((a)=>{
//     return a
// })

// console.log(addition)

//no:1

// class Student {
//     constructor(name,email){
//         this.name = name
//         this.email = email
//     }
// }

// let student1 = new Student("mani","mani@gmail.com")

// console.log(student1)

// let obj = {
//     name: "mani",
//     email: "mani@gmail.com"
// }

// let {name,email} = obj 

// console.log(name)

//no:2

// class Data {
//     constructor (name,email,school){
//         this.name = name
//         this.email = email
//         this.school = "froebel"
//     }
// }

// let student1 = new Data ("mani","mani@gmail.com")

// console.log(student1)

// no:3

// class Items {
//     constructor(p,a,t,b,k){
//         this.piyaz = p
//         this.aloo = a
//         this.timatar = t
//         this.bhindi = b
//         this.kheera = k
//     }
// }

// let sabzi = new Items ("piyaz","aloo","timatar","bhindi","kheera")

// console.log(sabzi)

//no:5

// class Mani {
//     constructor(name,roll){
//         this.name = name
//         this.roll = roll
//     }
// }

// let mani_data = new Mani ("hafiz usman",565646)

// console.log(mani_data)

// no:1

// class Baba_store {
//     constructor(item,quantity,price){
//         this.item = item
//         this.quantity = quantity
//         this.price = price
//     }
// }

// class BabaGenerealStore extends Baba_store {
//     constructor(item,quantity,price,name){
//         super (item,quantity,price)
//         this.name = name
//     }

// }

// let babaGeneral1 = new BabaGenerealStore ("chawal","25 kg",3000, "Lasbela chawal")

// console.log(babaGeneral1)

// let babaItem = new Baba_store("ataa","50 kg",2500)

// console.log (babaItem)

//no:2

// class Mani {
//     constructor(name){
//         this.name = name
//     }
// }

// class maniData extends Mani{
//     constructor(name,roll){
//         super(name)
//         this.roll = roll
//     }
// }

// let data1 = new maniData("usman",4444)

// console.log(data1)
















