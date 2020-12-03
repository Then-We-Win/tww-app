var TimeSince = {
  methods: {
    getTimeSince: function(date) {
      return this.doTimeSince(date, false);
    },
    getTimeShort: function(date) {
      return this.doTimeSince(date, true);
    },
    getTimeLong: function(date) {
      return this.doTimeSince(date, false);
    },
    // This function was modified from
    // https://stackoverflow.com/questions/3177836/how-to-format-time-since-xxx-e-g-4-minutes-ago-similar-to-stack-exchange-site
    doTimeSince: function(date, short) {
      var seconds = Math.floor((new Date() - date) / 1000);
      var label = "";
    
      var interval = seconds / 31536000;
      if (interval > 1) {
        if (short) { 
          label = " yr";
        } else {
          label = " year";
        }
        let nbr = Math.floor(interval);
        if (nbr > 1) {
          label += "s";
        }        
        return nbr + label + " ago";
      }

      interval = seconds / 2592000;
      if (interval > 1) {
        if (short) { 
          label = " mo";
        } else {
          label = " month";
        }
        let nbr = Math.floor(interval);
        if (nbr > 1) {
          label += "s";
        }        
        return nbr + label + " ago";
      }
      
      interval = seconds / 86400;
      if (interval > 1) {
        // no standard shorthand for days
        label = " day";
        let nbr = Math.floor(interval);
        if (nbr > 1) {
          label += "s";
        }        
        return nbr + label + " ago";
      }
      
      interval = seconds / 3600;
      if (interval > 1) {
         if (short) { 
          label = " hr";
        } else {
          label = " hour";
        }
        let nbr = Math.floor(interval);
        if (nbr > 1) {
          label += "s";
        }        
        return nbr + label + " ago";
      }

      interval = seconds / 60;
      if (interval > 1) {
        if (short) { 
          label = " min";
        } else {
          label = " minute";
        }
        let nbr = Math.floor(interval);
        if (nbr > 1) {
          label += "s";
        }        
        return nbr + label + " ago";
      }

      if (short) { 
        label = " sec";
      } else {
        label = " second";
      }
      let nbr = Math.floor(interval);
      if (nbr > 1) {
        label += "s";
      }        
      return nbr + label + " ago";
    }
  }
}

export default TimeSince