
$( "#getQuote" ).click(function() {
    $.getJSON("/api/quote")
    .then(displayQuote)
  });

function displayQuote(quote) {
    $( '#quoteContainer' ).removeClass( "d-none" )
    $('#quotation').html(quote.quotation);
    $('#author').html(quote.author + " from <cite title='reference'>" + quote.reference + "</cite>");
}