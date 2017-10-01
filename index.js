$(document).ready(function(){
    $('#searchBtn').click(function() {
        $.ajax({
            url: 'http://en.wikipedia.org/w/api.php',
            data: { action: 'query', list: 'search', srsearch: $("#Wikipedia").val(), format: 'json' },
            dataType: 'jsonp',
            success: processResult
        });

    });
});

function processResult(apiResult){
  console.log(apiResult);
 for (var i = 0; i < apiResult.query.search.length; i++){
      $('#display-result').append('<h3>'+apiResult.query.search[i].title+'</h3>');
      $('#display-result').append('<p>'+apiResult.query.search[i].snippet+'</p>');
 }
}
