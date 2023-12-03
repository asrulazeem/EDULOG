<template>
  <div>
    <h1>Logbook</h1>
  </div>
  <div class="button-container">
    <div class="button-row">
      <router-link :to="{ name: 'form', params: { day: 'Monday' } }">
        <button class="col1">MONDAY</button>
      </router-link>
      <router-link :to="{ name: 'form', params: { day: 'Tuesday' } }">
        <button class="col1">TUESDAY</button>
      </router-link>
      <router-link :to="{ name: 'form', params: { day: 'Wednesday' } }">
        <button class="col1">WEDNESDAY</button>
      </router-link>
      <router-link :to="{ name: 'form', params: { day: 'thursday' } }">
        <button class="col1">THURSDAY</button>
      </router-link>
      <router-link :to="{ name: 'form', params: { day: 'Friday' } }">
        <button class="col1">FRIDAY</button>
      </router-link>
    </div>
    <div class="button-row">
      <router-link :to="{ name: 'form', params: { day: 'Saturday' } }">
        <button class="col1">SATURDAY</button>
      </router-link>
      <router-link :to="{ name: 'form', params: { day: 'Sunday' } }">
        <button class="col1">SUNDAY</button>
      </router-link>
    </div>
  </div>
</template>

<style>
.col1 {
  border: none;
  background-color: blue;
  padding: 40px 50px;
  color: #ffff;
  border-radius: 6px;
  transition: 0.2s;
  margin: 2%;
}

.col1:hover {
  box-shadow: 0 0 0 4px #fff, 0 0 0 8px #4070f4;
}

.button-container {
  display: flex;
  flex-direction: column; /* Ensure a column layout for rows */
  align-items: center;
  margin-left: 50px;
  margin-top: 100px;
}

.button-row {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
