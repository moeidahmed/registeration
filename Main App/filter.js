async function filter(p, d) {
  document.getElementById("users").innerHTML = " ";
  console.log(p, d);
  const response = await fetch(`http://localhost:8000/filter/${p}/${d}`);
  const data = await response.json();
  console.log(data);
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

function pro() {
  let data = document.getElementById("province").value;
  console.log(data);
  filter("pro", data);
}

function gen() {
  let data = document.getElementById("gender").value;
  console.log(data);
  filter("gender", data);
}

function dis() {
  let data = document.getElementById("district").value;
  console.log(data);
  filter("district", data);
}

function cit() {
  let data = document.getElementById("city").value;
  console.log(data);
  filter("city", data);
}

function unc() {
  let data = document.getElementById("uc").value;
  console.log(data);
  filter("uc", data);
}

function wrd() {
  let data = document.getElementById("ward").value;
  console.log(data);
  filter("ward", data);
}
