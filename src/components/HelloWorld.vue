<template>
  <div class="container">
    <div class="col-md-12">
      <h1>Book listing app with Vue.js, Apollo, and GraphQL</h1>
      <form>
        <div class="form-group">
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Title"
          />
        </div>
        <div class="form-group">
          <textarea id="exampleFormControlTextarea1" rows="3" class="form-control"></textarea>
        </div>
        <button class="btn btn-secondary btn-lg btn-block" type="button">Block level button</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
