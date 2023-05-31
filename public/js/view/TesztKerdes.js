export default class TesztKerdes {
    #helyes = 'v1';
    constructor(parent, {id, kerdes, v1, v2, v3, v4, helyes}) {
        this.#helyes = helyes;
        parent.append(`
        <div class="kerdesDiv" >
            <div class="kerdes">${kerdes}</div>
            <div class="vGridContainer" id=${id+"k"}>
            <div class="v1 valasz" id=${id+"v1"}>${v1}</div>
            <div class="v2 valasz" id=${id+"v2"}>${v2}</div>
            <div class="v3 valasz" id=${id+"v3"}>${v3}</div>
            <div class="v4 valasz" id=${id+"v4"}>${v4}</div>
            </div>
        </div>
    `);
    $(`#${id+"v1"}`).on("click", function(){
        $(this).addClass("helytelen")
      });
      $(`#${id+"v2"}`).on("click", function(){
        $(this).addClass("helytelen")
      });
      $(`#${id+"v3"}`).on("click", function(){
        $(this).addClass("helytelen")
      });
      $(`#${id+"v4"}`).on("click", function(){
        $(this).addClass("helytelen")
      });
      $(`#${id+helyes}`).off("click");

      $(`#${id+helyes}`).on("click", function(){
        $(this).addClass("helyes")
      });

    }
    
}