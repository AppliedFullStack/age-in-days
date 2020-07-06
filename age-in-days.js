var currentTime = new Date();
var dateOfBirth = new Date("2000-01-01");
var age = currentTime - dateOfBirth;
age = age / (24 * 60 * 1000);
age = Math.round(age);

document.querySelector("h3").innerHTML = age;
