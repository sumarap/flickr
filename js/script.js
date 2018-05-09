$("document").ready(function(){
  console.log('Document Ready');

  function successFn(result){
    $.each(result.items, function(i, item){
      $("<img>").attr("src", item.media.m)
      .appendTo("#ajaxContent");
    });
  }

  $( "#search" ).submit(function( event ) {
    event.preventDefault();
    $( "#ajaxContent" ).empty();
    console.log( $( "input:first" ).val());
    const searchText = $( "input:first" ).val();
    const flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";

    // jQuery AJAX call to Flickr site using searchText
      $.getJSON(flickrAPI, {
        tags: searchText,
        tagmode: "any",
        format: "json"
      }, successFn);
    });

});
