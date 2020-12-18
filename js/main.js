
// var todayDate = new Date();
// var currYear = todayDate.getFullYear();
// var currMonth = todayDate.getMonth()+1;
// var currDay = todayDate.getDate();
// document.write(" ");
// document.write(currDay + "-" + currMonth + "-" + currYear);


function mobileMenu () {
    var x = document. getElementById("navbar");
    if (x.className === "nav"){
        x.className = "nav mobile";
    } else {
        x.className = "nav";
     }
}

// alert("Bine ai venit!")