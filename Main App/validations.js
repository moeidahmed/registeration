function validateCnic(e) {
  e.preventDefault();
  let cnic = document.getElementById("cnic").value;
  if (cnic.length == 13) {
    return true;
  } else {
    alert(
      "Please Enter valid 13 digits of CNIC, The format of CNIC is 0000000000000"
    );
  }
  console.log(cnic);
}

function validateContact(e) {
  e.preventDefault();
  let contact = document.getElementById("number").value;
  if (contact.length == 11) {
    return true;
  } else {
    alert(
      "Please Enter valid 11 digits of Contact Number, The format of Phone Number is 03000000000, Your number should start with 03........."
    );
  }
  console.log(cnic);
}

function validateEmail(e) {
  e.preventDefault();
  let email = document.getElementById("email").value;
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  }
  alert("You have entered an invalid email address!");
  return false;
}

function validateName(e) {
  e.preventDefault();
  let name = document.getElementById("name").value;
  if (/^[a-zA-Z]/.test(name)) {
    return true;
  }
  alert("Your name is not valid. Only characters A-Z and  a-z are  acceptable");
  return false;
}

function validateFName(e) {
  e.preventDefault();
  let fname = document.getElementById("fname").value;
  if (/^[a-zA-Z]/.test(fname)) {
    return true;
  }
  alert(
    "Your Father name is not valid. Only characters A-Z and  a-z are  acceptable"
  );
  return false;
}

function next(Event) {
  Event.preventDefault();
  let province = document.getElementById("province").value;
  let district = document.getElementById("district").value;
  let city = document.getElementById("city").value;
  let uc = document.getElementById("uc").value;
  let ward = document.getElementById("ward").value;
  console.log(province, district, city, uc, ward);
  if (
    province == "" ||
    district == "" ||
    city == "" ||
    uc == "" ||
    ward == ""
  ) {
    alert("Please Select All values");
  } else {
    let div2 = document.getElementById("div2");
    div2.classList.remove("clr");
    let div1 = document.getElementById("div1");
    div1.classList.add("clr");
  }
}
