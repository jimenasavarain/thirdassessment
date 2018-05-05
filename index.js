var to = document.getElementById("to"),
    from = document.getElementById("from"),
    message = document.getElementById("message"),
    receiver = document.getElementById("receiver"),
    msgInp = document.getElementById("msg"),
    sender = document.getElementById("sender"),
    urlInp = document.getElementById("bgImg"),
    postcard = document.getElementById("postcard"),
    add = document.getElementById("add"),
    preview = document.getElementById("preview"),
    num = 1,
    x = 1,
    postcards = [],
    save = document.getElementById("save"),
    load = document.getElementById("load");

function changeValue () {
     to.innerText = "To "+""+receiver.value+"";
     message.innerText = ""+msgInp.value+"";
     from.innerText = "From "+""+sender.value+"";
}

function createPostcard (to, bgImg) {
    var newDiv = document.createElement("div");
    newDiv.className = "divs";

    preview.appendChild(newDiv);
    newDiv.style.backgroundImage = bgImg;
    
    var miniTo = document.createElement("div");
    miniTo.className = "miniTo";
    newDiv.appendChild(miniTo);
    miniTo.innerText = to;
    
}

function createPostcard1 () {
    var newDiv = document.createElement("div");
    newDiv.className = "divs";

    preview.appendChild(newDiv);
    newDiv.style.backgroundImage = postcard.style.backgroundImage;
    
    var miniTo = document.createElement("div");
    miniTo.className = "miniTo";
    newDiv.appendChild(miniTo);
    miniTo.innerText = receiver.value;
    
}
//function autoImgs() {
//    x += 1;
//    
//    if(urlInp.value == "auto") {
//        postcard.style.backgroundImage ="url(imgs/auto" +x+ ".jpg)";
//    }
//    
//    if (x >= 3) {
//        x = 0;
//    }
//    
//    if(ev.keyCode == 13) {
//        
//        postcard.style.backgroundImage = "url("+bgImg+")";
//    }
//}

    
urlInp.addEventListener("keyup", function(ev) {
    if(ev.keyCode == 13) {
        if(x > 2) {
           x = 0; 
        }
        if(this.value == "auto"){
            x++;
            postcard.style.backgroundImage = "url('imgs/auto"+x+".jpg')";
           bgImg = "url('imgs/auto"+x+".jpg')";
        } else if (this.value == "") {
            postcard.style.backgroundImage = "url('imgs/default.png')";
           bgImg = "url('imgs/default.png')";
            
        } else {   
        postcard.style.backgroundImage = "url("+this.value+")";
        }
    }
});

add.addEventListener("click", function() {

   var obj = {
        bgImg: postcard.style.backgroundImage,
        to:sender.value,
        message:msgInp.value,
        from:receiver.value
    }
   
    postcards.push(obj);
    console.log(postcards);
    
    createPostcard1();
});

save.addEventListener("click", function(){
	 localStorage.setItem("postcards", JSON.stringify(postcards));
});

load.addEventListener("click", function (){
    
    preview.innerHTML = "";
    
    var postcards = localStorage.getItem("postcards");
    
    postcards = JSON.parse(postcards);
    console.log(postcards);
    for (var i = 0; i<postcards.length; i++){
        createPostcard(postcards[i].to, postcards[i].bgImg);
    }
})