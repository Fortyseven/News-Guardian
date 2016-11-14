"use strict";

// /********************************************************
//  * Gag Reflex main class
//  * @constructor
//  */
// var GagSingleSite = function ( config )
// {
//     const DELAY_MESSAGE = "<notice>This GagReflex notice will only be shown once per site, and per session.</notice>";
//     const SESSION_KEY_SUPPRESS = "suppress_gag_reflex";

//     const DATA_URL_IC_SATIRE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMkAAABrCAMAAADqzFbSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpmYTIxNzU5NS1iNDIwLWEwNDgtYmFkZC0zN2U1MzUyZjY3MTYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjBCMDVGMUJENEMyMTFFNTgyNTFEQTQ4RkYzMUM2RjciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjBCMDVGMUFENEMyMTFFNTgyNTFEQTQ4RkYzMUM2RjciIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZmEyMTc1OTUtYjQyMC1hMDQ4LWJhZGQtMzdlNTM1MmY2NzE2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOmZhMjE3NTk1LWI0MjAtYTA0OC1iYWRkLTM3ZTUzNTJmNjcxNiIv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";
    
//     const DATA_URL_IC_QUESTIONABLE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMkAAABrCAMAAADqzFbSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkFENkI4NDFGRDM5NzExRTVCMDVGQzk2NzM2QzkwNUU2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkFENkI4NDIwRDM5NzExRTVCMDVGQzk2NzM2QzkwNUU2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QUQ2Qjg0MUREMzk3MTFFNUIwNUZDOTY3MzZDOTA1RTYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QUQ2Qjg0MUVEMzk3MTFFNUIwNUZDOTY3MzZDOTA1RTYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6iegy/AAAAYFBMVEXM0dbuU1Xz+f8tLS2NjpDmjI/+/v+qrrJsbGxERETi5+zBxMfe4uXt8vjn7fK0ub7V2t7tx8z19fWAipOfo6eVmZ3w9vzy5OnhsLR4eXrx191XV1dhYWGCg4Tu7u7///+zhGyEAAAAIHRSTlP/////////////////////////////////////////AFxcG+0AAAhoSURBVHja3Jtre6usEoZpJKCCQgy4QhHz///lHtAkxkPUtG81e9b61Ouq5u4zz8xwCLr+vwTa44ci5FqTlPC0roviU0mKmguFDcaKMZQyRLWxJma8/iySglNsjKMyzcjhAP8hSElSruPK6o8hIQXFzmmWHkYik0wlkfgIEqS9GhxE8DFkKVPEXFTVOycpGMiBRT5B0UaOQBgr90witXNOFC8xQoAuOsG7JQn+UOk8h88xyYSJ6D5JJMZOy0UcIcUYU1VF9kcCDsGY1ks5fFmWjOqk3htJLbDDiKwAgeCM4oTuiyRV2Cm+jsMbnwlsDdkRSa2xo8VqkGAWbXpm2ZKkABBB3gBpUFy1FxKovpi9B9IkmIn3QVIIjMW7IN72Asd4FyTiB4r4QFDBLNsBCX/tkez7dPFx+s6mUMAquNNXtiKpFdaTIKfjVzeOp7IcgxXQVaPNSSjW6QTI6WsYwDKEgWaPndmYJMV4oiH+O36NxfE7G7KE/JKbkkABnjDJ6WsqTlnWR0mFcPf82oYEaT0+NP77mo5LPpAF5mIcqw1JiJ4owNnXqzgNUPKOKJuQSOzGp63jS5JjmmcDUbSL9XYkCtNRSb6/XsdlgNJxyhYkNXb8DUlAFD5AgZ7irNiKBBraqCR173NDi++xId4nkYI6nGxFoidK8OU5lZAP9vwz2RfFe96FmQXtNbkCiJTyCe8o+6IQAevnMBOjLZJropk8J5Ln4JyfeiRpL72QoMYlm5AQhdW8TS4BJM3zZxIE6TWsXiG9/p6knrJJfTken0h8pcp6KeeN0puIhTMV24IkxQ6ND49llnMJ9QriqwUpL72U80Z5/i0wijHVFiTQ4OtJkpRLGWqWz60ByBENNQGjKOOiLUjElOE9CaAASwiQpO61kwsa+iRY3iTF35MQMdEXA4pngYCaNQJyDCl3q123EwouxEYkL5a9sDDMMk8TYjCFscYm5QPEPyanQAIDy99nl54owjeWFicbB4Hk6pGknqSim2iiZjeHgOY0AtKR5EGSUeHi2GygCXZ0wTZXf/F4bEDSx1rr5hOfXZuQFHqBJoPF4xGhW4d5jFzNQ8qgSbWJJgv2UC9fw7n4DvL8640m8RY+WZBd2YhFbiCE3C3SklAgsVvUrgWanKZAygfI7RFQuyC53BY93s375NJPLemnlCdF7s+QQROzU5Jjz+w3QZ5B7iSQXHSLCdLhVSSXVpGyPPRJwkMYVVW8SY8vHD6sIbnNKCMg4SGC4ipO2BYk2K0i6TZEMkTJBT1X8SZTPRSv2XPrsOZCtxiMjV2SFAxfVQnZZEfCzV4l8GsueY/eJP9MghStKhtvQlLMt0YYh/0apeHozCgjJIJqW1m8zc4dnite/46duKR5b2zsgpQqJBfaZJco1S5/TfL9fGzyikRCctkq+vv9LlLDuEfNjFEGJI8JuEdCKNWVte6PSUjBcIxZnWN9WEHyNMv3azAkF0iS/iUJIVLHTvCSC3WeSa9nkrDkPRyGLL7BKwWSRH+2V08ChlGcpAwwTGzYS1G+n/eCexv0nf4OkjhrE/UfktTdnEqpNkalJGfUY0D5t3oFCRps0D8O5xS1IAn5r0gK5pLobnHmKkc1yZHQZxi/ASNJoli+QllKwqk6J9ZW/83pXIFwEkHohkNXsaohqToYSeKQVL9AQoTyhau9W4B+GUNbjwF/9QjSSuLK1EENhe8YhvnUo69EWUjCNTWJTdr7Hr9IUtSqChgWnBAlWMWO1UhCqTImxg1GpfltOf9jkpwqnSQ24r9MQmjcYNjGCRGmPEuRUO6eVRZ3bpJzNI3yz9+Huk8rEyQht+BF7RWJ3yJhDUaQIwk+ieocUe0MbjFi3LsQj/JpFD9A3qd6KdMxEqRV7GW+/iLJCAbEufF4645qZBnsW8P0+oSPTPVdkyiF4bkR+i0S4ivuEMPH3eNJpfjor06itCcpTaQjkhAP4h/++H7Nz0h4x+P2CQMiYEQVw1Pfsygm61dZ3s8e8jBA9khIprQHiTrXn98ngbE2TlqP9+VoAsSgKbmS6SPHFyjN0UOI4X27kmoV5O48G72LwUw0kVWPQGTOYXLuKKUcuzaYU+3LVpJ01UbvjSMLMCDEfLFA5LD6oi2H1Krg7Qm7/owE6WQJBoRbcOpIy7UoSOuzf3HyXEbWkvB2HBn1+MAoSw5Qdb7m+jPJYPRxvpSE5dW7JBLfMapZjGUk/toaWo5CpPINMRoosoYkpVW0MKtaDiOX/X0qLA+LUEgpsPZJkYx8HXAhSc3iZCUGW15AYk3TJYnFMNah1kR4+HXgJSQF1+swIiPW1UJjDXSemaNHprF2Ib1Hv9M4T1IHjGg5RkxrsrYe1jY+n9m0XUpJQQ/XfBI1+ng0V6qS5aXKB4xYxVu9VkUWO43Cd5efcspjCO3zqnm/4xPN4dUfqvV4M44swdBvYoSgICd2SjHODxnx/8oyl8xTnLGxbYtKJ9vcZO6KlR63jv0Ao3klfNwqPjt8BkvAilmfMWhxdvHt9Zq/aNgTpcqt9HgsfojRfhzcvDeOjXHGxd23V+yl/dDEJs8qDEt/BaPdDWB2WNMt5teZMoIGawZdrfP4b2LcC01NtYnh/dY6rOQi96GpbYVlHrfq9zHeTcxu8Vg5jliMdsPxICHj2wovx5H6uqdAM9sKUxhiXxgNCVJ21TiS2P1hBBLU2Tpc4PFE8esuw5M8dkBnMbC87jXQtaiWZhVgkOuOSUi1DGNPFXfC8WYeIxbpde8BJGx2ySGvHxBAUrye1T8Co+2MdjKrPgajJRFT4wi5Xj+L5Dq+cvoojpbEDTDqD8O4kdS93ZHPw7hP9fFjySGL62dGQ8JvHv9UjMdKS3tzXD860OJd1b3H/wQYAHs5RRSK5q7xAAAAAElFTkSuQmCC";

    
//     this._config        = config;  
//     this._domain_name   = "";
   
//     /***************************************
//      * Must be set at init
//      */
//     this.setDomainName = function( domain )
//     {
//         this._domain_name = domain;
//     }

//     /***************************************
//      * 
//      */
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
//         // If we've already run this once this session, don't keep popping up the warning.
//         // FIXME        
//         if (sessionStorage[ SESSION_KEY_SUPPRESS ]) return;
        
//         if ( this._domain_name ) 
//         {
//             // Iterate through the groups
//             for ( var gi in gag._config.groups ) 
//             {
//                 if ( gag._config.groups[gi].is_enabled ) 
//                 {
//                     if ( parse( gag._config.groups[gi], this._domain_name, null ) ) 
//                     {
//                         break;
//                     }
//                 }
//             }
//         }
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

//         //console.warn("Searching for " + source_url, gag);

//         group_def.domains.forEach(
//                 function ( element )
//                 {
//                     // Does the domain match somewhere in the URL?
//                     if ( source_url == element ||
//                          source_url.endsWith( "." + element ) )
//                     {
//                         // Brand it with the class belonging to the group
//                         //parent_element.classList.add( group_def.css_name );
//                         //console.info("FOUND in " + group_def.name)
                        
//                         // Setup defaults
//                         var popup_config = {
//                                     confirmButtonText: "Okay",
//                                     allowEscapeKey: true,
//                                     html: true
//                         };

//                         if ( group_def.name == GagConfig.GROUP_NAME_QUESTIONABLE_DOMAINS) {
//                             popup_config.title = "QUESTIONABLE CONTENT AHEAD";
//                             popup_config.text = "Content on <b>" + source_url + "</b> is not necessarily false, but should be verified through alternate sources before sharing.";
//                             popup_config.imageSize = "201x107";
//                             popup_config.imageUrl = DATA_URL_IC_QUESTIONABLE;
//                         } 
//                         else if ( group_def.name == GagConfig.GROUP_NAME_SATIRE_DOMAINS) {
//                             popup_config.title = "SATIRE OR FAKE NEWS AHEAD";
//                             popup_config.text = "Content on <b>" + source_url + "</b> is considered satire, or fake news. Don't take it seriously!";
//                             popup_config.imageSize = "201x107";
//                             popup_config.imageUrl = DATA_URL_IC_SATIRE;
//                         }
                        
//                         if (popup_config.title) {
//                             popup_config.text = popup_config.text  + DELAY_MESSAGE;
//                             swal(popup_config);           
//                             sessionStorage[ SESSION_KEY_SUPPRESS ] = "1";
//                         } 
//                         else {
//                             throw "Could not find proper config for this group";
//                         }
                        
//                         has_found_match = true;
//                         return true;
//                     }
//                     return false;
//                 }
//         );

//         return has_found_match;
//     };
// };
