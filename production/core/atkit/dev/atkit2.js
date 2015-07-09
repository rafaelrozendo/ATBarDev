/*!
 * AtKit Core
 * Open Source Cross-Browser ToolBar framework
 *
 * Copyright (c) 2011. University of Southampton
 * Developed by Sebastian Skuse
 * and further by Magnus White and Nawar Halabi
 * http://www.atbar.org/
 *
 * Licensed under the BSD Licence.
 * http://www.opensource.org/licenses/bsd-license.php
 *
 */
(function(window, undefined) {

	var AtKit = (function() { 
	
		// Internal properties
		AtKit.internal = AtKit.prototype = {
			__version: 1.6, // Version.
			__build: 1, // Build.
			__APIVersion: 1.0, // The version of the API.
			//__baseURL: "https://core.atbar.org/", // Load AtKit assets from here.
			__baseURL: "http://localhost/production/core/",
			__APIURL: "http://a.atbar.org/", // API endpoint
			__pluginURL: "http://localhost/production/plugins/", // Plugins location
			__faceboxURL: "http://localhost/production/core/resources/js/facebox.dev.js", // Facebox JS lib
			__libURL: "http://localhost/production/core/resources/jquery/1.11.3/jquery.min.js", // URL to jQuery. CDN preferred unless this is a local install.
			__jQueryUiURL: "http://localhost/production/core/resources/jquery-ui/1.11.4/jquery-ui.min.js",
			__bootstrapJsURL: "http://localhost/production/core/resources/js/bootstrap.js",
			__bootstrapCssURL: "http://localhost/production/core/resources/css/bootstrap.min.css",
			__awesomeFontsCssURL: "http://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css",
			__responsiveCssURL: "http://localhost/production/core/resources/css/responsive.css",
			__channel: "atkit", // Release channel we're running in for this version of AtKit.
			__invoked: false, // Is the framework already loaded?
			__debug: false, // Debug mode on or off.
			__loadAttempts: 0, // Container for number of load attempts
			__maxLoadAttempts: 30, // Maximum number of times we'll try and load the library (one try every 500ms)
			__errorMessageTimeout: 2000, // Time before error message will disapear.
			__localStorageNamespace: "AtKit_", // Name to use for HTML5 localstorage namespace
			__protocol: null, // HTTPS or HTTP
			plugins:{}, // Plugins
			localisations: {
				"en": {	
					"exit": "Exit",
					"reset": "Reset webpage",
					"help": "Help & instructions",
					"collapse": "Collapse and uncollapse plugins",
					"closemodal": "Close"
				},
				"ar": {
					"exit": "&#1582;&#1585;&#1608;&#1580;",
					"reset": "&#1575;&#1604;&#1605;&#1581;&#1575;&#1608;&#1604;&#1577; &#1605;&#1580;&#1583;&#1583;&#1575;",
					"help": "&#1605;&#1587;&#1575;&#1593;&#1583;&#1577; &#1608; &#1605;&#1593;&#1604;&#1608;&#1605;&#1575;&#1578; &#1575;&#1590;&#1575;&#1601;&#1610;&#1577;",
					"collapse": "&#1593;&#1585;&#1590; &#1571;&#1608; &#1573;&#1582;&#1601;&#1575;&#1569; &#1575;&#1604;&#1604;&#1575;&#1574;&#1581;&#1577;",
					"closemodal": "&#1582;&#1585;&#1608;&#1580;"
				},
				"pt": {	
					"exit": "Sair",
					"reset": "Atualizar página",
					"help": "Ajuda e instruções",
					"collapse": "Collapse and uncollapse plugins",
					"closemodal": "Fechar"
				}
			},
			templates:{
				"global": {
					buttons: {},
					dialogs: {}, // Global dialogs (can be called through API.show)
					storage: {}, // Global settings (API.set() API.get())
					fn: {}, // Global functions (can be called through API.call)
					unloadFn: {}, // Functions to run when we unload
					helpFn: {},
					resetFn: {},
					closeFn: {}
				}
			},
			debugCallback: null,
			language:'en',
			defaultLanguage: 'en',
			defaultIconMode: 0,
			iconMode: 0 //0 = original icons, 1 = bootstrap icons
		}
	
		AtKit.internal.__resourceURL = AtKit.internal.__baseURL;
		AtKit.internal.__channelURL += AtKit.internal.__channel;
		AtKit.internal.__assetURL = AtKit.internal.__baseURL + "resources/";
		AtKit.internal.versionString = "v" + AtKit.internal.__version.toFixed(1) + "." + AtKit.internal.__build + " (" + AtKit.internal.__channel + " release channel)";
		
		AtKit.internal.__aboutDialog = {
			CSS: {
				"#ATKFBAbout" : "font-family:Helvetica, Verdana, Arial, sans-serif; font-size:12px; color:#364365; direction: ltr; text-align:left",
				"#ATKFBAbout h2" : "border-bottom:1px solid #DDD; font-size:16px; margin-bottom:5px; margin-top:10px; padding-bottom:5px; direction: ltr; text-align:left",
				"#ATKFBAbout p#ATKFBAboutFooter" : "border-top:1px solid #DDD;p adding-top:10px; margin-top:25px;"
			}
		}
		
		// Public object that affects how AtKit behaves. Host toolbar has access to this.
		AtKit.external = AtKit.prototype = {
			transport: 'JSONP', // AJAX transport method.
			window: window, // Reference for the window object we're using.
			global: AtKit.internal.templates.global,
			buttons: {}, // Object for every button. Object with the layout: { identifier: { function: function(), tip: 'tip', state: 'enabled' } }
			languageMap: {}, // Translations
			siteFixes: [] // Contains object for each site {regex: /regex/, function: function()} //
		}
		
		//Default CSS attributes settings that help enhance the interoperability of the toolbar by preventing pages' css form affecting the toolbar's. Add it before you declare any css to any element in the toolbar or dialogs
		default_css = "-webkit-box-sizing: content-box; -moz-box-sizing: content-box; box-sizing: content-box; height:initial; width:initial; margin:0px; padding:0; border:0; vertical-align:baseline; font-size: initial; font: inherit; float:none; line-height:initial; color:initial; background:initial;";
		
		// API object. Everything in here becomes public after AtKit has finished executing
		var API = {
			__env: AtKit.external, // Load public object into API accessible object
			__templates: {
				"barGhost": "<center><img src=\"" + AtKit.internal.__assetURL + "img/loading.gif\" style=\"margin-top:10px;\" /></center>",
				"barFailed": "<center>library loading failed</center>",
				"button": '<li id="at-btn-(ID)"><a href="#ATBarLink" id="at-lnk-(ID)" title="(TITLE)" data-toggle="modal" data-target="(MODAL)"><span title="(TITLE)" id="at-spn-(ID)" class="(CLASS)" style="(COLOUR)" aria-hidden="true">(SRC)</a></div></li>',
				"spacer": '<div class="at-spacer"></div>',
				"separator": '<div class="at-separator at-separator-(ID)"></div>'
			},
			__CSS: {
				//"#sbarGhost, #sbar": default_css,
				//"#sbarGhost *, #sbar *": default_css,
				//"#sbarlogo": default_css + "float:left",
				//"#sbarlogo img": default_css + "margin-top:10px; vertical-align:middle;",
				//"#sbar": default_css + "height:40px; left:0; line-height:40px; margin-left:auto; margin-right:auto; position:fixed; top:0;width:100%; z-index:2147483646; padding:0 5px; background:url(" + AtKit.internal.__assetURL + "img/background.png) repeat-x #EBEAED;",
				//"#sbarGhost": default_css + "height:40px; width:100%;",
				//"#at-collapse": "",
				//".at-spacer": default_css + "display:block; height:40px; width:40px; float:left",
				//".at-separator": default_css + "display:block; height:25px; border-left:2px solid #a9a9a9; margin:7px 1px 4px 7px; float:left;",
				//".at-btn": default_css + "height:28px; width:28px; line-height:14px; text-align:center; color:#FFF; clear:none; margin:5px 0 0 5px;background:url(" + AtKit.internal.__assetURL + "img/button_background.png) no-repeat; float:left;",
				//".at-btn a": default_css + "display:block; height:28px; width:28px; background:transparent; position:inherit;",
				//".at-btn a:active": default_css + "font-size: 100%; font: inherit; border:yellow solid 2px;",
				//".at-btn img": default_css + "padding:6px; default_css + border:none; background:none;",
				//".no-float": "float: none !important;",
				//"#at-btn-atkit-reset, #at-btn-atkit-unload, #at-btn-atkit-help, #at-btn-atkit-toggle": default_css + "height:28px; width:28px; line-height:14px; text-align:center; color:#FFF; clear:none; float:right; margin:5px 10px 0 0; background:url(" + AtKit.internal.__assetURL + "img/button_background.png) no-repeat;",
				"#at-facebox > .at-popup > table .at-fb-tb-body > .at-fb-footer": default_css + "border-top-width: 1px; border-top-style: solid; border-top-color: rgb(221, 221, 221); padding-top:5px; margin-top:10px; display:block; text-align:left;",
				"#at-facebox > .at-popup > table .at-fb-tb-body > .at-fb-footer > a ": default_css + "float: left;",
				"#at-facebox > .at-popup > table .at-fb-tb-body > .at-fb-footer > a > img ": default_css + "float: left;",
				"#at-facebox > .at-popup > table .at-fb-tb-body > .at-fb-content > .user-dialog > h1": default_css + "font-family:Helvetica Neue,Helvetica,Arial,sans-serif; font-size:18pt; font-weight:bold; color:black; display:block; margin:10px 0px 10px 0px;"/*float:left;"*/,
				"#at-facebox > .at-popup > table .at-fb-tb-body > .at-fb-content h1": default_css + "font-family:Helvetica Neue,Helvetica,Arial,sans-serif; font-size:18pt; font-weight:bold; color:black; display:block; margin:10px 0px 10px 0px;"/*float:left;"*/,
				"#at-facebox > .at-popup > table .at-fb-tb-body > .at-fb-content h2": default_css + "font-family:Helvetica Neue,Helvetica,Arial,sans-serif; font-size:16pt; font-weight:bold; color:black; display:block; margin:5px 0px 5px 0px;"/*float:left;"*/,
				"#at-facebox > .at-popup > table .at-fb-tb-body > .at-fb-content p": default_css + "display:block;" /*float:left;"*/,
				"#at-facebox > .at-popup > table .at-fb-tb-body > .at-fb-content > .user-dialog > p": default_css + "display:block;" /*float:left;"*/,
				"#at-facebox > .at-popup > table .at-fb-tb-body > .at-fb-content button": default_css + "font-family:Helvetica Neue,Helvetica,Arial,sans-serif; height:26px; margin:10px; padding:5px; color:white; background-color:#0064CD; border-color:rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.25); text-shadow:0 -1px 0 rgba(0,0,0,0.25); background-image: -webkit-linear-gradient(top, #049cdb, #0064cd); border-radius:4px;",
				"#at-facebox > .at-popup > table .at-fb-tb-body > .at-fb-content label": default_css + "float:left; display:block; margin:0px; margin-right:5px;",
				"#at-facebox > .at-popup > table .at-fb-tb-body > .at-fb-content select": default_css + "border:1px solid black; float:left; display:block;",
				"#at-facebox > .at-popup > table .at-fb-tb-body > .at-fb-content input": default_css + "border:1px solid black; float:left; display:block;",
				"#at-facebox > .at-popup > table .at-fb-tb-body > .at-fb-content select#spellchecksuggestions": default_css + "border:1px solid black; float:none; display:block;width:360px;",
				"#at-facebox > .at-popup > table .at-fb-tb-body > .at-fb-content select#spellcheckmistakes": default_css + "border:1px solid black; float:none; display:block;width:360px;"
			},
			settings: {
				"noiframe": true, // Don't load if we're in an iframe.
				"allowclose": true, // Enable the close button
				"allowreset": true, // Allow the page reset button
				"allowhelp": true, // Allow the page help button
				"isRightToLeft": false, // Switch for changing to right to left orientation
				"logoURL": '',
				"name": '',
				"about": ''
			},
			htmlTags: ["a","abbr","acronym","address","applet","area","article","aside","audio","b","base","basefont","bdi","bdo","big","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","command","datalist","dd","del","details","dfn","dir","div","dl","dt","em","embed","fieldset","figcaption","figure","font","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","map","mark","menu","meta","meter","nav","noframes","noscript","object","ol","optgroup","option","output","p","param","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","strike","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","tt","u","ul","var","video","wbr"],
			version: AtKit.internal.__APIVersion,
			$: '', // Library used for the Toolbar
			plugin: function(name){ return new plugin(name); }
		}

		function plugin(name){
			// Data & settings
			this.name = name;
			this.supportedLanguages = [];
			this.aboutDialog = "";
			this.settings = {};
			this.version = 0;
			var $ = API.$;
			
			// Events
			this.onRender = function($){};
			this.onRun = function($){};
			
			// Register plugin
			this.register = function(){
				AtKit.registerPlugin(this.name, this);
			};
			
			
			// Fired by AtKit when we are ready to render plugin.
			// Don't call this yourself.
			this.run = function(){
				this.onRun($);
			};
			
			// Fired by AtKit when we actually render.
			// Don't call this yourself.
			this.render = function(){
				this.onRender($);
			}
		}
				
		//////////////////////////////
		// Private internal methods //
		//////////////////////////////
		
		// Bootstrap function
		function bootstrap(){
			debug('bootstrapping AtKit ' + AtKit.internal.versionString + '...');
			// If we're invoked already don't load again.
			if( isLoaded() || AtKit.internal.__invoked ) return;
	
			// Don't load if we're not the top window (running in an iframe)
			if(API.settings.noiframe && window != window.top) return;

			if(typeof window['AtKitLoaded'] != "undefined") showLoader();

			// Set window, if we're running in GreaseMonkey, we'll need access to unsafeWindow rather than window.
			if(typeof unsafeWindow == "undefined"){
				AtKit.external.window = window;
			} else {
				AtKit.external.window = unsafeWindow;
				AtKit.external.transport = "GM-XHR";
			}
			
			// Load Library.
			loadLibrary();
		}
		
		function loadLibrary(){
			debug('loadLibrary called');
			// Do we have a jQuery library loaded already?
			
			// load the custom built responsive css. We did not use bootstrap because there might a version conflict
			//attachCss( 'atkit-responsive-css', AtKit.internal.__responsiveCssURL );
			var needToLoadJQuery = true;
			if(typeof window.jQuery != "undefined"){
				try {
					console.log("lol");
					// We need jQuery 1.5 or above. Get the version string.
					jQversion = parseFloat(window.jQuery().jquery.match(/\d\.\d/));
					debug('jQuery already loaded, v' + jQversion);
					console.log(jQversion);
				
					if(jQversion > 1.9) {
						debug('loaded version acceptable, using.');
						API.$ = window.jQuery;
						
						// Load modal.
						//loadModal();
						console.log("versao maior que 1.9");
						broadcastLoaded();
						needToLoadJQuery = false;
					} else {
						window._jQuery = window.jQuery;
						window.jQuery = null;
					}
				} catch(e){}
			} else {
				if(typeof window.$ != "undefined") window._$ = window.$;
			}
			
			if(AtKit.internal.__debug) {
				newVersion = parseFloat(AtKit.internal.__libURL.match(/\d\.\d\d/));
				debug('jQuery not loaded, loading ' + newVersion);
			}
			// jQuery not loaded. Attach.
			
			//attachJS( 'atkit-require-js', AtKit.internal.__requireURL );
			attachCss( 'atkit-bootstrap-css', AtKit.internal.__bootstrapCssURL );
			//attachCss( 'atkit-awesome-fonts-css', AtKit.internal.__awesomeFontsCssURL );


			var loadBootstrap = function() {
				attachJS( 'atkit-bootstrap-js', AtKit.internal.__bootstrapJsURL, function() {} );
				console.log("carregou bootstrap");
			}

			if (needToLoadJQuery) {
				console.log("vai carregar jquery");
				attachJS( 'atkit-jquery', AtKit.internal.__libURL, function() {
					jQversion = parseFloat(window.jQuery().jquery.match(/\d\.\d\d/));
					console.log(jQversion);
					console.log("vai carregar bootstrap");
					//setTimeout(loadBootstrap, 3000);
					attachJS( 'atkit-bootstrap-js', AtKit.internal.__bootstrapJsURL, function() {} );
					attachJS( 'atkit-jquery-ui-js', AtKit.internal.__jQueryUiURL, function() {} );
					console.log("carregou bootstrap");
					//setTimeout(attachJS( 'atkit-bootstrap-js', AtKit.internal.__bootstrapJsURL, function() {} ), 500);
				} );
			}
			else {
				console.log("vai carregar bootstrap 2");
				attachJS( 'atkit-bootstrap-js', AtKit.internal.__bootstrapJsURL, function() {} );
				attachJS( 'atkit-jquery-ui-js', AtKit.internal.__jQueryUiURL, function() {} );
			}

			
			attachCss( 'atkit-responsive-css', AtKit.internal.__responsiveCssURL );
			
			//window.$ = window.jQuery = require(__libURL);
			

			//alert("Script loaded and executed.");
			// here you can use anything you defined in the loaded script
			
			
			
			// load bootstrap
			
			//attachJS( 'atkit-bootstrap-js', AtKit.internal.__bootstrapJsURL );
			//attachCss( 'atkit-bootstrap-css', AtKit.internal.__bootstrapCssURL );
			
			
			// Wait for library to load.
			waitForLib();
		}
		
		function waitForLib(){
			debug('waitForLib invoked');
			// If we are at the max attempt count, stop.
			if( AtKit.internal.__loadAttempts == AtKit.internal.__maxLoadAttempts ) {
				debug('Max load count reached: stopping execution.');
				loadFailed();
				return;
			}
			
			// Check to see if jQuery has loaded. If not set a timer and increment the loadAttempts (so we don't flood the user if site is inacessible)
			if ( typeof window.jQuery == 'undefined' || window.jQuery == null ) {
				debug('waitForLib: jQuery undefined.');
				setTimeout(function(){ waitForLib() }, 100);
				AtKit.internal.__loadAttempts++;
			} else {
				// Bind jQuery to internal namespace.
				API.$ = window.jQuery.noConflict(true);
				
				if(typeof window._jQuery != "undefined") window.jQuery = window._jQuery;
				if(typeof window._$ != "undefined") window.$ = window._$;

				// Load modal.
				//loadModal();
				
				// Once the document is ready broadcast ready event.
				API.$(document).ready(function(){ broadcastLoaded(); });
			}
		}
		
		function loadModal(){

			//initialize modal structure

			API.$("<div>", { id: "at-modal", class: "modal fade", role: "dialog" }).insertAfter("#sbar");
			API.$("<div>", { id: "at-modal-dialog", class: "modal-dialog" }).appendTo("#at-modal");
			API.$("<div>", { id: "at-modal-content", class: "modal-content" }).appendTo("#at-modal-dialog");
			API.$("<div>", { id: "at-modal-header", class: "modal-header" }).appendTo("#at-modal-content");
			API.$("<button>", {id: "at-modal-x-btn" , type:"button", class: "close", 'data-dismiss':"modal" }).appendTo("#at-modal-header");
			API.$("<h1>", { id: "at-modal-title", class: "modal-title" }).appendTo("#at-modal-header");
			API.$("<div>", { id: "at-modal-body", class: "modal-body" }).appendTo("#at-modal-content");
			API.$("<div>", { id: "at-modal-footer", class: "modal-footer" }).appendTo("#at-modal-content");
			API.$("<button>", {id:"at-modal-close-btn", type:"button", class: "btn btn-default", 'data-dismiss':"modal" }).appendTo("#at-modal-footer");

			API.$('#at-modal-close-btn').html(API.localisation("closemodal"));
			API.$('#at-modal-x-btn').html("&times;");

			API.$("#at-modal").draggable({
			    handle: ".modal-header"
			});

			/*API.$("#at-modal").modal({
			  backdrop: false
			});*/

		}

		function broadcastLoaded(){
			debug('broadcastLoaded fired.');
			
			//return API to the global namespace.
			window['AtKit'] = API;
			
			// Send event to the plugin, if a listener has been defined.
			if (typeof window.AtKitLoaded != "undefined") window.AtKitLoaded.fire(null, { version: AtKit.internal.__version });
		}
		
		// AtKit may break some websites. Authors of toolbars are able, through attachSiteFix, fix any issues with sites.
		function siteFixes(){
			debug('siteFixes fired. Running fixes.');
			if(API.__env.siteFixes.length == 0) return;
			for(fix in API.__env.siteFixes){
				var sf = API.__env.siteFixes[fix];
				if( sf.regex.test() ){
					sf.f();
				}
			}
		}
		
		function renderButton(ident){
			debug('renderButton fired for ident ' + ident + '.');
			// Pull down the template.
			var b = API.__templates.button;
			
			// Replace in the template.
			b = b.replace(/\(ID\)/ig, ident);
			b = b.replace(/\(TITLE\)/ig, API.__env.buttons[ident].tooltip);
			b = b.replace(/\(SRC\)/ig, (AtKit.internal.iconMode === 0 || !API.__env.buttons[ident].cssClass) ? "<img src="+ API.__env.buttons[ident].icon +" class='at-btn-icon'/></img>" : "");
			b = b.replace(/\(CLASS\)/ig, (AtKit.internal.iconMode === 1) ? API.__env.buttons[ident].cssClass : "");
			b = b.replace(/\(COLOUR\)/ig, (AtKit.internal.iconMode === 1 && API.__env.buttons[ident].colour) ? "color:"+API.__env.buttons[ident].colour : "");
			b = b.replace(/\(MODAL\)/ig, (API.__env.buttons[ident].modal) ? "#at-modal" : "");

			// jQuery'ify
			b = API.$(b);
	
			// Bind the click event and pass in reference to the button object
			b.children('a').bind('click touchend', { button: API.__env.buttons[ident] }, function(button){
				try {
					API.__env.buttons[ident].action(button.data.button.dialogs, button.data.button.functions);
				} catch (err){
					if(AtKit.internal.__debug) debug(err);
				}
				
				button.preventDefault();
			});
			
			// Emulate CSS active, hover, etc.
			b.children('a').bind('focus', function(){
				//API.$(this).attr('style', API.$(this).attr('style') + API.__CSS[".at-btn a:active"]);
			});
			
			b.children('a').bind('focusout', function(){
				//API.$(this).attr('style', API.__CSS[".at-btn a"]);
			});
			
			// Commit the HTML
			API.__env.buttons[ident].HTML = b;
	
			// Return the HTML
			return API.__env.buttons[ident].HTML;
		}
		
	
		// Private function used to actually start the toolbar.
		function start(){
			
			
			// If we're already invoked ignore.
			if( AtKit.internal.__invoked ) return;
			
			if(API.$("#sbarGhost").length == 0) showLoader();

			// Insert the bar holder 
			//API.$( API.$('<div>', { id: 'sbar' }) ).insertAfter("#sbarGhost");
			API.$( API.$('<nav>', { id: 'sbar', class: 'navbar navbar-default navbar-fixed-top' }) ).insertAfter("#sbarGhost");

			// Load modal.
			loadModal();
			
			// Insert the logo.
			
			// Are we in RTL mode? Work out where we should be positioned.
			var align = API.settings.isRightToLeft ? "right" : "left";
			
			/*API.$(
				API.$("<a>", { id: 'sbarlogo', click: function(){ showAbout() } }).append(
					API.$("<img>", { "src": API.settings.logoURL, "align": align, "border": "0", "title": API.settings.name + "Logo", "alt": API.settings.name + "Logo", "style": "margin-top:10px;float:" + align }) 
				)
			).appendTo('#sbar');*/
			API.$(
				API.$("<a>", { id: 'sbarlogo', class: 'navbar-brand', 'data-toggle':"modal", 'data-target':"#at-modal", click: function(){ showAbout() } }).append(
					API.$("<img>", { "src": API.settings.logoURL, "title": API.settings.name + "Logo", "alt": API.settings.name + "Logo" }) 
				)
			).appendTo('#sbar');
			
			API.$("<img>", { "src": "https://misc.services.atbar.org/stats/stat.php?channel=" + AtKit.internal.__channel + "-" + API.settings.name + "&version=" + AtKit.internal.__version.toFixed(1) + "." + AtKit.internal.__build, "alt": " " }).appendTo("#sbar");
			
			// add the help button (if we have been told to use this)
			if( API.settings.allowhelp ){
				API.addButton('atkit-help', API.localisation("help"), AtKit.internal.__assetURL + 'img/help.png', function(){ API.help(); }, null, null, {'cssClass':'glyphicon glyphicon-question-sign', 'allign':'right'});
			}

			// add the reset button (if we have been told to use this)
			if( API.settings.allowreset ){
				API.addButton('atkit-reset', API.localisation("reset"), AtKit.internal.__assetURL + 'img/reset.png', function(){ API.reset(); }, null, null, {'cssClass':'glyphicon glyphicon-retweet', 'allign':'right'});
			}

			// add the close button (if we have been told to use this)
			if( API.settings.allowclose ){
				API.addButton('atkit-unload', API.localisation("exit"), AtKit.internal.__assetURL + 'img/close.png', function(){ API.close(); }, null, null, {'cssClass':'glyphicon glyphicon-remove', 'allign':'right'});
			}
			
			var ulPluginsClass = API.settings.isRightToLeft ? "nav navbar-nav navbar-right" : "nav navbar-nav";
			var ulOtherButtonsClass = API.settings.isRightToLeft ? "nav navbar-nav" : "nav navbar-nav navbar-right";

			// Add a collapsible container before adding the plugin buttons.
			//API.$( API.$('<div>', { id: 'at-collapse' }) ).appendTo("#sbar");
			API.$(
				API.$("<div>", { id: 'at-collapse-parent', class: 'navbar-collapse collapse in', 'aria-expanded':"true" }).append(
					API.$("<ul>", { id: 'at-collapse', class: ulPluginsClass}) 
				)
			).appendTo('#sbar');

			API.$("<ul>", { id: "at-right-buttons", class: ulOtherButtonsClass }).appendTo("#at-collapse-parent");
			
			// Add a button that collapses the toolbar plugin buttons when in small devices.
			/*API.$("<button>", {type:"button", id: "at-btn-atkit-toggle", class: "navbar-toggle collapsed", "data-toggle":"collapse", "data-target":"#at-collapse-parent", "aria-expanded":"false", "aria-controls":"at-collapse-parent" }).appendTo("#sbar");
			API.$("<span>", { class: "sr-only"}).appendTo("#at-btn-atkit-toggle");
			API.$("<span>", { class: "icon-bar"}).appendTo("#at-btn-atkit-toggle");
			API.$("<span>", { class: "icon-bar"}).appendTo("#at-btn-atkit-toggle");
			API.$("<span>", { class: "icon-bar"}).appendTo("#at-btn-atkit-toggle");*/


			/*API.addButton('atkit-toggle', API.localisation("collapse"), AtKit.internal.__assetURL + 'img/collapse.gif', function(){
				if($('#at-collapse').is(':visible'))
				{
					$('#at-collapse').slideUp('fast', function(){
						$('#at-collapse').addClass('at-hidden');
						$('#at-collapse').removeClass('at-visible');
					});
				}
				else
				{
					$('#at-collapse').slideDown('fast', function(){
						$('#at-collapse').addClass('at-visible');
						$('#at-collapse').removeClass('at-hidden');
					});
				}
			}, null, null, {'cssClass':'fright'});*/
			
			// Add buttons. Only add the plugin buttons to the collapsible div
			for(b in API.__env.buttons){
				var btn = API.$( renderButton(b) );
				if(API.__env.buttons[b].allign == 'right') {
					if (API.settings.isRightToLeft)
						$lib( "#at-right-buttons" ).prepend( btn );
					else
						btn.appendTo('#at-right-buttons');
				}	
				else {
					if (API.settings.isRightToLeft)
						$lib( "#at-collapse" ).prepend( btn );
					else
						btn.appendTo('#at-collapse');
				}	
			}
			
			// Apply CSS
			applyCSS();
			
			// Apply site fixes
			siteFixes();

			// IE 6 fix
			if ( API.$.browser == "msie" && API.$.browser.version == 6 ) {
				API.$('#sbarGhost').remove();
			} else {
				API.$('#sbarGhost').html("&nbsp;");
			}
			
			// Set state to invoked.
			AtKit.internal.__invoked = true;

			// Set unload function
			API.__env.global.unloadFn['default'] = function(){
				API.$('#sbarGhost, #sbar').remove();
			}
			
			API.__env.global.resetFn['default'] = function(){
				location.reload(true);
			}
			
			API.$('body').trigger('AtKitRenderComplete');
		}
		
		// Apply the CSS rules that have been defined
		function applyCSS(obj){
			var cssObj = (typeof obj == "undefined") ? API.__CSS : obj;

			for(c in cssObj){
				if(/:active/.test( c ) || API.$( c ).length == 0) continue;
				try {		
					// Get CSS item
					var property = cssObj[c];

					// Are we running in RTL mode?
					if(API.settings.isRightToLeft) {
						var floatRight = "float:right";
						var floatLeft = "float:left";

						// Does the string contain floatleft?
						if(property.indexOf(floatLeft) != -1){
							var match = new RegExp(floatLeft, "gi");
							property = property.replace(match, floatRight);
						} else if(property.indexOf(floatRight) != -1){
							// Does it contain floatright? if so switch.
							var match = new RegExp(floatRight, "gi");
							property = property.replace(match, floatLeft);
						}
					}
					
					// Apply the CSS
					API.$( c ).attr('style', property);
				} catch(e){
					debug(e.description);	
				}
			}
		}
		
		// Shut down the toolbar
		function stop(){

			//first, remove tooltips
			var tooltips = document.getElementsByClassName("tooltip fade bottom in");

			while (tooltips.length > 0) {
				tooltips[0].parentNode.removeChild(tooltips[0]);
			}

			// Run unload functions
			for(f in API.__env.global.unloadFn){
				API.__env.global.unloadFn[f]();
			}
			
			// Cleanup.
			
			// Reset language
			AtKit.internal.language = AtKit.internal.defaultLanguage;
			
			// Reset debug callback
			AtKit.internal.debugCallback = null;
			
			// Reset any stored global settings.
			API.__env.global = AtKit.internal.templates.global;
			
			// Reset buttons.
			API.__env.buttons = {};
			
			// Reset any language maps defined.
			API.__env.languageMap = {};
			
			// Reset site fixes.
			API.__env.siteFixes = [];
			
			// Reset plugins
			AtKit.internal.plugins = {};
			
			// Set not invoked.
			AtKit.internal.__invoked = false;
		}
		
		function showAbout(){
			// Create the dialog
			AtKit.internal.__aboutDialog.HTML = "";
			
			// Append user text
			AtKit.internal.__aboutDialog.HTML += "<p id='ATKFBUserSpecifiedAbout'>" + API.settings.about + "</p>";
			
			// Append AtKit text
			AtKit.internal.__aboutDialog.HTML += "<p id='ATKFBAboutFooter'>Powered by AtKit " + AtKit.internal.versionString;

			var plugins = API.listPlugins();
			
			if(plugins.length > 0){
				AtKit.internal.__aboutDialog.HTML += "<br /> Registered plugins: ";

				plugins.map(function(el, index, fullList){
					AtKit.internal.__aboutDialog.HTML += "<button class='btn btn-default'>" + el + "</button>";
				});
			}
			
			AtKit.internal.__aboutDialog.HTML += "</p>";
			
			// Convert to jQuery object & wrap
			AtKit.internal.__aboutDialog.HTML = API.$("<div>", { id: "ATKFBAbout" }).append(AtKit.internal.__aboutDialog.HTML);

			API.message("About " + API.settings.name, AtKit.internal.__aboutDialog.HTML);
			applyCSS(AtKit.internal.__aboutDialog.CSS);
		}
		
		function debug(msg){
			if(!AtKit.internal.__debug) return;
			if(AtKit.internal.debugCallback != null) {
				AtKit.internal.debugCallback(msg);
			} else {
				if(typeof console != "undefined") console.log(msg);
			}
		}

		// Functions below here (but above the API functions) run with NO jQuery loaded.
		
		// checks to see if the sbar element is loaded into the DOM.
		function isLoaded(){
			if(document.getElementById('sbar') != null) return true;
			return false;
		}
	
		// show the loading div, defined in templates variable in the API.
		function showLoader(){
			// Create the div for the AtKit ghost.
			barGhost = document.createElement('div');
			// Set the ID of the toolbar.
			barGhost.id = "sbarGhost";
			barGhost.innerHTML = API.__templates.barGhost;
			
			if(document.body != null){
				document.body.insertBefore(barGhost, document.body.firstChild);
			} else {
				var bodyCheck = setInterval(function(){
					if(document.body != null){
						// Insert it as the first node in the body node.
						document.body.insertBefore(barGhost, document.body.firstChild);
						clearInterval(bodyCheck);
					}
				}, 100);
			}
			
		}
	
		// Attach a javascript file to the DOM
		function attachJS(identifier, url, callback){
			var j = document.createElement("script");
			j.src = url;
			j.type = "text/javascript";
			j.id = identifier;
			var script = document.getElementsByTagName('head')[0].appendChild(j);
			script.onload = callback;
			script.onreadystatechange = function() {
		        if (this.readyState == 'complete') {
		            callback();
		        }
		    }
		}
		
		// Attach a CSS file to the DOM
		function attachCss(identifier, url){
			var j = document.createElement("link");
			j.href = url;
			j.rel = "stylesheet";
			j.type = "text/css";
			j.id = identifier;
			document.getElementsByTagName('head')[0].appendChild(j);	
		}
		
		// Called when loading of the library failed and we've given up waiting.
		function loadFailed(){
			bar = document.getElementById('sbarGhost');
			
			bar.innerHTML = API.__templates.barFailed;
			
			setTimeout(function(){
				body = document.getElementsByTagName('body');
				bar = document.getElementById('sbarGhost');
				body[0].removeChild(bar);
			}, AtKit.internal.__errorMessageTimeout );
		}
			
		
		/////////////////////////
		// API functions below //
		/////////////////////////
		
		API.getVersion = function(){
			return AtKit.internal.__version.toFixed(1) + "." + AtKit.internal.__build;
		}
		
		API.isRendered = function(){
			return AtKit.internal.__invoked;
		}

		API.g = function(){
			return AtKit.internal.__resourceURL;
		}
		
		API.getResourceURL = function(){
			return AtKit.internal.__resourceURL;
		}
		
		API.getChannelURL = function(){
			return AtKit.internal.__channelURL;
		}
		
		API.getPluginURL = function(){
			return AtKit.internal.__pluginURL;
		}
		
		// Set toolbar name
		API.setName = function(name){
			API.settings.name = name;
		}
		
		API.setAbout = function(aboutText) {
			API.settings.about = aboutText;
		}
		
		// Set toolbar logo
		API.setLogo = function(logo){
			API.settings.logoURL = logo;
		}
		
		// Set whether the toolbar is running in RTL mode.
		API.setIsRightToLeft = function(isRTL){
			API.settings.isRightToLeft = isRTL;
		}
		
		// Add a CSS rule. Identifier is a jQuery selector expression, eg #bar. inlineStyle appears in the style attr in the DOM.
		API.setCSS = function(identifier, inlineStyle){
			API.__CSS[identifier] = inlineStyle;
		}
		
		API.getHtmlTags = function(){
			return API.htmlTags;
		}
		
		// Set whether the toolbar is running in RTL mode.
		API.setIsRightToLeft = function(isRTL){
			API.settings.isRightToLeft = isRTL;
		}
		
		// Set the language that this toolbar uses
		API.setLanguage = function(language) {
			AtKit.internal.language = language;
		}
		
		API.getLanguage = function(){
			return AtKit.internal.language;
		}
		
		// Add a localisation string (value) referenced by key for the language specified in cc.
		API.addLocalisation = function(cc, key, value){
			AtKit.internal.localisations[cc][key] = value;
		}
		
		API.addLocalisationMap = function(cc, map){
			AtKit.internal.localisations[cc] = API.$.extend(true, AtKit.internal.localisations[cc], map);
		}
		
		// Get a localisation string.
		API.localisation = function(key){
			if(typeof AtKit.internal.localisations[AtKit.internal.language] == "undefined") return AtKit.internal.localisations[AtKit.internal.defaultLanguage][key];
			if(typeof AtKit.internal.localisations[AtKit.internal.language][key] == "undefined") return "{no value set for key " + key + " in language " + AtKit.internal.language + "}";
			return AtKit.internal.localisations[AtKit.internal.language][key];
		}
		
		// Add a site fix.
		API.addFix = function(regex, f){
			API.__env.siteFixes.push({ 'regex': regex, 'f': f });
		}
		
		// Attach a JS file to the current document using jQuery, or if not loaded, the native function we have.
		API.addScript = function(url, callback){
			if(typeof API.$ != "undefined"){
				if(API.$('script[src="' + url + '"]').length > 0) return;
				
				API.$.getScript(url, callback);
			} else {
				attachJS("", url);
			}
		}

		API.addStylesheet = function(url, id){
			API.$('head').append(
				API.$('<link>', { "rel": "stylesheet", "href": url, "type": "text/css", "id": id })
			);
		}
		
		// Add a global function
		API.addFn = function(identifier, fn){
			API.__env.global.fn[identifier] = fn;
		}
		
		// Add a function to be run on exit.
		API.addCloseFn = function(identifier, fn){
			API.__env.global.closeFn[identifier] = fn;
		}
		
		API.addResetFn = function(identifier, fn){
			API.__env.global.resetFn[identifier] = fn;
		}
		
		API.addHelpFn = function(identifier, fn){
			API.__env.global.helpFn[identifier] = fn;
		}
		
		// Add a global dialog
		API.addDialog = function(identifier, title, body){
			API.__env.global.dialogs[identifier] = { 'title': title, 'body': body }
		}	
		
		// Attach a button to the toolbar
		// Assets should be an object containing any dialogs that will be shown with modal, as well a
		API.addButton = function(identifier, tooltip, icon, action, dialogs, functions, options){
			if(typeof API.__env.buttons[identifier] != "undefined") return;
			API.__env.buttons[identifier] = { 'icon': icon, 'tooltip': tooltip, 'action': action, 'dialogs': dialogs, 'functions': functions };
			
			if(options != null) API.__env.buttons[identifier] = API.$.extend(true, API.__env.buttons[identifier], options);
			else console.log("nao tem options");
	
			if(AtKit.internal.__invoked){
				//If the toolbar buttons have already been rendered
				API.$( renderButton(identifier) ).appendTo('#at-collapse');
				applyCSS();
			}
		}
		
		// Remove a button from the toolbar
		API.removeButton = function(identifier){
			delete API.__env.buttons[identifier];
			
			if(AtKit.internal.__invoked){
				debug('remove button ' + identifier);
				// If we've already been rendered we need to remove it from the DOM, too.
				API.$("#at-btn-" + identifier).remove();
			}
		}	
		
		// Adds a spacer - a gap the size of a button
		API.addSpacer = function(width){
			if(typeof width == "undefined"){
				API.$(API.__templates.spacer).appendTo('#sbar');
			}
			
			if(!isNaN(width)){
				for(i = 0; i < width; i++){
					API.$(API.__templates.spacer).appendTo('#sbar');
				}
			}
			applyCSS();
		}
		
		// Adds a separator - a line between buttons
		API.addSeparator = function(ident){
			if(typeof ident == "undefined"){
				ident = "separator" + Math.floor((Math.random()*999)+1);
			}
			
			// Pull down the template.
			var s = API.__templates.separator;
			s = s.replace(/\(ID\)/ig, ident);
			
			// jQuery'ify
			s = API.$(s);	
			//s.appendTo('#sbar'); Separators are now added to the collapsible area
			s.appendTo('#at-collapse');
			applyCSS();
		}
		
		// Remove a separator with class from the toolbar
		API.removeSeparator = function(ident){
			if(AtKit.internal.__invoked){
				debug('remove separator ' + ident);				
				API.$(".at-separator-" + ident).each(function() {
					this.remove();
				});			
			}
		}	

		// Load code for plugins
		API.importPlugins = function(plugins, callback){
			var pluginString = (plugins instanceof Array) ? plugins.join(",") : plugins;
			
			API.addScript(AtKit.internal.__pluginURL + pluginString + ".js", callback);
		}		
		
		// Add plugin to rendering queue.
		API.addPlugin = function(identifier){
			AtKit.internal.plugins[identifier]["payload"]();
		}
		
		// Register a plugin (called by plugin)
		API.registerPlugin = function(identifier, plugin, metadata){
			AtKit.internal.plugins[identifier] = { "payload": plugin, "metadata": metadata };
		}
		
		// Return an array of plugin names.
		API.listPlugins = function(){
			var pluginList = new Array();
			for(p in AtKit.internal.plugins) pluginList.push(p);
			
			return pluginList;
		}

		API.getPluginMetadata = function(plugin){
			return AtKit.internal.plugins[plugin]["metadata"];
		}
		
		// Pass in a dialog and we'll format it and show to the users.
		API.show = function(dialog, callback){
			API.$("#at-modal-title").html(""); //clear everything to avoid bugs
			API.$("#at-modal-title").html(dialog.title);
			API.$("#at-modal-body").html(""); //clear everything to avoid bugs
			API.$("#at-modal-body").html(dialog.body);
		}
		
		// Show message not stored in a dialog object.
		API.message = function(title, data, callback){
			API.$("#at-modal-title").html(""); //clear everything to avoid bugs
			API.$("#at-modal-title").html(title);
			API.$("#at-modal-body").html(""); //clear everything to avoid bugs
			API.$("#at-modal-body").html(data);
		}
		
		API.hideDialog = function(){
			API.$('#at-modal').modal('hide');
			API.$("#at-modal-title").html("");
			API.$("#at-modal-body").html("");
		}
		
		// Call a global function
		API.call = function(identifier, args){
			return API.__env.global.fn[identifier](args);
		}
	
		// Set session storage variable k to v.
		API.set = function(k, v){
			API.__env.global.storage[k] = v;
		}
		
		// Get session storage variable set to k.
		API.get = function(k){
			return API.__env.global.storage[k];
		}
		
		// Is HTML5 localstorage available?
		API.storageAvailable = function(){
			return (typeof window.localStorage) ? true : false;
		}
		
		// HTML5 LocalStorage
		// AtKit.storage(k[, v]);
		API.storage = function(key, value){
			if( !API.storageAvailable() ) return false;
			
			var namespaceKey = AtKit.internal.__localStorageNamespace + API.settings.name + "_" + key;

			if(typeof value == "undefined"){
				return window.localStorage.getItem(namespaceKey);
			} else {
				window.localStorage.setItem(namespaceKey, value);
				return true;
			}
		}

		API.clearStorage = function(){
			if( !API.storageAvailable() ) return;

			var namespaceKey = AtKit.internal.__localStorageNamespace + API.settings.name;
			var exp = new RegExp('^' + namespaceKey + '.*');
			
			for(s in window.localStorage){
				if( s.match(exp) ){
					window.localStorage.removeItem(s);
				}
			}
		}
		
		API.setDebugger = function(fn){
			AtKit.internal.debugCallback = fn;
		}

		// Return library.
		API.lib = function(){
			if(typeof API.$ == 'function') return API.$;
			if(typeof API.$ == 'string' && typeof window.jQuery == 'function') return window.jQuery;
			return false;
		}

		// Set the icon mode. If iconMode is 0, the original icons will be used. If iconMode is 1, the bootstrap icons will be used
		// Any other value will be understood as the default mode
		API.setIconMode = function(iconMode){
			if (iconMode === 0 || iconMode === 1)
				AtKit.internal.iconMode = iconMode;
			else
				AtKit.internal.iconMode = AtKit.internal.defaultIconMode;
		}
		
		// Toolbar calls this to render the bar.
		API.render = function(){
			start();
		}
		
		// Called to close the toolbar
		API.close = function(){
			stop();
		}

		API.reset = function(){
			for(f in API.__env.global.resetFn){
				API.__env.global.resetFn[f]();
			}
			AtKit.internal.__invoked = false;
		}
		
		API.help = function(){
			window.open("http://" + AtKit.internal.language + ".wiki.atbar.org/", "_blank");
		}
		
		// Bootstrap the application
		bootstrap();
		
		return API;
	});

window['AtKit'] = new AtKit();

})(window);
