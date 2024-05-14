function subStatusChance(buttonId) {
    let value = document.getElementById(buttonId)
    if (value.innerHTML === "+подписка") {
        value.innerHTML = "отписаться"
    } else {
        value.innerHTML = "+подписка"
    }
}