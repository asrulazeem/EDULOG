<template>
  <div>
    <h1>{{ courseCodeProp }}</h1>

    <!-- Input form for adding student data -->
    <div class="form-container">
      <div class="input-container">
        <label for="studentName">Student Name:</label>
        <input type="text" v-model="newStudent.name" id="studentName" />
      </div>

      <div class="input-container">
        <label for="studentId">Student ID:</label>
        <input type="text" v-model="newStudent.id" id="studentId" />
      </div>

      <div class="input-container">
        <label for="supervisorName">SV Name:</label>
        <input
          type="text"
          v-model="newStudent.supervisor"
          id="supervisorName"
        />
      </div>

      <div class="input-container">
        <label for="week">Week:</label>
        <input type="number" v-model="newStudent.week" id="week" />
      </div>

      <button @click="addStudent">Add Student</button>
    </div>

    <!-- Students data columns -->
    <div class="data-container">
      <div class="data-item" v-for="(student, index) in students" :key="index">
        <div class="data-field">
          <strong>Student Name:</strong>
          {{ student.name }}
        </div>
        <div class="data-field">
          <strong>Student ID:</strong>
          {{ student.id }}
        </div>
        <div class="data-field">
          <strong>SV Name:</strong>
          {{ student.supervisor }}
        </div>
        <div class="data-field">
          <strong>Week:</strong>
          {{ student.week }}
        </div>
        <div class="data-action">
          <button @click="deleteStudent(index)">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['courseCode'],
  data() {
    return {
      newStudent: {
        name: '',
        id: '',
        supervisor: '',
        week: 0
      },
      students: []
    }
  },
  computed: {
    courseCodeProp() {
      return this.courseCode
    }
  },
  methods: {
    addStudent() {
      if (
        this.newStudent.name &&
        this.newStudent.id &&
        this.newStudent.supervisor
      ) {
        this.students.push({ ...this.newStudent })
        this.newStudent = { name: '', id: '', supervisor: '', week: 0 }
      } else {
        alert('Please provide all required information.')
      }
    },
    deleteStudent(index) {
      this.students.splice(index, 1)
    }
  },
  created() {
    this.courseCodeProp = this.$route.params.index
  }
}
</script>

<style>
/* Your existing styles here */
.form-container {
  width: 100%;
  margin: 40px auto;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.input-container {
  margin-bottom: 15px;
}

.data-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-around;
}

.data-item {
  width: 300px;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 15px;
}

.data-field {
  margin-bottom: 10px;
}

.data-action button {
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: rgb(161, 9, 9);
}
</style>
