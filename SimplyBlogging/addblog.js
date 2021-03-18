var arr = [];
var myJson;
var info = [];

console.log(document.getElementById('blogdata'));

function addBlog(){
    var data = readFormData();
    console.log(data);
    arr.push(data);
    myJson=JSON.stringify(arr);
    console.log(myJson);
    storeInSession();
    info = JSON.parse(myJson);
    console.log(info);
    retrieveFromSession();
}

function readFormData(){
    var blogInfo = {};
    blogInfo.title = document.getElementById("title").value;
    blogInfo.desc = document.getElementById("articletext").value;
    blogInfo.imageInfo = document.getElementById("imageID").files[0].name;
    console.log(title)
    console.log(articletext);
    console.log(imageID);
    console.log(blogInfo);
    return blogInfo;    
}

function insertBlog(obj) {

    document.querySelector('#blogdata').innerHTML = '';
    obj = JSON.parse(obj);
    for (let i =0; i< obj.length; i++){
        let div = document.createElement('div');  
        let titleValue = document.createElement('p');
        let articleValue = document.createElement('p');
        let image = document.createElement('img');
        div.appendChild(titleValue);
        div.appendChild(articleValue);
        titleValue.innerHTML = obj[i].title;
        articleValue.innerHTML = obj[i].desc;
        div.appendChild(image);
        image.style.height = '300px';
        image.style.width = '300px';
        image.src = obj[i].imageInfo;
        console.log(div);
        document.querySelector('#blogdata').appendChild(div);
    } 
}

function storeInSession() {
    sessionStorage.setItem("BlogData",myJson);	
}

function retrieveFromSession() {
    var obj = sessionStorage.getItem("BlogData");
    console.log(obj);
	insertBlog(obj);
}

