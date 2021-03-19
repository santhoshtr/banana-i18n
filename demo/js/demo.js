function updateText (banana) {
  const message = '$1 has $2 {{plural:$2|kitten|kittens}}. ' +
    '{{gender:$3|He|She}} loves to play with {{plural:$2|it|them}}.'
  const langSelector = document.getElementById('language')
  const language = langSelector.options[langSelector.selectedIndex].value
  const personSelector = document.getElementById('person')
  const gender = personSelector.options[personSelector.selectedIndex].value
  const personName = personSelector.options[personSelector.selectedIndex].text
  const kittens = document.getElementById('kittens').value

  banana.setLocale(language)

  const localePathPrefix = window.localePathPrefix || 'i18n/'
  const localePath = `${localePathPrefix}demo-${banana.locale}.json`
  // eslint-disable-next-line no-undef
  fetch(localePath).then((response) => response.json()).then((messages) => {
    banana.load(messages, banana.locale)
    const localizedPersonName = banana.i18n(personName)
    // Show localized message in result div
    document.getElementById('result').innerText = banana.i18n(message, localizedPersonName, kittens, gender)
  })
}

window.addEventListener('load', () => {
  // eslint-disable-next-line no-undef
  const banana = new Banana()
  const _updateText = updateText.bind(null, banana)
  _updateText()
  document.querySelectorAll('#kittens, #person, #language').forEach(element => {
    element.addEventListener('change', _updateText)
    element.addEventListener('keyup', _updateText)
  })
})
