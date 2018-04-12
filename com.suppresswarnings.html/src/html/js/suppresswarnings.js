  var host = "http://suppresswarnings.com/"
  var ids = ["ul","u","ur","mr","dr","d","dl","ml"]
  var index = 0
  var forever = 10000
  var limited = 10000
  function red(){
    $("#"+"svg_"+ids[index%8]).css("stroke","pink");
    if(index<limited) {
      setTimeout("green()", 100);
    } else {
      $("#" + "svg_"+ids[index%8]).css("stroke","#5cb85c");
      $("#"+"svg_ur").css("stroke","pink");
    }
  }
  function green(){
    $("#" + "svg_"+ids[index%8]).css("stroke","#5cb85c");
    if(index<limited) {
      setTimeout("red()", 100);
    } else {
      $("#"+"svg_ur").css("stroke","pink");
    }
    index++;
  }
  function gethtml(uri, container) {
    
    $.ajax({
	  url: uri,
	  data: {
	    zipcode: 97201
	  },
	  success: function( result ) {
	    $( container ).html( "<pre>" + result + "</pre>" );
	  },
	  error: function( xhr, result, obj ) {
	    $( container ).html( "<pre><span>天哪，不见了</span><br/>" + result + "</pre>" );
	  }
	});
  }
  $(document).ready(function(){
    green();
    var main =  $("#main")
    gethtml("welcome.html", main)
    $(".navbar-brand").click(function(){
      if(limited <= 0) {
        index = 0
        limited = forever
        green()
      } else {
        limited = 0;
      }
    });
    
    $(".business").click(function(){
        gethtml("business.html", main)
    });
    
    $(".aboutus").click(function(){
        gethtml("aboutus.html", main)
    });
    
    $(".raspberrypi").click(function(){
      gethtml("walkthrough/raspberrypi.html", main)
    });
  }); 