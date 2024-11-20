<script setup lang="ts">
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1Ijoic2tkNDIyNTAiLCJhIjoiY20zaXNpdnd5MDQ4bDJycTVtNXoxanlncSJ9.7nLVOvqCIN3K1imhm9Carw';

onMounted(() => {
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [-74.5, 40],
    zoom: 9,
  });
  console.log(map);
});
</script>

<template>
  <div class="h-screen overflow-hidden">
    <div class="h-full" id="map"></div>
  </div>
</template>
