async function db() {
  const response = await fetch(`http://localhost:8000/filter/data`);
  const data = await response.json();
  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    let name = element.uname;
    let fname = element.fname;
    let cnic = element.cnic;
    let address = element.address;
    let phone = element.phone_no;
    let email = element.email;
    let dob = element.dob;
    let province = element.province_name;
    let city = element.name;
    let district = element.district_names;
    let uc = element.uc_values;
    let ward = element.ward_values;
    let g = element.gender_names;
    users(
      name,
      fname,
      cnic,
      address,
      phone,
      email,
      dob,
      province,
      city,
      district,
      uc,
      ward,
      g
    );
  }
}

function next(Event) {
  Event.preventDefault();
  let div2 = document.getElementById("div2");
  div2.classList.remove("clr");
  let div1 = document.getElementById("div1");
  div1.classList.add("clr");
  console.log(2);
}

function createVoter(e) {
  e.preventDefault();
  let pro = document.getElementById("province").value;
  let city = document.getElementById("city").value;
  let district = document.getElementById("district").value;
  let uc = document.getElementById("uc").value;
  let ward = document.getElementById("ward").value;
  let gender = document.getElementById("province").value;
  let name = document.getElementById("name").value;
  let fname = document.getElementById("fname").value;
  let cnic = document.getElementById("cnic").value;
  let dob = document.getElementById("dob").value;
  let email = document.getElementById("email").value;
  let address = document.getElementById("address").value;
  let phn = document.getElementById("number").value;
  console.log(
    phn,
    pro,
    city,
    district,
    uc,
    ward,
    gender,
    name,
    fname,
    cnic,
    dob,
    email,
    address
  );
  const data = `{
    "uname": "${name}",
    "fname": "${fname}",
    "cnic": "${cnic}",
    "address": "${address}",
    "phone_no": "${phn}",
    "email": "${email}",
    "dob": "${dob}",
    "cities_id": "${city}",
    "district_id": "${district}",
    "gender_id": "${gender}",
    "province_id":"${pro}",
    "uc_id": "${uc}",
    "wards_id": "${ward}"
}`;
  fetch("http://localhost:8000/create/new_user", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: data,
  })
    .then((res) => console.log(res))
    .catch((err) => ("Error occured", err));
  location.assign("main.html");
}
