/********************************************************
 * News Guardian main class
 * @constructor
 */
var NewsGuardian = function() {
    this._renderer = null;
    this._config = null;

    /**
     *
     */
    this.rebuildCSSRules = function() {
        // var groups = config.groups;

        var css_name = "newsguardian-highlight";

        //var new_style = "<style>." + css_name + " {transition: background-color 0.75s;  " + css_grad + " !important; box-shadow : 0 0 10px darkred !important;}</style>";
        var new_style = "<style>." + css_name + ", ." +
                        css_name + " span, ." +
                        css_name + " div " +
                        "{background-color: "+this._config.highlightColor+" !important;}</style>";

        $(new_style).appendTo("head");
    };

    this.loadConfig = function(on_loaded) {
        // Use default value color = 'red' and likesColor = true.
        chrome.storage.sync.get({
            highlightColor: "#ffffa0",
            enabledFacebook: true,
            enabledGoogle: true,
            enabledReddit: true,
        }, function(items) {
            on_loaded(items);
            console.log("items", items);
        });
    }

    /********************************************************
     * Begin processing the current page
     */
    this.run = function() {
        this.loadConfig(function(config) {
            this._config = config;
            this.rebuildCSSRules();
            
            var site = document.location.hostname;

            if (config.enabledFacebook && (site.indexOf("facebook.com") > -1)) {
                this._renderer = new NGRenderer_Facebook();
            } else if (config.enabledGoogle && (site.indexOf("google.com") > -1)) {
                this._renderer = new NGRenderer_Google();
            } else if (config.enabledReddit && (site.indexOf("reddit.com") > -1)) {
                this._renderer = new NGRenderer_Reddit();
            } else {
                return;
            }
            console.info("News Guardian ready.👍 (" + NewsGuardianConfig.DOMAINS.length + " sites in index, renderer: " + this._renderer.name + ")");
            this._renderer.start();

        }.bind(this));
    };
};