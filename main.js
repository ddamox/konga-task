let overview = document.getElementById("overview");
let overview2 = document.getElementById("overview");

overview.addEventListener("click", function () {
    
    if (document.getElementById("details").style.display = "flex") {
        return document.getElementById("details").style.display = "none";
    }
    if (document.getElementById("details").style.display = "none") {
        return document.getElementById("details").style.display = "flex";
    }
    

});


let counterTrigger1 = document.getElementById('increment');
let counterTrigger2 = document.getElementById('decrement');
let count = parseInt(document.getElementById('count').innerHTML);


// increment
counterTrigger1.addEventListener("click", function () {
    count++;
    return document.getElementById('count').innerHTML = count;
});

//decrement
counterTrigger2.addEventListener("click", function () {
    if (count > 0) {
        count--;
        return document.getElementById('count').innerHTML = count;
    } else {
        return document.getElementById('count').innerHTML = 0;
    }
});