const messageDetails = document.getElementById("new-message")

new URLSearchParams(window.location.search).forEach((value, name) => {
    messageDetails.append(`${name}: ${value}`)
    messageDetails.append(document.createElement("br"))
})