// JavaScript to uncheck all boxes on a wiki page.
// Must be editing the page, open the developer console, 
// run the following function, then publish changes.
(function (){
      var iframe = document.getElementById('wysiwygTextarea_ifr');
	var innerDoc = (iframe.contentDocument) ? iframe.contentDocument : iframe.contentWindow.document;		
      var w = innerDoc.getElementsByTagName("LI");
      for(var i = 0; i < w.length; i++){
        if(w[i].classList.contains("checked")){
          w[i].classList.remove('checked');
        }
      }
  })()
