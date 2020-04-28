<template>
  <div class="navbar">
    <div>
      <a class="headerItem" id="logo" href="#home">Home</a>

      <input
        class="headerItem"
        id="searchBox"
        type="search"
        v-model="searchTopictitle"
        @keyup="searchTopic"
        placeholder="başlık,#entry,@yazar"
      />
      <input id="searchBox" class="headerItem" type="submit" />

      <a id="loginlogout" href="#contact">logout ..</a>
      <a id="loginlogout" href="#contact">login</a>
    </div>
    <br />
    <br />
    <div>
      <div
        class="headerItem headerdiv"
        href="#"
        v-for="category in categories"
        :key="category.id"
        @click="getTopicByCategories(category.name)"
      >
        {{ category.name }}
      </div>

      <div
        class="dropdown headerItem headerdiv"
        v-for="menu in dropdownMenu"
        :key="menu.id"
      >
        {{ menu.name }}
      </div>
    </div>
    <br />
    <br />
    <br />
    <div>
      <hr class="new5" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default {
  data: function() {
    return {
      dropdownMenu: [],
      topicTimeOut,
      title: "title",
      searchTopictitle: ""
    };
  },
  methods: {
    ...mapActions([
      "asyncAddTopic",
      "asyncGetTopic",
      "asyncGetCategories",
      "asyncGetTopicByTitle"
    ]),
    getTopicByCategories: function(val) {
      console.log(val);
      this.asyncGetTopic(val);
    },
    searchTopic: function(event) {
      clearTimeout(this.topicTimeOut);
      if (this.searchTopictitle !== "") {
        console.log(this.searchTopictitle);
        this.topicTimeOut = setTimeout(() => {
          this.asyncGetTopicByTitle(this.searchTopictitle);
        }, 500);
      }
    }
  },
  created: function() {
    this.asyncGetCategories();
  },
  computed: {
    ...mapGetters(["categories"])
  }
};
</script>

<style scoped>
/* Large rounded green border */
hr.new5 {
  position: relative;

  border: 2px solid rgb(128, 0, 0);
  border-radius: 5px;
  z-index: 10;
  margin-top: -4px;
}

.navbar {
  overflow: hidden;
  position: fixed;
  top: 0;
  margin: auto;
  width: 100%;
  background-color: whitesmoke;
}

.navbar a {
  float: left;
  display: block;
  text-align: center;
  padding-top: 10px;
  padding-left: 15px;
  text-decoration: none;
  font-size: 20px;
}

.navbar a:hover {
  background: #ddd;
  color: black;
}
.headerItem {
  position: relative;
}

.headerdiv {
  position: relative;
  margin-top: 15px;
  margin-left: 1%;
  width: 10%;
  height: 35px;
  text-align: center;
  float: left;
}

.headerdiv:hover {
  background-color: teal;
}

#searchBox {
  left: 30%;
}

#logo {
  float: left;
}

#loginlogout {
  float: right;
}

.category {
  color: white;
}
</style>
