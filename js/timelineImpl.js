

var timelineImpl={

     timeline:null,

init:function(){
     timelineImpl.loadData();
},

loadData:function(){
        $.ajax({
        	  url: "https://home.sriramsv.com:5000/user/Sriram?start=1477958400",
        	  //data: data,
			  dataType:'json',
            
        	  success: function(data) {
                 
                 console.log(JSON.stringify(data));
				 console.log("Lt it be");
    // specify options
        var options = {
          "width":  "100%",
          "height": "75%",
           // optional
        };

        // Instantiate our timeline object.
        timelineImpl.timeline = new links.Timeline(document.getElementById('mytimeline'));
        timelineImpl.timeline.setOptions(options)
        timelineImpl.timeline.setData(data)
        // Draw our timeline with the created data and options
        timelineImpl.timeline.draw(data);
              }
              
        	  //dataType: "json"
        	});
},

zoom:function(zoomVal) {
           
            timelineImpl.timeline.zoom(zoomVal);
            timelineImpl.timeline.trigger("rangechange");
            timelineImpl.timeline.trigger("rangechanged");
        },

        /**
         * Adjust the visible time range such that all events are visible.
         */
adjustVisibleTimeRangeToAccommodateAllEvents:function() {

            timelineImpl.timeline.setVisibleChartRangeAuto();
        },

        /**
         * Move
         * @param moveVal
         */
move:function(moveVal) {
            
            timelineImpl.timeline.move(moveVal);
            timelineImpl.timeline.trigger("rangechange");
            timelineImpl.timeline.trigger("rangechanged");
        },

        /**
         * Move the visible range such that the current time is located in the center of the timeline.
         */
moveToCurrentTime:function() {

            timelineImpl.timeline.setVisibleChartRangeNow();
        }

    };


$( document ).ready(function() {
   console.log("timelineImpl callllllllllled");
timelineImpl.init();

});