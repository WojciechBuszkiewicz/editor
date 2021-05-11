const editor = document.getElementById("sampleeditor")

function format(command) {
    document.execCommand(command, false)
}

function save() {
    if (editor) {
        var a = document.createElement("a")
        var file = new Blob([JSON.stringify({ html: editor.innerHTML })], {
            type: "text/plain",
        })
        a.href = URL.createObjectURL(file)
        a.download = "file.json"
        a.click()
    }
}

function onChange(event) {
    var reader = new FileReader()
    reader.onload = onReaderLoad
    reader.readAsText(event.target.files[0])
}

function onReaderLoad(event) {
    const text = JSON.parse(event.target.result)
    editor.insertAdjacentHTML("beforeend", text.html)
}

document.getElementById("file").addEventListener("change", onChange)
