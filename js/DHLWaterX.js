
    var DHall = {
      Image: {
    xmlns: "http://schemas.microsoft.com/deepzoom/2008",
    Url: "//SMU-Meadows.github.io/img/panos/DHLWater/",
    Format: "png",
    Overlap: "1",
    TileSize: "256",
    Size: {
      Width:  "41618",
      Height: "14090"
    },
    minLevel: 15
  }
};
    
    var viewer = OpenSeadragon({
      id: "seadragon-viewer",
      prefixUrl: "//openseadragon.github.io/openseadragon/images/",
      tileSources: DHall,
      showNavigator:  false,
      visibilityRatio: 1,
      constrainDuringPan: false,
      minZoomLevel: 1
    });