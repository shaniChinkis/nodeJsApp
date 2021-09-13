

function showDiv() {
    document.getElementById("div1").replaceWith(document.getElementById("div2"));
    document.getElementById("div2").style.visibility = "visible";
}
function showDiv2() {
    document.getElementById("div_").style.visibility = "visible";
}
function func1() {
    let user =
    {
        UserName: document.getElementById("txtbx3").value,
        Password: document.getElementById("txtbx4").value,
        FName: document.getElementById("txtbx5").value,
        LName: document.getElementById("txtbx6").value
    };

    fetch("api/Default", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charest=utf-8'
        },
        body: JSON.stringify(user)
    }
    ).then(response => {
        if (response.ok)
            alert("המשתמש נרשם בהצלחה");
        else { response.json().then(error => (JSON.stringify(error.errors))).then(data => alert(data)) }; 
    })
}

function func3() {
    user_ = JSON.parse(sessionStorage.getItem("Olduser"));
    document.getElementById("h1").innerHTML = "שלום"+" "+user_.fName+" "+"התחברת  בהצלחה";
}

function getUser() {

    let myuserName = document.getElementById("txtbx1").value;
    let myuserPass = document.getElementById("txtbx2").value;
    //send+get
    let url = "api/Default/" + myuserName + "/" + myuserPass;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (typeof data == 'object') {
                console.log(data);
                sessionStorage.setItem("Olduser", JSON.stringify(data));
                window.location.replace("connectPage.html");
            }
        }).catch(error => { console.log(error); alert("לא נמצא משתמש התואם את הפרטים😞"); });
}

function func2() {
    let oldUser = JSON.parse(sessionStorage.getItem("Olduser"));
    let newUser =
    {
        id: oldUser.id,
        UserName: document.getElementById("txtbx_3").value,
        Password: oldUser.password,
        FName: document.getElementById("txtbx_5").value,
        LName: document.getElementById("txtbx_6").value
    };
    
    fetch("api/Default/" + oldUser.id,{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json; charest=utf-8'
        },
        body: JSON.stringify(newUser)
    }
    ).then(response => {
        if (response.ok)
            alert("הפרטים עודכנו בהצלחה");
        else
            throw new Error(response.statusText);
    }).catch(error => {
        console.log(error);
        alert("תקלה בעדכון הפרטים")
    });

}