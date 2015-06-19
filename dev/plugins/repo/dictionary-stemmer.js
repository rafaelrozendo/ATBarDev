(function(){

	var pluginName = "dictionary-stemmer";
	var plugin = function(){
		
		$lib = AtKit.lib();
		
		var settings = {
			'serverURL': 'https://spell.services.atbar.org/stemmer/'
		};
		
		// Internationalisation
		AtKit.addLocalisationMap("ar", {
			"dictionary_title" : "&#1575;&#1604;&#1605;&#1593;&#1580;&#1605;",
			"dictionary_stemmer_word": "&#1575;&#1604;&#1603;&#1604;&#1605;&#1577;",
			"dictionary_stemmer_root": "&#1575;&#1604;&#1580;&#1584;&#1585;",
			"dictionary_stemmer_options" : "&#1575;&#1604;&#1605;&#1593;&#1580;&#1605;",
			"dictionary_stemmer_select_type": "&#1575;&#1604;&#1585;&#1580;&#1575;&#1569; &#1575;&#1582;&#1578;&#1610;&#1575;&#1585; &#1606;&#1608;&#1593; &#1575;&#1604;&#1576;&#1581;&#1579; &#1575;&#1604;&#1605;&#1591;&#1604;&#1608;&#1576;",
			"dictionary_stemmer_undefined": "&#1593;&#1584;&#1585;&#1575;&#1611; &#1575;&#1604;&#1576;&#1581;&#1579; &#1604;&#1605; &#1610;&#1585;&#1580;&#1593; &#1571;&#1610; &#1606;&#1578;&#1610;&#1580;&#1577;",
			"dictionary_stemmer_title" : "&#1575;&#1604;&#1605;&#1593;&#1580;&#1605;",
			"dictionary_stemmer_definition" : "&#1578;&#1593;&#1585;&#1610;&#1601; &#1575;&#1604;&#1605;&#1593;&#1580;&#1605; &#1604;",
			"dictionary_stemmer_use": "&#1604;&#1575;&#1587;&#1578;&#1582;&#1583;&#1575;&#1605; &#1575;&#1604;&#1605;&#1593;&#1580;&#1605; &#1581;&#1583;&#1583; &#1603;&#1604;&#1605;&#1577; &#1593;&#1604;&#1609; &#1575;&#1604;&#1589;&#1601;&#1581;&#1577; &#1579;&#1605; &#1575;&#1590;&#1594;&#1591; &#1586;&#1585; &#1575;&#1604;&#1605;&#1593;&#1580;&#1605;"
			
		});
		
		var dictionaryStemmerDialogs = {
			"options": {
				"title": AtKit.localisation("dictionary_stemmer_options"),
				"body": AtKit.localisation("dictionary_stemmer_select_type") + '<br /><button id="sbStartStemmerWordSelection"> ' + AtKit.localisation("dictionary_stemmer_word") + '</button> <button id="sbStartStemmerRootSelection"> ' + AtKit.localisation("dictionary_stemmer_root") + '</button><div id="sbStemmerLoading" style="display:none;text-align: center;"><img src="https://core.atbar.org/resources/img/loading.gif" /></div>'
			}
		};

		// Add functions to AtKit.
		AtKit.addFn('getSelectedStemmerText', function(strip){
			var text = '';
			if(document.selection && document.selection.type != "Control"){
				text = document.selection.createRange().text;
			}
			else if(window.getSelection){
				text = window.getSelection().toString();
			}
			else if(document.getSelection){
				text = document.getSelection();
			}
			
			if(strip === true){
				return String(text).replace(/([\s]+)/ig, '');
			}
			else{
				return String(text);
			}

		});
		
		AtKit.addFn('sbStartStemmerSelection', function(vars){				
			var text = AtKit.get('dictionaryStemmerSelectedData');
			var finalWord = AtKit.get('dictionaryStemmerFinalWord');
			
			$lib.getJSON(settings.serverURL + 'request-fast.php?l=' + AtKit.getLanguage() + '&' + vars.type + '=' + text + '&ls=1&callback=?', function(json){
				message = '';
				height = 'height:300px;';
				
				if(json && json.results != 'none'){
					$lib.each(json, function(arrayId,word){
						if(vars.type == 'w') message += '<tr><td><b>' + word.word + '</b>';
						if(vars.type == 'r') message += '<tr><td><b>' + word.root + '</b>';
						message += '</td><br /><br /><td>' + word.description + '</td></tr><br /><br /><br />';
					});
				}
				else if(json.results == 'none'){
					message = AtKit.localisation("dictionary_stemmer_undefined");
					height = '';
				}
				
				AtKit.message('<h2>' + AtKit.localisation("dictionary_stemmer_definition") + ': ' + finalWord + '</h2><div style="' + height + ' overflow-x:scroll">' + message + '</div>');
				$lib("#at-lnk-dictionary-stemmer").children('img').attr('src', AtKit.getPluginURL() + "images/book_open.png");
				
			});
		});
		
		AtKit.addFn('sbStartStemmerProgress', function(){				
			$lib("#sbStartStemmerWordSelection").remove();
			$lib("#sbStartStemmerRootSelection").remove();
			$lib("#sbStemmerLoading").show();

		});
		
		AtKit.addButton(
			'dictionary-stemmer', 
			AtKit.localisation("dictionary_title"),
			AtKit.getPluginURL() + 'images/book_open.png',
			function(dialogs, functions){
				var text = AtKit.call('getSelectedStemmerText');
				var stored = AtKit.get('dictionaryStemmerSelectedData');
				
				if(text == "" && stored != "") text = stored;
				
				if(text != undefined){
					var finalWord = eval("\"" + text.split(" ").slice(0, 1) + "\";");
					var utf8string = encodeURIComponent(finalWord);
					AtKit.set('dictionaryStemmerSelectedData', utf8string);
					AtKit.set('dictionaryStemmerFinalWord', finalWord);
					AtKit.show(dictionaryStemmerDialogs.options);
				}
				else{
					AtKit.message("<h2>" + AtKit.localisation("dictionary_stemmer_title") + "</h2><p>" + AtKit.localisation("dictionary_stemmer_use") + "</p>");
					$lib("#at-lnk-dictionary-stemmer").children('img').attr('src', AtKit.getPluginURL() + "images/book_open.png");
				}
				
				$lib('#sbStartStemmerWordSelection').click(function(){
					AtKit.call('sbStartStemmerProgress');
					AtKit.call('sbStartStemmerSelection', {'type':'w'});
				});
				
				$lib('#sbStartStemmerRootSelection').click(function(){
					AtKit.call('sbStartStemmerProgress');
					AtKit.call('sbStartStemmerSelection', {'type':'r'});
				});
			},
			null, null
		);

		
		$lib('#at-btn-dictionary-stemmer').mouseover(function(){
			AtKit.set('DictionaryStemmerText', AtKit.call('getSelectedStemmerText'));
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