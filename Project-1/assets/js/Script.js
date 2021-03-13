





/** API STUFF */

const QAPI_OBJECT = {
    qOfDayURL: "https://api.paperquotes.com/apiv1/qod/",
    
    url: "https://api.paperquotes.com/apiv1/quotes/", //? should be first
    tagName: "tags=", //comma-separated
    langCode: "lang=",
    authorName: "author=",

    apiKey: "8b3b2f24c77c3db7ed3487def36faa730228f18a"
}

var QajaxCallObj = { 
    type : "GET", 
    url : "https://api.paperquotes.com/apiv1/quotes/", 
    beforeSend: function(xhr){
        xhr.setRequestHeader('Authorization', `Token ${QAPI_OBJECT.apiKey}` );
    },
    success : function(result) { 
        console.log(result.results); 
    }, 
    error : function(result) { 
        //handle the error
        console.log(result);
    } 
  }


  //TODO: WikiMedia things
  //TODO: Reframe qAPI as fetch with header, not AJAX call

/** ---------------------------- */