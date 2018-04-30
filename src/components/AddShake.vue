<template>
  <div class="add-shake container">
    <h2 class="center-align grey-text text-darken-3">Add New Shake Recipe</h2>
    <form @submit.prevent="AddShake">
      <div class="field title">
        <label for="title">Shake Title:</label>
        <input type="text" name="title" v-model="title">
      </div>
      <div v-for="(ing, index) in ingredients" :key="index">
        <label for="ingredient">Ingredient:</label>
        <input type="text" name="ingredient" v-model="ingredients[index]">
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
import db from '@/firebase/init'
import slugify from 'slugify'

export default {
  name: 'AddShake',
  data() {
    return {
      title: null,
      another: null,
      ingredients: [],
      feedback: null,
      slug: null
    }
  },
  methods: {
    AddShake() {
      if(this.title) {
        this.feedback = null
        // create a slug
        this.slug = slugify(this.title, {
          replacement: '-',
          remove: /[$*_+~.()'"!\-:@]/g,
          lower: true
        })
        db.collection('shakes').add({
          title: this.title,
          ingredients: this.ingredients,
          slug: this.slug
        }).then(() => {
          this.$router.push({ name: 'Index' })
        }).catch(e => {
          console.log(e)
        })
      } else {
        this.feedback = 'You must enter samurai-shake title'
      }
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

