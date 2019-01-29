function convert() {
  const code = document.querySelector('#text').value

  const result = code.split('\n').map((str) => {
    return `"${transform(str)}",`
  })
  document.querySelector('#result').value = result.join('\n')
}

function transform (str) {
  return str.replace(/\s\s/g, '\\t').replace(/\"/g, '\\\"')
}

document.querySelector('#text').value =
`<h2>
  <div class="text-primary">It works!</div>
</h2>`

convert()
