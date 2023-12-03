<template>
  <h1>Internship Systems</h1>
  <h2>UiTM</h2>
  <h3>kampus cawangan sungai petani</h3>
  <h4>The sidebar is {{ collapsed ? 'closed' : 'open' }}</h4>
  <button class="butt" @click="toggleSidebar">Toggle Sidebar</button>
</template>

<script>
import { collapsed, toggleSidebar } from '@/components/sidebar/state'

export default {
  setup() {
    return { collapsed, toggleSidebar }
  }
}
</script>

<style>
.butt {
  border: none;
  background-color: blue;
  padding: 16px 30px;
  color: #ffff;
  border-radius: 6px;
  transition: 0.2s;
}

.butt:hover {
  box-shadow: 0 0 0 4px #fff, 0 0 0 8px #4070f4;
}
</style>
