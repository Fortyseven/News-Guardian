var news_guardian;

// via http://stackoverflow.com/questions/280634/endswith-in-javascript
String.prototype.endsWith = function(suffix) {
    return this.indexOf(suffix, this.length - suffix.length) !== -1;
};


$(document).ready(function() {
    console.info("News Guardian ready.👍");
    news_guardian = new NewsGuardian();
    news_guardian.run();
});