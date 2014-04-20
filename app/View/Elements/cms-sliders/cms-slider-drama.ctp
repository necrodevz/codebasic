<script>

function handler1() {

document.getElementById('item-more-2').setAttribute("class",
                                                          "open");
document.getElementById('arrow').setAttribute("class",
                                                          "arrow-up");	
document.getElementById('details-i-2').setAttribute("class",
                                                          "details-i-full");
document.getElementById('details-more-2').setAttribute("class",
                                                          "details-more");	
document.getElementById('details-head-2').setAttribute("class",
                                                          "details-head");
document.getElementById('details-title-2').setAttribute("class",
                                                          "details-title");	
document.getElementById('o-o-2').setAttribute("class",
                                                          "o");
document.getElementById('o-1-2').setAttribute("class",
                                                          "o-2");
document.getElementById('o-2-2').setAttribute("class",
                                                          "o-2");	
document.getElementById('details-txt-2').setAttribute("class",
                                                          "details-txt");
document.getElementById('details-desc-2').setAttribute("class",
                                                          "details-desc");
document.getElementById('details-watch-2').setAttribute("class",
                                                          "details-watch");														  
    $(this).one("click", handler2);
}
function handler2() {
    document.getElementById('item-more-2').setAttribute("class",
                                                          "open1");
document.getElementById('arrow').setAttribute("class",
                                                          "arrow-up1");	
document.getElementById('details-i-2').setAttribute("class",
                                                          "details-i-full-1");
document.getElementById('details-more-2').setAttribute("class",
                                                          "details-more1");	
document.getElementById('details-head-2').setAttribute("class",
                                                          "details-head1");
document.getElementById('details-title-2').setAttribute("class",
                                                          "details-title1");	
document.getElementById('o-o-2').setAttribute("class",
                                                          "o1");
document.getElementById('o-1-2').setAttribute("class",
                                                          "o-21");
document.getElementById('o-2-2').setAttribute("class",
                                                          "o-21");	
document.getElementById('details-txt-2').setAttribute("class",
                                                          "details-txt1");
document.getElementById('details-desc-2').setAttribute("class",
                                                          "details-desc1");
document.getElementById('details-watch-2').setAttribute("class",
                                                          "details-watch1");
    $(this).one("click", handler1);
}
$("#target-2").one("click", handler1);


</script>
