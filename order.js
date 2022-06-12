$(document).ready(function () {
    $("input").focus(function () {
        $(this).css("background-color", "yellow");
    });
    $("input").blur(function () {
        $(this).css("background-color", "blue");
    });
});

$("#inputs").on("keyup", function () {
    console.log("test");
    let val1 = 9;
    let val2 = $("#inputs input:nth-child(2)").val();
    console.log("teste");
    $("input[type='text']").val(val1 * val2);
});

$("#second").on("keyup", function () {
    console.log("test");
    let val1 = 9;
    let val2 = $("#second input:nth-child(2)").val();
    console.log("teste3");
    $("input[type='tel']").val(val1 * val2);
});

$("#third").on("keyup", function () {
    console.log("test");
    let val1 = 9;
    let val2 = $("#third input:nth-child(2)").val();
    console.log("teste3");
    $("input[type='search']").val(val1 * val2);
});
