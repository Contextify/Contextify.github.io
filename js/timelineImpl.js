

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
        },

    setTimeRangeScale:function(){
            var newStartDate = new Date(document.getElementById('startDate').value);
            var newEndDate   = new Date(document.getElementById('endDate').value);
            var strDate=timelineImpl.dateFormat(newStartDate);
			var endDate=timelineImpl.dateFormat(newEndDate);
			console.log("strDate"+strDate);
            console.log("strDate"+endDate);
            
            var startEpoch = moment(strDate).unix();
            var endEpoch = moment(endDate).unix()
         timelineImpl.loadDataForRangeChange(startEpoch,endEpoch);

    },


loadDataForRangeChange:function(startEpoch,endEpoch){
        $.ajax({
        	  url: "https://home.sriramsv.com:5000/user/Sriram?start="+startEpoch+"&end="+endEpoch,
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

   // adjust start and end time.
        setTime:function() {
            if (!timeline) return;

            var newStartDate = new Date(document.getElementById('startDate').value);
            var newEndDate   = new Date(document.getElementById('endDate').value);
            timeline.setVisibleChartRange(newStartDate, newEndDate);
            timeline.redraw();
        },

        onrangechange:function() {
            // adjust the values of startDate and endDate
            var range = timeline.getVisibleChartRange();
            document.getElementById('startDate').value = dateFormat(range.start);
            document.getElementById('endDate').value   = dateFormat(range.end);
        },

        onselect:function() {
            var sel = timeline.getSelection();
            if (sel.length) {
                if (sel[0].row != undefined) {
                    var row = sel[0].row;
                    alert("event " + row + " selected");
                }
            }
        },

        // Format given date as "yyyy-mm-dd hh:ii:ss"
        // @param datetime   A Date object.
        dateFormat:function(date) {
            var datetime = date.getFullYear() + "-" +
                    ((date.getMonth()   <  9) ? "0" : "") + (date.getMonth() + 1) + "-" +
                    ((date.getDate()    < 10) ? "0" : "") +  date.getDate() + " " +
                    ((date.getHours()   < 10) ? "0" : "") +  date.getHours() + ":" +
                    ((date.getMinutes() < 10) ? "0" : "") +  date.getMinutes() + ":" +
                    ((date.getSeconds() < 10) ? "0" : "") +  date.getSeconds();
            return datetime;
        }


    };


$( document ).ready(function() {
   console.log("timelineImpl callllllllllled");
timelineImpl.init();

});