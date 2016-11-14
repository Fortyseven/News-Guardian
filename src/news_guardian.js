/********************************************************
 * News Guardian main class
 * @constructor
 */
var NewsGuardian = function() {
    this._renderer = null;

    /**
     *
     */
    this.rebuildCSSRules = function() {
        // var groups = config.groups;

        var css_name = "newsguardian-highlight";

        var css_grad = "background-color: #ffbbbb";
        var new_style = "<style>." + css_name + " {transition: background-color 0.75s;  " + css_grad + " !important; box-shadow : 0 0 10px darkred !important;}</style>";

        $(new_style).appendTo("head");
    };

    /********************************************************
     * Begin processing the current page
     */
    this.run = function() {
        this.rebuildCSSRules();

        var site = document.location.hostname;

        if (site.indexOf("facebook.com") > -1) {
            // if ( !this._config.options.enabledOnFacebook ) return;

            this._renderer = new NGRenderer_Facebook();
        }
        // else if ( site.indexOf( "reddit.com" ) > -1 ) {
        //     if ( !this._config.options.enabledOnReddit ) return;

        //     this._renderer = new NGRenderer_Reddit( this._config );
        // }
        // else {
        //     // do per-page check
        //     if ( !this._config.options.enabledOnIndividualSites ) return;

        //     this._renderer = new GagSingleSite( this._config );
        //     this._renderer.setDomainName( site );
        // }

        this._renderer.start();
    };
};