$('body').on("mousedown touchend", function (e)
			{
			    var container = $(selector); //Селектор Popupa
			    
			    if (!container.is(e.target) // if the target of the click isn't the container...
			        && container.has(e.target).length === 0) // ... nor a descendant of the container
			    {
			        container.hide();
			       
			    }
			});