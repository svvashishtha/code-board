var pageMod = require("sdk/page-mod");
var self = require("sdk/self");

pageMod.PageMod({
	include: "*",
	contentScriptFile :[self.data.url("jquery-1.7.min.js"),self.data.url("myscript.js")]
	});

/*var { ToggleButton } = require('sdk/ui/button/toggle');
var button = ToggleButton({
  id: "my-button",
  label: "my button",
  icon: {
    "16": "./icon-16.png",
    "32": "./icon-32.png",
    "64": "./icon-64.png"
  },
  onChange: handleChange
});*/