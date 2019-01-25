
// let employeeListDisplay = employeeList;

const render = function() {
    displayText='';
    for (let i = 0; i < employeeListDisplay.length; i++) {
        displayText += 
        `<div class='card'> Name: ${employeeListDisplay[i].name} <br>
        Office Number: ${employeeListDisplay[i].officeNum} <br>
        Phone Number: ${employeeListDisplay[i].phoneNum} </div>`;
    }
    $('.column').html(displayText);
  }

const hideSearch = function() {
    document.getElementById("inputName").style.display = "none";
    document.getElementById("inputOffice").style.display = "none";
    document.getElementById("inputPhone").style.display = "none";
    document.getElementById("searchButton").style.display = "none";
    document.getElementById("addButton").style.display = "none";

}

const showSearch = function() {
    document.getElementById("inputName").style.display = "initial";
    document.getElementById("inputOffice").style.display = "initial";
    document.getElementById("inputPhone").style.display = "initial";
    document.getElementById("searchButton").style.display = "initial";

}


const navViewClick = function() {
    for (let i = 0; i < employeeList.length; i++) {
        displayText = 
        `<div class='card'> Name: ${employeeList[i].name} <br>
        Office Number: ${employeeList[i].officeNum} <br>
        Phone Number: ${employeeList[i].phoneNum} </div>`;
    }
    
    render();
    hideSearch();
}


const navAddClick = function() {
    event.preventDefault();
    employeeListDisplay.push({
        name: $(`#inputName`).val(),
        officeNum: $(`#inputOffice`).val(),
        phoneNum: $(`#inputPhone`).val()
    })
    render();
}

const navAddClickStart = function() {
    document.getElementById("inputName").style.display = "initial";
    document.getElementById("addButton").style.display = "initial";
    document.getElementById("inputOffice").style.display = "initial";
    document.getElementById("inputPhone").style.display = "initial";
    document.getElementById("searchButton").style.display = "none";
    render();
}


const navVerifyClick = function() {

    document.getElementById("inputName").style.display = "initial";
    document.getElementById("inputOffice").style.display = "none";
    document.getElementById("inputPhone").style.display = "none";
    document.getElementById("searchButton").style.display = "initial";
    document.getElementById("addButton").style.display = "none";

    $('.column').html("");

}

const searchButtonClick = function () {
    event.preventDefault();
    let exists = false;
    for (let i = 0; i < employeeList.length; i++) {
        if (employeeList[i].name === $(`#inputName`).val()) {
            exists = true;
            $('.column').html(`<p>${employeeList[i].name}</p>`);
        }
    }
    if (exists === true) {
        $('.column').html(`<h1>Yes, ${$(`#inputName`).val()} exists</h1>`);
    } else {
        $('.column').html(`<h1>No, ${$(`#inputName`).val()} does not exist</h1>`);
    }
}

const navUpdateClick = function() {

}

const navDeleteClick = function() {

}


$(`#navView`).on("click", navViewClick);
$(`#navAdd`).on("click", navAddClickStart);
$(`#addButton`).on("click", navAddClick);
$(`#navVerify`).on("click", navVerifyClick);
$(`#searchButton`).on("click", searchButtonClick);
$(`#navUpdate`).on("click", navAddClick);
$(`#navDelete`).on("click", navAddClick);