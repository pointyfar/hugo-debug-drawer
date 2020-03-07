function toggleSidebugPanel(el) {
    let target = document.getElementById(el.dataset.sidebugpanel)

    toggleSidebugClass(target, 'sidebug-panel-closed')
    toggleSidebugClass(el, 'sidebug-trigger-closed')

}
function toggleSidebugAccordion(el) {
    let target = document.getElementById(el.dataset.sidebugpanel)
    toggleSidebugClass(target, 'sidebug-accordion-closed')
    toggleSidebugClass(el, 'active')
}

function toggleSidebugList(el) {
    var c = el.children;
    let target = c[c.length-1];
    console.log(c, target)
    toggleSidebugClass(c[0], 'active')
    toggleSidebugClass(target, 'sidebug-hfd-hide')
    

}

function toggleSidebugClass(t, c) {
    t.classList.toggle(c);
}

function yo(x) {
    console.log(x)
}