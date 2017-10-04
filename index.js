$(document).ready(function(){
    $('#searchBtn').click(function() {
        $.ajax({
            url: 'http://en.wikipedia.org/w/api.php',
            data: { action: 'query', list: 'search', srsearch: $("#Wikipedia").val(), format: 'json' },
            dataType: 'jsonp',
            success: processResult
        });

    });
    $("#Wikipedia").keypress('keypress', function (e) {
        var key = e.which || e.keyCode;
        if (key === 13) { // 13 is enter
          $("#searchBtn").click();
        }
    });
});

function processResult(apiResult){
  console.log(apiResult);
 for (var i = 0; i < apiResult.query.search.length; i++){
    //   $('#display-result').append('<h3>'+apiResult.query.search[i].title+'</h3>');
    //   $('#display-result').append('<p>'+apiResult.query.search[i].snippet+'</p>');
    $('#display-result').append( `<div class="card mb-3" style="width: 80%;"> 
      <div class="card-body"> 
        <h4 class="card-title"> ${apiResult.query.search[i].title} </h4> 
        <p class="card-text">${apiResult.query.search[i].snippet}</p> 
        <a href="https://en.wikipedia.org/?curid=${apiResult.query.search[i].pageid}" class="btn btn-primary">Go to the page</a> 
      </div> 
    </div>`);
 }

}

