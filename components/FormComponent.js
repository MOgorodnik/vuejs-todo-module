var FormComponent = {
    // name: 'FormComponent',
    template: `
    <form class="form" action="/" @submit.prevent="handleSubmit">
        <fieldset>
            <legend align="center">Add task to list</legend>
            <label for="add-do">
                <input v-model="value" @input="handleInput" id="add-do" class="inp-text" placeholder="What are you want to do?">
            </label>
            <input class="inp-submit" type="submit" value="Add">
            <p>Message is: {{ value }}</p>
        </fieldset>
    </form>
    `,
    prop: ['value'],
    data () {
        return {
        value: this.value
        }
    },
    methods: {
        handleInput (e) {
            this.$emit('input', this.value)
        },
        handleSubmit(e) {
            console.log('handleSubmit');
        }
    }
};
export default FormComponent