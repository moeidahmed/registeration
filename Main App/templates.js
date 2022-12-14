// All Users Data
async function users(
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
) {
  console.log();
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
    g;
  const response = await fetch("templates/user.html");
  const html = await response.text();
  const user = html
    .replace("#name", name)
    .replace("#fname", fname)
    .replace("#cnic", cnic)
    .replace("#address", address)
    .replace("#phn", phone)
    .replace("#email", email)
    .replace("#dob", dob)
    .replace("#pro", province)
    .replace("#city", city)
    .replace("#dist", district)
    .replace("#uc", uc)
    .replace("#ward", ward)
    .replace("#g", g);
  document.getElementById("users").innerHTML += user;
}

//Province
async function province() {
  const response = await fetch("http://localhost:8000/province/data");
  const data = await response.json();
  for (let i = 0; i < data.length; i++) {
    const value = data[i].province_name;
    const id = data[i].province_id;
    document.getElementById(
      "province"
    ).innerHTML += `<option value="${id}">${value}</option>`;
  }
}
province();

//Cities
async function city() {
  const response = await fetch("http://localhost:8000/city/data");
  const data = await response.json();
  for (let i = 0; i < data.length; i++) {
    const value = data[i].name;
    const id = data[i].cities_id;
    document.getElementById(
      "city"
    ).innerHTML += `<option value="${id}">${value}</option>`;
  }
}
city();

//District
async function district() {
  const response = await fetch("http://localhost:8000/district/data");
  const data = await response.json();
  for (let i = 0; i < data.length; i++) {
    const value = data[i].district_names;
    const id = data[i].district_id;
    document.getElementById(
      "district"
    ).innerHTML += `<option value="${id}">${value}</option>`;
  }
}
district();

//Union Council
async function uc() {
  const response = await fetch("http://localhost:8000/unioncouncil/data");
  const data = await response.json();
  for (let i = 0; i < data.length; i++) {
    const value = data[i].uc_values;
    const id = data[i].uc_id;
    document.getElementById(
      "uc"
    ).innerHTML += `<option value="${id}">${value}</option>`;
  }
}
uc();

//ward
async function ward() {
  const response = await fetch("http://localhost:8000/ward/data");
  const data = await response.json();
  for (let i = 0; i < data.length; i++) {
    const value = data[i].ward_values;
    const id = data[i].wards_id;
    document.getElementById(
      "ward"
    ).innerHTML += `<option value="${id}">${value}</option>`;
  }
}
ward();

//gender
async function gender() {
  const response = await fetch("http://localhost:8000/gender/data");
  const data = await response.json();
  for (let i = 0; i < data.length; i++) {
    const value = data[i].gender_names;
    const id = data[i].gender_id;
    document.getElementById(
      "gender"
    ).innerHTML += `<option  value="${id}">${value}</option>`;
  }
}
gender();
