<template>
  <div class="add-shake container">
    <h2 class="center-align grey-text text-darken-3">Add New Shake Recipe</h2>
    <form @submit.prevent="AddShake">
      <div class="field title">
        <label for="title">Shake Title:</label>
        <input type="text" name="title" v-model="title">
      </div>
      <div class="field add-ingredient">
        <label for="add-ingredient">Add an ingredient:</label>
        <input type="text" name="add-ingredient">
      </div>
      <div class="field center-align">
        <button class="btn green accent-4">Add Samurai Shake</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddShake',
  data() {
    return {
      title: null
    }
  },
  methods: {
    AddShake() {
      console.log(this.title)
    }
  }
}
</script>

<style>
.add-shake {
  margin-top: 60px;
  padding: 20px;
  max-width: 500px;
}

.add-shake h2 {
  font-size: 2em;
  margin: 20px auto;
}

.add-shake .field {
  margin: 20px auto;
}
</style>

