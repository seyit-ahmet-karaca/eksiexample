import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    topics: [],
    categories: [],
    comments: [],
    topicTitles: []
  },
  getters: {
    topicTitles: state => {
      return state.topicTitles;
    },
    topics: state => {
      return state.topics;
    },
    categories: state => {
      return state.categories;
    },
    comments: state => {
      return state.comments;
    }
  },
  mutations: {
    addTopic: (state, topic) => {
      state.topics.push(topic);
    },
    fillTopic: (state, topic) => {
      state.topics = topic;
    },
    setCategories: (state, categories) => {
      state.categories = categories;
    },
    setComments: (state, comments) => {
      state.comments = comments;
    },
    setTopicTitles: (state, topicTitles) => {
      state.topicTitles = topicTitles;
    }
  },
  actions: {
    asyncGetTopicByTitle: (content, title) => {
      axios
        .get(
          `http://localhost:8082/api/v1/fakeeksi/topics/getTopicsByTitle?title=` +
            title
        )
        .then(res => {
          const data = res.data;
          var localTopics = [];
          for (let key in data) {
            localTopics.push(data[key]);
          }
          console.log(localTopics);
          content.commit("setTopicTitles", localTopics);
        })
        .catch(error => content.commit("setTopicTitles", []));
    },
    asyncGetCommentsByTopic: ({ commit }, topicId) => {
      axios
        .get(`http://localhost:8082/api/v1/fakeeksi/comments/` + topicId)
        .then(res => {
          const data = res.data.commentDTOS;
          var localComments = [];
          for (let key in data) {
            localComments.push(data[key]);
          }
          console.log(localComments);
          commit("setComments", localComments);
        })
        .catch(error => console.log(error));
    },
    asyncAddTopic: ({ commit }, topic) => {
      console.log(topic);
    },
    asyncGetTopic: ({ commit }, category) => {
      axios
        .get(
          `http://localhost:8082/api/v1/fakeeksi/topics/category/` + category
        )
        .then(res => {
          const data = res.data;
          var localTopic = [];
          for (let key in data) {
            localTopic.push(data[key]);
          }
          console.log(localTopic);
          commit("fillTopic", localTopic);
        })
        .catch(error => console.log(error));
    },
    asyncGetCategories: ({ commit }) => {
      axios
        .get(`http://localhost:8082/api/v1/fakeeksi/category`)
        .then(res => {
          const data = res.data.categoryResponseDTOList;
          var localCategories = [];
          for (let key in data) {
            localCategories.push(data[key]);
          }
          console.log(localCategories);
          commit("setCategories", localCategories);
        })
        .catch(error => console.log(error));
    }
  }
});
