<script setup lang="ts">
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

onMounted(() => {
  const map = L.map('map', { attributionControl: false }).setView([51.505, -0.09], 13);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
});
</script>

<template>
  <div class="h-screen overflow-hidden">
    <div class="h-full" id="map"></div>
  </div>
</template>
