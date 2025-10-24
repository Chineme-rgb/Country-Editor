am5.ready(function() {
  let root = am5.Root.new("mapdiv");

  let chart = root.container.children.push(
    am5map.MapChart.new(root, {
      panX: "rotateX",
      panY: "none",
      projection: am5map.geoMercator()
    })
  );

  let polygonSeries = chart.series.push(
    am5map.MapPolygonSeries.new(root, {
      geoJSON: am5geodata_worldLow
    })
  );
  polygonSeries.mapPolygons.template.setAll({
    tooltipText: "{name}",
    interactive: true
  });

  // Rename logic (temporary for public view)
  polygonSeries.events.on("datavalidated", function() {
    let umanka = polygonSeries.getDataItemById("US"); // Example: rename USA to Umanka
    if (umanka) {
      umanka.set("name", "Umanka Prime");
    }
  });
});
