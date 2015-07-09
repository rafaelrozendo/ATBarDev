(function(){

	var pluginName = "dictionary";
	var plugin = function(){
		
		$lib = AtKit.lib();
		
		var settings = {
			'serverURL': 'https://spell.services.atbar.org/dictionary/'
		};
		
		// Internationalisation
		AtKit.addLocalisationMap("en", {
			"dictionary_title" : "Dictionary",
			"dictionary_definition": "Dictionary definition for",
			"dictionary_use": "To use the dictionary select a word on the page and click the dictionary button. If you have already tried this and you are using Internet Explorer, please copy the selected text (CTRL+C) and try again."
		});

		AtKit.addLocalisationMap("ar", {
			"dictionary_title" : "&#1575;&#1604;&#1605;&#1593;&#1580;&#1605;",
			"dictionary_definition" : "&#1578;&#1593;&#1585;&#1610;&#1601; &#1575;&#1604;&#1605;&#1593;&#1580;&#1605; &#1604;",
			"dictionary_use": "&#1604;&#1575;&#1587;&#1578;&#1582;&#1583;&#1575;&#1605; &#1575;&#1604;&#1605;&#1593;&#1580;&#1605; &#1581;&#1583;&#1583; &#1603;&#1604;&#1605;&#1577; &#1593;&#1604;&#1609; &#1575;&#1604;&#1589;&#1601;&#1581;&#1577; &#1579;&#1605; &#1575;&#1590;&#1594;&#1591; &#1586;&#1585; &#1575;&#1604;&#1605;&#1593;&#1580;&#1605;"
		});

		AtKit.addLocalisationMap("pt", {
			"dictionary_title" : "Dicionário",
			"dictionary_definition": "Definição do dicionário para",
			"dictionary_use": "Para usar o dicionário selecione uma palavra na página e clique no botão do dicionário. Se isso não funcionou e você está usando o Internet Explorer, por favor copie o texto selecionado (CTRL+C) e tente novamente."
		});

		// Add functions to AtKit.
		AtKit.addFn('getSelectedText', function(strip){
			var text = '';
		    if (document.selection && document.selection.type != "Control") {
				text = document.selection.createRange().text;
			} else if (window.getSelection && window.getSelection() != ""){
				text = window.getSelection().toString();
			} else if (document.getSelection && document.getSelection() != ""){
				text = document.getSelection();
		    } else if (window.getSelection) {
		    	//if selected text is empty, maybe it is inside an iframe
		    	text = window.getSelection();
				for (var i=0; i<window.frames.length; i++) {
					//for iframes in different domains we might get permission issues
					try {
						var iframe = window.frames[i].document;
						text = iframe.getSelection().toString();
						if (text != "") break
					} catch (err) {
						if (window.clipboardData && window.clipboardData.getData("Text") != "") text = window.clipboardData.getData("Text"); //I.E only
					}
				}
		    } else if (document.getSelection) {
		    	//if selected text is empty, maybe it is inside an iframe
		    	text = document.getSelection();
				for (var i=0; i<window.frames.length; i++) {
					//for iframes in different domains we might get permission issues
					try {
						var iframe = window.frames[i].document;
						text = iframe.getSelection().toString();
						if (text != "") break
					} catch (err) {
						if (window.clipboardData && window.clipboardData.getData("Text") != "") text = window.clipboardData.getData("Text"); //I.E only
					}
				}
		    }
		    if(strip === true){
				return String(text).replace(/([\s]+)/ig, '');
			} else {
				return String(text);
			}

		});
		
		AtKit.addButton(
			'dictionary', 
			AtKit.localisation("dictionary_title"),
			AtKit.getPluginURL() + 'images/book_open.png',
			function(dialogs, functions){
				$lib("#at-modal-dialog").attr('class', 'modal-dialog');
				
				var text = AtKit.call('getSelectedText');
				var stored = AtKit.get('DictionaryText');
				
				if(text == "" && stored != "") text = stored;
				
				var data = "";

				try {
					data = eval("\"" + text.split(" ").slice(0, 1) + "\";");
				} catch (err) {
				}
				
				if(data != ""){
					$lib("#at-lnk-dictionary").children('img').attr('src', AtKit.getPluginURL() + "images/loading.gif");
					
					$lib.getJSON( settings.serverURL + 'xmlhttp/remote.php?titles=' + encodeURI(data.toLowerCase()) + '&v=2&l=' + AtKit.getLanguage() + '&callback=?', function(data){
						ro = data;
						for(var result in ro.query.pages){
							if(result > -1){
								var definition = eval("ro.query.pages[\"" + result + "\"].revisions[0][\"*\"];");
								var title = eval("ro.query.pages[\"" + result + "\"].title;");

							} else {
								var definition = "Unknown word";
								var title = eval("ro.query.pages[\"-1\"].title;");
							}
						}
						
						AtKit.message(AtKit.localisation("dictionary_definition") + " \"" + title , "<div style=\"height:300px; overflow-x:scroll\">" + definition + "</div>");
						$lib("#at-lnk-dictionary").children('img').attr('src', AtKit.getPluginURL() + "images/book_open.png");
					});
				} else {
					AtKit.message(AtKit.localisation("dictionary_title") , AtKit.localisation("dictionary_use"));
					$lib("#at-lnk-dictionary").children('img').attr('src', AtKit.getPluginURL() + "images/book_open.png");
				}
			},
			null, null, {'cssClass':'glyphicon glyphicon-book', 'modal':'true'}
		);

		
		$lib('#at-btn-dictionary').mouseover(function(){
			AtKit.set('DictionaryText', AtKit.call('getSelectedText'));
		});

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
