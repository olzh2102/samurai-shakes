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
        <input type="text" name="add-ingredient" @keydown.tab.prevent="addIng" v-model="another">
      </div>
      <div class="field center-align">
        <p v-if="feedback" class="red-text">{{ feedback }}</p>
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
      title: null,
      another: null,
      ingredients: [],
      feedback: null
    }
  },
  methods: {
    AddShake() {
      console.log(this.title, this.ingredients)
    },

    addIng() {
      if(this.another) {
        this.ingredients.push(this.another)
        this.another = null
        this.feedback = null
      } else {
        this.feedback = 'Please, add an ingredient to complete the shake'
      }
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

