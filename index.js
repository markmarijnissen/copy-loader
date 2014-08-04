/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Mark Marijnissen
*/
var path = require('path');
module.exports = function(content) {
  this.cacheable && this.cacheable();
  if(!this.emitFile) throw new Error("emitFile is required from module system");
  var url = this.resourcePath;
  var query = !query || query.substr(1,5) == "limit"? false: query.substr(1);
  var root = query || this.options.copyContext || this.options.context;
  url = url.substr(url.indexOf(root) + root.length);
  this.emitFile(url, content);
  return "module.exports = __webpack_public_path__ + " + JSON.stringify(url);
};
module.exports.raw = true;