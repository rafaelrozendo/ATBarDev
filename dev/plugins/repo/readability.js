(function(){

	var pluginName = "readability";
	var plugin = function(){
	
		// Internationalisation
		AtKit.addLocalisationMap("en", {
			"readability_title" : "Start Readability",
		});

		AtKit.addLocalisationMap("pt", {
			"readability_title" : "Começar a Legibilidade",
		});

		AtKit.addButton(
			'readability', 
			AtKit.localisation("readability_title"),
			AtKit.getPluginURL() + 'images/readability.png',
			function(dialogs, functions){
				window.readabilityToken='';
				AtKit.addScript(document.location.protocol + "//www.readability.com/bookmarklet/read.js");
			}, null, null, {'cssClass':'glyphicon glyphicon-lamp'}
		);

	}

	if(typeof window['AtKit'] == "undefined"){

		window.AtKitLoaded = function(){
			var eventAction = null;
		
			this.subscribe = function(fn) {
				eventAction = fn;
			};
		
			this.fire = function(sender, eventArgs) {
				if (eventAction != null) {
					eventAction(sender, eventArgs);
				}
			};
		}

		window['AtKitLoaded'] = new AtKitLoaded();
		window['AtKitLoaded'].subscribe(function(){ AtKit.registerPlugin(pluginName, plugin); });
	} else {
		AtKit.registerPlugin(pluginName, plugin);
	}

})();
