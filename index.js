/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Mark Marijnissen
*/
module.exports = function(content) {
  this.cacheable && this.cacheable();
  if(!this.emitFile) throw new Error("emitFile is required from module system");
  var url = this.resourcePath;
  var root = this.query.substr(1) || this.options.copyContext || this.options.context;
  url = url.substr(url.indexOf(root) + root.length);
  this.emitFile(url, content);
  return "module.exports = __webpack_public_path__ + " + JSON.stringify(url);
};
module.exports.raw = true;