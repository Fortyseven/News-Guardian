// "use strict";

// /********************************************************
//  * Gag Reflex main class
//  * @constructor
//  */
// var NGRenderer_Reddit = function ( config )
// {
//     this.ARTICLE_CLASS = "div.thing";
//     this.ARTICLE_LINK_SELECTOR = "a.title";

//     this.REFRESH_DELAY = 1500;

//     this._config = config;

//     this.start = function()
//     {
//         //setTimeout( this.runHighlighting.bind( this ), this.REFRESH_DELAY );
//         this.runHighlighting();
//     };

//     /***************************************
//      * Callback to do highlighting on page
//      */
//     this.runHighlighting = function ()
//     {
//         var gag = this;
//         $( gag.ARTICLE_CLASS ).each(
//                 function ()
//                 {
//                     var article_element = this;
//                     $(gag.ARTICLE_LINK_SELECTOR, this ).each(function(){
//                         if ( this.host ) {
//                             for ( var gi in gag._config.groups ) {
//                                 if ( gag._config.groups[gi].is_enabled ) {
//                                     if ( parse( gag._config.groups[gi], this.host, article_element ) ) {
//                                         break;
//                                     }
//                                 }
//                             }
//                         }
//                     });
//                 }
//         );
//         setTimeout( this.runHighlighting.bind( this ), this.REFRESH_DELAY );
//     };

//     /**
//      * Scans a string for domains from suppled group definition and
//      * applies CSS rule to a given element if found.
//      *
//      * @param group_def Group definition object
//      * @param source_url String to scan for domains
//      * @param parent_element Element to add CSS class to if matched
//      * @return {boolean} True if there was a match
//      */
//     var parse = function ( group_def, source_url, parent_element )
//     {
//         var has_found_match = false;

//         group_def.domains.forEach(
//                 function ( element )
//                 {
//                     // Does the domain match somewhere in the URL?
//                     if ( source_url == element ||
//                          source_url.endsWith( "." + element ) )
//                     {
//                         // Brand it with the class belonging to the group
//                         parent_element.classList.add( group_def.css_name );
//                         has_found_match = true;
//                         return true;
//                     }
//                     return false;
//                 }
//         );

//         return has_found_match;
//     };
// };
