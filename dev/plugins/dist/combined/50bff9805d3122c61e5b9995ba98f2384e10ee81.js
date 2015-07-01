(function(){

	var pluginName = "css";
	var plugin = function(){

		var settings_css = {
			'baseURL': 'https://styles.services.atbar.org/css/'
		};

		var reset_colour = "#EBEAED";
		
		$lib = AtKit.lib();		

		// Internationalisation
		AtKit.addLocalisationMap("en", {
			"css_title" : "Change Styles",
			"css_changeColour" : "Change colour settings",
			"css_changeToolbar": "Change Toolbar colour",
			"css_changeText": "Change text and link colours",
			"css_changePage": "Change page style",
			"css_changeATbar": "Change ATbar colour",
			"css_changeBackground" : "Background colour",
			"css_set" : "Set",
			"css_black": "Black",
			"css_white": "White",
			"css_grey": "Grey",
			"css_random": "Random",
			"css_reset_defaults" : "Reset to Defaults",
			"css_change_linktext" : "Change text and link colours",
			"css_textcolour": "Text Colour:",
			"css_colour_original": "Original",
			"css_colour_red": "Red",
			"css_colour_blue": "Blue",
			"css_colour_green": "Green",
			"css_colour_yellow": "Yellow",
			"css_colour_orange": "Orange",
			"css_linkColour":"Link Colour:",
			"css_apply": "Apply",
			"css_change_page": "Change Page Styles",
			"css_black_white": "Black on White",
			"css_white_black": "White on Black",
			"css_yellow_black": "Yellow on Black",
			"css_black_yellow": "Black on Yellow",
			"css_white_grey": "White on Grey"
		});

		AtKit.addLocalisationMap("ar", {
			"css_title" : "&#1575;&#1604;&#1578;&#1581;&#1603;&#1605; &#1601;&#1610; &#1605;&#1592;&#1607;&#1585; &#1575;&#1604;&#1589;&#1601;&#1581;&#1577;  &#1575;&#1604;&#1581;&#1575;&#1604;&#1610;&#1577;",
			"css_changeColour": "&#1573;&#1593;&#1583;&#1575;&#1583;&#1575;&#1578; &#1578;&#1594;&#1610;&#1610;&#1585; &#1575;&#1604;&#1571;&#1604;&#1608;&#1575;&#1606;",
			"css_changeToolbar": "&#1578;&#1594;&#1610;&#1610;&#1585; &#1604;&#1608;&#1606; &#1588;&#1585;&#1610;&#1591; &#1575;&#1604;&#1571;&#1583;&#1608;&#1575;&#1578;",
			"css_changeText": "&#1578;&#1594;&#1610;&#1610;&#1585; &#1571;&#1604;&#1608;&#1575;&#1606; &#1575;&#1604;&#1606;&#1589;&#1608;&#1589; &#1608;&#1575;&#1604;&#1585;&#1608;&#1575;&#1576;&#1591;",
			"css_changePage": "&#1578;&#1594;&#1610;&#1610;&#1585; &#1606;&#1605;&#1591; &#1575;&#1604;&#1589;&#1601;&#1581;&#1577;",
			"css_changeATbar": "&#1578;&#1594;&#1610;&#1610;&#1585; &#1604;&#1608;&#1606;  ATbar",
			"css_changeBackground": "&#1604;&#1608;&#1606; &#1575;&#1604;&#1582;&#1604;&#1601;&#1610;&#1577;",
			"css_set":"&#1578;&#1591;&#1576;&#1610;&#1602;",
			"css_black":"&#1571;&#1587;&#1608;&#1583;",
			"css_white": "&#1571;&#1576;&#1610;&#1590;",
			"css_grey":"&#1585;&#1605;&#1575;&#1583;&#1610;",
			"css_random": "&#1593;&#1588;&#1608;&#1575;&#1574;&#1610;",
			"css_reset_defaults":"&#1575;&#1587;&#1578;&#1593;&#1575;&#1583;&#1577; &#1575;&#1604;&#1608;&#1590;&#1593; &#1575;&#1604;&#1571;&#1589;&#1604;&#1610;",
			"css_change_linktext":"&#1578;&#1594;&#1610;&#1610;&#1585; &#1571;&#1604;&#1608;&#1575;&#1606; &#1575;&#1604;&#1582;&#1591;&#1608;&#1591; &#1608;&#1575;&#1604;&#1585;&#1608;&#1575;&#1576;&#1591;",
			"css_textcolour":"&#1604;&#1608;&#1606; &#1575;&#1604;&#1606;&#1589;",
			"css_colour_original": "&#1575;&#1604;&#1571;&#1589;&#1604;&#1610;",
			"css_colour_red":"&#1571;&#1581;&#1605;&#1585;",
			"css_colour_blue":"&#1571;&#1586;&#1585;&#1602;",
			"css_colour_green":"&#1571;&#1582;&#1590;&#1585;",
			"css_colour_yellow": "&#1571;&#1589;&#1601;&#1585;",
			"css_colour_orange": "&#1576;&#1585;&#1578;&#1602;&#1575;&#1604;&#1610;",
			"css_linkColour":"&#1604;&#1608;&#1606; &#1575;&#1604;&#1585;&#1608;&#1575;&#1576;&#1591;",
			"css_apply":"&#1578;&#1591;&#1576;&#1610;&#1602;",
			"css_change_page":"&#1578;&#1594;&#1610;&#1610;&#1585; &#1606;&#1605;&#1591; &#1575;&#1604;&#1589;&#1601;&#1581;&#1577;",
			"css_black_white":"&#1571;&#1587;&#1608;&#1583; &#1593;&#1604;&#1609; &#1582;&#1604;&#1601;&#1610;&#1577; &#1576;&#1610;&#1590;&#1575;&#1569;",
			"css_white_black":"&#1571;&#1576;&#1610;&#1590; &#1593;&#1604;&#1609; &#1582;&#1604;&#1601;&#1610;&#1577; &#1587;&#1608;&#1583;&#1575;&#1569;",
			"css_yellow_black": "&#1571;&#1589;&#1601;&#1585; &#1593;&#1604;&#1609; &#1582;&#1604;&#1601;&#1610;&#1577; &#1587;&#1608;&#1583;&#1575;&#1569;",
			"css_black_yellow":"&#1571;&#1587;&#1608;&#1583; &#1593;&#1604;&#1609; &#1582;&#1604;&#1601;&#1610;&#1577; &#1589;&#1601;&#1585;&#1575;&#1569;",
			"css_white_grey":"&#1571;&#1576;&#1610;&#1590; &#1593;&#1604;&#1609; &#1582;&#1604;&#1601;&#1610;&#1577; &#1585;&#1605;&#1575;&#1583;&#1610;&#1577;"
		});

		AtKit.addLocalisationMap("pt", {
			"css_title" : "Alterar o Estilo",
			"css_changeColour" : "Configurações de mudança de cor",
			"css_changeToolbar": "Alterar a cor da barra de ferramentas",
			"css_changeText": "Alterar a cor do texto e dos links",
			"css_changePage": "Alterar o estilo da página",
			"css_changeATbar": "Alterar a cor da ATbar",
			"css_changeBackground" : "Cor de fundo",
			"css_set" : "Alterar",
			"css_black": "Preto",
			"css_white": "Branco",
			"css_grey": "Cinza",
			"css_random": "Aleatória",
			"css_reset_defaults" : "Restaurar padrões",
			"css_change_linktext" : "Alterar a cor do texto e dos links",
			"css_textcolour": "Cor do texto:",
			"css_colour_original": "Original",
			"css_colour_red": "Vermelho",
			"css_colour_blue": "Azul",
			"css_colour_green": "Verde",
			"css_colour_yellow": "Amarelo",
			"css_colour_orange": "Laranja",
			"css_linkColour":"Cor do link:",
			"css_apply": "Aplicar",
			"css_change_page": "Alterar o estilo da página",
			"css_black_white": "Preto sobre branco",
			"css_white_black": "Branco sobre preto",
			"css_yellow_black": "Amarelo sobre preto",
			"css_black_yellow": "Preto sobre amarelo",
			"css_white_grey": "Branco sobre cinza"
		});

		var colourOptions = '<option value="original">--' + AtKit.localisation('css_colour_original') + '--</option><option value="B80028">' + AtKit.localisation('css_colour_red') + '</option><option value="194E84">' + AtKit.localisation('css_colour_blue') + '</option><option value="60BB22">' + AtKit.localisation('css_colour_green') + '</option><option value="FDB813">' + AtKit.localisation('css_colour_yellow') + '</option><option value="F17022">' + AtKit.localisation('css_colour_orange') + '</option><option value="000000">' + AtKit.localisation('css_black') + '</option><option value="A8B1B8">' + AtKit.localisation('css_grey') + '</option><option value="FFFFFF">' + AtKit.localisation('css_white') + "</option>";

		// CSS button
		var CSSDialogs = {
			"main": {
				"title":AtKit.localisation("css_changeColour"),
				"body":"<button id=\"sbColourChange\"> " + AtKit.localisation("css_changeToolbar") + "</button> <br /><button id=\"sbChangeSiteColours\"> " + AtKit.localisation("css_changeText") + "</button><br /> <button id=\"sbAttachCSSStyle\">" + AtKit.localisation("css_changePage") + "</button>"
			},
			"toolbar": {
				"title":AtKit.localisation("css_changeATbar"),
				"body":"<label for=\"sbbackgroundcolour\">" + AtKit.localisation("css_changeBackground") + "</label><input type=\"text\" name=\"sbbackgroundcolour\" id=\"sbbackgroundcolour\"> <button id=\"sbSetColour\">" + AtKit.localisation("css_set") + "</button> <br /> <p><button onclick=\"document.getElementById('sbbackgroundcolour').value = 'black';\">" + AtKit.localisation("css_black") + "</button> <button onclick=\"document.getElementById('sbbackgroundcolour').value = 'white';\">" + AtKit.localisation("css_white") + "</button> <button onclick=\"document.getElementById('sbbackgroundcolour').value = 'grey';\">" + AtKit.localisation("css_grey") + "</button></p> <br /> <button id=\"sbRandomColour\"> " + AtKit.localisation("css_random") + "</button> <button id=\"sbColourReset\">" + AtKit.localisation("css_reset_defaults") + "</button>"
			},
			"siteColours": {
				"title": AtKit.localisation("css_change_linktext"),
				"body": "<label for=\"sbtextcolour\" style=\"display:block\">" + AtKit.localisation("css_textcolour") + "</label><select id=\"sbtextcolour\" name=\"sbtextcolour\">" + colourOptions + "</select><br /><br /><label for=\"sblinkcolour\" style=\"display:block\">" + AtKit.localisation("css_linkColour") + "</label><select id =\"sblinkcolour\">" + colourOptions + "</select> <br /><br /><button id=\"applyPageColours\">" + AtKit.localisation("css_apply") + "</button>"
			},
			"CSSStyles":{
				"title": AtKit.localisation("css_change_page"),
				"body": "<button id=\"sbApplyCSS-wb\">" + AtKit.localisation("css_black_white") + "</button><br /> <button id=\"sbApplyCSS-wbw\">" + AtKit.localisation("css_white_black") + "</button><br /> <button id=\"sbApplyCSS-yb\">" + AtKit.localisation("css_yellow_black") + "</button><br /> <button id=\"sbApplyCSS-by\">" + AtKit.localisation("css_black_yellow") + "</button><br /> <button id=\"sbApplyCSS-gw\">" + AtKit.localisation("css_white_grey") + "</button>"
			}
		};
		
		CSSFunctions = {
			"changeToolbar": function(){
				$lib("#sbbackgroundcolour").focus();
				
				$lib('#sbRandomColour').click(function(){ AtKit.call('setColour', "rand"); });
				$lib('#sbSetColour').click(function(){ AtKit.call('setColour', $lib("#sbbackgroundcolour").val() ); });
				$lib('#sbColourReset').click(function(){ AtKit.call('setColour', reset_colour); });
			},
			"siteColours": function(){
				$lib('#applyPageColours').click(function(e){ 			
					if( $lib('#sbtextcolour').val() != "undefined" && $lib('#sbtextcolour').val() != "original" ){
						$lib('*').css('color', "#" + $lib('#sbtextcolour').val());
					}
					
					if( $lib('#sblinkcolour').val() != "undefined" && $lib('#sblinkcolour').val() != "original" ){
						$lib('a').css('color', "#" + $lib('#sblinkcolour').val());
					}
				});
				
				$lib('#sblinkcolour').keypress(function(e){ 
					if(e.keyCode == 13){  
						if( $lib('#sbpagebackgroundcolour').val() != "undefined"){
							$lib('body').css('backgroundColor', $lib('#sbpagebackgroundcolour').val());
						}
						
						if( $lib('#sbtextcolour').val() != "undefined" && $lib('#sbtextcolour').val() != "original" ){
							$lib('body').css('color', "#" + $lib('#sbtextcolour').val());
						}
						
						if( $lib('#sblinkcolour').val() != "undefined" && $lib('#sblinkcolour').val() != "original" ){
							$lib('a').css('color', "#" + $lib('#sblinkcolour').val());
						}	
						
						$lib(document).trigger('close.facebox');		
					} 
				
				});
				
				$lib("#sbtextcolour").focus();			
			},
			"CSSStyles": function(){
				$lib('#sbApplyCSS-yb').click(function(e){ 
					$lib(document).trigger('close.facebox');
					$lib('link[rel=stylesheet]').remove();
					AtKit.addStylesheet(settings_css.baseURL + "css/high-yo.css", "highvis-yo");
					if(AtKit.getLanguage() == "ar") AtKit.addStylesheet(settings_css.baseURL + "css/high-rtl.css", "high-rtl-yo");
				});
				
				$lib('#sbApplyCSS-wb').click(function(e){ 
					$lib(document).trigger('close.facebox');
					$lib('link[rel=stylesheet]').remove();
					AtKit.addStylesheet(settings_css.baseURL + "css/high-wb.css", "highvis-wb");
					if(AtKit.getLanguage() == "ar") AtKit.addStylesheet(settings_css.baseURL + "css/high-rtl.css", "high-rtl-wb");
				});
				
				$lib('#sbApplyCSS-wbw').click(function(e){
					$lib(document).trigger('close.facebox');
					$lib('link[rel=stylesheet]').remove();
					AtKit.addStylesheet(settings_css.baseURL + "css/high-bw.css", "highvis-wbw");
					if(AtKit.getLanguage() == "ar") AtKit.addStylesheet(settings_css.baseURL + "css/high-rtl.css", "high-rtl-wbw");
				});
				
				$lib('#sbApplyCSS-by').click(function(e){
					$lib(document).trigger('close.facebox');
					$lib('link[rel=stylesheet]').remove();
					AtKit.addStylesheet(settings_css.baseURL + "css/high-by.css", "highvis-by");
					if(AtKit.getLanguage() == "ar") AtKit.addStylesheet(settings_css.baseURL + "css/high-rtl.css", "high-rtl-by");
				});
				
				$lib('#sbApplyCSS-gw').click(function(e){
					$lib(document).trigger('close.facebox');
					$lib('link[rel=stylesheet]').remove();
					AtKit.addStylesheet(settings_css.baseURL + "css/high-gw.css", "highvis-by");
					if(AtKit.getLanguage() == "ar") AtKit.addStylesheet(settings_css.baseURL + "css/high-rtl.css", "high-rtl-by");
				});	
				
				
				$lib("#sbApplyCSS-wb").focus();
			}
		};
		
		AtKit.addFn('setColour', function(code){
			if(code == "rand"){
				colour = '#'+Math.floor(Math.random()*16777215).toString(16);
				$lib("#sbbackgroundcolour").val(colour);
			} else {
				colour = code;
			}
			$lib('#sbar').css('background-color', colour);
			var currColourInput = document.getElementById("atbar_background_colour");
			if (currColourInput) {
				currColourInput.value = colour;
			} 
		});

		function changeBackgroundColour() {
			var element = document.getElementById('atbar_background_colour');
			if (!element) {
				var input = document.createElement("input");
				input.setAttribute("type", "hidden");
				input.setAttribute("id", "atbar_background_colour");
				input.setAttribute("name", "atbar_background_colour");
				input.setAttribute("value", reset_colour); //the default value
				document.getElementById("sbar").appendChild(input);
				element = input;
			}
			
			var currentColour = element.value;
			if (currentColour && currentColour != "") {
				AtKit.call('setColour', $lib("#atbar_background_colour").val() ); 
			}
		}
		
		AtKit.addButton(
			pluginName,
			AtKit.localisation("css_title"),
			AtKit.getPluginURL() + 'images/palette.png',
			function(dialogs, functions){
				AtKit.show(dialogs.main);
				
				$lib('#sbColourChange').click(function(){
					AtKit.show(dialogs.toolbar);
					functions.changeToolbar();
					changeBackgroundColour();
				});

				$lib('#sbChangeSiteColours').click(function(){
					AtKit.show(dialogs.siteColours);
					functions.siteColours();
					changeBackgroundColour();
				});

				$lib('#sbAttachCSSStyle').click(function(){
					AtKit.show(dialogs.CSSStyles);
					functions.CSSStyles();
					changeBackgroundColour();
				});

				changeBackgroundColour();
			}, 
			CSSDialogs, CSSFunctions
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
				var text = AtKit.call('getSelectedText');
				var stored = AtKit.get('DictionaryText');
				
				if(text == "" && stored != "") text = stored;
				
				var data = eval("\"" + text.split(" ").slice(0, 1) + "\";");
				
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
						
						AtKit.message("<h2>" + AtKit.localisation("dictionary_definition") + " \"" + title + "\"</h2><div style=\"height:300px; overflow-x:scroll\">" + definition + "</div>");
						$lib("#at-lnk-dictionary").children('img').attr('src', AtKit.getPluginURL() + "images/book_open.png");
					});
					
				} else {
					AtKit.message("<h2>" + AtKit.localisation("dictionary_title") + "</h2><p>" + AtKit.localisation("dictionary_use") + "</p>");
					$lib("#at-lnk-dictionary").children('img').attr('src', AtKit.getPluginURL() + "images/book_open.png");
				}
			},
			null, null
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
(function(){

	var pluginName = "fonts";
    var plugin = function(){

		$lib = AtKit.lib();

		// Internationalisation
		AtKit.addLocalisationMap("en", {
			"fonts_dialogTitle" : "Page font settings",
			"fonts_fontFace" : "Font Face",
			"fonts_lineSpacing" : "Line Spacing",
			"fonts_apply": "Apply"
		});

		AtKit.addLocalisationMap("ar", {
			"fonts_dialogTitle" : "&#1575;&#1604;&#1578;&#1581;&#1603;&#1605; &#1601;&#1610; &#1606;&#1608;&#1593; &#1575;&#1604;&#1582;&#1591;",
			"fonts_fontFace" : "&#1606;&#1608;&#1593; &#1575;&#1604;&#1582;&#1591;",
			"fonts_lineSpacing": "&#1575;&#1604;&#1605;&#1587;&#1575;&#1601;&#1575;&#1578; &#1576;&#1610;&#1606; &#1575;&#1604;&#1571;&#1587;&#1591;&#1585;",
			"fonts_apply": "&#1578;&#1591;&#1576;&#1610;&#1602;"
		});

		AtKit.addLocalisationMap("pt", {
			"fonts_dialogTitle" : "Configurações da fonte da página",
			"fonts_fontFace" : "Tipo de fonte",
			"fonts_lineSpacing" : "Espaçamento entre linhas",
			"fonts_apply": "Aplicar"
		});


		// Font settings
		var fontDialogs = {
				'main': '<h1>' + AtKit.localisation('fonts_dialogTitle') + '</h1><label for="sbfontface">' + AtKit.localisation('fonts_fontFace') + ':</label> <select id="sbfontface"><option value="sitespecific">--Site Specific--</option><option value="arial">Arial</option><option value="courier">Courier</option><option value="cursive">Cursive</option><option value="fantasy">Fantasy</option><option value="georgia">Georgia</option><option value="helvetica">Helvetica</option><option value="impact">Impact</option><option value="monaco">Monaco</option><option value="monospace">Monospace</option><option value="sans-serif">Sans-Serif</option><option value="tahoma">Tahoma</option><option value="times new roman">Times New Roman</option><option value="trebuchet ms">Trebuchet MS</option><option value="verdant">Verdana</option></select><br /><br /> <label for="sblinespacing">' + AtKit.localisation('fonts_lineSpacing') + '</label> <input type="text" name="sblinespacing" id="sblinespacing" maxlength="3" size="3" value="100">%<br /><br /><button id="ATApplyFont">' + AtKit.localisation('fonts_apply') + '</a></div>'
		};
		
		AtKit.addFn('changeFont', function(args){
			// Get all HTML tags from AtKit
			var tags = AtKit.getHtmlTags();
			
			if(args.fontFace != "--Site Specific--"){
				// Change font family
				for(var i = 0; i < tags.length; i++){
					$lib(tags[i]).css('font-family', args.fontFace);
				}
				// Change line height
				for(var k = 0; k < tags.length; k++){
					$lib(tags[k]).css('line-height', args.lineHeight + '%');
				}
				
				// Set ATbar line height back to 0%
				$lib('#sbar').find('div').css('line-height', '0%');
			}
			
		})
		
		AtKit.addButton(
			'fontSettings', 
			AtKit.localisation("fonts_dialogTitle"),
			AtKit.getPluginURL() + 'images/font.png',
			function(dialogs, functions){
				AtKit.message(dialogs.main);
				
				$lib('#ATApplyFont').click(function(){
					AtKit.call('changeFont', { 
						'fontFace': $lib('#sbfontface').val(),
						'lineHeight': $lib('#sblinespacing').val()
					});
				});
				
				$lib("#sbfontface").focus();
			},
			fontDialogs, null
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
(function(){

	var pluginName = "ftw";
	var plugin = function(){

		// Internationalisation
		AtKit.addLocalisationMap("en", {
			"ftw_title" : "Create a fix the web report about this page (opens in a popup window)"
		});

		AtKit.addButton(
			pluginName,
			AtKit.localisation("ftw_title"),
			AtKit.getPluginURL() + 'images/FTW.png',
			function(dialogs, functions){
				loc = window.location.toString();
				loc = loc.replace(window.location.hash.toString(), "");
				var url = "http://www.fixtheweb.net/frame/report?url=" + encodeURI(loc);
				
				var load = window.open(url,'','scrollbars=no,menubar=no,height=260,width=370,resizable=no,toolbar=no,location=no,status=no');
				if (window.focus) {load.focus()}
				
				var externalWindow = load.document;
				
				externalWindow.all['edit-field-report-url'].focus();
			}, 
			null, null
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

})();(function(){

	var pluginName = "insipio-tts";
	var plugin = function(){
		$lib = AtKit.lib();

		var settings = {
			"baseURL": "https://core.atbar.org/",
			"speechServicesURL": 'https://speech.services.atbar.org/',
			"ttsChunkSize": 400
		};

		// Internationalisation
		AtKit.addLocalisationMap("en", {
			"tts_title" : "Text to Speech",
			"tts_options": "Text to Speech Options",
			"tts_converting": "Text to Speech conversion is taking place.",
			"tts_timeremaining": "Time Remaining:",
			"tts_pleasewait": "Please wait...",
			"tts_playpause" : "Play / Pause",
			"tts_rewind": "Rewind",
			"tts_stop": "Stop & Close TTS",
			"tts_error": "Error",
			"tts_overloaded": "The server is currently over capacity for text to speech conversions. Please try again later.",
			"tts_problem": "Something went wrong while we were converting this page to speech. Please try again shortly.",
			"tts_servererror": "An error occurred on the server. Please try again later.",
			"tts_seconds": "seconds",
			"tts_explain": "To use the text to speech feature with selected text, please first select the text on this page that you would like to convert. After you have done this, click the Text to Speech button, and select your preferred voice option. If you have already tried this and you are using Internet Explorer, please copy the selected text (CTRL+C) and try again.",
			"tts_select_voice": "Highlight text and select a voice",
			"tts_male": "Male",
			"tts_female": "Female"
		});

		AtKit.addLocalisationMap("ar", {
			"tts_title" : "&#1578;&#1581;&#1608;&#1610;&#1604; &#1575;&#1604;&#1606;&#1589;&#1608;&#1589; &#1575;&#1604;&#1610; &#1605;&#1575;&#1583;&#1577; &#1605;&#1587;&#1605;&#1608;&#1593;&#1577;",
			"tts_options":"&#1582;&#1610;&#1575;&#1585;&#1575;&#1578; &#1606;&#1591;&#1602; &#1575;&#1604;&#1606;&#1589;",
			"tts_converting":"&#1580;&#1575;&#1585;&#1610;&#1577; &#1581;&#1575;&#1604;&#1610;&#1575;&#1611; &#1593;&#1605;&#1604;&#1610;&#1577; &#1606;&#1591;&#1602; &#1575;&#1604;&#1606;&#1589;",
			"tts_timeremaining": "&#1575;&#1604;&#1608;&#1602;&#1578; &#1575;&#1604;&#1605;&#1578;&#1576;&#1602;&#1610;",
			"tts_pleasewait":"&#1575;&#1604;&#1585;&#1580;&#1575;&#1569; &#1575;&#1604;&#1575;&#1606;&#1578;&#1592;&#1575;&#1585;...",
			"tts_playpause":"&#1578;&#1588;&#1594;&#1610;&#1604;/&#1573;&#1610;&#1602;&#1575;&#1601; &#1605;&#1572;&#1602;&#1578;",
			"tts_rewind":"&#1573;&#1593;&#1575;&#1583;&#1577;",
			"tts_stop":"&#1573;&#1610;&#1602;&#1575;&#1601;",
			"tts_error":"&#1582;&#1591;&#1571;",
			"tts_overloaded":"&#1601;&#1575;&#1602;&#1578; &#1593;&#1605;&#1604;&#1610;&#1575;&#1578; &#1606;&#1591;&#1602; &#1575;&#1604;&#1606;&#1589;&#1608;&#1589; &#1587;&#1593;&#1577; &#1575;&#1604;&#1582;&#1575;&#1583;&#1605;. &#1575;&#1604;&#1585;&#1580;&#1575;&#1569; &#1575;&#1604;&#1605;&#1581;&#1575;&#1608;&#1604;&#1577; &#1604;&#1575;&#1581;&#1602;&#1575;&#1611;.",
			"tts_problem":"&#1581;&#1583;&#1579; &#1582;&#1591;&#1571; &#1571;&#1579;&#1606;&#1575;&#1569; &#1593;&#1605;&#1604;&#1610;&#1577; &#1606;&#1591;&#1602; &#1575;&#1604;&#1589;&#1601;&#1581;&#1577;. &#1575;&#1604;&#1585;&#1580;&#1575;&#1569; &#1575;&#1604;&#1605;&#1581;&#1575;&#1608;&#1604;&#1577; &#1576;&#1593;&#1583; &#1602;&#1604;&#1610;&#1604;.",
			"tts_servererror": "&#1581;&#1583;&#1579; &#1582;&#1591;&#1571; &#1601;&#1610; &#1575;&#1604;&#1582;&#1575;&#1583;&#1605;. &#1575;&#1604;&#1585;&#1580;&#1575;&#1569; &#1575;&#1604;&#1605;&#1581;&#1575;&#1608;&#1604;&#1577; &#1604;&#1575;&#1581;&#1602;&#1575;&#1611;.",
			"tts_seconds":"&#1579;&#1608;&#1575;&#1606;&#1613;",
			"tts_explain":"&#1604;&#1575;&#1587;&#1578;&#1582;&#1583;&#1575;&#1605; &#1582;&#1575;&#1589;&#1610;&#1577; &#1606;&#1591;&#1602; &#1575;&#1604;&#1606;&#1589;&#1548; &#1575;&#1604;&#1585;&#1580;&#1575;&#1569; &#1578;&#1581;&#1583;&#1610;&#1583; &#1575;&#1604;&#1606;&#1589; &#1575;&#1604;&#1605;&#1585;&#1575;&#1583; &#1578;&#1581;&#1608;&#1610;&#1604;&#1607; &#1593;&#1604;&#1609; &#1607;&#1584;&#1607; &#1575;&#1604;&#1589;&#1601;&#1581;&#1577;. &#1576;&#1593;&#1583; &#1584;&#1604;&#1603; &#1575;&#1590;&#1594;&#1591; &#1586;&#1585; &#1606;&#1591;&#1602; &#1575;&#1604;&#1606;&#1589;&#1548; &#1608;&#1575;&#1590;&#1594;&#1591; &#1582;&#1610;&#1575;&#1585; &quot;&#1575;&#1604;&#1606;&#1589; &#1575;&#1604;&#1605;&#1581;&#1583;&#1583;&quot;.",
			"tts_select_voice": "&#1602;&#1605; &#1576;&#1578;&#1592;&#1604;&#1610;&#1604; &#1575;&#1604;&#1606;&#1589; &#1608;&#1575;&#1582;&#1578;&#1610;&#1575;&#1585; &#1575;&#1604;&#1589;&#1608;&#1578;",
			"tts_male": "&#1605;&#1584;&#1603;&#1585;",
			"tts_female": "&#1605;&#1572;&#1606;&#1579;"
		});

		AtKit.addLocalisationMap("pt", {
			"tts_title" : "Texto a voz",
			"tts_options": "Opções do Texto a voz",
			"tts_converting": "Convertendo texto a voz.",
			"tts_timeremaining": "Tempo restante:",
			"tts_pleasewait": "Por favor espere...",
			"tts_playpause" : "Reproduzir / Pausar",
			"tts_rewind": "Tocar novamente",
			"tts_stop": "Parar & Fechar TTS",
			"tts_error": "Erro",
			"tts_overloaded": "O servidor está sobrecarregado no momento para conversões texto a voz. Por favor tente novamente mais tarde.",
			"tts_problem": "Algo deu errado enquanto convertíamos essa página para voz. Por favor, tente novamente em instantes.",
			"tts_servererror": "Ocorreu um erro no servidor. Por favor tente novamente mais tarde.",
			"tts_seconds": "segundos",
			"tts_explain": "Para usar o recurso texto a voz com o texto selecionado, por favor, primeiro selecione o texto nesta página que você gostaria de converter. Feito isso, clique no botão texto a voz e selecione a opção 'texto selecionado'. Se isso não funcionou e você está usando Internet Explorer, copie o texto selecionado (CTRL+C) e tente novamente.",
			"tts_select_voice": "Destaque o texto e selecione uma voz",
			"tts_male": "Masculino",
			"tts_female": "Feminino"
		});

		// Text to speech
		var TTSDialogs = {
			"options": {
				"title": AtKit.localisation("tts_options"),
				"body": AtKit.localisation("tts_select_voice") + " <br /><button id=\"sbStartInsipioTTSSelectionMale\"> " + AtKit.localisation("tts_male") + "</button> <button id=\"sbStartInsipioTTSSelectionFemale\"> " + AtKit.localisation("tts_female") + "</button>"
			},
			"starting": {
				"title": AtKit.localisation("tts_title"),
				"body": "<center>" + AtKit.localisation("tts_converting") + " <br /><img src='" + AtKit.getPluginURL() + "images/loadingbig.gif' /><br />"+ AtKit.localisation("tts_timeremaining") +" <div id='sbttstimeremaining'>...</div><br />" + AtKit.localisation("tts_pleasewait") + " </center>"
			}
		};
		var TTSFunctions = {};
		
		//This variable contains the selected text. it is global because on IPhones nad IPads selection is removed after clicking the plug-in button, so we need to preserve the selected text
		var selectedData = "";
		var selectedDataIOS = "";
		/*var TTSExtendedObject = {
			clickEnabled: true,
			positition: "",
			playingItem: "",
			"TTSButtons": {
				'ttsPlay': {
					'tooltip': AtKit.localisation("tts_playpause"),
					'icon': AtKit.getPluginURL() + "images/control-pause.png",
					'fn': function(){
						var targetObj = ($lib.browser == "msie") ? swfobject.getObjectById(AtKit.get('ATAudioPlayerID')) : window.document['audioe'];
						targetObj.sendEvent('play');
					}
				},
				'ttsRewind': {
					'tooltip': AtKit.localisation("tts_rewind"),
					'icon': AtKit.getPluginURL() + "images/control-stop-180.png",
					'fn': function(){
						var scrubAmount = 2;
						var currentPosition = AtKit.get("TTS_position");
						var newPosition = (currentPosition - scrubAmount);
						if(newPosition < 0) newPosition = 0;

						var targetObj = ($lib.browser == "msie") ? swfobject.getObjectById(AtKit.get('ATAudioPlayerID')) : window.document['audioe'];
						targetObj.sendEvent('seek', newPosition);
					}
				},
				'ttsStop': {
					'tooltip': AtKit.localisation("tts_stop"),
					'icon': AtKit.getPluginURL() + "images/control-stop-square.png",
					'fn': function(){
						var targetObj = ($lib.browser == "msie") ? swfobject.getObjectById(AtKit.get('ATAudioPlayerID')) : window.document['audioe'];
						targetObj.sendEvent('stop');

						AtKit.call('TTSRemoveControlBox');
					}
				}
			}
		};*/
		

		// Add functions to AtKit.
		AtKit.addFn('getSelectedTextInsipioTTS', function(strip){
			
			var text = AtKit.call('getSelectedTextInElementInsipio');
			
			if(text == null){
				var text = '';
			    if (document.selection && document.selection.type != "Control" && document.selection.createRange().text != "") {
					text = document.selection.createRange().text;
				} else if (window.getSelection && window.getSelection().toString() != ""){
					text = window.getSelection().toString();
				} else if (document.getSelection){
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
		    }
		    
		    if(strip === true){
				return String(text).replace(/([\s]+)/ig, '');
			} else {
				return String(text);
			}

		});
		
		AtKit.addFn('getSelectedTextInElementInsipio', function(){
			var e = document.activeElement;
			return (
				/* mozilla / dom 3.0 */
				('selectionStart' in e && function() {
					var l = e.selectionEnd - e.selectionStart;
					return e.value.substr(e.selectionStart, l);
				}) ||

				/* exploder */
				(document.selection && function() {
					var nn = $lib(e).prop('nodeName');
					if(nn != "input" && nn != "textarea") return null;
					
					e.focus();

					var r = document.selection.createRange();
					if (r === null) {
						return null;
					}

					var re = e.createTextRange();
					var rc = re.duplicate();
					re.moveToBookmark(r.getBookmark());
					rc.setEndPoint('EndToStart', re);
					return r.text;
				}) ||

				/* browser not supported */
				function() { return null; }

			)();
		});
		
		AtKit.addFn('b64', function(input){
			// + == _
			// / == -
			var bkeys = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-=";
			var output = "";
			var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
			var i = 0;
		
			input = AtKit.call('utf8_encode', input);
		
			while (i < input.length) {
		
				chr1 = input.charCodeAt(i++);
				chr2 = input.charCodeAt(i++);
				chr3 = input.charCodeAt(i++);
		
				enc1 = chr1 >> 2;
				enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
				enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
				enc4 = chr3 & 63;
		
				if (isNaN(chr2)) {
					enc3 = enc4 = 64;
				} else if (isNaN(chr3)) {
					enc4 = 64;
				}
		
				output = output +
				bkeys.charAt(enc1) + bkeys.charAt(enc2) +
				bkeys.charAt(enc3) + bkeys.charAt(enc4);
		
			}
		
			return output;
		});
		
		AtKit.addFn('utf8_encode', function(string){
			string = string.replace(/\r\n/g,"\n");
			var utftext = "";
		
			for (var n = 0; n < string.length; n++) {
		
				var c = string.charCodeAt(n);
		
				if (c < 128) {
					utftext += String.fromCharCode(c);
				} else if((c > 127) && (c < 2048)) {
					utftext += String.fromCharCode((c >> 6) | 192);
					utftext += String.fromCharCode((c & 63) | 128);
				} else {
					utftext += String.fromCharCode((c >> 12) | 224);
					utftext += String.fromCharCode(((c >> 6) & 63) | 128);
					utftext += String.fromCharCode((c & 63) | 128);
				}
		
			}
		
			return utftext;
		});
		
		AtKit.addFn('sendInsipioTTSChunk', function(args){
			if(args.block == 1){
				var start = 0;
			} else {
				var start = (settings.ttsChunkSize * args.block);
			}
			
			if( (start + settings.ttsChunkSize) > args.fullData.length ){
				var endPoint = args.fullData.length;
			} else {
				var endPoint = (start + settings.ttsChunkSize);
			}
			
			var payload = args.fullData.substring(start, endPoint);
					
				
			var urlString = settings.speechServicesURL + 'insipio-tts/request.php?rt=tts&v=2&i=1&l=' + AtKit.getLanguage() +  '&voice=' + args.voice + '&id=' + args.reqID + '&data=' + payload + "&chunkData=" + args.totalBlocks + "-" + args.block;
			if( args.block == args.totalBlocks-1 ){
				urlString += "&page=" + encodeURIComponent(window.location);
			}
			
			urlString += "&callback=?";
			
			$lib.getJSON(urlString, function(RO){
				$lib("#compactStatus").html(args.block + " / " + args.totalBlocks);
				
				var errorTitle = "<h2>" + AtKit.localisation("tts_error") + "</h2>";
				if(args.block == args.totalBlocks){
					// Finished request..
					AtKit.show(TTSDialogs.starting);
					if(RO.status == "encoding"){
						AtKit.call('countdownInsipioTTS', { 'timeLeft':(RO.est_completion / RO.chunks), 'id': RO.ID });
					} else if(RO.status == "failure" && RO.reason == "overcapacity"){
						AtKit.message(errorTitle + "<p>" + AtKit.localisation("tts_overloaded") + "</p>");
					} else if(RO.status == "failure" && RO.message === "") {
						AtKit.message(errorTitle + "<p>" + AtKit.localisation("tts_problem") + "</p>");
					} else {
						AtKit.message(errorTitle + "<p>" + RO.reason + " " + RO.data.message + "</p>");
					}

				} else {
					// Send the next block.
					if(RO.data.message == "ChunkSaved"){
						AtKit.call('sendInsipioTTSChunk', { 'fullData':args.fullData, 'block':(args.block + 1), 'totalBlocks':args.totalBlocks, 'reqID':args.reqID });
					} else {
						AtKit.message(errorTitle + "<p>" + AtKit.localisation("tts_servererror") + "</p>");
					}
				}
				
			});
		
		});
		
		AtKit.addFn('countdownInsipioTTS', function(arg){
			if(isNaN(arg.timeLeft)){
				AtKit.message("<h2>" + AtKit.localisation("tts_error") + "</h2> <p>" + AtKit.localisation("tts_problem") + "</p>");
			} else {
				if(arg.timeLeft == 0){

					// Play audio
					var audioContainer = "audioo";
					
					if($lib.browser != "msie"){
						if(!!(a.canPlayType && a.canPlayType('audio/mpeg').replace(/no/, '')))
						{//For HTML5
							chunkUrls = [];
							$lib.getJSON(settings.speechServicesURL + "cache/request.php?id=" + arg.id + "&callback=?").done(function(jsonDocument){
								index = 0;
								if($lib.isArray(jsonDocument.trackList.track))//Store the audio urls to be played later by the audio html5 element
									$lib.each(jsonDocument.trackList.track, function(key, value){
										audioURL = value.location;
										chunkUrls.push(audioURL);
									});
								else
									chunkUrls.push(jsonDocument.trackList.track.location);
								AtKit.call('playChunksHtml5', {'chunkUrls': chunkUrls, 'index': 0});
							}).fail(function() {console.log( "error" );});//Error in JSON
						}
						else
						{
							$lib('body').append( $lib("<div id=\"flashContent\"><OBJECT classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" codebase=\"http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0\" width=\"1\" height=\"1\" id=\"audioe\"> <PARAM name=movie value=\"" + settings.speechServicesURL + "lib/player/player-licensed.swf\"></PARAM> <PARAM name=flashvars value=\"file=" + settings.speechServicesURL + "cache/" + arg.id + ".xml&autostart=true&playlist=bottom&repeat=list&playerready=playerReady&id=" + audioContainer + "\"><PARAM name=allowscriptaccess value=\"always\" /><embed type=\"application/x-shockwave-flash\" pluginspage=\"http://www.macromedia.com/go/getflashplayer\" src=\"" + settings.speechServicesURL + "lib/player/player-licensed.swf\" width=\"1\" height=\"1\" allowscriptaccess=\"always\" allowfullscreen=\"false\" flashvars=\"file=" + settings.speechServicesURL + "cache/" + arg.id + ".xml&autostart=true&playlist=bottom&repeat=list&playerready=playerReady\" name=\"audioe\" /> </OBJECT></div>") );
					
							AtKit.call('setupInsipioTTSListeners');
						}
					} else {
						$lib("<div />", {'id': 'flashContent' }).prependTo("body");
						

						var params = {
						  flashvars: "file=" + settings.speechServicesURL + "cache/" + arg.id + ".xml&autostart=true&playlist=bottom&repeat=list&playerready=playerReady&id=" + audioContainer,
						  allowscriptaccess: "always"
						};
						var attributes = {
						  id: audioContainer,
						  name: audioContainer
						};
						
						swfobject.embedSWF(settings.speechServicesURL + "lib/player/player-licensed.swf", "flashContent", "1", "1", "9.0.0","expressInstall.swf", false, params, attributes, function(){
							AtKit.call('setupInsipioTTSListeners');
						});
					
					}

					AtKit.hideDialog();
					
				} else {
					$lib('#sbttstimeremaining').html( arg.timeLeft + " " + AtKit.localisation("tts_seconds"));
					window.setTimeout(function(){ AtKit.call('countdownInsipioTTS', { 'timeLeft':(arg.timeLeft - 1), 'id':arg.id }) }, 1000);
				}
			}
		});
		
		AtKit.addFn('setupInsipioTTSListeners', function(args){
			if(AtKit.get('TTS_Listeners_setup') == true) return;

			window.playerReady = function(obj) {
				
				AtKit.set('ATAudioPlayerID', obj.id);
				
				/*
				for(b in TTSExtendedObject.TTSButtons){
					var obj = TTSExtendedObject.TTSButtons[b];
					AtKit.addButton(b, obj.tooltip, obj.icon, obj.fn);
				}*/
				
				// Set values.
				AtKit.set("TTS_position", 0);
				AtKit.set("TTS_playingItem", 0);
				
				// Add page listeners
				var playerObj = swfobject.getObjectById(obj.id);
				
				if($lib.browser != "msie"){
					playerObj = window.document["audioe"];
				}

				playerObj.addModelListener("STATE", "ATBarAudioStateListener");
				playerObj.addModelListener("TIME", "ATBarAudioTimeMonitor");
				playerObj.addControllerListener("ITEM", "ATBarAudioItemMonitor");
				
			};

			window.ATBarAudioTimeMonitor = function(obj){
				AtKit.set('TTS_position', obj.position);
			}

			window.ATBarAudioItemMonitor = function(obj){
				AtKit.set('TTS_playingItem', obj.index);
			}

			window.ATBarAudioStateListener = function(obj) {
				var state = obj.newstate;

				var playerObj = swfobject.getObjectById(obj.id);
				
				if($lib.browser != "msie"){
					playerObj = window.document["audioe"];
				}
				
				if(state == "COMPLETED" && (AtKit.get('TTS_playingItem') + 1) == playerObj.getPlaylist().length){
					// Completed, remove controlbox and reset everything back to normal.
					AtKit.call('TTSRemoveControlBox');
				}

				if(state == "IDLE" || state == "PAUSED") {
					$lib('#at-lnk-ttsPlay').children('img').attr('src', AtKit.getPluginURL() + "images/control.png");
					$lib('#at-btn-tts').children('img').attr('src', AtKit.getPluginURL() + "images/sound.png").css('padding-top', '6px');
				} else {
					if(AtKit.get('TTS_clickEnabled') == false){
						$lib('#at-lnk-ttsPlay').children('img').attr('src', AtKit.getPluginURL() + "images/control-pause.png");
						$lib('#at-btn-tts').children('img').attr('src', AtKit.getPluginURL() + "images/loading.gif").css('padding-top', '8px');
					}
				}
			}
		
			AtKit.set('TTS_Listeners_setup', true);
		});
		
		AtKit.addFn('TTSRemoveControlBox', function(){
			AtKit.removeButton('ttsPlay');
			AtKit.removeButton('ttsRewind');
			AtKit.removeButton('ttsStop');

	      	$lib("#flashContent").remove();
	      	$lib('#at-lnk-tts').children('img').attr('src', AtKit.getPluginURL() + "images/sound.png").css('padding-top', '6px');
	      	AtKit.set('TTS_clickEnabled', true);
		});
		
		AtKit.addFn('sbStartInsipioTTSSelection', function(args){
						
			AtKit.set('TTS_clickEnabled', false);

			var selectedData = AtKit.get('TTSselectedData');
			if(selectedData == "" || typeof selectedData == "undefined") selectedData = AtKit.call('getSelectedTextInsipioTTS');
			
			if(typeof selectedData != "undefined" && selectedData !== ""){
		
			this.clickEnabled = false;
				
				// Send the data in chunks, as chances are we cant get it all into one request.
				var transmitData = AtKit.call('b64', selectedData );
				
				var chunks = Math.ceil(transmitData.length / settings.ttsChunkSize);
				
				if(chunks > 0){
					var reqID = Math.floor(Math.random() * 5001);
					
					AtKit.message( "<h2>" + AtKit.localisation("tts_pleasewait") + "</h2><p>" + AtKit.localisation("tts_converting") + "...<br /><div id='compactStatus'>0 / " + chunks + "</div></p>" );
					
					AtKit.call('sendInsipioTTSChunk', { 'fullData':transmitData, 'block':1, 'totalBlocks':chunks, 'reqID':reqID, 'voice':args.voice });
				} else {
					AtKit.message( "<h2>" + AtKit.localisation("tts_error") + "</h2><p>" + AtKit.localisation("tts_problem") + "</p>" );
				}
				
			} else {
				AtKit.message("<h2>" + AtKit.localisation("tts_title") + "</h2><p>" + AtKit.localisation("tts_explain") + "</p>");
			}
		
		});
		
		AtKit.addFn('playChunksHtml5', function(args){//Recursive function to play the mp3 files using the audio html5 element
			chunkUrls = args['chunkUrls'];
			index = args['index'];
			
			if(chunkUrls[index])
			{
				audio.src = chunkUrls[index];
				audio.load();
				audio.play();
				if(chunkUrls[index + 1])
				{
					audio.addEventListener('ended',function(){
						AtKit.call('playChunksHtml5', {'chunkUrls': chunkUrls, 'index': index + 1});
					});
				}
			}
		});


		AtKit.set('TTS_clickEnabled', true);
		
		$lib(document).delegate('#at-btn-tts', 'mousemove, focus, mouseover', function(){
			var text = AtKit.call('getSelectedTextInsipioTTS');
			if(typeof text == "undefined" || text == "") return;		
			AtKit.set('TTSselectedData', text);
		});

		AtKit.addButton(
			'tts',
			AtKit.localisation("tts_title"),
			AtKit.getPluginURL() + 'images/sound.png',
			function(dialogs, functions){
				if(AtKit.set('TTS_clickEnabled') == false) return;
				
				var text = AtKit.call('getSelectedTextInsipioTTS');

				if(AtKit.get('TTSselectedData') == "" && text != "") AtKit.set('TTSselectedData', text);


				AtKit.show(dialogs.options);
				AtKit.set('TTS_Listeners_setup', false);

				AtKit.addScript(settings.baseURL + 'resources/js/swfobject.js', null);
				
				
				$lib('#sbStartInsipioTTSSelectionMale').on('click touchend', function(){
					//Perform a fake start and pause playback. This is to solve the ios autoplay restrictions
					a = document.createElement('audio');
					audio = new Audio();
					audio.play();
					audio.pause();
					
					AtKit.call('sbStartInsipioTTSSelection', { 'voice':'male' });
				});
				
				$lib('#sbStartInsipioTTSSelectionFemale').on('click touchend', function(){
					//Perform a fake start and pause playback. This is to solve the ios autoplay restrictions
					a = document.createElement('audio');
					audio = new Audio();
					audio.play();
					audio.pause();
					
					AtKit.call('sbStartInsipioTTSSelection', { 'voice':'female' });
				});			
			},
			TTSDialogs, TTSFunctions//, TTSExtendedObject
		);
		
		if(navigator.userAgent.match(/(iPhone|iPod|iPad)/i))
		{
			setInterval(function(e){
				selectedDataIOS = AtKit.call('getSelectedTextInsipioTTS');
			}, 100);
		}
		if($lib('body').on)
		{
			$lib('body').on('click touchend', 'a#at-lnk-tts', function(e){
				selectedData = AtKit.call('getSelectedTextInsipioTTS');
				if(navigator.userAgent.match(/(iPhone|iPod|iPad)/i))
				{
					selectedData = selectedDataIOS;
				}
			});
		}
		else if($lib('body').live)
		{
			$lib('body').live('click touchend', 'a#at-lnk-tts', function(e){
				selectedData = AtKit.call('getSelectedTextInsipioTTS');
				if(navigator.userAgent.match(/(iPhone|iPod|iPad)/i))
				{
					selectedData = selectedDataIOS;
				}
			});
		}
	};

	if(typeof window['AtKit'] == "undefined"){

		window.AtKitLoaded = function(){
			var eventAction = null;
		
			this.subscribe = function(fn) {
				eventAction = fn;
			};
		
			this.fire = function(sender, eventArgs) {
				if (eventAction !== null) {
					eventAction(sender, eventArgs);
				}
			};
		};

		window['AtKitLoaded'] = new AtKitLoaded();
		window['AtKitLoaded'].subscribe(function(){ AtKit.registerPlugin(pluginName, plugin); });
	} else {
		AtKit.registerPlugin(pluginName, plugin);
	}

})();
(function(){

	var pluginName = "overlay";
	var plugin = function(){
		
		$lib = AtKit.lib();
		
		var overlays = {
			"yellow": "BABA70",
			"red": "FF6699",
			"blue": "3399CC",
			"green": "00CC66"
		}
		
		var overlayRunning = 0;
		
		var overlaysToggle = {
			"yellow": 0,
			"red": 0,
			"blue": 0,
			"green": 0
		};
		
		// Internationalisation
		AtKit.addLocalisationMap("en", {
			"overlay_title" : "Colour overlay",
			"overlay_title_yellow" : "yellow",
			"overlay_title_red" : "red",
			"overlay_title_blue" : "blue",
			"overlay_title_green" : "green",
			"overlay_remove" : "Remove overlay"
		});
		AtKit.addLocalisationMap("ar", {
			"overlay_title" : "&#1604;&#1608;&#1606;&#160;&#1575;&#1604;&#1588;&#1575;&#1588;&#1577;",
			"overlay_title_yellow" : "&#1571;&#1589;&#1601;&#1585;",
			"overlay_title_red" : "&#1571;&#1581;&#1605;&#1585;",
			"overlay_title_blue" : "&#1571;&#1586;&#1585;&#1602;",
			"overlay_title_green" : "&#1571;&#1582;&#1590;&#1585;",
			"overlay_remove" : "Remove overlay"
		});

		AtKit.addLocalisationMap("pt", {
			"overlay_title" : "Mudar a cor do overlay para",
			"overlay_title_yellow" : "amarelo",
			"overlay_title_red" : "vermelho",
			"overlay_title_blue" : "azul",
			"overlay_title_green" : "verde",
			"overlay_remove" : "Remover overlay"
		});		
		
		AtKit.addFn('addOverlay', function(args){
			var overlay = '<div class="at-overlay" style="background-color:#' + args.colour + '; opacity:0.4; position:absolute; top:0; left:0; height:100%; width:100%; z-index:2147483640; opacity:0.3; filter: alpha(opacity = 30); pointer-events: none; position:fixed"></div>';
			$lib('body').prepend(overlay);
			AtKit.call('addOvelayClose', {});
		});
		
		AtKit.addFn('removeOverlay', function(){
			$lib('.at-overlay').remove();
			$lib('.at-overlay-close').remove();
			overlaysToggle.yellow = 0;
			overlaysToggle.red = 0;
			overlaysToggle.blue = 0;
			overlaysToggle.green = 0;
		});
		
		AtKit.addFn('addOvelayClose', function(){
			var direction = (AtKit.getLanguage() == 'ar') ? 'right' : 'left';
			var overlayClose = '<div class="at-overlay-close" style="position:absolute; ' + direction + ':96%; top:48px; z-index:9999999999; position:fixed""><a href="#" onclick="AtKit.call(\'removeOverlay\', {});"><img src="' + AtKit.getResourceURL() + '/resources/img/facebox-close.png" alt="' + AtKit.localisation("overlay_remove") + '" title="' + AtKit.localisation("overlay_remove") + '"/></a></div>';
			$lib('body').prepend(overlayClose);	
		});
		
		AtKit.addFn('toggleOverlayYellow', function(){
			if(overlaysToggle.yellow) AtKit.call('removeOverlay', {});
			else{
				AtKit.call('removeOverlay', {});
				AtKit.call('addOverlay', { 'colour':overlays.yellow });
				overlaysToggle.yellow = 1;
			}
		});
		
		AtKit.addFn('toggleOverlayRed', function(){
			if(overlaysToggle.red) AtKit.call('removeOverlay', {});
			else{
				AtKit.call('removeOverlay', {});
				AtKit.call('addOverlay', { 'colour':overlays.red });
				overlaysToggle.red = 1;
			}
		});
		
		AtKit.addFn('toggleOverlayBlue', function(){
			if(overlaysToggle.blue)	AtKit.call('removeOverlay', {});
			else{
				AtKit.call('removeOverlay', {});
				AtKit.call('addOverlay', { 'colour':overlays.blue });
				overlaysToggle.blue = 1;
			}
		});
		
		AtKit.addFn('toggleOverlayGreen', function(){
			if(overlaysToggle.green) AtKit.call('removeOverlay', {});
			else{
				AtKit.call('removeOverlay', {});
				AtKit.call('addOverlay', { 'colour':overlays.green });
				overlaysToggle.green = 1;
			}
		});
		
		AtKit.addFn('overlayRemoveEverything', function(){
			AtKit.removeSeparator('overlayStart');
			AtKit.removeButton('overlayYellow');
			AtKit.removeButton('overlayRed');
			AtKit.removeButton('overlayBlue');
			AtKit.removeButton('overlayGreen');
		});
						
		AtKit.addButton(
			'overlay', 
			AtKit.localisation("overlay_title"),
			AtKit.getPluginURL() + 'images/overlay.png',
			function(dialogs, functions){
				
				AtKit.call('removeOverlay');
				AtKit.call('overlayRemoveEverything');
				if(!overlayRunning){
					overlayRunning = 1;
					
					AtKit.addSeparator('overlayStart');
					
					AtKit.addButton('overlayYellow', 
						AtKit.localisation("overlay_title") + " " + AtKit.localisation("overlay_title_yellow"),
						AtKit.getPluginURL() + 'images/overlay-yellow.png', 
						function(dialogs, functions){
							AtKit.call('toggleOverlayYellow', {});
						});
					
					AtKit.addButton('overlayRed', 
						AtKit.localisation("overlay_title") + " " + AtKit.localisation("overlay_title_red"),
						AtKit.getPluginURL() + 'images/overlay-red.png', 
						function(dialogs, functions){
							AtKit.call('toggleOverlayRed', {});
						});
					
					AtKit.addButton('overlayBlue', 
						AtKit.localisation("overlay_title") + " " + AtKit.localisation("overlay_title_blue"),
						AtKit.getPluginURL() + 'images/overlay-blue.png', 
						function(dialogs, functions){
							AtKit.call('toggleOverlayBlue', {});
						});
					
					AtKit.addButton('overlayGreen', 
						AtKit.localisation("overlay_title") + " " + AtKit.localisation("overlay_title_green"),
						AtKit.getPluginURL() + 'images/overlay-green.png', 
						function(dialogs, functions){
							AtKit.call('toggleOverlayGreen', {});
						});
				}
				else{
					overlayRunning = 0;
					AtKit.call('overlayRemoveEverything');
				}
				
			},
			null, null
		);
	};

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
			}
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
(function(){

	var pluginName = "resize";
	var plugin = function(){

		$lib = AtKit.lib();

		// Internationalisation
		AtKit.addLocalisationMap("en", {
			"resize_up" : "Increase Font Size",
			"resize_down" : "Decrease Font Size"
		});

		AtKit.addLocalisationMap("ar", {
			"resize_up" : "&#1578;&#1603;&#1576;&#1610;&#1585; &#1581;&#1580;&#1605; &#1575;&#1604;&#1582;&#1591;",
			"resize_down" : "&#1578;&#1589;&#1594;&#1610;&#1585; &#1581;&#1580;&#1605; &#1575;&#1604;&#1582;&#1591;"
		});

		AtKit.addLocalisationMap("pt", {
			"resize_up" : "Aumentar tamanho da fonte",
			"resize_down" : "Reduzir tamanho da fonte"
		});

		AtKit.addFn('resizeText', function(multiplier){
			// Every HTML tag
			var tags = AtKit.getHtmlTags();
			
			for(var i = 0; i < tags.length; i++){
				//var current = parseFloat($lib(tags[i]).css('font-size'));
				//var mult = parseFloat(multiplier);
				//var newVal = parseFloat(current + mult);
				//$lib(tags[i]).css('font-size', newVal + "px");
				
				$lib(tags[i]).each(function(index, elem){
					if(!($lib(elem).is('#sbar') || $lib(elem).is('#sbar *') || $lib(elem).is('body > .tooltip') || $lib(elem).is('body > .tooltip *')))
					{
						var style = $lib(elem).css('font-size');
						var current = parseFloat(style);
						var mult = parseFloat(multiplier);
						newVal = parseFloat(current + mult);
						$lib(elem).css('font-size', newVal + "px");
					}
					else
					{
						newVal = $lib(elem).css('font-size');
						$lib(elem).css('font-size', newVal + "px");
					}
				});
			}
		});
		
		AtKit.addButton(
			'resizeUp', 
			AtKit.localisation("resize_up"),
			AtKit.getPluginURL() + 'images/font_increase.png',
			function(dialogs, functions){
				AtKit.call('resizeText', '1');
			},
			null, null
		);
		
		AtKit.addButton(
			'resizeDown', 
			AtKit.localisation("resize_down"),
			AtKit.getPluginURL() + 'images/font_decrease.png',
			function(dialogs, functions){
				AtKit.call('resizeText', '-1');
			},
			null, null
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
(function(){

	var pluginName = "shortcutkeys";
	var plugin = function(){
	
		$lib = AtKit.lib();
	
		// Select button based on keypress		
		ctrlModifier = false;
		TModifier = false;
		$lib(document).keyup(function (e) {
			if(e.which == 17) ctrlModifier = false;
			if(e.which == 84) TModifier = false;
		}).keydown(function (e) {
			if(e.which == 17) ctrlModifier = true;
			if(e.which == 84) TModifier = true;

			// If we don't have the T modifier just get the first button.
			if(e.which == 49 && ctrlModifier && !TModifier) {
				//$lib('.at-btn:eq(2) a').focus();
				//return false;
			} else if( e.which >= 49 && e.which <= 57 && ctrlModifier && TModifier){
				// Select the button at offset
				$lib('.at-btn:eq(' + ( String.fromCharCode(e.which) - 1 ) + ') a').focus();
				return false;
			}
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

})();/*! Copyright (c) 2008 Brandon Aaron (http://brandonaaron.net)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 *
 * Heavily modified by Seb Skuse (scs@ecs.soton.ac.uk) to use Greasemonkey XHR requests, as well as custom XHR to get around limitations in other browsers.
 */
  /*!
 * ATBar
 *
 * http://www.atbar.org/
 *
 * Licensed under the BSD Licence.
 * http://www.opensource.org/licenses/bsd-license.php
 *
 */

(function(){

	var pluginName = "spellng";
	var plugin = function(){
		
		$lib = AtKit.lib();
		
		$lib.sb_spellVersion = '3.9';
		
		var spellngSentance = null;
		var spellngIncorrect = null;
		var spellngCorrection = null;
		var spellngIgnore = 0;
		
		//The user only has to allow for spelling correction record once so we add a bool to indicate whether they have done it
		var allowRecord = false;
		var recordDialogShown = false;
		
		// Internationalisation
		AtKit.addLocalisationMap("en", {
			"spell_title" : "Start Spellchecker",
			"spell_complete": "Spell checking complete!",
			"spell_mistake": "Spelling Mistake",
			"spell_suggestions": "Spelling Suggestions",
			"spell_ignore": "Ignore",
			"spell_replace": "Replace",
			"spell_record": "Send anonymous usage data?",
			"spell_record_data": "Data to be sent: ",
			"spell_record_allow": "Allow",
			"spell_record_disallow": "Disallow"
		});

		AtKit.addLocalisationMap("ar", {
			"spell_title" : "&#1575;&#1604;&#1578;&#1583;&#1602;&#1610;&#1602; &#1575;&#1604;&#1575;&#1605;&#1604;&#1575;&#1574;&#1610;",
			"spell_complete": "&#1578;&#1605; &#1575;&#1604;&#1575;&#1606;&#1578;&#1607;&#1575;&#1569; &#1605;&#1606; &#1575;&#1604;&#1578;&#1583;&#1602;&#1610;&#1602; &#1575;&#1604;&#1573;&#1605;&#1604;&#1575;&#1574;&#1610;",
			"spell_mistake": "&#1582;&#1591;&#1571; &#1573;&#1605;&#1604;&#1575;&#1574;&#1610;",
			"spell_suggestions": "&#1575;&#1602;&#1578;&#1585;&#1575;&#1581;&#1575;&#1578; &#1604;&#1578;&#1589;&#1581;&#1610;&#1581; &#1575;&#1604;&#1582;&#1591;&#1571; &#1575;&#1604;&#1573;&#1605;&#1604;&#1575;&#1574;&#1610;",
			"spell_ignore": "&#1578;&#1580;&#1575;&#1607;&#1604;",
			"spell_replace": "&#1575;&#1587;&#1578;&#1576;&#1583;&#1575;&#1604;",
			"spell_record": "&#1571;&#1585;&#1587;&#1575;&#1604; &#1587;&#1580;&#1604; &#1575;&#1604;&#1575;&#1587;&#1578;&#1582;&#1583;&#1575;&#1605; &#1583;&#1608;&#1606; &#1603;&#1588;&#1601; &#1607;&#1608;&#1610;&#1577; &#1575;&#1604;&#1605;&#1587;&#1578;&#1582;&#1583;&#1605;",
			"spell_record_data": "&#1575;&#1604;&#1605;&#1581;&#1578;&#1608;&#1609; &#1575;&#1604;&#1582;&#1575;&#1589; &#1576;&#1604;&#1571;&#1585;&#1587;&#1575;&#1604; : ",
			"spell_record_allow": " &#1575;&#1604;&#1587;&#1605;&#1575;&#1581; &#1576;&#1600;",
			"spell_record_disallow": " &#1593;&#1583;&#1605; &#1575;&#1604;&#1587;&#1605;&#1575;&#1581; &#1576;&#1600;"
		});

		AtKit.addLocalisationMap("pt", {
			"spell_title" : "Iniciar Corretor Ortográfico",
			"spell_complete": "Correção Ortográfica Completa!",
			"spell_mistake": "Erro de Ortografía",
			"spell_suggestions": "Sugestões de Ortografia",
			"spell_ignore": "Ignorar",
			"spell_replace": "Substituir",
			"spell_record": "Enviar uso de dados anonimo?",
			"spell_record_data": "Dados a serem enviados: ",
			"spell_record_allow": "Permitir",
			"spell_record_disallow": "Negar"
		});

		AtKit.set('spellInitialised', false);

		var complete = $lib('<div>', { "style": "" });
		complete.append($lib('<h3>', { "html": AtKit.localisation("spell_complete") }));

		var spell_settings = {
			"baseURL": "https://core.atbar.org/",
			"completeDialog": complete
		};

		AtKit.addFn('removeIncorrectWord', function(){
			var selector = "#spellcheckmistakes";
			$lib(selector + ' option:selected').remove();
			$lib(selector).val($lib(selector + ' option:first').val());

			// If there are no more replacements, we're done.
			if($lib(selector).children().length === 0){
				AtKit.message(spell_settings.completeDialog);
			} else {
				$lib(selector).trigger('change');
			}
			
			AtKit.call('recordSpell');
			
		});
		
		AtKit.addFn('recordSpell', function(){
			if(!recordDialogShown)
			{
				var dlg = $lib('<div>', { "style": "", "id": "AtKitSpellRecordDialog" });
				dlg.append($lib('<p>', { "html": "" }));
				dlg.append($lib('<h3>', { "html": AtKit.localisation("spell_record") }));
				dlg.append($lib('<div>', { "id": "AtKitSpellRecordContainer" }));
				dlg.append($lib('<p>', { "html": AtKit.localisation("spell_record_data") + spellngSentance }));
				dlg.append($lib('<div>', { "id": "AtKitSpellRecordContainerData" }));
				dlg.append($lib('<button>', { "html": AtKit.localisation("spell_record_allow"), "id": "AtKitSpellRecordAllow" }));
				dlg.append($lib('<button>', { "html": AtKit.localisation("spell_record_disallow"), "id": "AtKitSpellRecordDisallow" }));
				
				AtKit.message(dlg);
				$lib("#AtKitSpellRecordDialog").focus();
				
				$lib('#AtKitSpellRecordAllow').click(function(){
					AtKit.call('recordSpellng');
					AtKit.message(spell_settings.completeDialog);
					allowRecord = true;
				});
				
				$lib('#AtKitSpellRecordDisallow').click(function(){
					AtKit.message(spell_settings.completeDialog);
					allowRecord = false;
				});
				
				recordDialogShown = true;
			}	
			else
			{
				if(allowRecord)
				{
					AtKit.call('recordSpellng');
					AtKit.message(spell_settings.completeDialog);
				}
				else
				{
					AtKit.message(spell_settings.completeDialog);
				}
			}
		});
		
		AtKit.addFn('recordSpellng', function(){
			
			var spellngRecordURL = "https://spell.services.atbar.org/spellng/record-spellng.php?l=" + AtKit.getLanguage() + "&e=" + spellngIncorrect + "&c=" + spellngCorrection + "&i=" + spellngIgnore + "&s=" + spellngSentance;
			
			$lib("#sbar").prepend('<img src="' + spellngRecordURL + '" />');
			
			spellngIncorrect = null;
			spellngCorrection = null;
			spellngIgnore = 0;
		});

		AtKit.addFn('initSpell', function(){
			$lib.fn.spellcheck = function(options) {
				return this.each(function() {
					var $this = $lib(this);
					if ( !$this.is('[type=password]') && !$this.data('spellchecker') )
						$lib(this).data('spellchecker', new $lib.SpellChecker(this, options));
				});
			};
			
			$lib.fn.removeSpellCheck = function(){
				return this.each(function() {
					$lib(this).unbind(this.options.events);
					$lib(this).removeData('spellchecker');
				});
			};
			
			$lib.fn.rteSpellCheck = function(content, rteptr, options){
				return this.each(function(){
					var $this = $lib(this);
					var checker = new $lib.SpellChecker(this, options);
					checker.checkRTESpelling( content, rteptr, options.RTEType );
				});
			};
			
			/**
			* Forces a spell check on an element that has an instance of SpellChecker.
			*/
			$lib.fn.checkspelling = function() {
				return this.each(function() {
					var spellchecker = $this.data('spellchecker');
					spellchecker && spellchecker.checkSpelling();
				});
			};
			
			
			$lib.SpellChecker = function(element, options) {
				this.$element = $lib(element);
				this.options = $lib.extend({
					lang: 'en_US',
					autocheck: 750,
					events: 'keypress blur paste',
					url: 'spellcheck.php',
					useXHRMethod: 'GM-XHR',
					ignorecaps: 1,
					ignoredigits: 1,
					isRTE: false,
					RTEType: ''
				}, options);
				this.bindEvents();
			};
			
			$lib.SpellChecker.prototype = {
				bindEvents: function() {
					if ( !this.options.events ) return;
					var self = this, timeout;
					this.$element.bind(this.options.events, function(event) {
						if ( /^key[press|up|down]/.test(event.type) ) {
							if ( timeout ) clearTimeout(timeout);
							timeout = setTimeout(function() { self.checkSpelling(); }, self.options.autocheck);
						} else
							self.checkSpelling();
					});
				},
				
				checkRTESpelling: function(input, rteptr, type){
					this.options.isRTE = true;
					this.origText = input;
					this.rteptr = rteptr;
					this.RTEType = type;
					var prevText = input.replace(/<.*?>/ig, '');
					this.text = input.replace(/<.*?>/ig, '');
					spellngSentance = input;
					var self = this, timeout;
					
					$lib.getJSON("https://spell.services.atbar.org/spellng/spellng.php?l=" + this.options.lang + "&r=" + encodeURIComponent(this.text) + "&callback=?", function(data){
						self.parseResults( data );
					});

				},
				
				checkSpelling: function() {
					this.options.isRTE = false;
					var prevText = this.text, text = this.$element.val(), self = this;
					if ( prevText === text ) return;
					this.text = this.$element.val();
					var self = this, timeout;
					spellngSentance = this.text;					
					
					$lib.getJSON("https://spell.services.atbar.org/spellng/spellng.php?l=" + this.options.lang + "&r=" + encodeURIComponent(this.text) + "&callback=?", function(data){
						self.parseResults( data );
					});

				},
				
				parseResults: function(res) {
					var self = this;
					self.results = {};
					self.results.words = {};

					i = 0;

					for(r in res){
						self.results.words[r] = {
							word: r,
							suggestions: res[r].suggestions,
							w_offset: res[r].offset
						};
						i++;
					}

					self.results.count = i;

					this.displayResults();
				},
			
				
				displayResults: function() {
					if ( !this.results.count ) return;

					var dlg = $lib('<div>', { "style": "", "id": "AtKitSpellDialog" });
					dlg.append($lib('<h3>', { "html": AtKit.localisation("spell_mistake") }));
					dlg.append($lib('<div>', { "id": "AtKitSpellMistakeContainer" }));
					dlg.append($lib('<h3>', { "html": AtKit.localisation("spell_suggestions") }));
					dlg.append($lib('<div>', { "id": "AtKitSpellSuggestionContainer" }));
					dlg.append($lib('<button>', { "html": AtKit.localisation("spell_replace"), "id": "AtKitSpellReplace" }));
					dlg.append($lib('<button>', { "html": AtKit.localisation("spell_ignore"), "id": "AtKitSpellIgnore" }));


					var self = this;

					dlg.children("#AtKitSpellMistakeContainer").append(
						$lib('<select>', { "name": "spellcheckmistakes", "id": "spellcheckmistakes", "size": 7, "style": "width: 350px;", "class": "no-float" }).change(
							function(){
								// Remove children from suggestions
								$lib('#spellchecksuggestions').empty();

								var word = self.results.words[$lib(this).val()];

								var suggestions = word.suggestions;
								
								$lib.each(suggestions, function(i,v){
									$lib('#spellchecksuggestions').append(
										$lib('<option>', { "name": v, "text": v })
									);
								});

							}
						)

					);

					dlg.children("#AtKitSpellSuggestionContainer").append(
						$lib('<select>', { "name": "spellchecksuggestions", "id": "spellchecksuggestions", "size": 7, "style": "width: 350px;", "class": "no-float" })
					);


					AtKit.message(dlg);
					$lib("#AtKitSpellDialog").focus();
					
					// Add items to spellcheckmistakes.
					$lib.each(this.results.words, function(i,v){
						dlg.find('#spellcheckmistakes').append(
							$lib('<option>', { "name": v.word, "text": v.word })
						);
					});


					// Ignore this mistake
					$lib('#AtKitSpellIgnore').click(function(){
						// Record error and correction
						spellngIgnore = 1;
						
						var selector = "#spellcheckmistakes";
						var mistake = dlg.find(selector).val();
						spellngIncorrect = mistake;
						
						AtKit.call('removeIncorrectWord');
					});

					$lib('#AtKitSpellReplace').click(function(){
						var selector = "#spellcheckmistakes";

						var mistake = dlg.find(selector).val();
						var replacement = dlg.find("#spellchecksuggestions").val();
						
						// Record error and correction
						spellngIgnore = 0;
						spellngIncorrect = mistake;
						spellngCorrection = replacement;
						
						if(self.isRTE === false || (typeof self.isRTE) == 'undefined'){
							self.$element.val( self.$element.val().replace( mistake, replacement ) );
						} else {
							var tmpData = self.origText;
							self.origText = tmpData.replace( mistake, replacement );
							// Set the new content back to the RTE.
							if(self.RTEType == 'tMCE'){
								self.rteptr.setContent(self.origText);
							} else if(self.RTEType == 'CKE'){
								self.rteptr.setData(self.origText);
							}
						}

						AtKit.call('removeIncorrectWord');
					});

					dlg.find("#spellcheckmistakes").val(dlg.find('#spellcheckmistakes option:first').val());
					dlg.find("#spellcheckmistakes").trigger('change');
				}
				
			};			
			AtKit.set('spellInitialised', true);
		});
				
		// Spell checker
		AtKit.addButton(
			'spell',
			AtKit.localisation("spell_title"),
			AtKit.getPluginURL() + 'images/spell-off.png',
			function(dialogs, functions){
				// Initialise spelling if not already
				if(AtKit.get('spellInitialised') === false) AtKit.call('initSpell');

				$lib("textarea").spellcheck({ useXHRMethod: AtKit.__env.transport, 'lang': AtKit.getLanguage(), baseURL: spell_settings.baseURL });
				$lib('input[type=text]').spellcheck({ useXHRMethod: AtKit.__env.transport, 'lang': AtKit.getLanguage(), baseURL: spell_settings.baseURL });

				// Are there any TinyMCE fields on this page?
				if((typeof AtKit.__env.window.tinyMCE) != 'undefined'){
					tinyMCE = AtKit.__env.window.tinyMCE;
					
					tinyMCE.activeEditor.onKeyPress.add(function(ed, e) {
						var content = tinyMCE.activeEditor.getContent();
						if ( rteSpellTimer ) window.clearTimeout(rteSpellTimer);
						rteSpellTimer = window.setTimeout(function() { $lib("#" + tinyMCE.activeEditor.editorContainer).rteSpellCheck(content, tinyMCE.activeEditor, { useXHRMethod: AtKit.__env.transport, 'lang': AtKit.getLanguage(),  RTEType: 'tMCE' }); }, 750);
					});
				}
				
				if((typeof AtKit.__env.window.CKEDITOR) != 'undefined'){
					CKE = AtKit.__env.window.CKEDITOR;
					for(var o in CKE.instances){
						CKE.instances[o].document.bind('keypress', function(){
							if ( rteSpellTimer ) window.clearTimeout(rteSpellTimer);
							var content = CKE.instances[o].getData();
							rteSpellTimer = window.setTimeout(function() { $lib("#" + CKE.instances[o].element.getId()).rteSpellCheck(content, CKE.instances[o], { useXHRMethod: AtKit.__env.transport, 'lang': AtKit.getLanguage(),  RTEType: 'CKE' }); }, 750);
						});
					}
				}
				
				$lib('#at-lnk-spell').find('img').attr('src', AtKit.getPluginURL() + "images/spell.png");
				
				
				ctrlModifier = false;
				altModifier = false;
				
				$lib('input[type="text"], textarea').bind('keydown', function(e){
					
					var textElement = $lib(this);
					
					// Bind shortcutkeys
					textElement.keyup(function (e) {
						if(e.keyCode == 17) ctrlModifier = false;
						if(e.keyCode == 18) altModifier = false;
					}).keydown(function (e) {
						if(e.keyCode == 17) ctrlModifier = true;
						if(e.keyCode == 18) altModifier = true;
						
						//Shortcut key is s
						shortcutKey = 83;
						
						// Are the modifier keys held down?
						if(ctrlModifier && altModifier && e.keyCode == shortcutKey) {
							ctrlModifier = false;
							altModifier = false;
							
							// Set focus to dialog box
							$lib('#spellcheckmistakes').focus();
							
							e.returnValue = false;
						}	
					});
				});
			});
	};

	if(typeof window['AtKit'] == "undefined"){

		window.AtKitLoaded = function(){
			var eventAction = null;
		
			this.subscribe = function(fn) {
				eventAction = fn;
			};
		
			this.fire = function(sender, eventArgs) {
				if (eventAction !== null) {
					eventAction(sender, eventArgs);
				}
			};
		};

		window['AtKitLoaded'] = new AtKitLoaded();
		window['AtKitLoaded'].subscribe(function(){ AtKit.registerPlugin(pluginName, plugin); });
	} else {
		AtKit.registerPlugin(pluginName, plugin);
	}

})();
(function(){

	var pluginName = "tooltip";
	var plugin = function(){
		
		var $lib = AtKit.lib();

		 "use strict"

		var Tooltip = function ( element, options ) {
		    this.init('tooltip', element, options)
		  }
		
		  Tooltip.prototype = {
		
		    constructor: Tooltip
		
		  , init: function ( type, element, options ) {
		      var eventIn
		        , eventOut
		
		      this.type = type
		      this.$element = $lib(element)
		      this.options = this.getOptions(options)
		      this.enabled = true
		
		      if (this.options.trigger != 'manual') {
		        eventIn  = this.options.trigger == 'hover' ? 'mouseenter' : 'focus'
		        eventOut = this.options.trigger == 'hover' ? 'mouseleave' : 'blur'
		        this.$element.bind(eventIn, this.options.selector, $lib.proxy(this.enter, this))
		        this.$element.bind(eventOut, this.options.selector, $lib.proxy(this.leave, this))
		      }
		
		      this.options.selector ?
		        (this._options = $lib.extend({}, this.options, { trigger: 'manual', selector: '' })) :
		        this.fixTitle()
		    }
		
		  , getOptions: function ( options ) {
		      options = $lib.extend({}, $lib.fn[this.type].defaults, options, this.$element.data())
		
		      if (options.delay && typeof options.delay == 'number') {
		        options.delay = {
		          show: options.delay
		        , hide: options.delay
		        }
		      }
		
		      return options
		    }
		
		  , enter: function ( e ) {
		      var self = $lib(e.currentTarget)[this.type](this._options).data(this.type)
		
		      if (!self.options.delay || !self.options.delay.show) {
		        self.show()
		      } else {
		        self.hoverState = 'in'
		        setTimeout(function() {
		          if (self.hoverState == 'in') {
		            self.show()
		          }
		        }, self.options.delay.show)
		      }
		    }
		
		  , leave: function ( e ) {
		      var self = $lib(e.currentTarget)[this.type](this._options).data(this.type)
		
		      if (!self.options.delay || !self.options.delay.hide) {
		        self.hide()
		      } else {
		        self.hoverState = 'out'
		        setTimeout(function() {
		          if (self.hoverState == 'out') {
		            self.hide()
		          }
		        }, self.options.delay.hide)
		      }
		    }
		
		  , show: function () {
		      var $tip
		        , inside
		        , pos
		        , actualWidth
		        , actualHeight
		        , placement
		        , tp
		
		      if (this.hasContent() && this.enabled) {
		        $tip = this.tip()
		        this.setContent()
		
		        if (this.options.animation) {
		          $tip.addClass('fade')
		        }
		
		        placement = typeof this.options.placement == 'function' ?
		          this.options.placement.call(this, $tip[0], this.$element[0]) :
		          this.options.placement
		
		        inside = /in/.test(placement)
		
		        $tip
		          .remove()
		          .css({ top: 0, left: 0, display: 'block' })
		          .appendTo(inside ? this.$element : document.body)
		
		        pos = this.getPosition(inside)
		
		        actualWidth = $tip[0].offsetWidth
		        actualHeight = $tip[0].offsetHeight
		
		        switch (inside ? placement.split(' ')[1] : placement) {
		          case 'bottom':
		            tp = {top: pos.top + pos.height, left: pos.left + pos.width / 2 - actualWidth / 2}
		            break
		          case 'top':
		            tp = {top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2}
		            break
		          case 'left':
		            tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth}
		            break
		          case 'right':
		            tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width}
		            break
		        }
		
		        $tip
		          .css(tp)
		          .addClass(placement)
		          .addClass('in')
		      }
		    }
		
		  , setContent: function () {
		      var $tip = this.tip()
		      $tip.find('.tooltip-inner').html(this.getTitle())
		      $tip.removeClass('fade in top bottom left right')
		    }
		
		  , hide: function () {
		      var that = this
		        , $tip = this.tip()
		
		      $tip.removeClass('in')
		
		      function removeWithAnimation() {
		        var timeout = setTimeout(function () {
		          $tip.off($lib.support.transition.end).remove()
		        }, 500)
		
		        $tip.one($lib.support.transition.end, function () {
		          clearTimeout(timeout)
		          $tip.remove()
		        })
		      }
		
		      $lib.support.transition && this.$tip.hasClass('fade') ?
		        removeWithAnimation() :
		        $tip.remove()
		    }
		
		  , fixTitle: function () {
		      var $e = this.$element
		      if ($e.attr('title') || typeof($e.attr('data-original-title')) != 'string') {
		        $e.attr('data-original-title', $e.attr('title') || '').removeAttr('title')
		      }
		    }
		
		  , hasContent: function () {
		      return this.getTitle()
		    }
		
		  , getPosition: function (inside) {
		      return $lib.extend({}, (inside ? {top: 0, left: 0} : this.$element.offset()), {
		        width: this.$element[0].offsetWidth
		      , height: this.$element[0].offsetHeight
		      })
		    }
		
		  , getTitle: function () {
		      var title
		        , $e = this.$element
		        , o = this.options
		
		      title = $e.attr('data-original-title')
		        || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)
		
		      title = title.toString().replace(/(^\s*|\s*$)/, "")
		
		      return title
		    }
		
		  , tip: function () {
		      return this.$tip = this.$tip || $lib(this.options.template)
		    }
		
		  , validate: function () {
		      if (!this.$element[0].parentNode) {
		        this.hide()
		        this.$element = null
		        this.options = null
		      }
		    }
		
		  , enable: function () {
		      this.enabled = true
		    }
		
		  , disable: function () {
		      this.enabled = false
		    }
		
		  , toggleEnabled: function () {
		      this.enabled = !this.enabled
		    }
		
		  , toggle: function () {
		      this[this.tip().hasClass('in') ? 'hide' : 'show']()
		    }
		
		  }
		
		
		 /* TOOLTIP PLUGIN DEFINITION
		  * ========================= */
		
		  $lib.fn.tooltip = function ( option ) {
		    return this.each(function () {
		      var $this = $lib(this)
		        , data = $this.data('tooltip')
		        , options = typeof option == 'object' && option
		      if (!data) $this.data('tooltip', (data = new Tooltip(this, options)))
		      if (typeof option == 'string') data[option]()
		    })
		  }
		
		  $lib.fn.tooltip.Constructor = Tooltip
		
		  $lib.fn.tooltip.defaults = {
		    animation: true
		  , delay: 0
		  , selector: false
		  , placement: 'top'
		  , trigger: 'hover'
		  , title: ''
		  , template: '<div class="tooltip" style="position: absolute;z-index:9999999;display: block;visibility:visible;padding: 5px;font-size:11px"><div class="tooltip-arrow" style="position: absolute;width:0;height:0;"></div><div class="tooltip-inner" style="max-width: 200px;padding: 3px 8px;color: #ffffff;text-align: center;text-decoration: none;background-color: #000000;-webkit-border-radius: 4px;-moz-border-radius: 4px;border-radius: 4px;"></div></div>'
		  }
		
		setTimeout(function(){
			AtKit.lib()('.at-btn').tooltip({ 
				"placement": "bottom",
				"trigger": "hover"
			});		

			AtKit.lib()('.at-btn a').tooltip({ 
				"placement": "bottom",
				"trigger": "focus"
			});	

		}, 500);

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

})();(function(){

	var pluginName = "wordprediction";
	var plugin = function(){

		$lib = AtKit.lib();
		
		var wpTimeout;

		// Internationalisation
		AtKit.addLocalisationMap("en", {
			"wp_title" : "Word Prediction",
			"wp_ignore": "Ignore",
			"wp_instruct": "Keystrokes: esc to close, Ctrl + Alt + (1, 2, 3 etc)"
		});

		AtKit.addLocalisationMap("ar", {
			"wp_title" : "&#1578;&#1588;&#1594;&#1610;&#1604; &#1605;&#1602;&#1578;&#1585;&#1581; &#1575;&#1604;&#1603;&#1604;&#1605;&#1575;&#1578;",
			"wp_ignore": "&#1578;&#1580;&#1575;&#1607;&#1604;",
			"wp_instruct": "&#1605;&#1601;&#1575;&#1578;&#1610;&#1581;: Esc &#1604;&#1604;&#1582;&#1585;&#1608;&#1580;&#1548; Ctrl+Alt+(1,2,3...)"	
		});
		
		AtKit.addLocalisationMap("pt", {
			"wp_title" : "Predição de palavras",
			"wp_ignore": "Ignorar",
			"wp_instruct": "Pressione esc para fechar, Ctrl + Alt + (1, 2, 3 etc)"
		});

		AtKit.set('WordPrediction_TextSelected', null);
		
		$lib('input[type="text"], textarea').bind('focus', function(){
			AtKit.set('WordPrediction_TextSelected', $lib(this));
		});

		AtKit.addFn('getCaretPos', function(input){
			input = input[0];
			
			var caret_pos;
			// Internet Explorer Caret Position (TextArea)
			if (document.selection && document.selection.createRange) {
				var range = document.selection.createRange();
				var bookmark = range.getBookmark();
				caret_pos = bookmark.charCodeAt(2) - 2;
			} else {
				// Firefox Caret Position (TextArea)
				if (input.setSelectionRange)
				caret_pos = input.selectionStart;
			}
			
			return caret_pos;
		});
		
		AtKit.addFn('setCaretPos', function(args){
			var elem = args.input[0];
		
			if(elem !== null) {
				if(elem.createTextRange) {
					var range = elem.createTextRange();
					range.move('character', args.position);
					range.select();
				} else {
					if(elem.selectionStart) {
						elem.focus();
						elem.setSelectionRange(args.position, args.position);
					} else {
						elem.focus();
					}
				}
			}
		});

		AtKit.addButton(
			'wordprediction',
			AtKit.localisation("wp_title"),
			AtKit.getPluginURL() + 'images/aitype.png',
			function(dialogs, functions){

				ctrlModifier = false;
				altModifier = false;

				$lib('input[type="text"], textarea').bind('keydown', function(e){
					if(e.which == 17 || e.which == 18 || ctrlModifier || altModifier) return; // ctrl & alt keys ignore.
					
					clearTimeout(wpTimeout);
					
					var textElement = $lib(this);
					
					if(e.keyCode == 27) return $lib('#AtKitWordPrediction').remove();

					wpTimeout = setTimeout(function(){
						var el = AtKit.get('WordPrediction_TextSelected');
						if(el === null) return;
					
						var elData = el.val();
					
						var pos = AtKit.call('getCaretPos', el);
						AtKit.set('WordPrediction_CaretPos', pos);
						
						var leadingText = elData.substring(0, pos).split(" ").slice(-6).join(" ");
						var trailingText = elData.substring(pos).split(" ").slice(0, 2).join(" ");
						
						var predictURL = "https://predict.services.atbar.org/wordprediction/";

						if(AtKit.getLanguage() == "ar") {
							predictURL += "?lang=AR";
						} 
						else if(AtKit.getLanguage() == "pt") {
							predictURL += "?lang=PT_BR";
						} 
						else {
							predictURL += "?lang=EN";
						}

						predictURL += "&l=" + encodeURIComponent(leadingText) + "&t=" + encodeURIComponent(trailingText) + "&callback=?";
						
						$lib.getJSON(predictURL, function(response){
							var data = response.payload.split(";");
							
							var input = data.splice(0, 2);

							// Remove any digits signifying liklihood
							$lib.each(input, function(i, v){
								if(!isNaN(input[i].charAt(0))) input[i] = input[i].substring(1);
							});

							//console.log(input);

							var pos = el.position();
							var width = el.width();
							var height = el.outerHeight();


							var suggestions = "";

							if($lib('#AtKitWordPrediction').length === 0){
								suggestions = $lib('<div>', { "id": "AtKitWordPrediction" }).css({
									"position": "absolute",
									"left": pos.left + "px",
									"width": width,
									"top": (5 + pos.top + height) + "px",
									"background": "white",
									"font-size": "16pt",
									"font-weight": "bold",
									"color": "black",
									"border": "2px solid black",
									"z-index": "9999999999",
									"padding": "10px"
								});
							} else {
								suggestions = $lib('#AtKitWordPrediction').empty();
							}
							
							
							suggestions.append(
								$lib("<a>", { "href": "#", "html": AtKit.localisation("wp_ignore"), "style": "color:red;padding-right:10px;float:left;" }).bind('click', function(){
									$lib('#AtKitWordPrediction').remove();
									el.focus();
								})
							);

							for(i = 0; i < data.length; i++){
								var suggestion = data[i];
								
								if(suggestion == "") continue;
								
								// Get number 0-9 representing likelihood of word being correct.
								var likelihood = suggestion.charAt(0);

								// Remove the liklihood from the string.
								suggestion = suggestion.substring(1);

								var link = $lib('<a>', { "html": suggestion, "href": "#", "style": "padding-right:10px;float:left;" }).data('suggestion', suggestion).bind('click', function(e){
									var pos = AtKit.get('WordPrediction_CaretPos');
									var toInsert = $lib(this).data('suggestion') + " ";
									var el = AtKit.get('WordPrediction_TextSelected');
	
									var start = pos - input[0].length;
									var end = pos + input[1].length;
									
									//console.log('Caret position: ' + pos + ", inserting text '" + toInsert + "'");
									//console.log("at pos start " + start + ", end " + end + " identified substring is '" + el.val().substring(start, end) + "'");
									
									el.val( el.val().substring(0, start) + toInsert + el.val().substring(end) );
									
									suggestions.remove();
									
									el.focus();

									AtKit.call('setCaretPos', {
										input: el,
										position: start + toInsert.length
									});
									
									e.preventDefault();
									return false;
								});
								
								suggestions.append(link);
							}
							
							
							// Add the information div.
							var info = $lib('<p>', { "html": AtKit.localisation("wp_instruct"), "style": "font-size:12pt; padding-top:10px;clear:left" });
							
							suggestions.append(info);
							
							// Insert the suggestions into the DOM
							el.after(suggestions);
							
							// Bind shortcutkeys
							
							textElement.keyup(function (e) {
								if(e.keyCode == 17) ctrlModifier = false;
								if(e.keyCode == 18) altModifier = false;
							}).keydown(function (e) {
								if(e.keyCode == 17) ctrlModifier = true;
								if(e.keyCode == 18) altModifier = true;
								
								offset = 48;
								// Are the modifier keys held down?
								if(ctrlModifier && altModifier && (e.keyCode >= 49 && e.keyCode <= 57)) {
									numKey = e.keyCode - offset;
									
									ctrlModifier = false;
									altModifier = false;
									
									$lib('#AtKitWordPrediction').children('a:eq(' + numKey + ')').click();
									
									if(e.preventDefault){ e.preventDefault()
									}else{e.stop()};
									
									e.returnValue = false;
									e.stopPropagation();  
									
									textElement.trigger('keydown');
								}	
							});

						});
					
					}, 500);
				});
			}
		);

	};

	if(typeof window['AtKit'] == "undefined"){

		window.AtKitLoaded = function(){
			var eventAction = null;
		
			this.subscribe = function(fn) {
				eventAction = fn;
			};
		
			this.fire = function(sender, eventArgs) {
				if (eventAction !== null) {
					eventAction(sender, eventArgs);
				}
			};
		};

		window['AtKitLoaded'] = new AtKitLoaded();
		window['AtKitLoaded'].subscribe(function(){ AtKit.registerPlugin(pluginName, plugin); });
	} else {
		AtKit.registerPlugin(pluginName, plugin);
	}

})();
