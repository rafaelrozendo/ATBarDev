if(typeof window['AtKit'] == "undefined"){
	// Load AtKit
	d=document;
	//jf1=d.createElement('script');jf1.src='http://localhost/production/core/resources/jquery/1.9.1/jquery.min.js';jf1.type='text/javascript';jf1.id='AtKitLib';d.getElementsByTagName('head')[0].appendChild(jf1);
	jf=d.createElement('script');jf.src='http://localhost/production/core/atkit/dev/atkit2.js';jf.type='text/javascript';jf.id='AtKitLib';d.getElementsByTagName('head')[0].appendChild(jf); 

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
	window['AtKitLoaded'].subscribe(function(){ __start(); });
} else {
	__start();
}

function __start(){
		
	// Start toolbar code
	(function (window, AtKit) { 

		$lib = AtKit.lib();
		
		var settings = {
			'version': '2.2.0 Dev'
		};
		
		settings.resources = 'http://localhost/production/core/resources/';
		
		var plugins = ["resize", "fonts", "spellngpt", "dictionary", "espeak-tts", "readability", "wordprediction-pt","css", "shortcutkeys", "tooltip", "overlay"];
		
		var onLoad = function(){
		
			// Set our logo
			AtKit.setLogo(settings.resources + "img/atbar-beta.png");
			AtKit.setName("ATBarPortuguese");
			
			AtKit.setLanguage("pt");
	
			var about = "Version " + settings.version;
			about += "<p style=\"line-height:120%\">Criado por <a href='http://seb.skus.es'>Sebastian Skuse</a>, <a href='http://www.ecs.soton.ac.uk/people/mpw'>Magnus White</a> e o <a href='http://access.ecs.soton.ac.uk'>Time de Acessibilidade</a>. Web and Internet Science, ECS<br> &copy; University of Southampton 2010-2013.";
			about += "<br><br>";
			about += "Fugue Icons &copy; <a href='http://www.pinvoke.com'>pinvoke</a> sob Creative Commons licence.<br>";
			about += "Dicionário &copy; <a href='http://en.wiktionary.org'>Wiktionary</a> sob Creative Commons licence.<br>";
			about += "<a href='http://famspam.com/facebox/'>Facebox</a> jQuery plugin &copy; Chris Wanstrath sob MIT licence<br>";
			about += "Porções da engine de soletração &copy; <a href=\"http://brandonaaron.net\">Brandon Aaron</a> sob MIT licence.<br>";
			about += "Predição de palavras fornecida por <a href='http://www.aitype.com/'>AIType</a>.<br>";
			about += "Text-to-Speech fornecido por <a href='http://www.acapela-group.com/'>Acapela Group</a>.";
			about += "</p>";
			
			AtKit.setAbout(about);
			
			// Add all the plugins to the toolbar
			
			$lib.each(plugins, function(i, v){
				AtKit.addPlugin(v);
			});

			AtKit.addResetFn('reset-saved', function(){
				AtKit.clearStorage();
				
				if(typeof localStorage != null) localStorage.removeItem("ATBarAutoLoad");
			});	
			
			AtKit.addCloseFn('close-saved', function(){
				if(typeof localStorage != null) localStorage.removeItem("ATBarAutoLoad");
			});	
		
			// Run
			//AtKit.setIconMode(1);
			AtKit.render();
			
			// Select the first button.
			$lib('.at-btn:first a').focus();
			
			// Save state
			if(typeof localStorage != null) localStorage.setItem("ATBarAutoLoad", 1);
		};
		
		
		AtKit.importPlugins(plugins, onLoad);
		
		
	}(window, AtKit));

}
