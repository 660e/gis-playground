<script setup lang="ts">
import { Scene, PointLayer } from '@antv/l7';
import { Mapbox } from '@antv/l7-maps';

onMounted(() => {
  const scene = new Scene({
    id: 'map',
    map: new Mapbox({
      style: 'dark',
      center: [120.19382669582967, 30.258134],
      pitch: 0,
      zoom: 12,
      token: 'pk.eyJ1Ijoic2tkNDIyNTAiLCJhIjoiY20zaXNpdnd5MDQ4bDJycTVtNXoxanlncSJ9.7nLVOvqCIN3K1imhm9Carw',
    }),
  });

  fetch('https://gw.alipayobjects.com/os/rmsportal/oVTMqfzuuRFKiDwhPSFL.json')
    .then((res) => res.json())
    .then((data) => {
      const pointLayer = new PointLayer({})
        .source(data.list, {
          parser: {
            type: 'json',
            x: 'j',
            y: 'w',
          },
        })
        .shape('cylinder')
        .size('t', function (level: number) {
          return [1, 2, level * 2 + 20];
        })
        .color('t', ['#094D4A', '#146968', '#1D7F7E', '#289899', '#34B6B7', '#4AC5AF', '#5FD3A6', '#7BE39E', '#A1EDB8', '#CEF8D6'])
        .style({
          opacity: 1.0,
        });
      scene.addLayer(pointLayer);
    });
});
</script>

<template>
  <div class="h-screen overflow-hidden">
    <div class="h-full" id="map"></div>
  </div>
</template>
