var FormComponent = {
    // name: 'FormComponent',
    template: `
    <form action="/">
        <fieldset>
            <legend align="center">Add task to list</legend>
            <label for="add-do">
                <input id="add-do" type="text" placeholder="What are you want to do?">
            </label>
            <input type="submit" value="Submit">
        </fieldset>
    </form>
    `
};
export default FormComponent