// Проверка ОС
 $( document ).ready(function() {

 	jQuery(function()                                          
	{                                                                
		jQuery.os =  { name: (/(win|mac|linux|sunos|solaris|iphone)/.exec(navigator.platform.toLowerCase()) || [u])[0].replace('sunos', 'solaris') };      
 		console.log(jQuery.os['name']); // Возращает ОС
 		
 		
 	});
});