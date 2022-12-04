const cars = ['bmw', 'benz', 'maruthi', 'hundai', 'mahindra']
 let p = document.getElementById("print").innerHTML = cars;
 cars[0] = "kia";
 let q = document.getElementById("new").innerHTML = cars;
 let r = document.getElementById("len").innerHTML = cars.length
 cars.push('nexa')

 let d = document.getElementById("old").innerHTML = cars;
 for (i in cars) {
 let f = document.getElementById("for").innerHTML = cars
 }
 for (j of cars) {
 let o = document.getElementById("of").innerHTML = cars[j]
 }

 const str = "It is a string"
 document.getElementById("stri").innerHTML = str
 s = str.length
 document.getElementById("str").innerHTML = s
 document.getElementById("pri").innerHTML = "added a string"
 document.getElementById("slice").innerHTML = str.slice(3, 9)