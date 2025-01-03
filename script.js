$(document).ready(function () {
    $("#myForm").submit(function (e) {
        let isValid = true;

        if ($("#username").val().length < 5) {
            alert("Kullanıcı adı en az 5 karakter olmalı!");
            isValid = false;
        }

        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!emailPattern.test($("#email").val())) {
            alert("Geçerli bir e-posta girin!");
            isValid = false;
        }

        if (!isValid) e.preventDefault();
    });
});

$(document).ready(function () {
    $("#search").on("keyup", function () {
        const value = $(this).val().toLowerCase();
        $(".list-item").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });
});

$(document).ready(function () {
    $("#loadMore").click(function () {
        $.get("/getMoreContent", function (data) {
            $("#content").append(data);
        });
    });
});
$(document).ready(function () {
    $("input[name='poll']").change(function () {
        const selectedOption = $(this).val();
        $.post("/submitPoll", { option: selectedOption }, function (data) {
            $("#results").html(data);
        });
    });
});

$(document).ready(function () {
    $(".tab").click(function () {
        const target = $(this).data("target");
        $(".content").fadeOut();
        $(`#${target}`).fadeIn();
    });
});

