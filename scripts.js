// // // alert("hello from java script ");
// // // document.write("<h1>hello from browser</h1>");
// // // console.log("true");
// // // function sayHallow(){
// // //     alert("Hellow");
// // // }
// // // sayHallow();
// // // var list=["ahmed","mohamed","amer","ahmed"];
// // // alert(list.sort());
// // // /*
// // // array.sort
// // // length
// // // pop
// // // push
// // // shift
// // // */
// // // //object
// // // var person ={
// // //     name:"ahmed",
// // //     age:24,
// // //     height:179,
// // //     weight:62
// // // }
// // // document.write(person.name)
// // var button=document.getElementsByTagName("button")[0];
// // button.addEventListener("mouseenter",function(){
// //     console.log("click");
// // });
// var button=document.getElementById("enter");
// var input=document.getElementById("userIn");
// var ul=document.getElementsByTagName("ul")[0];
// button.addEventListener("click",function(){
//     if(input.value.length>0){
//         console.log(input.value)
//         var li=document.createElement("li");
//         li.appendChild(document.createTextNode(input.value));
//         ul.appendChild(li);
//         input.value="";
    
//     }
//     })
//     input.addEventListener("keyup",function(){
//         if(input.value.length>0&&event.which==13){
//             console.log(input.value)
//             var li=document.createElement("li");
//             li.appendChild(document.createTextNode(input.value));
//             ul.appendChild(li);
//             input.value="";
        
//         }
//         })
var css=document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body =document.getElementById("body");
console.log(body);
console.log(css);
console.log(color1);
console.log(color2);
function setBack(){
    
    body.style.background=
    "linear-gradient(to right,"
    +color1.value
    +","
    +color2.value
    +")"
css.textContent=body.style.background+";";
}
color1.addEventListener("input",setBack);
    color2.addEventListener("input",setBack);
