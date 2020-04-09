const state = {
  todos: [
    {
      id: 1,
      title: 'Todo One'
    },
    {
      id: 2,
      title: 'Todo Two'
    }
  ]
};

const getters = {
  allTodos: state => state.todos
};

const mutations = {};

const actions = {};

export default {
  state,
  getters,
  mutations,
  actions
}