(function(){

	var pluginName = "espeak-tts";
	var plugin = function(){

		$lib = AtKit.lib();

		var settings = {
			"baseURL": "https://core.atbar.org/",
			"speechServicesURL": 'https://core.atbar.org/atbar/pt/dev/server-services/speech/',
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
			"tts_explain": "To use the text to speech feature with selected text, please first select the text on this page that you would like to convert. After you have done this, click the Text to Speech button, and select the 'selected text' option.",
			"tts_select_voice": "Highlight text and select a voice",
			"tts_male": "Male"
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
			"tts_male": "&#1605;&#1584;&#1603;&#1585;"
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
			"tts_explain": "Para usar o recurso texto a voz, por favor, selecione o texto nesta página que você gostaria de converter. Feito isso, clique no botão texto a voz e selecione a opção de voz que você deseja. Se isso não funcionou e você está usando o Internet Explorer, copie o texto selecionado (<kbd>CTRL+C</kbd>) e tente novamente.",
			"tts_select_voice": "Destaque o texto e selecione uma voz",
			"tts_male": "Masculino"
		});

		// Text to speech
		var TTSDialogs = {
			"options": {
				"title": AtKit.localisation("tts_options"),
				"body": AtKit.localisation("tts_select_voice") + " <br /><button id=\"sbStartInsipioTTSSelectionMale\" class=\"btn btn-default\"> " + AtKit.localisation("tts_male") + "</button>"
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
						
			var urlString = settings.speechServicesURL + 'espeak-tts/request.php?rt=tts&v=2&i=1&l=' + AtKit.getLanguage() + '&voice=' + args.voice + '&id=' + args.reqID + '&data=' + payload + "&chunkData=" + args.totalBlocks + "-" + args.block;
			if( args.block == args.totalBlocks-1 ){
				urlString += "&page=" + encodeURIComponent(window.location);
			}
			
			urlString += "&callback=?";
			
			$lib.getJSON(urlString, function(RO){
				$lib("#compactStatus").html(args.block + " / " + args.totalBlocks);
				
				var errorTitle = AtKit.localisation("tts_error");
				if(args.block == args.totalBlocks){
					// Finished request..
					AtKit.show(TTSDialogs.starting);
					if(RO.status == "encoding"){
						AtKit.call('countdownInsipioTTS', { 'timeLeft':(RO.est_completion / RO.chunks), 'id': RO.ID });
					} else if(RO.status == "failure" && RO.reason == "overcapacity"){
						AtKit.message(errorTitle , AtKit.localisation("tts_overloaded"));
					} else if(RO.status == "failure" && RO.message === "") {
						AtKit.message(errorTitle , AtKit.localisation("tts_problem"));
					} else {
						AtKit.message(errorTitle , RO.reason + " " + RO.data.message );
					}

				} else {
					// Send the next block.
					if(RO.data.message == "ChunkSaved"){
						AtKit.call('sendInsipioTTSChunk', { 'fullData':args.fullData, 'block':(args.block + 1), 'totalBlocks':args.totalBlocks, 'reqID':args.reqID });
					} else {
						AtKit.message(errorTitle , AtKit.localisation("tts_servererror"));
					}
				}
				
			});
		
		});
		
		AtKit.addFn('countdownInsipioTTS', function(arg){
			if(isNaN(arg.timeLeft)){
				AtKit.message(AtKit.localisation("tts_error"), AtKit.localisation("tts_problem"));
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
					
					AtKit.message(AtKit.localisation("tts_pleasewait") , AtKit.localisation("tts_converting") + "...<br /><div id='compactStatus'>0 / " + chunks + "</div>" );
					
					AtKit.call('sendInsipioTTSChunk', { 'fullData':transmitData, 'block':1, 'totalBlocks':chunks, 'reqID':reqID, 'voice':args.voice });
				} else {
					AtKit.message(AtKit.localisation("tts_error"), AtKit.localisation("tts_problem") );
				}
				
			} else {
				AtKit.message(AtKit.localisation("tts_title"), AtKit.localisation("tts_explain"));
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
				
				/*$lib('#sbStartInsipioTTSSelectionFemale').on('click touchend', function(){
					//Perform a fake start and pause playback. This is to solve the ios autoplay restrictions
					a = document.createElement('audio');
					audio = new Audio();
					audio.play();
					audio.pause();
					
					//AtKit.call('sbStartInsipioTTSSelection', { 'voice':'female' });
				});*/			
			},
			TTSDialogs, TTSFunctions, {'cssClass':'glyphicon glyphicon-volume-up', 'modal':'true'}//, TTSExtendedObject
		);
		
		if(navigator.userAgent.match(/(iPhone|iPod|iPad)/i))
		{
			setInterval(function(e){
				selectedDataIOS = AtKit.call('getSelectedTextInsipioTTS');
			}, 100);
		}
		
		$lib('a#at-lnk-tts').on('click touchend', function(e){
			selectedData = AtKit.call('getSelectedTextInsipioTTS');
			if(navigator.userAgent.match(/(iPhone|iPod|iPad)/i))
			{
				selectedData = selectedDataIOS;
			}
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
