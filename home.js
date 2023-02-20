document.getElementById("us").innerHTML = `<h1>Welcome :</h1>
<p>${localStorage.getItem("nam")}</p>
`;
function logout() {
    localStorage.setItem("nam",null);
    location.replace("./index.html");
}