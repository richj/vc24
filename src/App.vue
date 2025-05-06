<script setup>
  import Navbar from '@/components/Navbar.vue';
  import Hero from '@/components/hero.vue';
  import HomeCards from '@/components/HomeCards.vue';
  import JobListings from '@/components/JobListings.vue';
</script>

<template>
  <Navbar />
  <Hero title="Test Title" subtitle="test Subtitle"/>
  <HomeCards />
  <JobListings />
</template>