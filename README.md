# DEPRECATED

Just use `file-loader`: `file?name=[path][name].[ext]&context=./src`. 

Or, to keep a pretty syntax, add this to your `webpack.config.js`:

```javascript
    resolveLoader: { 
        alias: {
            'copy': 'file-loader?name=[path][name].[ext]&context=./src',
        }
    },
```

So you can just do

```javascript
    require("copy!somedir/myfile.html");
```

and `src/somedir/myfile.html` will get copied to `<outputPath>/somedir/myfile.html`.

# copy loader for webpack

## Usage

``` javascript
// in /src/images/index.js

var url = require("copy!./file.png");

// copies file.png to /output/images/file.png
// url = "/images/file.png"
```

copy-loader copies a file from source to your output path without changing directory structure or filename. This is unlike the file-loader, which hashes the file and forgets the directory structure.

The directory structure is copied from the **root directory**, which is determined as follows:

1. From the query-string: e.g. `require("copy?src!./file.png")`
2. From `copyContext` in webpack.config.js
3. From `context` in webpack.config.js (defaults to `process.cwd()`, the current working directory)

**Note:** You don't have to specify the full **path** - the directory name itself is sufficient.

## License

MIT (http://www.opensource.org/licenses/mit-license.php)
