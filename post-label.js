// ----------------------------------------
// SHOW RECENT LABEL BY Blogger Bondowoso
// ----------------------------------------
// Design : Rudy Bond
// Date   : 02 Maret 2013
// URL    : http://bloggerbondowoso24.blogspot.com/
// ------------------------------------------------

function showrecentposts(json) {
  for (var i = 0; i < numposts; i++) {
    var entry = json.feed.entry[i];
    var posttitle = entry.title.$t;
    var posturl;
    if (i == json.feed.entry.length) break;
    for (var k = 0; k < entry.link.length; k++) {
      if (entry.link[k].rel == 'alternate') {
        posturl = entry.link[k].href;
        break;
      }}
    posttitle = posttitle.link(posturl);
    if (standardstyling) document.write('<li>');
    document.write(posttitle);}
    if (standardstyling) document.write('</li>');
document.write('<div style="font-family:Arial; font-size:85%; margin-top:5px;"><a href="http://bloggerbondowoso24.blogspot.com" target="_blank">Blogger Bondowoso</a></div>');
}