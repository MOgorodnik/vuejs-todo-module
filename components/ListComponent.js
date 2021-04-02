import ListItemComponent from "./ListItemComponent.js"
var ListComponent = {
    // name: 'ListComponent',
    components: {
        ListItemComponent
    },
    template: `
    <ol class="list">
        <ListItemComponent/>
    </ol>
    `
};
export default ListComponent