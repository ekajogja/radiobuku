(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  .uib_w_2 */
    $(document).on("click", ".uib_w_2", function(evt)
    {
        /* your code goes here */ 
        intel.xdk.player.startShoutcast("http://103.28.148.18:8254/",true);
    });
    
        /* button  .uib_w_5 */
    
    
        /* button  .uib_w_5 */
    
    
        /* button  .uib_w_8 */
    $(document).on("click", ".uib_w_8", function(evt)
    {
         activate_subpage("#uib_page_2"); 
    });
    
        /* button  .uib_w_7 */
    $(document).on("click", ".uib_w_7", function(evt)
    {
         activate_subpage("#uib_page_4"); 
    });
    
        /* button  .uib_w_6 */
    $(document).on("click", ".uib_w_6", function(evt)
    {
        /* your code goes here */
        intel.xdk.device.showRemoteSite("http://radiobuku.com/kronik-buku/",0,0,50,50);
    });
    
        /* button  .uib_w_5 */
    $(document).on("click", ".uib_w_5", function(evt)
    {
        /* your code goes here */
        intel.xdk.device.showRemoteSite("http://radiobuku.com/jadwal-siar/",0,0,50,50);
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
