$(document).ready(function(){
    						$("#hoja").sprite({fps:6, no_of_frames:10,})    /*cuando existe la librería de jquery*/
							              .spRandom({ top: 100, bottom: 0, left:300, right:100 });

							$("#hoja1").sprite({fps:7, no_of_frames:10,})  
							              .spRandom({ top: 600, bottom: 0, left:600, right:200 });

							$("#hoja2").sprite({fps:6, no_of_frames:10,})   
							              .spRandom({ top: 400, bottom: 20, left:900, right:100 });

							$("#hoja3").sprite({fps:5, no_of_frames:10,}) 
							              .spRandom({ top: 500, bottom: 0, left:300, right:0 });

							$("#hoja4").sprite({fps:6, no_of_frames:10,})   
							              .spRandom({ top: 600, bottom: 0, left:600, right:20 });

							$("#hoja5").sprite({fps:8, no_of_frames:10,})  
							              .spRandom({ top: 300, bottom: 200, left:900, right:0 });
							$("#hoja6").sprite({fps:6, no_of_frames:10,})   
							              .spRandom({ top: 400, bottom: 20, left:900, right:100 });

							$("#hoja7").sprite({fps:5, no_of_frames:10,}) 
							              .spRandom({ top: 500, bottom: 0, left:300, right:0 });

							$("#hoja8").sprite({fps:6, no_of_frames:10,})   
							              .spRandom({ top: 600, bottom: 0, left:600, right:20 });

							$("#hoja9").sprite({fps:8, no_of_frames:10,})  
							              .spRandom({ top: 300, bottom: 200, left:900, right:0 });
											
					
	    $('.tirar').click(function(){
	        
	        $('.panel').slideToggle('slow');
	    });
});
