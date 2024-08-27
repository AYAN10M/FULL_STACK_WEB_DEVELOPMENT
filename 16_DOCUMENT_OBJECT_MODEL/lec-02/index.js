// to select the element using tag name. Among all the tag the first one occuring would only be selected
var title2 = document.querySelector("h2");

// using querySelector we can also select the HTML element using id
document.querySelector("#title");

// this is how we can change the html elements content. innerHTML is the property of HTML element h2
title2.innerHTML = "Registration In Process";

// to select all the elements in the HTML file of the given tag name
document.getElementsByTagName("li")[2].style.color = "yellow";

// the given list of item will be converted to array in DOM, so to get the length of the array we need to
document.getElementsByTagName("li").length;

// to select all the elements in the HTML file of the given class name
document.getElementsByClassName("list");

// to select element of given id
document.getElementById("submit_button").style.color = "green";

// Note: Every id within HTML id tag should be unique
