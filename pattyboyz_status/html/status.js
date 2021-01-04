$(document).ready(function() {
    window.addEventListener('message', function(event) {
        var data = event.data;
        $("#boxStamina").css("width",data.stamina + "%");
        if (event.data.action == "updateStatus") {
            updateStatus(event.data.st);
        } 
    })
})

function updateStatus(status){
    $('#boxHunger').css('width', status[0].percent+'%')
    $('#boxThirst').css('width', status[1].percent+'%')
}

$(function() {
    var $heal = $("#boxHealth");
    var $armor = $("#boxArmor");
    var $voice = $("#boxVoice")
    window.addEventListener('message', function(event){
        $heal.css("width", (event.data.heal-100)+"%");
        $armor.css("width", (event.data.armor)+"%");
        $voice.css("width", event.data.voiceheal + "%");
        if (event.data.talking == true) 
        {
            $voice.css("background", "#FF41A7")
        }
        else if (event.data.talking == false)
        {
            $voice.css("background", "rgba(112, 112, 112, 0.363)")
        }

        if (event.data.armor == 0) {
       
            $("#armor").slideUp(100)
        }
        else if (event.data.armor > 1) {
            $("#armor").slideDown(200)
        }
		
    }); 
});
function Showhud (){
    $("#box").css("display", "block");
}
function Hidehud (){
    $("#box").css("display", "none");
}