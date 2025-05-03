<script setup>
import { onMounted, ref } from "vue";

const name = ref("John Doe");
const status = ref("active");
const tasks = ref(["Task 1", "Task 2", "Task 3"]);
const newTask = ref("");
const addTask = () => {
  if (newTask.value.trim() !== '') {
    tasks.value.push(newTask.value);
    newTask.value = '';
  }
};
const deleteTask = (index) => {
  tasks.value.splice(index, 1);
};
onMounted(async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    tasks.value = data.map((task) => task.title)
  } catch (error) {
    console.error("Error fetching user data:", error);
  }

});

const toggleStatus = () => {
  if (status.value === "active") {
    status.value = "inactive";
  } else if (status.value === "pending") {
    status.value = "active";
  } else if (status.value === "inactive") {
    status.value = "pending";
  } else {
    status.value = "active";
  }
};
</script>

<template>
  <div class="preformatted-text">
    <h1>{{ name }}</h1>

    <p v-if="status === 'active'">User is active</p>
    <p v-else-if="status === 'pending'">User is pending</p>
    <p v-else>User is inactive</p>
    <form @submit.prevent="addTask">
    <label for="newTask"> Add Task</label>
    <input type="text" id="newTask" v-model="newTask" />
    <button type="submit">Submit</button>
    
    </form>
    <h3>Tasks</h3>

    <ul>
      <li v-for="(task, index) in tasks" :key="task">
      <span>{{ task }}
      </span>
      <button @click="deleteTask(index)">X</button>
      </li>
    </ul>

    <br />
    <button @click="toggleStatus">Change Status</button>
  </div>
</template>

<style>
.preformatted-text {
  white-space: pre;
  font-family: monospace;
}
</style>
