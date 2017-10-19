var firstTime = true;
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
    $('#twitter').on("click", function() {
      window.open("https://www.twitter.com/PeteCapeCod");
    });
    $('#gitHub').on("click", function() {
      window.open("https://www.github.com/PeterCr");
    });
});

function processResult(apiResult){
  console.log(apiResult);
  if (firstTime == false){
    $("#display-result").empty();
  }
  firstTime = false;
 for (var i = 0; i < apiResult.query.search.length; i++){
    $('#display-result').append( `<div class="card mb-3 " style="width: 80%;"> 
      <div class="card-body "> 
        <h4 class="card-title"><u> ${apiResult.query.search[i].title} </u></h4> 
        <p class="card-text pl-2">${apiResult.query.search[i].snippet}</p> 
        <a href="https://en.wikipedia.org/?curid=${apiResult.query.search[i].pageid}" class="btn btn-warning mb-3" target="_blank">Go to the page</a> 
      </div> 
    </div>`);
 }

}

