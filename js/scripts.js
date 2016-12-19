//console.log ('ran the contents of scripts.js') ;

//console.log('window.location.href:',window.location.href) ;

//console.log ("window.location.href.indexOf('documentary'):",window.location.href.indexOf('documentary')) ;

// Does the URL contain a link to a subnav item? If so, show the navigation. If not, hide it.
if ( window.location.href.indexOf('tattoos') != -1 || window.location.href.indexOf('expressions') != -1 || window.location.href.indexOf('documentary') != -1 || window.location.href.indexOf('meandi') != -1 || window.location.href.indexOf('film') != -1 || window.location.href.indexOf('travel') != -1 ) {
//    console.log ('show the nav.') ;
    
}
else {
//    console.log ('hide the nav.') ;
    jQuery( "#dropdown" ).hide() ;
}

// When the portfolio link is clicked, 
// toggle the appearance of the #dropdown ul (subnav).
jQuery( "#portfolio" ).on( 'click', function() {
    //    console.log ('clicked the portfolio link') ;
    jQuery( "#dropdown" ).slideToggle();
}) ;