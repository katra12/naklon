var wms_layers = [];


        var lyr_OpenStreetMapmonochrome_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap monochrome',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://a.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png'
            })
        });
var lyr_Naklon_buff300_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Naklon_buff300",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Naklon_buff300_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1488905.090870, 5686816.798729, 1843473.173215, 5922946.398896]
                            })
                        });

lyr_OpenStreetMapmonochrome_0.setVisible(true);lyr_Naklon_buff300_1.setVisible(true);
var layersList = [lyr_OpenStreetMapmonochrome_0,lyr_Naklon_buff300_1];
