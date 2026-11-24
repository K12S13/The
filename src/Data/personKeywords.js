// Ключові слова для пошуку людей у тегах OpenStreetMap.
// Генеруються автоматично з поля `person` у даних: прізвище в називному,
// родовому й давальному відмінках + латинська транслітерація.

// Прізвища, які збігаються зі звичайними словами, шукати небезпечно
const STOP_SURNAMES = new Set(['великий', 'мудрий', 'холодна', 'іванов', 'могила', 'орлик', 'iii', 'ii', 'i'])
const GROUP_WORDS = /Учасники|Жертви|Захисники|Загиблі|Герої|Історія|Народна|Мешканці|Давн|Скіф|Носії|Мисливці|Військо|Запорозькі|Родина|Діти|Євреї|Пожежники|Футболісти|Українські|Археологічна|культур|спадщина|інші/

// Окремі люди з рядка `person` (там буває кілька імен через кому або «та»)
export function splitPersons(person) {
  if (!person || GROUP_WORDS.test(person)) return []
  return person
    .replace(/\([^)]*\)/g, ' ')
    .split(/,|\sта\s|\sі\s/)
    .map((name) => name.trim().replace(/\s+/g, ' '))
    .filter((name) => {
      const words = name.split(' ')
      // лише власні імена: кожне слово з великої літери
      return words.length >= 2 && words.every((word) => /^[A-ZА-ЯІЇЄҐ]/.test(word))
    })
}

// Відмінювання прізвища (спрощені правила української граматики)
export function declineSurname(surname) {
  const s = surname.toLowerCase()
  const forms = [s]
  const stem = (n) => s.slice(0, -n)
  if (/(ськ|цьк|зьк)ий$/.test(s)) forms.push(stem(2) + 'ого', stem(2) + 'ому')
  else if (/(ськ|цьк|зьк)а$/.test(s)) forms.push(stem(1) + 'ої', stem(1) + 'ій')
  else if (/ий$/.test(s)) forms.push(stem(2) + 'ого', stem(2) + 'ому')
  else if (/ко$/.test(s)) forms.push(stem(1) + 'а', stem(1) + 'ові', stem(1) + 'у')
  else if (/ка$/.test(s)) forms.push(stem(1) + 'и', stem(2) + 'ці')
  else if (/а$/.test(s)) forms.push(stem(1) + 'и', stem(1) + 'і')
  else if (/я$/.test(s)) forms.push(stem(1) + 'і')
  else if (/[бвгґджзклмнпрстфхцчшщ]$/.test(s)) forms.push(s + 'а', s + 'у', s + 'ові')
  return [...new Set(forms)]
}

const TRANSLIT = {
  а: 'a', б: 'b', в: 'v', г: 'h', ґ: 'g', д: 'd', е: 'e', є: 'ie', ж: 'zh', з: 'z', и: 'y', і: 'i', ї: 'i', й: 'i',
  к: 'k', л: 'l', м: 'm', н: 'n', о: 'o', п: 'p', р: 'r', с: 's', т: 't', у: 'u', ф: 'f', х: 'kh', ц: 'ts',
  ч: 'ch', ш: 'sh', щ: 'shch', ь: '', ю: 'iu', я: 'ia', '’': '', "'": ''
}
export function transliterate(text) {
  return [...text.toLowerCase()].map((ch) => TRANSLIT[ch] ?? ch).join('')
}

export function buildPersonKeywords(objects) {
  const byPerson = new Map()
  for (const o of objects) {
    for (const name of splitPersons(o.person)) {
      if (byPerson.has(name)) continue
      const surname = name.split(' ').at(-1)
      if (surname.length < 4 || STOP_SURNAMES.has(surname.toLowerCase())) continue
      const keywords = declineSurname(surname)
      const latin = transliterate(surname)
      if (latin.length >= 4) keywords.push(latin)
      byPerson.set(name, keywords)
    }
  }
  return [...byPerson.entries()].map(([person, keywords]) => ({ person, keywords }))
}
