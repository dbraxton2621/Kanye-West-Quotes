createContainer()
getQuote()
addEvenListenerToGetQuoteButton()
var showQuote = true;
//get quote from API 
function getQuote() {
    $.get('https://api.kanye.rest/', function(data){
        console.log(data)
            var div = $('<div></div>')
            div.attr('class', 'quote')
            div.text(`${data.quote}`)
            $('#container').append(div) 
    })
}
//create container getQuote
function createContainer() {
    var container = $('<div></div>')
    container.attr('id', 'container')
    $('body').append(container)
}
// addEvenListenerToGetQuoteButton()
function addEvenListenerToGetQuoteButton() {
    $(`#button`).click( function (){
       if(showQuote === true){
        getQuote();
        document.getElementById("image").style.display= "inline";
        document.getElementById("image2").style.display = "none";
        console.clear();
        $('#container').empty();
        showQuote = false;
       } else if (showQuote === false) {
        document.getElementById("image").style.display = "none";
        document.getElementById("image2").style.display = "inline";
        showQuote = true;
        console.clear();
        $('#container').empty();
       }
    })
}




