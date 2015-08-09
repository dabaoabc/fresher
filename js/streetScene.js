function init() {
	// 创建街景
	var pano = new qq.maps.Panorama(document.getElementById('pano_container'), {
		    pano: '10081147130320163359700',
		    pov:{
		    	heading:89,
		    	pitch:0
		    },
		    zoom:1
	    });
}