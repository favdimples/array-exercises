let beatles = ['John', 'Paul', 'George', 'Ringo']
document.getElementById('original').innerHTML = beatles

// Exercise 1


document.getElementById("array-ex1").innerHTML = beatles[1]+ " " + beatles[3]
// var ex1Els = document.getElementById("arrayex1")
// for (var i = 0; i < ex1Els.length; i++) { 
//     ex1Els[0].innerHTML = " ";
//     ex1Els[3].innterHTML = " ";
// }


// Exercise 2
beatles[4]="rachel"

document.getElementById("array-ex2").innerHTML = beatles

// Exercise 3 

beatles[4]="2"
document.getElementById("array-ex3").innerHTML = beatles

// Exercise 4 

beatles[10]="2"
document.getElementById("array-ex4").innerHTML = beatles

// Exercise 5

text("the array has length" + beatles.length)
document.getElementById("arrayex5").innerHTML = beatles
// `beatles $[beatles.lenght] elements`

// Exercise 6


//blabalabalabal