"use strict";

var NGRenderer_Facebook = function() {
    this.ARTICLE_CLASS = "div[role=\"article\"]";
    this.ARTICLE_LINK_SELECTOR = "a._6kt, a._52c6, div._6m6>a, userContent a";

    this.REFRESH_DELAY = 1500;

    this.start = function() {
        this.runHighlighting();
    }

    /**
     *
     * @param link
     * @return {string}
     */
    function deShimFacebookLink(link) {
        var href_match = link.href.match(/\?u=(.*)&/);
        
        // Occasionally we hit an internal link (usually a 'Note')
        // where there's no domain, just a path
        if (href_match == null || href_match[1] == null) return;        
        
        var matched_url = href_match[1];

        

        if (matched_url) {
            var url = decodeURIComponent(matched_url);

            //var host = url.match( /^((http[s]?|ftp):\/)?\/?([^:\/\s]+)((\/\w+)*\/)([\w\-\.]+[^#?\s]+)(.*)?(#[\w\-]+)?$/gi );
            var host = url.match(/^http[s]?:\/\/([\w\.]+)\//i);

            if (host) {
                return host[1];
            }
        }
        //console.warn( "Could not deshim ", link );
        return null;
    }

    /***************************************
     * Callback to do highlighting on page
     */
    this.runHighlighting = function() {
        var _this = this;
        $(_this.ARTICLE_CLASS).each(
            function() {
                var article = this;

                $(_this.ARTICLE_LINK_SELECTOR, article).each(function() {
                    var href = this.host;
                    if (href != null) {
                        if (href.indexOf("facebook.com") > -1) {
                            href = deShimFacebookLink(this);
                            if (href == null) {
                                return;
                            }
                        }
                        console.log("Scanning for " + href);
                        for (var domain_idx in NewsGuardianConfig.DOMAINS) {
                            if (parse(NewsGuardianConfig.DOMAINS[domain_idx], href, article)) break;
                        }
                    }
                });
            }
        );
        setTimeout(this.runHighlighting.bind(this), this.REFRESH_DELAY);
    };

    /**
     * Scans a string for domains from suppled group definition and
     * applies CSS rule to a given element if found.
     *
     * @param group_def Group definition object
     * @param source_url String to scan for domains
     * @param parent_element Element to add CSS class to if matched
     * @return {boolean} True if there was a match
     */
    var parse = function(domain, source_url, parent_element) {
        var has_found_match = false;

        // Does the domain match?
        if (source_url == domain ||
            source_url.endsWith("." + domain)) {

            // Brand it with the class belonging to the group
            $(parent_element).addClass("newsguardian-highlight");
            has_found_match = true;
            return true;
        }
        return false;
    };
};