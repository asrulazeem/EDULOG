<template>
  <div>
    <h1>Logbook</h1>
  </div>
  <div class="button-container">
    <div class="button-column">
      <router-link :to="{ name: 'Week', params: { weekNumber: 1 } }">
        <button class="col1">WEEK 1</button>
      </router-link>
      <router-link :to="{ name: 'Week', params: { weekNumber: 7 } }">
        <button class="col1">WEEK 7</button>
      </router-link>
      <router-link :to="{ name: 'Week', params: { weekNumber: 13 } }">
        <button class="col1">WEEK 13</button>
      </router-link>
      <router-link :to="{ name: 'Week', params: { weekNumber: 19 } }">
        <button class="col1">WEEK 19</button>
      </router-link>
    </div>
    <div class="button-column">
      <router-link :to="{ name: 'Week', params: { weekNumber: 2 } }">
        <button class="col1">WEEK 2</button>
      </router-link>
      <router-link :to="{ name: 'Week', params: { weekNumber: 8 } }">
        <button class="col1">WEEK 8</button>
      </router-link>
      <router-link :to="{ name: 'Week', params: { weekNumber: 14 } }">
        <button class="col1">WEEK 14</button>
      </router-link>
      <router-link :to="{ name: 'Week', params: { weekNumber: 20 } }">
        <button class="col1">WEEK 20</button>
      </router-link>
    </div>
    <div class="button-column">
      <router-link :to="{ name: 'Week', params: { weekNumber: 3 } }">
        <button class="col1">WEEK 3</button>
      </router-link>
      <router-link :to="{ name: 'Week', params: { weekNumber: 9 } }">
        <button class="col1">WEEK 9</button>
      </router-link>
      <router-link :to="{ name: 'Week', params: { weekNumber: 15 } }">
        <button class="col1">WEEK 15</button>
      </router-link>
      <router-link :to="{ name: 'Week', params: { weekNumber: 21 } }">
        <button class="col1">WEEK 21</button>
      </router-link>
    </div>
    <div class="button-column">
      <router-link :to="{ name: 'Week', params: { weekNumber: 4 } }">
        <button class="col1">WEEK 4</button>
      </router-link>
      <router-link :to="{ name: 'Week', params: { weekNumber: 10 } }">
        <button class="col1">WEEK 10</button>
      </router-link>
      <router-link :to="{ name: 'Week', params: { weekNumber: 16 } }">
        <button class="col1">WEEK 16</button>
      </router-link>
      <router-link :to="{ name: 'Week', params: { weekNumber: 22 } }">
        <button class="col1">WEEK 22</button>
      </router-link>
    </div>
    <div class="button-column">
      <router-link :to="{ name: 'Week', params: { weekNumber: 5 } }">
        <button class="col1">WEEK 5</button>
      </router-link>
      <router-link :to="{ name: 'Week', params: { weekNumber: 11 } }">
        <button class="col1">WEEK 11</button>
      </router-link>
      <router-link :to="{ name: 'Week', params: { weekNumber: 17 } }">
        <button class="col1">WEEK 17</button>
      </router-link>
      <router-link :to="{ name: 'Week', params: { weekNumber: 23 } }">
        <button class="col1">WEEK 23</button>
      </router-link>
    </div>
    <div class="button-column">
      <router-link :to="{ name: 'Week', params: { weekNumber: 6 } }">
        <button class="col1">WEEK 6</button>
      </router-link>
      <router-link :to="{ name: 'Week', params: { weekNumber: 12 } }">
        <button class="col1">WEEK 12</button>
      </router-link>
      <router-link :to="{ name: 'Week', params: { weekNumber: 18 } }">
        <button class="col1">WEEK 18</button>
      </router-link>
      <router-link :to="{ name: 'Week', params: { weekNumber: 24 } }">
        <button class="col1">WEEK 24</button>
      </router-link>
    </div>
  </div>
</template>

<style>
.col1 {
  border: none;
  background-color: blue;
  padding: 30px 50px;
  color: #ffff;
  border-radius: 6px;
  transition: 0.2s;
  margin: 5px; /* Adjust the margin as needed */
}

.col1:hover {
  box-shadow: 0 0 0 4px #fff, 0 0 0 8px #4070f4;
}

.button-container {
  display: grid;
  grid-template-columns: repeat(
    6,
    1fr
  ); /* Adjust the number of columns as needed */
  justify-content: center;
  align-items: center;
  gap: 1px; /* Adjust the gap between buttons as needed */
}

.button-column {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
