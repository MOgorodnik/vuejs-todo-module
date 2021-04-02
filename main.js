import boxAppItem from './components/boxAppItem.js';
import FormComponent from './components/FormComponent.js';
import ListComponent from './components/ListComponent.js';

// component in main js file (global scope)
// var boxAppItem = {
//   name: 'boxAppItem',
//   template: `
//       <h3>template boxApp fom main</h3>
//   `
// };

// Global scope component
Vue.component('TitleComponent', {
  template: '<h1 class="title">To Do App</h1>'
})

Vue.component('ToDoApp', {
  components: {
    boxAppItem: "TitleComponent",
    FormComponent,
    ListComponent
  },
  prop: ['val'],
  template: `
  <div id="ToDoApp" @input="foo">
    <TitleComponent/>
    <FormComponent/>
    <ListComponent/>
  </div>
  `,
  data() {
    return {
      val: this.val
    }
  },
  methods: {
    foo(e) {
      console.log(e);
      this.val = e.target.value;
    }
  },
})

new Vue({
  el: '#ToDoApp',
  template: `<ToDoApp/>`
})