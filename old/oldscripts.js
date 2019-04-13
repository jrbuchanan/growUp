//*need to add a this statement to jquery to make work 
$(document).ready ( () =>{
    $('.week-odd').on('click', event =>{
        $(event.target).next(".week-content").slideToggle(500);
    });
    $('.week-even').on('click', event => {
        $(event.target).next(".week-content").slideToggle(500);
    });

});

function goBack() {
    window.history.back();
}


