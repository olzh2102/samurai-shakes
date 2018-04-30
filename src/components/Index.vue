<template>
  <div class="index container">
    <div class="card blue-grey darken-4" v-for="shake in shakes" :key="shake.id">
      <div class="card-content white-text">
        <i class="material-icons delete" @click="deleteShake(shake.id)">delete</i>
        <h2>{{ shake.title }}</h2>
        <ul class="ingredients">
          <li v-for="(ing, index) in shake.ingredients" :key="index">
            <span class="chip">{{ ing }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      shakes: [
        { title: 'Sweet Samurai', slug: 'sweet-samurai', ingredients: ['bananas', 'ice cream', 'oreo'], id: '1'},
        { title: 'Samurai Breakfast', slug: 'samurai-breakfast', ingredients: ['coffee', 'ice cream', 'dark choco'], id: '2'}
      ]
    }
  },
  methods: {
    deleteShake(id) {
      this.shakes = this.shakes.filter(shake => {
        return shake.id !== id
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.index {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  margin-top: 60px;
}

.index h2 {
  font-size: 1.8em;
  text-align: center;
  margin-top: 0;
}

.index .ingredients {
  margin: 30px auto;
}

.index .ingredients li {
  display: inline-block;
}

.index .delete {
  position: absolute;
  top: 7px;
  right: 7px;
  cursor: pointer;
  color: #EF8354;
  font-size: 1.4em;
}
</style>
