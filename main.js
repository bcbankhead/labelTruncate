(function(ns) {
    'use strict';

    ns.labelTruncate = function(w, size) {
        var supportedChartTypes = ['chart/column'];
        function widgetIsSupported(type) {
            if (supportedChartTypes.indexOf(type) >= 0) return true;
            else return false;
        }

    	w.on('beforeviewloaded', function(w, args) {
            size = size || 10;
    		args.options.xAxis.labels.formatter = function() {
                var ellipsys = this.value.length >= size ? '...' : '';
    	        return this.value.substring(0, size) + ellipsys;
    		};
    	});
    };
}(window));
