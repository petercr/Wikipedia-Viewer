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
    $('#display-result').append( '<div class="card" style="width: 80%;"> \
      <div class="card-body"> \
        <h4 class="card-title">Card title</h4> \
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the cardcontent.</p> \
        <a href="#" class="btn btn-primary">Go somewhere</a> \
      </div> \
    </div>');
 }

}

