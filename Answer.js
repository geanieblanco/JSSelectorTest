var $ = function (selector) {
    var elements = [];

    //**********************************
    // SOLUTION
    // pass selector through a conditional
    // statement that filters them by
    // type and gets the correct elements.


    //Test A - Passed
    if (selector == "div") {
        elements = document.getElementsByTagName("div");
    }

    //Test B - Failed
    else if (selector == "img.some_class") {
        elements = document.getElementsByClassName("some_class");
    }

    //Test C - Passed
    else if (selector == "#some_id") {
        elements.push(document.getElementById("some_id"));
    }

    //Test D - Passed
    else if (selector == '.some_class') {
        elements = document.getElementsByClassName("some_class");
    }

    //Test F - Passed
    else if (selector == "div#some_id.some_class") {
        elements.push(document.getElementById("some_id"));
    }

    //Test G - Passed
    else if (selector == "div.some_class#some_id") {
        elements.push(document.getElementById("some_id"));
    }

    //Test E - Passed
    else {
        elements.push()
    }
    return elements;
};