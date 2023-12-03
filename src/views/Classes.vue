<template>
  <div id="app">
    <h1>Classes</h1>

    <!-- Input form for adding data -->
    <div class="form-container">
      <div class="input-container">
        <label for="code">Course code:</label>
        <input type="text" v-model="newData.code" id="code" />
      </div>

      <div class="input-container">
        <label for="startDate">Start Date:</label>
        <input type="date" v-model="newData.startDate" id="startDate" />
      </div>

      <div class="input-container">
        <label for="endDate">End Date:</label>
        <input type="date" v-model="newData.endDate" id="endDate" />
      </div>

      <div class="status-container">
        <label>Status:</label>
        <div>
          <input type="checkbox" id="ongoing" v-model="newData.ongoingStatus" />
          <label for="ongoing">Ongoing</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="completed"
            v-model="newData.completedStatus"
          />
          <label for="completed">Completed</label>
        </div>
      </div>

      <button @click="addData">Add Data</button>
    </div>

    <!-- Data display -->
    <div class="data-container">
      <div v-for="(data, index) in dataList" :key="index" class="data-item">
        <div class="data-field">
          <strong>Course code:</strong>
          {{ data.code }}
        </div>
        <div class="data-field">
          <strong>Start Date:</strong>
          {{ data.startDate }}
        </div>
        <div class="data-field">
          <strong>End Date:</strong>
          {{ data.endDate }}
        </div>
        <div class="data-field">
          <strong>Status:</strong>
          <span v-if="data.ongoingStatus">Ongoing</span>
          <span v-if="data.completedStatus">Completed</span>
        </div>
        <div class="data-action">
          <button @click="deleteData(index)" class="delete-button">
            Delete
          </button>
          <button @click="viewData(index)" class="view-button">View</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newData: {
        code: '',
        startDate: '',
        endDate: '',
        ongoingStatus: false,
        completedStatus: false
      },
      dataList: []
    }
  },
  methods: {
    addData() {
      if (this.newData.code && this.newData.startDate && this.newData.endDate) {
        this.dataList.push({ ...this.newData })
        this.newData = {
          code: '',
          startDate: '',
          endDate: '',
          ongoingStatus: false,
          completedStatus: false
        }
      } else {
        alert('Please provide all required information.')
      }
    },
    deleteData(index) {
      this.dataList.splice(index, 1)
    },
    viewData(index) {
      this.$router.push({
        name: 'classes-info',
        params: { index },
        props: { courseCode: this.dataList[index].code } // Pass the courseCode as a prop
      })
    }
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Avenir', 'Helvetica', 'Arial', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}

h1 {
  text-align: center;
  font-size: 50px;
  color: #232c3d;
}

.form-container {
  width: 200%;
  margin: 40px 60px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.input-container {
  margin-bottom: 15px;
}

.status-container {
  margin-bottom: 15px;
}

.status-container div {
  display: inline-block;
  margin-right: 20px;
}

button {
  background-color: #3f51b5;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #2c387e;
}

.data-container {
  width: 80%;
  margin: 20px auto;
}

.data-item {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 15px;
}

.data-field {
  margin-bottom: 10px;
}

.data-action button {
  margin-right: 10px;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.delete-button {
  background-color: #d7220e;
  color: white;
  border: none;
}

.view-button {
  background-color: #3498db;
  color: white;
  border: none;
}

.view-button:hover {
  background-color: #2980b9;
}

.delete-button:hover {
  background-color: rgb(161, 9, 9);
}
</style>
