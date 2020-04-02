<template>
  <div class="main">
    <div class="row">
      <div class="container">
        <div class="col-md-12">
          <h1>Book listing app with Vue.js, Apollo, and GraphQL</h1>
          <form>
            <div class="form-group">
              <input
                type="text"
                v-model="title"
                class="form-control"
                id="title"
                placeholder="Title"
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                v-model="author"
                class="form-control"
                id="author"
                placeholder="Author"
              />
            </div>
            <div class="form-group">
              <textarea
                v-model="description"
                id="description"
                rows="3"
                class="form-control"
              ></textarea>
            </div>
            <button
              @click="createBook"
              class="btn btn-secondary btn-lg btn-block"
              type="button"
            >
              Add Book
            </button>
          </form>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="container mt-4">
        <div v-for="book in books" :key="book.id">
          <div class="col-md-12">
            <div class>
              <div class="card">
                <div class="card-body">
                  Title: {{ book.title }}
                  <hr />
                  Author: {{ book.author }} Description: {{ book.description }}
                </div>
              </div>
            </div>
          </div>
          <br />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag"
export default {
  name: "mainApp",
  data() {
    return {
      books: "",
      title: "",
      author: "",
      description: ""
    }
  },
  apollo: {
    books: {
      query: gql`
        query {
          books {
            title
            author
            description
          }
        }
      `
    }
  },
  methods: {
    createBook() {
      if (this.title != "" && this.author != "" && this.description != "") {
        this.$apollo
          .mutate({
            mutation: gql`
              mutation createBook(
                $title: String!
                $author: String!
                $description: String!
              ) {
                createBook(
                  title: $title
                  author: $author
                  description: $description
                ) {
                  title
                  author
                  description
                }
              }
            `,
            variables: {
              title: this.title,
              author: this.author,
              description: this.description
            }
          })
          .then(response => {
            this.books = response.data.createBook
            location.reload()
          })
      } else {
        alert("Please fill all forms")
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  padding-top: 5%;
}
</style>
