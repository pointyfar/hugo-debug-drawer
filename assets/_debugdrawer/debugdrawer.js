function toggleSidebugPanel(el) {
    let target = document.getElementById(el.dataset.debugdrawerpanel)

    toggleSidebugClass(target, 'debugdrawer-panel-closed')
    toggleSidebugClass(el, 'debugdrawer-trigger-closed')

}
function toggleSidebugAccordion(el) {
    let target = document.getElementById(el.dataset.debugdrawerpanel)
    toggleSidebugClass(target, 'debugdrawer-accordion-closed')
    toggleSidebugClass(el, 'active')
}

function toggleSidebugList(el) {
    var c = el.children;
    let target = c[c.length-1];
    console.log(c, target)
    toggleSidebugClass(c[0], 'active')
    toggleSidebugClass(target, 'debugdrawer-hfd-hide')
    

}

function toggleSidebugClass(t, c) {
    t.classList.toggle(c);
}

function yo(x) {
    console.log(x)
}