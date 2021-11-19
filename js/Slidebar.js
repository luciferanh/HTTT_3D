// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

function myFunction(event) {
    if (event.keyCode == 13) {
        newElement();
    }
}
// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);
var inputSrc = document.getElementById("myInput").value;
switch(inputSrc)
{
    case "KTX Khu A":
        {
            inputSrc.innerHTML =
            <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3918.1227235628844!2d106.80443711402478!3d10.878269360282045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1zS1RYIEtodSBBIMSQSFFHIFRQLkhDTSwga2h1IHBo4buRIDYsIMSQw7RuZyBIw7JhLCBUaOG7pyDEkOG7qWMsIEhvIENoaSBNaW5oIENpdHk!5e0!3m2!1sen!2s!4v1637320280611!5m2!1sen!2s" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>;
        }
    case "KTX Khu B":
        {
            inputSrc.innerHTML =
            <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3918.1227235628844!2d106.80443711402478!3d10.878269360282045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1zS1RYIEtodSBBIMSQSFFHIFRQLkhDTSwga2h1IHBo4buRIDYsIMSQw7RuZyBIw7JhLCBUaOG7pyDEkOG7qWMsIEhvIENoaSBNaW5oIENpdHk!5e0!3m2!1sen!2s!4v1637320280611!5m2!1sen!2s" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>;
        }
}

// Create a new list item when clicking on the "Add" button
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(li);

    }
    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}
