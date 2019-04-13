function submit() {
    const passage = document.getElementById('passage').value;
    const highlight = document.getElementById('highlight').value;
    const explain = document.getElementById('explain').value;
    console.log(passage);

}

$(document).ready ( () => {

    const date = new Date();
    const day="day1";
  
    $('#date').html(date);

    $("#button").on('click', ()=> {
        const passage = document.getElementById('passage').value;
        console.log(passage);
        const highlight = document.getElementById('highlight').value;
        console.log(highlight);
        
        localStorage.setItem(date, passage);

        const outputDate=localStorage.getItem(date);
        $("#output").html(outputDate);
    
        
    });

});