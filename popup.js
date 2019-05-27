
console.log('gotta remove fb ads');
function fbRemove()
{
	

	var toRemove=document.querySelectorAll("a[href^='/ad_campaign/landing.php']");

		if(toRemove==null)
		{
		console.log("not found");
			
		}
		ptr=0
		while(ptr<toRemove.length)
		{
		var parentsToRemove=toRemove[ptr].closest("#pagelet_ego_pane");
		if(parentsToRemove!=null)
		{
		parentsToRemove.remove();
		
	}
	
		ptr+=1
	
	}
}
fbRemove();
var options={
		'childList':true,
		'attributes':true,
		'characterData':true,
		'subtree': true,
  		'attributeOldValue': true,
  		'characterDataOldValue': true
	};
var fbObserver=new MutationObserver(fbRemove);
fbObserver.observe(document.documentElement,options);

