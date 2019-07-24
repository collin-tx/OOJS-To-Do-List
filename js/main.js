$('#addTask').on('click', function(){
    toDoList.addTask();
});

let toDoList = {
    tasks: [],
    addTask: function(){
        let userInput = $('#task').val();
        if (userInput !== ''){
            $('#tasks').append(`<li class="list-group-item">${userInput}<button id="remove" class="btn btn-danger">Remove</button></li>`);
            $('#remove').css("margin-left", '10.5rem');
            $('#task').css('border', '1px solid green');
            $('#task').val("");
        } else {
            $('#task').css('border', '1px red solid');
            //window.alert("You can't add nothing to your to do list!");
        }
    }
}