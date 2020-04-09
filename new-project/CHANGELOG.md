- [src\main.ts]
  - new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");

- [src\App.vue]
  - <router-link to="/hong">Hong</router-link>

- [src\router\index.ts]
  - new VueRouter({
      [
        {
          path: "/hong",
          name: "Hong",
          component: Hong
        }
      ]
    })

- [src\views\Hong.vue]
  - {
      name: "Hong",
      components: {
        Todos
      }
    }

- [src\components\Todos.vue]
  - {
      name: "Todos",
      computed: mapGetters(['allTodos'])
    }

- [src\store\index.ts]
  - new Vuex.Store({
      modules: {
        todos
      }
    })

- [src\store\modules\todos.js]
  - {
      state,
      getters,
      mutations,
      actions
    }






