export default class View {
    constructor(parent) {

    }
    fillSelection({id, kategorianev}) {
        $("#katSelect").append(`<option value=${id}>${kategorianev}</option>`);
        const thisOption = $("#katSelect").children("option:last-child");
        thisOption.on("click", () => {
            this.clickTrigger("kategoriaValaszt", id)
        })
    }
    clickTrigger(eventname, id) {
        const newEvent = new CustomEvent(eventname, {detail: id})
         window.dispatchEvent(newEvent);
    }
}