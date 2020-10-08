const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'Bilimsel adı "caretta caretta" olan ve en büyük yumurtlama alanlarından biri Türkiye’de bulunan kamplumbağa türünün diğer adı nedir?',
    answers: [
      { text: 'Akdeniz kaplumbağası', correct: false },
      { text: 'Sini kaplumbağası', correct: true },
      { text: 'Dev kaplumbağa', correct: false },
      { text: 'Benekli kaplumbağa', correct: false }
    ]
  },
  {
    question: '“Yaş Günü Paradoksu”na göre rastgele seçilen 70 kişinin içerisinde iki kişinin aynı yaş gününe sahip olmasının olasılığı kaçtır?',
    answers: [
      { text: '%5', correct: false },
      { text: '%50', correct: false },
      { text: '%70', correct: false },
      { text: '%99.9', correct: true }
    ]
  },
  {
    question: 'Pera Müzesi’nde sergilenen Osman Hamdi Bey’e ait “Kaplumbağa Terbiyecisi” tablosunda yerde kaç adet kaplumbağa vardır?',
    answers: [
      { text: '1', correct: false },
      { text: '5', correct: true },
      { text: '7', correct: false },
      { text: '3', correct: false }
    ]
  },
  {
    question: 'İnsanlarda, Amerikan Güvenlik Sistemi’nde de yararlanılan “Yüz Hareketleri Kodlama Sistemi”nin saptadığı kaç çeşit yüz ifadesi vardır?',
    answers: [
      { text: '10', correct: false },
      { text: '100', correct: false },
      { text: '1000', correct: false },
      { text: '10000', correct: true }
    ]
  },
  {
    question: 'A4 boyutunda, “100 milyon pound”luk Birleşik Krallık’ta basılan İngiltere Merkez Bankasında saklanan banknotların adı nedir?',
    answers: [
      { text: 'Jupiter', correct: false },
      { text: 'Titan', correct: true },
      { text: 'Imperial', correct: false },
      { text: 'Crown', correct: false }
    ]
  },
  {
    question: 'Hangisi para üzerine resmi basılan bilinen ilk gerçek kişidir?',
    answers: [
      { text: 'Kraliçe I. Elizabeth', correct: false },
      { text: 'Jules Cesar', correct: false },
      { text: 'Büyük İskender', correct: true },
      { text: 'Napoleon Bonaparte', correct: false }
    ]
  },
  {
    question: 'Leonardo da Vinci’nin de etkilendiği, sibernetik ve robot biliminde çalışmalar yapan ilk kişi olarak kabul edilen bilim adamı kimdir?',
    answers: [
      { text: 'El Cezeri', correct: true },
      { text: 'Biruni', correct: false },
      { text: 'İbn-i Heysem', correct: false },
      { text: 'Harezmi', correct: false }
    ]
  },
  {
    question: 'NBA’de, şampiyon takımın oyuncularına, kupa dışında, şampiyonluk anısına hangisi verilir?',
    answers: [
      { text: 'Kaşkol', correct: false },
      { text: 'Şapka', correct: false },
      { text: 'Kemer', correct: false },
      { text: 'Yüzük', correct: true }
    ]
  },
  {
    question: 'Osmanlı Devleti’nde padişaha özel olarak yapılan güreşlere ne ad verilir?',
    answers: [
      { text: 'Kaftan Güreşleri', correct: false },
      { text: 'Divan Güreşleri', correct: false },
      { text: 'Huzur Güreşleri', correct: true },
      { text: 'Saadet Güreşleri', correct: false }
    ]
  },
  {
    question: 'Kriptografinin ilk örneklerinden olan, yer ve harf değiştirme esasına dayalı klasik şifreleme sistemi adını bu sistemi geliştiren hangi liderden alır?',
    answers: [
      { text: 'Napolyon', correct: false },
      { text: 'Sezar', correct: true },
      { text: 'Hannibal', correct: false },
      { text: 'Büyük İskender', correct: false }
    ]
  }
]