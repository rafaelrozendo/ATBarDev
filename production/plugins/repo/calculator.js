(function(){

	var pluginName = "calculator";
	var plugin = function(){
		
		// Internationalisation
		AtKit.addLocalisationMap("en", {
			"calculator_title" : "Start calculator"
		});
		
		// Spell checker
		AtKit.addButton(
			'calculator', 
			AtKit.localisation("calculator_title"),
			AtKit.getPluginURL() + 'images/calculator.png',
			function(dialogs, functions){


    			var window_open = window.open('', 'calculator' + new Date().getTime(), 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=yes,copyhistory=no,width=450,height=300');
    			var document_open = window_open.document;
    			document_open.open();
    			document_open.write("<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\">\n<html>\n<head>\n<title>Scientific Calculator</title>\n<meta name=\"description\" content=\"Javascript calculator with calculation history, math functions, hexadecimal, octal, and scientific notation.\">\n<meta name=\"keywords\" content=\"calculator, octal calculator, binary calculator, hexidecimal calculator, hexadecimal calculator, calc, calculate, calculater, scientific calculator, hex calculator, scientific notation calculator, javascript calculator, java script calculator, freeware calculator, free calculator, online calculator, calculater\">\n<link rel=\"shortcut icon\" href=\"http://ostermiller.org/favicon.ico\" type=\"image/x-icon\">\n<link rel=\"shortcut icon\" href=\"http://ostermiller.org/calc/calculator.ico\" type=\"image/x-icon\">\n<script language=javascript type=\"text/javascript\"><!--\nvar bo=\'\';var da=\'\';var bm=\'\';var bn=\'\'\nvar br=false;var bg=1;var ck=\'(?:[0-9a-fA-F])\';var cb=\'(?:[0-9])\';var co=\'(?:[0-7])\';var cn=\'(?:[1-9])\';var cr=\'(?:[\\+]|[\\-])\';var ca=\'(?:(?:[0]|\'+cn+cb+\'*))\';var cp=\'(?:[0]\'+co+\'*)\';var cl=\'(?:[0](?:[x]|[X])\'+ck+\'+)\';var credInt=\'(?:\'+cr+\'?\'+cb+\'+)\';var cc=\'(?:[e]|[E])\';var cd=\'(?:\'+cc+credInt+\')\';var ce1=\'(?:\'+cb+\'+[\\.]\'+cb+\'*\'+cd+\'?)\';var cg=\'(?:[\\.]\'+cb+\'+\'+cd+\'?)\';var ch=\'(?:\'+cb+\'+\'+cd+\')\';var ci=\'(?:\'+cb+\'+)\';var ce=\'(?:\'+ce1+\'|\'+cg+\'|\'+ch+\'|\'+ci+\')\';var cv1=\'(?:[0]+[\\.][0]*\'+cd+\'?)\';var cx=\'(?:[\\.][0]+\'+cd+\'?)\';var cv3=\'(?:[0]+\'+cd+\')\';var cv4=\'(?:[0]+)\';var cv=\'(?:\'+cv1+\'|\'+cx+\'|\'+cv3+\'|\'+cv4+\')\';var ct=\'(?:[\\n\\ \\t])\';var cq=\'(?:[\\(\\)\\+\\-\\/\\*\\|\\&\\,\\~\\^]|\\<\\<|\\>\\>|\\>\\>\\>|\\%)\'\nvar cm=\'(?:E|LN10|LN2|LOG10E|LOG2E|PI|SQRT1_2|SQRT2|abs|acos|asin|atan2|atan|ceil|cos|exp|floor|log|max|min|pow|random|round|sin|sqrt|tan)\'\nvar cj=\'(?:(?:Math[\\.]\'+cm+\')|\'+cm+\')\';var bz=new RegExp(\n cl+\'|\'+cp+\'|\'+ce+\'|\'+ca+\'|\'+\n cv+\'|\'+ct+\'|\'+cq+\'|\'+cj+\'|ans\',\'g\'\n);var E=Math.E;var LN10=Math.LN10;var LN2=Math.LN2;var LOG10E=Math.LOG10E;var LOG2E=Math.LOG2E;var PI=Math.PI;var SQRT1_2=Math.SQRT1_2;var SQRT2=Math.SQRT2;function abs(x){return Math.abs(x);}\nfunction acos(x){return Math.acos(x);}\nfunction asin(x){return Math.asin(x);}\nfunction atan(x){return Math.atan(x);}\nfunction atan2(x){return Math.atan2(x);}\nfunction ceil(x){return Math.ceil(x);}\nfunction cos(x){return Math.cos(x);}\nfunction exp(x){return Math.exp(x);}\nfunction floor(x){return Math.floor(x);}\nfunction log(x){return Math.log(x);}\nfunction max(x,y){return Math.max(x,y);}\nfunction min(x,y){return Math.min(x,y);}\nfunction pow(x,y){return Math.pow(x,y);}\nfunction random(){return Math.random();}\nfunction round(x){return Math.round(x);}\nfunction sin(x){return Math.sin(x);}\nfunction sqrt(x){return Math.sqrt(x);}\nfunction tan(x){return Math.tan(x);}\nfunction an(s){\n var r=new RegExp(\"^((?:[a]|[^a])*)0[bB]([01]{1,32})((?:[a]|[^a])*)$\"); while(r.exec(s)){\n s=RegExp.$1+\" \"+ah(RegExp.$2)+\" \"+RegExp.$3; }\n return s;}\nfunction am(s){\n var r=new RegExp(\"^((?:[a]|[^a])*)ans((?:[a]|[^a])*)$\"); while(r.exec(s)){\n s=RegExp.$1+\" \"+da+\" \"+RegExp.$2; }\n return s;}\nfunction ag(){\n var ba=document.calculator.line.value; var bq=am(ba); bq=an(bq); if(bq!=bn&&bq!=bm&&!br){\n var bv=bq.split(bz); var bw=0; for(var k=0;k<bv.length;k++){\n if(bv[k].length!=0){\n bw++; }\n }\n if(bw==0){\n try{\n var aw=\'\'+eval(bq); if(aw!=undefined){\n bo=aw; da=aw; bm=\'\'; af(); aa(ba); ao(); }\n }catch(ex){\n alert(\'Error type: \'+ex.name+\'\\n\'+\'Error message: \'+ex.message); bm=document.calculator.line.value; }\n }else{\n alert(bw+\' unknown tokens:\\n\'+bv); bm=document.calculator.line.value; }\n document.calculator.line.focus(); }\n}\nfunction aj(){\n if(bn!=document.calculator.line.value){\n bo=\'\'; }\n}\nfunction af(){\n if(bo!=\'\'){\n var db=document.calculator.display.selectedIndex; var bj=parseInt(bo); var bd=parseFloat(bo); var dj=\'\'; if(\'\'+bd!=\'NaN\'&&db==1){\n dj=at(bo,false); }else if(\'\'+bd!=\'NaN\'&&db==2){\n dj=at(bo,true); }else if(\'\'+bj!=\'NaN\'&&db==3){\n dj=ar(bj); }else if(\'\'+bj!=\'NaN\'&&db==4){\n dj=as(bj); }else if(\'\'+bj!=\'NaN\'&&db==5){\n dj=aq(bj); }else{\n dj=round_extra_sf(bd); }\n bn=dj; document.calculator.line.value=dj; bg=1; document.calculator.line.style.backgroundColor=\'#aacc99\'; }else{\n document.calculator.line.style.backgroundColor=\'#cccc99\'; }\n}\nfunction round_extra_sf(f){\nvar s=f.toPrecision(14); s=s.replace(/^([\\+\\-0-9\\\\.]*[1-9\\.])0+((?:e[0-9\\+\\-]+)?)$/g,\'$1$2\'); s=s.replace(/\\.((?:e[0-9\\+\\-]+)?)$/g,\'$1\');return s;}\nfunction at(s,eng){\n var df=0; var bl=false; if(s.length>0&&s.charAt(0)==\'-\'){\n bl=true; s=s.substring(1,s.length); }\n var cu=s.split(new RegExp(\'[eE]\')); if(cu.length>1){\n df=parseInt(cu[1]); s=cu[0]; }\n cu=s.split(/[\\.]/); if(cu.length>1){\n s=cu[0]+cu[1]; df+=cu[0].length-1; }else{\n df+=s.length-1; }\n var bp=0; for(bp=0;bp<s.length&&s.charAt(bp)==\'0\';bp++){\n df=df-1; }\n s=s.substring(bp,s.length); var bs; if(eng){\n if(df>=0){\n bs=(df%3)+1; }else{\n bs=4-((-df)%3); if(bs==4){\n bs=1; }\n }\n df-=(bs-1); }else{\n bs=1; }\n var dk=\'\'; for(var i=s.length;i<bs;i++){\n dk+=\'0\'; }\n return(\n (bl?\'-\':\'\')+\n ((s.length==0)?\'0\':s.substring(0,bs))+\n ((s.length<=bs)?dk:(\'.\'+s.substring(bs,s.length)))+\n ((s.length==0||df==0)?\'\':(\'e\'+df))\n );}\nvar bb=new Array(\'0\',\'1\',\'2\',\'3\',\'4\',\'5\',\'6\',\'7\',\'8\',\'9\',\'a\',\'b\',\'c\',\'d\',\'e\',\'f\');function ar(n){\n var be=\'\'\n var di=true; for(var i=32;i>0;){\n i-=4; var by=(n>>i)&0xf; if(!di||by!=0){\n di=false; be+=bb[by]; }\n }\n return \'0x\'+(be==\'\'?\'0\':be);}\nfunction as(n){\n var bx=\'\'\n var di=true; for(var i=33;i>0;){\n i-=3; var by=(n>>i)&0x7; if(!di||by!=0){\n di=false; bx+=bb[by]; }\n }\n return \'0\'+(bx==\'\'?\'0\':bx);}\nfunction aq(n){\n var au=\'\'\n var di=true; for(var i=32;i>0;){\n i-=1; var by=(n>>i)&0x1; if(!di||by!=0){\n di=false; au+=bb[by]; }\n }\n return \'0b\'+(au==\'\'?\'0\':au);}\nfunction ah(s){\n var au=0; var dh=0; var i=s.length-1; while(i>=0&&dh<32){\n if(s.charAt(i)==\'1\'){\n au|=1<<dh; }\n dh++; i-=1; }\n return au;}\nfunction ap(s){\n if(!br&&s!=\'\'){\n bo=\'\'; bm=s; document.calculator.line.value=s; document.calculator.line.focus(); bm=\'\'; bn=\'\'; bg=1; document.calculator.line.style.backgroundColor=\'#cccc99\'; document.calculator.line.focus(); }\n}\nfunction ab(s,replaceLast){\n if(!br&&s!=\'\'){\n bo=\'\'; var bt\n if(replaceLast==0&&document.calculator.line.value==bn){\n bt=s; }else if(replaceLast==1&&document.calculator.line.value==bn){\n bt=\'ans \'+s; }else{\n bt=document.calculator.line.value+s; }\n bm=bt; document.calculator.line.value=bt; document.calculator.line.focus(); bm=\'\'; bn=\'\'; bg=1; document.calculator.line.style.backgroundColor=\'#cccc99\'; document.calculator.line.focus(); }\n}\nfunction ac(){\n document.calculator.line.value=\'\'; bg=1; document.calculator.line.style.backgroundColor=\'#cccc99\'; document.calculator.line.focus();}\nfunction aa(s){\n br=true; var bk=false; var dg=s; var bu; var bf=document.calculator.history.options; for(var i=1;i<bf.length&&!bk;i++){\n bu=bf[i].text; bf[i].text=dg; if(bu==s){\n bk=true; }\n dg=bu; }\n document.calculator.history.selectedIndex=0; br=false;}\nfunction ak(){\n br=true; var bf=document.calculator.history.options; var av=ai(\'calculatorState\'); if(av!=null&&av.length>1){\n var bh=av.substring(1,av.length); if(bh!=null){\n var bi=bh.split(\'\\n\'); for(var i=1;i<bf.length&&i<bi.length+1;i++){\n bf[i].text=bi[i-1]; }\n }\n document.calculator.display.selectedIndex=parseInt(av.charAt(0)); }\n br=false;}\nfunction ao(){\n var bf=document.calculator.history.options; var av=document.calculator.display.selectedIndex; for(var i=1;i<bf.length;i++){\n av+=bf[i].text+\'\\n\'; }\n var bc=new Date(); // cookie expires in one year\n bc.setTime(bc.getTime()+365*24*60*60*1000); document.av=(\n \'calculatorState\'+\'=\'+\n escape(av)+\n \';expires=\'+bc.toGMTString()\n );}\nfunction ai(name){\n var az=name+\"=\"; var ax=document.cookie.indexOf(\";\"+az); if(ax==-1){\n ax=document.cookie.indexOf(az); if(ax!=0)return null; }else{\n ax+=2; }\n var ay=document.cookie.indexOf(\";\",ax); if(ay==-1)ay=document.cookie.length; return unescape(document.cookie.substring(ax+az.length,ay));}\nfunction ae(){\n var bf=document.calculator.history.options; var bu=\"\"; if(bg>=bf.length||bf[bg].text==\"\"){\n bg=1; }\n if(bf[bg].text!=\"\"){\n var de=bg; ap(bf[bg].text); bg=de; document.calculator.history.selectedIndex=bg; bg++; }\n document.calculator.line.focus();}\nfunction al(){\n var d=document.calculator.display; var s=d.selectedIndex; s++; if(s>=d.options.length)s=0; ad(s)\n}\nfunction ad(index){\n document.calculator.display.selectedIndex=index; af(); ao(); document.calculator.line.focus();}\n--></script>\n<style type=\"text/css\">\nbody {\nbackground-color:beige;font-size:10pt;}\ninput.advanced {\nfont-size:9pt;width:.75cm;padding:0;margin:0;}\ninput.clear, input.number, input.operand, input.equal, input.other {\nfont-size:15pt;}\ninput.clear, input.number, input.operand, input.equal, input.other {\nwidth:1cm;font-weight:bold;padding:2px;}\ninput.keyshortcut {\nbackground-color:beige;color:beige;text-decoration:none;border:none;}\ninput.clear {\nbackground-color:#aa2222;border-color:#aa2222;color:white;}\ninput.number {\nbackground-color:#CCaa99;border-color:#CCaa99;color:black;}\ninput.operand {\nbackground-color:#aaaacc;border-color:#aaaacc;color:black;}\ninput.equal {\nbackground-color:#444444;border-color:#444444;color:white;}\ninput.other {\nbackground-color:#9ac693;border-color:#9ac693;color:black;}\ninput.advanced {\nbackground-color:lightgray;border-color:lightgray;color:black;}\ninput.line {\nbackground-color:#cccc99;border-color:#cccc99;font-size:15pt;font-weight:bold;width:100%;}\nselect {\nbackground-color:#cccccc;border-color:#cccccc;color:black;}\n</style>\n</head>\n<body onload=\"ak();document.calculator.line.focus();\">\n<noscript><p>This scientific calculator requires Javascript. Please enable Javascript\nin your browser\'s preferences and then reload this page if you wish to use this scientific calculator.</p></noscript>\n<form name=calculator onSubmit=\"ag();return false;\">\n<input class=line type=text name=\"line\" onChange=\"aj();\">\n<br>\n<table summary=\"Calculator\"><tr><td valign=top>\n<table class=keypad summary=\"Button Keypad\"><tr>\n<td><input type=\"button\" value=\"C\" class=\"clear\" accesskey=c onClick=\"ac();\" title=\"Clear (Alt-c)\"></td>\n<td><input type=\"button\" value=\"(\" class=\"other\" onClick=\"ab(\'(\',0);\" title=\"Grouping Parenthesis\"></td>\n<td><input type=\"button\" value=\")\" class=\"other\" onClick=\"ab(\')\',0);\" title=\"Grouping Parenthesis\"></td>\n<td><input type=\"button\" value=\"+\" class=\"operand\" onClick=\"ab(\' + \',1);\" title=\"Addition\"></td>\n<td rowspan=5>\n<input type=\"button\" value=\"&amp;\" class=\"advanced\" onClick=\"ab(\' &amp; \',2);\" title=\"Bitwise And\"><br>\n<input type=\"button\" value=\"|\" class=\"advanced\" onClick=\"ab(\' | \',2);\" title=\"Bitwise Or\"><br>\n<input type=\"button\" value=\"^\" class=\"advanced\" onClick=\"ab(\' ^ \',2);\" title=\"Bitwise xOr\"><br>\n<input type=\"button\" value=\"~\" class=\"advanced\" onClick=\"ab(\' ~ \',2);\" title=\"Bitwise Negation\"><br>\n<input type=\"button\" value=\"&lt;&lt;\" class=\"advanced\" onClick=\"ab(\' &lt;&lt; \',2);\" title=\"Bitwise Left Shift\"><br>\n<input type=\"button\" value=\"&gt;&gt;\" class=\"advanced\" onClick=\"ab(\' &gt;&gt; \',2);\" title=\"Bitwise Right Shift\"><br>\n<input type=\"button\" value=\"%\" class=\"advanced\" onClick=\"ab(\' % \',2);\" title=\"Modular Division\"><br>\n<input type=\"button\" value=\",\" class=\"advanced\" onClick=\"ab(\', \',2);\" title=\"Comma for functions\"><br>\n</td></tr><tr>\n<td><input type=\"button\" value=\"7\" class=\"number\" onClick=\"ab(\'7\',0);\" title=\"Seven\"></td>\n<td><input type=\"button\" value=\"8\" class=\"number\" onClick=\"ab(\'8\',0);\" title=\"Eight\"></td>\n<td><input type=\"button\" value=\"9\" class=\"number\" onClick=\"ab(\'9\',0);\" title=\"Nine\"></td>\n<td><input type=\"button\" value=\"-\" class=\"operand\" onClick=\"ab(\' - \',1);\" title=\"Subtraction\"></td>\n</tr><tr>\n<td><input type=\"button\" value=\"4\" class=\"number\" onClick=\"ab(\'4\',0);\" title=\"Four\"></td>\n<td><input type=\"button\" value=\"5\" class=\"number\" onClick=\"ab(\'5\',0);\" title=\"Five\"></td>\n<td><input type=\"button\" value=\"6\" class=\"number\" onClick=\"ab(\'6\',0);\" title=\"Six\"></td>\n<td><input type=\"button\" value=\"*\" class=\"operand\" onClick=\"ab(\' * \',1);\" title=\"Multiplication\"></td>\n</tr><tr>\n<td><input type=\"button\" value=\"1\" class=\"number\" onClick=\"ab(\'1\',0);\" title=\"One\"></td>\n<td><input type=\"button\" value=\"2\" class=\"number\" onClick=\"ab(\'2\',0);\" title=\"Two\"></td>\n<td><input type=\"button\" value=\"3\" class=\"number\" onClick=\"ab(\'3\',0);\" title=\"Three\"></td>\n<td><input type=\"button\" value=\"&#247;\" class=\"operand\" onClick=\"ab(\' / \',1);\" title=\"Division\"></td>\n</tr><tr>\n<td><input type=\"button\" value=\"EE\" class=\"other\" onClick=\"ab(\'e\',2);\" title=\"Scientific Notation Exponent\"></td>\n<td><input type=\"button\" value=\"0\" class=\"number\" onClick=\"ab(\'0\',0);\" title=\"Zero\"></td>\n<td><input type=\"button\" value=\".\" class=\"other\" onClick=\"ab(\'.\',2);\" title=\"Decimal Point\"></td>\n<td><input type=\"button\" value=\"=\" class=\"equal\" accesskey=e onClick=\"ag();\" title=\"Enter (Alt-e)\"></td>\n</tr></table>\n</td><td valign=top>\n<p><small>Display:</small><br>\n<select name=display class=display onChange=\"af();ao();\" title=\"(Alt-d)\">\n<option selected>Decimal (Mixed Notation)\n<option>Decimal (Scientific Notation)\n<option>Decimal (Engineering Notation)\n<option>Hexadecimal\n<option>Octal\n<option>Binary\n</select></p>\n<p><select name=history class=history onChange=\"if(this.selectedIndex>0)ap(this.options[this.selectedIndex].text);\" title=\"View previous entries (Alt-h)\">\n<option>History:\n<option><option><option><option><option><option><option><option><option>\n<option><option><option><option><option><option><option><option><option><option>\n</select></p>\n<p><select name=mathConstants class=mathConstants onChange=\"ab(this.options[this.selectedIndex].value,0);this.selectedIndex=0;\">\n<option>Math Constants:\n<option value=\"E \">e\n<option value=\"LN10 \">ln(10)\n<option value=\"LN2 \">ln(2)\n<option value=\"LOG10E \">log10(e)\n<option value=\"LOG2E \">log2(e)\n<option value=\"PI \">&pi;<option value=\"SQRT1_2 \">sqrt(1/2)\n<option value=\"SQRT2 \">sqrt(2)\n</select>&nbsp;<small>(<a target=\'_blank\' target=\"_blank\" href=\"http://www.javascripter.net/faq/mathcons.htm\">docs</a>)</small></p>\n<p><select name=mathFunctions class=mathFunctions onChange=\"ab(this.options[this.selectedIndex].value,0);this.selectedIndex=0;\">\n<option>Math Functions:\n<option value=\"abs(\">abs\n<option value=\"acos(\">acos\n<option value=\"asin(\">asin\n<option value=\"atan(\">atan\n<option value=\"atan2(\">atan2\n<option value=\"ceil(\">ceil\n<option value=\"cos(\">cos\n<option value=\"exp(\">exp\n<option value=\"floor(\">floor\n<option value=\"log(\">log\n<option value=\"max(\">max\n<option value=\"min(\">min\n<option value=\"pow(\">pow\n<option value=\"random()\">random\n<option value=\"round(\">round\n<option value=\"sin(\">sin\n<option value=\"sqrt(\">sqrt\n<option value=\"tan(\">tan\n</select>&nbsp;<small>(<a target=\'_blank\' target=\"_blank\" href=\"http://www.javascripter.net/faq/mathfunc.htm\">docs</a>)</small></p>\n<p><input type=\"button\" value=\"H\" accesskey=h class=\"keyshortcut\" onClick=\"ae();\">\n<input type=\"button\" value=\"D\" accesskey=d class=\"keyshortcut\" onClick=\"al();\">\n<input type=\"button\" value=\"M\" accesskey=m class=\"keyshortcut\" onClick=\"ad(0);\">\n<input type=\"button\" value=\"S\" accesskey=s class=\"keyshortcut\" onClick=\"ad(1);\">\n<input type=\"button\" value=\"G\" accesskey=g class=\"keyshortcut\" onClick=\"ad(2);\">\n<input type=\"button\" value=\"B\" accesskey=b class=\"keyshortcut\" onClick=\"ad(5);\">\n<input type=\"button\" value=\"O\" accesskey=o class=\"keyshortcut\" onClick=\"ad(4);\">\n<input type=\"button\" value=\"X\" accesskey=x class=\"keyshortcut\" onClick=\"ad(3);\">\n<input type=\"button\" value=\"A\" accesskey=a class=\"keyshortcut\" onClick=\"ab(\'ans \',0);\"></p>\n</td></tr></table>\n</form>\n<div style=\"height:1in;\"></div>\n<h3>Instructions</h3>\n<table summary=\"List of keyboard shortcuts\" vspace=20 hspace=20 border=0 width=150 align=right><tr><td>\n<b>Keyboard shortcuts (Alt or Cmd):</b><br>\n<ul>\n<li><u>C</u>lear</li>\n<li><u>E</u>quals</li>\n<li><u>H</u>istory (previous)</li>\n<li><u>D</u>isplay (cycle)</li>\n<li>Decimal <u>m</u>ixed display</li>\n<li>Decimal <u>S</u>cientific display</li>\n<li>Decimal En<u>g</u>ineering display</li>\n<li><u>B</u>inary display</li>\n<li><u>O</u>ctal display</li>\n<li>He<u>x</u> display</li>\n<li>Last <u>A</u>nswer</li>\n</ul>\n</td></tr></table>\n<p>Enter an expression into the tan bar and press enter to calculate the results. </p>\n<p>This calculator remembers up to twenty past calculations in history. To save the history\nbetween visits you must have cookies enabled.</p>\n<p>All results are calculated using the Javascript eval() function. Syntax for expressions\nis the same as that for Javascript.</p>\n<p>This calculator can handle input numbers in several different bases:</p>\n<ul>\n<li>Decimal (Base 10): Numbers that do not start with a zero like 15 or 3.14e15.\nDecimal numbers can contain digits 0-9, decimals, and scientific notation.</li>\n<li>Hexadecimal (Base 16): Integers that start with a zero x like 0x1a5. Hexadecimal numbers\ncan contain digits 0-9 and a-f (or A-F) but no decimal or scientific notation.</li>\n<li>Octal (Base 8): Integers that start with a zero like 073. Octal numbers\ncan contain digits 0-7 but no decimal or scientific notation.</li>\n<li>Binary (Base 2): Integers that start with a zero b like 0b101. Binary numbers\ncan contain digits 0 and 1 but no decimal or scientific notation.</li>\n</ul>\n<p>^ is a bitwise xor operation. To raise a number to a power use pow() function.</p>\n<hr>\n<h3>License</h3>\n<p>This program is free software;you can redistribute it and/or modify it\nunder the terms of the GNU General Public License as published by the Free\nSoftware Foundation;either version 2 of the License, or (at your option)\nany later version.</p>\n<p>This program is distributed in the hope that it will be useful,\nbut WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY\nor FITNESS FOR A PARTICULAR PURPOSE. See the\n<a target=\'_blank\' href=\"http://www.gnu.org/copyleft/gpl.html\">GNU\nGeneral Public License</a> for more details.</p>\n<p style=\"text-size:small\">scientific calculater, binary calc, octal, hex, hexadecimal, hexidecimal</p>\n<div style=\"padding:0.2cm;\"><a target=\'_blank\' href=\"http://ostermiller.org/calc/\">More converters, calculators, and other JavaScript goodies</a></div>\n<div style=\"padding:0.2cm;text-align:right;\"><a target=\'_blank\' href=\"http://ostermiller.org/\">ostermiller.org</a> (<a target=\'_blank\' href=\"http://ostermiller.org/siteindex.html\">site index</a>)</div>\n<div style=\"padding:0.2cm;\"><p>Copyright <a target=\'_blank\' href=\"http://ostermiller.org/contact.pl?regarding=JavaScript+Calculator\" class=mail>Stephen Ostermiller</a> 2002-2006</p></div>\n</body>\n</html>\n");
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