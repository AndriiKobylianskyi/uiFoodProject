function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
    const tabs = document.querySelectorAll(tabsSelector),
        tabsContents = document.querySelectorAll(tabsContentSelector),
        tabsParent = document.querySelector(tabsParentSelector)

    function hideAll() {
        tabs.forEach(tab => tab.classList.remove(activeClass))
        tabsContents.forEach(tabsContent => tabsContent.style.display = 'none')
    }

    function showTab(index = 0) {
        tabs[index].classList.add(activeClass)
        tabsContents[index].style.display = 'block'
    }
    hideAll()
    showTab()

    tabsParent.addEventListener('click', (e) => {
        let target = e.target
        if (target && target.classList.contains(tabsSelector.slice(1))) {
            tabs.forEach((tab, index) => {
                if (tab == target) {
                    hideAll()
                    showTab(index)
                }
            })
        }
    })

}
export default tabs
