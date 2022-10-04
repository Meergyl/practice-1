// let user={
//   name:'Meergyl',
//   surNmae:'Madiarova'

// }
// delete user.name
// user.name=('Js')
// alert(user.name)//Js
// alert(user.surNmae)//Madiarova

let user = {
    name: "Meergyl",
    age: 40,
    email: "Meergyl.gmail.com",
    password: "090823MA",
  };
  user.sum = 5;
  
  email = prompt("Почтанызды жазыныз");
  if (email == "Meergyl.gmail.com") {
    alert("Почта туура");
  } else {
    alert("Кечиресиз почта туура эмес");
  }
  
  password = prompt("Паролду жазыныз");
  if (password == "090823MA") {
    alert("Парол туура");
  } else {
    alert("Кечиресиз парол туура эмес");
  }
  sum = prompt("2+3=? туура  эсептесен премия аласын");
  if (sum == 5) {
    alert(`Туура!Сенин премиян=${user.sum}`);
  } else {
    alert("Туура эмес жооп бердин");
  }
  