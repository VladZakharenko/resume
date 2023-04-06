// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

var header = {
  name: {
    firstname: 'Іван',
    lastname: 'Іванов',
  },
  position: 'Junior Fullstack JS Developer',
  salary: '600 usd в місяць',
  address:
    '02066. Київ. Третій задуплянський провулок. Будинок 2. Підвал 4. Третя койка праворуч',
}

var footer = {
  social: {
    email: {
      text: 'ivanov@mail.com',
      href: 'mailto:ivanov@mail.com',
    },
    phone: {
      text: '+380670000123',
      href: 'tel:+380670000123',
    },
    linkedin: {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dmytro-test',
    },
  },
}

var name = [
  { name: 'KPI', isEnd: true },
  { name: 'нархоз', isEnd: true },
  { name: 'кулінарний технікум', isEnd: true },
  { name: 'гурток вишивання хрестиком', isEnd: false },
]

var certificates = [
  {
    name: 'влучний стрілок',
    id: 25,
  },
  {
    name: 'добропорядний громадянин',
    id: 35,
  },
  {
    name: 'істинний арієць',
    id: 10,
  },
]

var hobbies = [
  {
    name: 'можу копати',
    isMain: false,
  },
  {
    name: 'можу не копати',
    isMain: false,
  },
  {
    name: 'здоровий сон',
    isMain: true,
  },
]

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    page: {
      title: 'Resume | Summary',
    },

    header,

    footer,

    main: {
      summary: {
        title: 'Загальна інформація',
        text: `Open-minded for new technologies, with 1 years of experience in development. Whenever I start to
			work on a new project I learn the domain and try to understand the idea of the project. Good team
			player, every colleague is a friend to me.`,
      },
      experience: {
        title: 'Інші досягнення',
        text: `Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (
			  tournament position, goals etc), analyzing by simple mathematics models and preparing probability
			  for such events like: money line - first win / draw / second win, totals etc.`,
      },
    },
  })
})

router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    page: {
      title: 'Resume | Skills',
    },

    header,

    footer,

    main: {
      skills: [
        {
          name: 'HTML',
          point: 10,
          isTop: true,
        },
        {
          name: 'стреосустойчивість',
          point: 10,
          isTop: true,
        },
        {
          name: 'VS code',
          point: 9,
          isTop: false,
        },
        {
          name: 'Git',
          point: 9,
          isTop: false,
        },
        {
          name: 'fafa-lyly',
          point: 0,
        },
        {
          name: 'PHP',
          point: null,
        },
      ],
      hobbies,
    },
  })
})

router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    page: {
      title: 'Resume | Education',
    },

    header,

    footer,

    main: {
      name,
      certificates,
    },
  })
})

// ================================================================

router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    layout: 'big',

    page: {
      title: 'Resume | Work',
    },

    header,

    footer,

    main: {
      works: [
        {
          position: 'Junior Fool Stack',
          company: {
            name: 'IT-barains',
            url: 'http://it-brains.com.ua',
          },
          duration: {
            from: '10.10.2020',
            to: null,
          },
          projectAmount: 3,
          projects: [
            {
              name: 'Resume',
              url: 'http:/resume.com.ua',
              about: 'Навчальна робота',
              stackAmount: 3,
              awardAmount: 2,
              stacks: [
                {
                  name: 'React js',
                  stackAmount: 7,
                },
                {
                  name: 'html/css',
                  stackAmount: 8,
                },
                {
                  name: 'Node.js',
                  stackAmount: 10,
                },
              ],
              awards: [
                {
                  name: 'золота медалька',
                  awardAmount: 51,
                },
                {
                  name: 'срібна медалька',
                  awardAmount: 599,
                },
              ],
            },
          ],
        },
        {
          position:
            'Старший відповідальний по перевертанню пінгвінів',
          company: {
            name: 'Пінгвін реверт компані',
            url: null,
          },
          duration: {
            from: '10.10.2019',
            to: '11.11.2019',
          },
          projectAmount: 1,
          projects: [
            {
              name: 'перевертання одиночного пінгвіна',
              url: 'http:/123',
              about: 'тестове завдання',
              stackAmount: 2,
              awardAmount: 2,
              stacks: [
                {
                  name: 'лом',
                },
                {
                  name: 'лопата',
                },
              ],
              awards: [
                {
                  name: 'золота медалька',
                },
                {
                  name: 'срібна медалька',
                },
              ],
            },
          ],
        },
      ],
    },
  })
})

// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router
