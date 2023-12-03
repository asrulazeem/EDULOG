<template>
  <div id="app">
    <div class="wrapper">
      <h1>Logbook Report</h1>
      <div>
        <input type="text" size="50" placeholder="Date" />
        <input type="text" size="50" placeholder="Write your report here" />
        <!-- Add file input for picture or video -->
        <input
          type="file"
          accept="image/*,video/*"
          @change="handleFileUpload('logbook')"
        />
        <div v-for="key in count" :key="key">
          <input
            type="text"
            v-model="values['dynamic-field-' + key]"
            size="50"
            placeholder="Write your report here"
            :id="key"
          />
        </div>
      </div>
      <div class="controls">
        <a href="#" id="add_more_fields" @click="add">
          <i class="fa fa-plus"></i>
          Add More
        </a>
        <a href="#" id="remove_fields" @click="remove">
          <i class="fa fa-plus"></i>
          Remove Field
        </a>
      </div>
      <button class="btn" @click="submit('logbook')">Submit</button>
      <button class="btn" @click="submit('logbook')">Clear</button>
    </div>

    <div class="wrapper-row">
      <div class="wrapper">
        <h3>Supervisor Academy Comment</h3>
        <div>
          <input type="text" size="100" placeholder="Comment here" />
        </div>
        <button class="btn" @click="submit('academy')">Submit</button>
        <button class="btn" @click="submit('academy')">Clear</button>
      </div>

      <div class="wrapper">
        <h3>Supervisor Industry Comment</h3>
        <div>
          <input type="text" size="100" placeholder="Comment here" />
        </div>
        <button class="btn" @click="submit('industry')">Submit</button>
        <button class="btn" @click="submit('industry')">Clear</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      count: 1,
      values: {},
      fileInputs: {
        logbook: [],
        academy: [],
        industry: []
      }
    }
  },
  methods: {
    add() {
      this.count++
    },
    remove() {
      this.count--
    },
    submit(section) {
      for (const key of Object.keys(this.values)) {
        console.log(section + ': ' + key + ' -> ' + this.values[key])
      }
      console.log(section + ' files:', this.fileInputs[section])
    },
    handleFileUpload(section) {
      return (event) => {
        const files = event.target.files
        this.fileInputs[section] = [...files]
      }
    }
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}

.wrapper-row {
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 10px;
}

.wrapper {
  width: 400px;
  margin: 20px;
  padding: 10px;
  border-radius: 5px;
  background: white;
  box-shadow: 0px 10px 40px 0px rgba(47, 47, 47, 0.1);
}

h1,
h3 {
  text-align: center;
  font-size: 24px;
  color: #232c3d;
}

.btn {
  width: 50%;
  background: #3f51b5;
  color: white;
  border: 0;
  padding: 7px;
  border-radius: 5px;
  margin: 2%;
}

input[type='text'],
input[type='file'] {
  padding: 10px;
  margin: 10px auto;
  display: block;
  border-radius: 5px;
  border: 1px solid lightgrey;
  background: none;
  width: 274px;
  color: black;
}

input[type='text']:focus,
input[type='file']:focus {
  outline: none;
}

.controls {
  width: 294px;
  margin: 15px auto;
}

#remove_fields {
  float: right;
}

.controls a i.fa-minus {
  margin-right: 5px;
}

a {
  color: black;
  text-decoration: none;
}
</style>
