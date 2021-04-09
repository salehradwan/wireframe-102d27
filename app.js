// var myName = 'saleh radwan';
// document.write(myName);
// var mathOper = 12;
// alert(mathOper + 6);
// var footballFan = prompt('Enter your Team!','barca , real , milan');
// if (footballFan == 'barca') {
//     document.write('<img src="https://www.fcbarcelonanoticias.com/uploads/s1/11/95/80/6/foto-de-equipo-del-fc-barcelona-slavia.jpeg" >');
// } else if (footballFan == 'real') {
//     document.write('<img src="https://media-exp1.licdn.com/dms/image/C4E1BAQHoDdiCx5xXVg/company-background_10000/0/1544687413661?e=2159024400&v=beta&t=BVStyVFrAyHiLaoR0rPfMPaSsMT4nXZeOv1sTHPbvv0" >')
// } else if(footballFan == 'milan') {
//     document.write('<img src="https://assets-eu-01.kc-usercontent.com/1293c890-579f-01b7-8480-902cca7de55e/592708bc-b734-4a72-a5f3-8c6e5a71b36a/HP-PSM-2020-21-Def.png?auto=format" >')
// } else {
//     alert("Enter your team!");
// }
// var txt;
// var r = confirm("Press a button!");
// if (r == true) {
//     txt = "You pressed OK!";
// } else {
//     txt = "You pressed Cancel!";
// }
// document.write(mathOper * 5);
// console.log(mathOper * 5);
// change the pargraphe color as user gives 

// var a = 42;
// var b = '42';
// if(a > b){
//     alert("bigger");
// }else if (a < b) {
//     alert("smaller");
// }else if (a == b) {
//     alert("equal");
// }else if (a === b) {
//     alert("sa");
// }else {
//     alert('nothing')
// }
function changeColor(idName, colorTo) {
    document.getElementById(idName).style.color = colorTo;
}
function choosePlayer(nameOfPlayer) {
    while(nameOfPlayer !== 'messi' && nameOfPlayer !== 'ronaldinho' && nameOfPlayer !== 'ronaldo'){
        nameOfPlayer = prompt('please re-enter your favorite player','messi, ronaldinho, ronaldo');
    }
}


function repeatImg(param1, param2, param3) {
    var i = 1;
    for (var param1 = 0; param1 < param2; param1++) {
        if(param3 == 'messi'){
            document.write('<img src="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ec595d45f39760007b05c07%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D989%26cropX2%3D2480%26cropY1%3D74%26cropY2%3D1564" />');
            document.write('<h1>'+ i++ +'</h1>');
        }else if(param3 == 'ronaldinho'){
            document.write('<img src="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2020/07/27/15958346799669.jpg" />');
            document.write('<h1>'+ i++ +'</h1>');
        }else {
            document.write('<img src="https://cdn.cnn.com/cnnnext/dam/assets/180503102928-ronaldo-2002-world-cup-exlarge-169.jpg" />');
            document.write('<h1>'+ i++ +'</h1>');
        }
        
    }
}

var footballPlayer = prompt('please enter your favorite player','messi, ronaldinho, ronaldo');
choosePlayer(footballPlayer);
var imgNumber = prompt('How many image repeted you need? enter the number');
repeatImg(0, imgNumber, footballPlayer);
var colorTo = prompt('Enter your color','green');
changeColor('hugePar', colorTo);

