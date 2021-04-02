var ListItemComponent = {
    data: () => ({
        task: 'Lipsum'
    }),
    template: `
        <li class="item">
            <div class="task">{{ this.task }}</div>
            <div class="icons">
                <span class="material-icons">
                    edit
                </span>
                <span class="material-icons">
                    star_border
                </span>
                <span class="material-icons">
                    crop_square
                    <!-- check_box_outline_blank -->
                </span>
                <!-- <span class="material-icons">
                    check
                </span> -->
                <span class="material-icons">
                    delete
                </span>
            </div>
        </li>
    `
}
export default ListItemComponent;