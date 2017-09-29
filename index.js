$(document).ready(function () {
    $.ajax( {
        url: "https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=jsonfm",
        data: queryData,
        dataType: 'jsonfm',
        type: 'POST',
        headers: { 'Api-User-Agent': 'Example/1.0' },
        success: function(data) {
           $("#card1").html(data);
           console.log(data);
        }
    } );
});