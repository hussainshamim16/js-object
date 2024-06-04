





var namee = document.getElementById("name")
var clas = document.getElementById("class")
var number = document.getElementById("number")
var course = document.getElementById("course")


var a = 2;
var b = 4;
function nm(helth) {
    if (namee.value === "") {
        console.log("please enter your correct name")
        return
    }
    var student = {
        naam: namee.value,
        claas: clas.value,
        numb: number.value,
        cours: course.value
    }



    // helth.setAttribute("disabled","true")


    namee.value = ""
    clas.value = ""
    number.value = ""
    course.value = ""

    //     }else
    //     {
    //         namee.value = "";
    // clas.value = "";
    // number.value = "";
    // course.value = "";
    //     }
    // console.log(student);




    console.log(student);
    alert("Name : " + student.naam + " | " + "Class : " + student.claas + " | " + "Course : " + student.cours + " | " + "Number : " + student.numb);
    // alert(student.namee)
}
// var b = 2;
//     var a= 4;

// console.log('hussain' + `<br />` +'shamim');