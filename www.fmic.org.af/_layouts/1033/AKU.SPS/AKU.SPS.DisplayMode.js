$(document).ready(scriptIt);
(function($){$.fn.replaceText=function(b,a,c){return this.each(function(){var f=this.firstChild,g,e,d=[];if(f){do{if(f.nodeType===3){g=f.nodeValue;e=g.replace(b,a);if(e!==g){if(!c&&/</.test(e)){$(f).before(e);d.push(f)}else{f.nodeValue=e}}}}while(f=f.nextSibling)}d.length&&$(d).remove()})}})(jQuery);
function Showpicv(Whatpic,width,height,scrollbars) {
  myWin2= open("", "displayWindow2","toolbar=0,menubar=0,left=0,top=0,location=0,directories=0,status=0,scrollbars="+scrollbars+",resizable=0,copyhistory=0,width="+width+",height="+height);
  myWin2.document.open();
  myWin2.document.write("<html><head><title>Enlarged Image</title>");
  myWin2.document.write('</head><body bgcolor="#FFFFFF" text="#000000" leftmargin=0 topmargin=0>');
  myWin2.document.write('<p align="center">');
  myWin2.document.write('</p><div align="center"><table border="0" width="100%"><tr>');
  myWin2.document.write('<td width="100%" valign="middle" align="center"><img border="0" src=');
  myWin2.document.write(Whatpic +' ></td></tr></table></center></div>');
  myWin2.document.write('</body></html>');
  // close the document - (not the window!)
  myWin2.document.close();  
}

function ShowHtmlv(WhatHtml,width,height,scrollbars) {
  window.open("/_layouts/AKU.SPS.WebApp/ExistingPopUp"+WhatHtml, "displayWindowExistingPopUp","toolbar=0,menubar=0,left=0,top=0,location=0,directories=0,status=0,scrollbars="+scrollbars+",resizable=0,copyhistory=0,width="+width+",height="+height);
}

function calcHeight()
{	
	
	var the_height;
	var isChrome = (navigator.appVersion.indexOf("Chrome") != -1) ? true : false;
	var bodyObj = document.getElementById('aku_iframe_resize').contentDocument.body;
	try
	{
	if (isChrome) 
	{
		if(document.getElementById('aku_iframe_resize') != null && document.getElementById('aku_iframe_resize').contentDocument != null &&  bodyObj!= null)
		{
		the_height=bodyObj.offsetHeight + 0;
		}
	}
	else
	{
		//alert(document.getElementById('aku_iframe_resize').contentWindow.document.body);
		if(document.getElementById('aku_iframe_resize') != null && document.getElementById('aku_iframe_resize').contentWindow != null && bodyObj !== null)
		{
		the_height=bodyObj.scrollHeight + 0;
		}
	}
	document.getElementById('aku_iframe_resize').height=the_height;
	bodyObj.onclick = function(){setTimeout("calcHeight()",50);}
	}
	catch(err){  }	
	
}

function scriptIt(){
	fix_navigationbar();
	showPic();
	showHtml();
	showUrduDiv();
	window.setTimeout(runinDelay,2500);
	showAkuTabs();
ChangeCSSClass_AlumniProfileEditInputBig();

}



function fix_navigationbar(){


var pathname = window.location.pathname;
var mySplitResult = pathname.split("/");

var i=0;
while(i<mySplitResult.length)
{
if(mySplitResult[i].toLowerCase()=="_layouts")
{
	$('.s4-tn').addClass('s4-tn2');
	$('.s4-tn').removeClass('s4-tn');


}

i=i+1;
}




}

function runinDelay(){
	showdialog();
	crossWebAppLinksAndPDFs();
	OpenPdfinNewWindow();
}
function showdialog(){
	$('#dialog_Save').dialog({
        autoOpen: false,
        bgiframe: true,
        modal:true,
		resizable:false,
        width: 600
    });
	
    $('#close_link').bind('click', function() {
    	$("#dialog_Save").dialog('close');
		window.location.href = $("#aExternalLink").attr('href') + "&saveCookie=no";
    });
    
    $('#red_button_link').bind('click', function() {
    	$("#dialog_Save").dialog('close');
    });
    
    $('#open_link').bind('click', function() {
    	$("#dialog_Save").dialog('close');
		window.location.href = $("#aExternalLink").attr('href') + "&saveCookie=yes";
    });
	
	$('#dialog_Save').bind('dialogopen', function(event) {
	 	$(".ui-dialog-titlebar").hide();
	 	$("#dialog_Save").parent().removeClass();
	 	$("#dialog_Save").removeClass();
	 	$('.ui-widget-content').css('border', '0px');
		$("#dialog_Save").addClass('ui-dialog-titlebar');
	});

	$('#dialog_Save').bind('dialogclose', function(event) {
		$("#dialog_Save").removeClass('ui-dialog-titlebar');
	});
}

function crossWebAppLinksAndPDFs()
{

 if(($('#MSOLayout_InDesignMode').val() == 1)){
//this is design mode

}
else
{
var AKULink = $('#AKULinkDiv').html();
var AKUEB = $('#EBLinkDiv').html();
var AKUH = $('#AKUHLinkDiv').html();

$("a[href^='http://__aku__']")
   .each(function()
   { 

	(this).href = this.href.replace(/__aku__/,AKULink);

   });
$("a[href^='http://__eb__']")
   .each(function()
   { 
      (this).href = this.href.replace(/__eb__/,AKUEB);
   });
$("a[href^='http://__akuh__']")
   .each(function()
   { 
      (this).href = this.href.replace(/__akuh__/,AKUH);
   });
}
}
function OpenPdfinNewWindow()
{
$("a[href$='.pdf']").each(function() { 
        $(this).attr("target", "_blank");
   });
$("a[href$='.doc']").each(function() { 
        $(this).attr("target", "_blank");
   });
$("a[href$='.xls']").each(function() { 
        $(this).attr("target", "_blank");
   });
}
function showPic(){
	$(".showPic").addClass("hndcrsr");
	$(".showPic").click(function(){
		propsArray = $(this).children(".props").text().split(",");
		if(propsArray[3] != null && propsArray[3] == "1")
		{
			Showpicv(propsArray[0],propsArray[1],propsArray[2],"1");
		}
		else
		{
			Showpicv(propsArray[0],propsArray[1],propsArray[2],"0");
		}
	});
}

function showHtml(){
	$(".showHtml").addClass("hndcrsr");
	$(".showHtml").click(function(){
		propsArray = $(this).children(".props").text().split(",");
		if(propsArray[3] != null && propsArray[3] == "1")
		{
			ShowHtmlv(propsArray[0],propsArray[1],propsArray[2],"1");
		}
		else
		{
			ShowHtmlv(propsArray[0],propsArray[1],propsArray[2],"0");
		}
	});
}
function ChangeCSSClass_AlumniProfileEditInputBig(){
if(navigator.userAgent.toLowerCase().indexOf('chrome') > -1){
$('.AlumniProfileEditInputBig').css('width','544px !important'); 
}
}

function showUrduDiv(){
	$("#ctl00_PlaceHolderMain_UrduContentPopUp_ShowInUrduLink").click(function () {
	$("#ctl00_PlaceHolderMain_UrduContentPopUp_dialog").dialog({
	autoOpen: true,
	height: 400,
	width: 615,
	resizable: false,
	closeOnEscape: true,
	modal: true,
	closeText: '&nbsp;',
	title: '&nbsp;'
	});
	$("#ctl00_PlaceHolderMain_UrduContentPopUp_dialog").dialog("open");
	return false;
	});
}
function showAkuTabs()
{
	$("#akutabs").tabs();
}