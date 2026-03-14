let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");

btn.addEventListener("click" , async ()=>{
    let country = document.querySelector("input").value;
    let college = await getdata(country);
    show(college);
    
});


async function getdata(country){
    let res = await axios.get(url + country);
    return res.data;
}

function show( arr){
    let list = document.querySelector("#list"); 
    list.innerText = "";
    for ( i of arr){
        let li = document.createElement("li");
        li.innerText = i.name;
        list.appendChild(li);
    }
}
