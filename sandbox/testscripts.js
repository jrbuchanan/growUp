var checkboxValues = JSON.parse(localStorage.getItem('checkboxValues')) || {};

var $checkboxes = $(".checkbox-container :checkbox");


$(document).ready(() => {
    $('.week-odd').on('click', event => {
        $(event.target).next(".checkbox-container").slideToggle(1000);
    });
    $('.week-even').on('click', event => {
        $(event.target).next(".checkbox-container").slideToggle(1000);
    });

    //*iterate over checkboxes and set the values accordingly
    $(".checkbox-container :checkbox").on("change", function () {

        checkboxValues[this.id] = this.checked;
        localStorage.setItem('checkboxValues', JSON.stringify(checkboxValues));
    });

    $.each(checkboxValues, function (key, value) {
        $("#" + key).prop('checked', value);
    });

    //*Event Listener for Scripture passages

    $('.scripture').on('click', event => {
        let passage = $(event.target).text();

        /*set width and height relative to screen size*/
        let features= "width="+window.outerWidth/2+ ', height='+ window.outerHeight/2 ;

        window.open("https://esv.org/" + passage,'scripture-window',features);

    });

});

function goBack() {
    window.history.back();
}
