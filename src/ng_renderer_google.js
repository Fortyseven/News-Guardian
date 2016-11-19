"use strict";

var NGRenderer_Google = function() {
    this.name = "Google";
    this.ARTICLE_CLASS = "div.g.pb";
    this.ARTICLE_LINK_SELECTOR = "h3.r a";

    this.REFRESH_DELAY = 1500;

    this.start = function() {
        this.runHighlighting();
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