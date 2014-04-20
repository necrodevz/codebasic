<script>

function handler1() {

document.getElementById('item-more').setAttribute("class",
                                                          "open");
document.getElementById('arrow').setAttribute("class",
                                                          "arrow-up");	
document.getElementById('details-i').setAttribute("class",
                                                          "details-i-full");
document.getElementById('details-more').setAttribute("class",
                                                          "details-more");	
document.getElementById('details-head').setAttribute("class",
                                                          "details-head");
document.getElementById('details-title').setAttribute("class",
                                                          "details-title");	
document.getElementById('o').setAttribute("class",
                                                          "o");
document.getElementById('o-1').setAttribute("class",
                                                          "o-2");
document.getElementById('o-2').setAttribute("class",
                                                          "o-2");	
document.getElementById('details-txt').setAttribute("class",
                                                          "details-txt");
document.getElementById('details-desc').setAttribute("class",
                                                          "details-desc");
document.getElementById('details-watch').setAttribute("class",
                                                          "details-watch");														  
    $(this).one("click", handler2);
}
function handler2() {
    document.getElementById('item-more').setAttribute("class",
                                                          "open1");
document.getElementById('arrow').setAttribute("class",
                                                          "arrow-up1");	
document.getElementById('details-i').setAttribute("class",
                                                          "details-i-full-1");
document.getElementById('details-more').setAttribute("class",
                                                          "details-more1");	
document.getElementById('details-head').setAttribute("class",
                                                          "details-head1");
document.getElementById('details-title').setAttribute("class",
                                                          "details-title1");	
document.getElementById('o').setAttribute("class",
                                                          "o1");
document.getElementById('o-1').setAttribute("class",
                                                          "o-21");
document.getElementById('o-2').setAttribute("class",
                                                          "o-21");	
document.getElementById('details-txt').setAttribute("class",
                                                          "details-txt1");
document.getElementById('details-desc').setAttribute("class",
                                                          "details-desc1");
document.getElementById('details-watch').setAttribute("class",
                                                          "details-watch1");
    $(this).one("click", handler1);
}
$("#target-4").one("click", handler1);


</script>
