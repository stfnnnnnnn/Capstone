var tablinks = document.getElementsByClassName("tab-links")
var tabcontents = document.getElementsByClassName("tab-contents")
function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
    if (tablink.textContent == tabname) {
      tablink.classList.add("active-link");
    }
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
    if (tabcontent.id == tabname) {
      tabcontent.classList.add("active-tab");
    }
  }
}

const Name = document.querySelector('#Name');
const NameText = document.querySelector('#txt-Name');

document.getElementById("submit").addEventListener("click", myFunction);

function myFunction() {
  let greeting = 'Good day, ';
  
  if (Name.value.trim() === '') {
    greeting += 'dear Guest';
  } else {
    const nameArr = Name.value.trim().split(' ');
    const firstName = nameArr[0];
    greeting += 'dear ' + firstName;
  }
  
  greeting += '. Thank you for contacting me! Please wait for 1-3 business days for my reply, I will try to respond to you as soon as I can. Looking forward to talking with you!';
  
  alert(greeting);
}
