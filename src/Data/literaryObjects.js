const monuments = [
  {
    id: 1,
    name: "Пам’ятник Тарасові Шевченку",
    type: "monument",
    category: "literature",
    person: "Тарас Шевченко",
    city: "Київ",
    country: "Україна",
    lat: 50.4423,
    lng: 30.5144,
    year: 1939,
    eraYear: 1814,
    eraYearEnd: 1861,
    description: "Пам’ятник у парку Шевченка навпроти Червоного корпусу Київського університету. Встановлений 1939 року до 125-річчя від дня народження поета; один із символів Києва.",
    history: "Встановленню передували п’ять невдалих спроб за часів Російської імперії та Української революції. Кошти на пам’ятник почали збирати ще 1904 року; до комітету зі спорудження входили, зокрема, Михайло Коцюбинський, Микола Лисенко, Борис Грінченко та Євген Чикаленко. 1910 року оголосили міжнародний конкурс проєктів, але задум удалося втілити лише 1939 року. Після початку повномасштабного вторгнення 2022 року пам’ятник укрили, щоб захистити від можливого руйнування під час обстрілів.",
    author: "Матвій Манізер",
    architect: "Євген Левінсон",
    images: [
      {
        url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/31/Taras_Shevchenko_Monument_in_Kyiv%2C_May_2022.jpg/1280px-Taras_Shevchenko_Monument_in_Kyiv%2C_May_2022.jpg",
        author: "Milana Sribniak",
        license: "CC BY-SA 4.0",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Taras_Shevchenko_Monument_in_Kyiv,_May_2022.jpg"
      },
      {
        url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bf/Monument_to_Taras_Shevchenko%2C_sheltered_from_Russian_shelling._Kyiv%2C_2022.jpg/1280px-Monument_to_Taras_Shevchenko%2C_sheltered_from_Russian_shelling._Kyiv%2C_2022.jpg",
        author: "Ввласенко",
        license: "CC BY-SA 3.0",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Monument_to_Taras_Shevchenko,_sheltered_from_Russian_shelling._Kyiv,_2022.jpg"
      }
    ],
    sources: [
      {
        title: "Вікіпедія: Пам’ятник Тарасові Шевченку (Київ)",
        url: "https://uk.wikipedia.org/wiki/Пам%27ятник_Тарасові_Шевченку_(Київ)"
      },
      {
        title: "Вікіпедія: Шевченко Тарас Григорович",
        url: "https://uk.wikipedia.org/wiki/Шевченко_Тарас_Григорович"
      }
    ]
  },
  {
    id: 2,
    name: "Пам’ятник Тарасові Шевченку",
    type: "monument",
    category: "literature",
    person: "Тарас Шевченко",
    city: "Харків",
    country: "Україна",
    lat: 50.0011,
    lng: 36.2342,
    year: 1935,
    eraYear: 1814,
    eraYearEnd: 1861,
    description: "Відомий багатофігурний монумент у саду Шевченка.",
    sources: [
      {
        title: "Вікіпедія: Пам'ятник Тарасові Шевченку (Харків)",
        url: "https://uk.wikipedia.org/wiki/Пам%27ятник_Тарасові_Шевченку_(Харків)"
      },
      {
        title: "Вікіпедія: Шевченко Тарас Григорович",
        url: "https://uk.wikipedia.org/wiki/Шевченко_Тарас_Григорович"
      }
    ]
  },
  {
    id: 3,
    name: "Пам’ятник Тарасові Шевченку",
    type: "monument",
    category: "literature",
    person: "Тарас Шевченко",
    city: "Львів",
    country: "Україна",
    lat: 49.8419,
    lng: 24.0297,
    year: 1992,
    eraYear: 1814,
    eraYearEnd: 1861,
    description: "Монумент на проспекті Свободи в центрі Львова.",
    sources: [
      {
        title: "Вікіпедія: Пам'ятник Тарасові Шевченку (Львів)",
        url: "https://uk.wikipedia.org/wiki/Пам%27ятник_Тарасові_Шевченку_(Львів)"
      },
      {
        title: "Вікіпедія: Шевченко Тарас Григорович",
        url: "https://uk.wikipedia.org/wiki/Шевченко_Тарас_Григорович"
      }
    ]
  },
  {
    id: 4,
    name: "Пам’ятник Тарасові Шевченку",
    type: "monument",
    category: "literature",
    person: "Тарас Шевченко",
    city: "Дніпро",
    country: "Україна",
    lat: 48.4663,
    lng: 35.0744,
    year: 1959,
    eraYear: 1814,
    eraYearEnd: 1861,
    description: "Монумент на Монастирському острові.",
    sources: [
      {
        title: "Вікіпедія: Пам'ятник Тарасові Шевченку (Монастирський острів)",
        url: "https://uk.wikipedia.org/wiki/Пам%27ятник_Тарасові_Шевченку_(Монастирський_острів)"
      },
      {
        title: "Вікіпедія: Шевченко Тарас Григорович",
        url: "https://uk.wikipedia.org/wiki/Шевченко_Тарас_Григорович"
      }
    ]
  },
  {
    id: 5,
    name: "Пам’ятник Тарасові Шевченку",
    type: "monument",
    category: "literature",
    person: "Тарас Шевченко",
    city: "Ромни",
    country: "Україна",
    lat: 50.7506,
    lng: 33.4856,
    year: 1918,
    eraYear: 1814,
    eraYearEnd: 1861,
    description: "Один із перших повнофігурних пам’ятників Шевченку.",
    sources: [
      {
        title: "Вікіпедія: Шевченко Тарас Григорович",
        url: "https://uk.wikipedia.org/wiki/Шевченко_Тарас_Григорович"
      }
    ]
  },
  {
    id: 6,
    name: "Пам’ятник Тарасові Шевченку",
    type: "monument",
    category: "literature",
    person: "Тарас Шевченко",
    city: "Івано-Франківськ",
    country: "Україна",
    lat: 48.9119,
    lng: 24.6956,
    year: 2011,
    eraYear: 1814,
    eraYearEnd: 1861,
    description: "Пам’ятник молодому Шевченку в міському парку.",
    sources: [
      {
        title: "Вікіпедія: Шевченко Тарас Григорович",
        url: "https://uk.wikipedia.org/wiki/Шевченко_Тарас_Григорович"
      }
    ]
  },
  {
    id: 7,
    name: "Пам’ятник Тарасові Шевченку",
    type: "monument",
    category: "literature",
    person: "Тарас Шевченко",
    city: "Житомир",
    country: "Україна",
    lat: 50.2479,
    lng: 28.6782,
    year: 1976,
    eraYear: 1814,
    eraYearEnd: 1861,
    description: "Пам’ятник Шевченку в центральній частині міста.",
    sources: [
      {
        title: "Вікіпедія: Пам'ятник Тарасові Шевченку (Житомир)",
        url: "https://uk.wikipedia.org/wiki/Пам%27ятник_Тарасові_Шевченку_(Житомир)"
      },
      {
        title: "Вікіпедія: Шевченко Тарас Григорович",
        url: "https://uk.wikipedia.org/wiki/Шевченко_Тарас_Григорович"
      }
    ]
  },
  {
    id: 8,
    name: "Пам’ятник Тарасові Шевченку",
    type: "monument",
    category: "literature",
    person: "Тарас Шевченко",
    city: "Луцьк",
    country: "Україна",
    lat: 50.7467,
    lng: 25.3308,
    year: 1995,
    eraYear: 1814,
    eraYearEnd: 1861,
    description: "Пам’ятник перед Волинським національним університетом.",
    sources: [
      {
        title: "Вікіпедія: Пам'ятник Тарасові Шевченку (Луцьк)",
        url: "https://uk.wikipedia.org/wiki/Пам%27ятник_Тарасові_Шевченку_(Луцьк)"
      },
      {
        title: "Вікіпедія: Шевченко Тарас Григорович",
        url: "https://uk.wikipedia.org/wiki/Шевченко_Тарас_Григорович"
      }
    ]
  },
  {
    id: 9,
    name: "Пам’ятник Тарасові Шевченку",
    type: "monument",
    category: "literature",
    person: "Тарас Шевченко",
    city: "Хмельницький",
    country: "Україна",
    lat: 49.4219,
    lng: 26.985,
    year: 1992,
    eraYear: 1814,
    eraYearEnd: 1861,
    description: "Пам’ятник у сквері імені Шевченка.",
    sources: [
      {
        title: "Вікіпедія: Пам'ятник Тарасові Шевченку (Хмельницький)",
        url: "https://uk.wikipedia.org/wiki/Пам%27ятник_Тарасові_Шевченку_(Хмельницький)"
      },
      {
        title: "Вікіпедія: Шевченко Тарас Григорович",
        url: "https://uk.wikipedia.org/wiki/Шевченко_Тарас_Григорович"
      }
    ]
  },
  {
    id: 10,
    name: "Пам’ятник Тарасові Шевченку",
    type: "monument",
    category: "literature",
    person: "Тарас Шевченко",
    city: "Запоріжжя",
    country: "Україна",
    lat: 47.8193,
    lng: 35.1964,
    year: 1989,
    eraYear: 1814,
    eraYearEnd: 1861,
    description: "Пам’ятник Шевченку в Запоріжжі.",
    sources: [
      {
        title: "Вікіпедія: Шевченко Тарас Григорович",
        url: "https://uk.wikipedia.org/wiki/Шевченко_Тарас_Григорович"
      }
    ]
  },
  {
    id: 11,
    name: "Пам’ятник Тарасові Шевченку",
    type: "monument",
    category: "literature",
    person: "Тарас Шевченко",
    city: "Черкаси",
    country: "Україна",
    lat: 49.4426,
    lng: 32.0614,
    year: 1964,
    eraYear: 1814,
    eraYearEnd: 1861,
    description: "Пам’ятник у місті, пов’язаному з шевченківською спадщиною.",
    sources: [
      {
        title: "Вікіпедія: Пам'ятник Тарасові Шевченку (Черкаси)",
        url: "https://uk.wikipedia.org/wiki/Пам%27ятник_Тарасові_Шевченку_(Черкаси)"
      },
      {
        title: "Вікіпедія: Шевченко Тарас Григорович",
        url: "https://uk.wikipedia.org/wiki/Шевченко_Тарас_Григорович"
      }
    ]
  },
  {
    id: 12,
    name: "Пам’ятник Тарасові Шевченку",
    type: "monument",
    category: "literature",
    person: "Тарас Шевченко",
    city: "Чернігів",
    country: "Україна",
    lat: 51.4894,
    lng: 31.3067,
    year: 1992,
    eraYear: 1814,
    eraYearEnd: 1861,
    description: "Пам’ятник молодому Шевченку на Валу.",
    sources: [
      {
        title: "Вікіпедія: Шевченко Тарас Григорович",
        url: "https://uk.wikipedia.org/wiki/Шевченко_Тарас_Григорович"
      }
    ]
  },
  {
    id: 13,
    name: "Пам’ятник Тарасові Шевченку",
    type: "monument",
    category: "literature",
    person: "Тарас Шевченко",
    city: "Тернопіль",
    country: "Україна",
    lat: 49.5536,
    lng: 25.5948,
    year: 1982,
    eraYear: 1814,
    eraYearEnd: 1861,
    description: "Пам’ятник біля театру на Театральній площі.",
    sources: [
      {
        title: "Вікіпедія: Шевченко Тарас Григорович",
        url: "https://uk.wikipedia.org/wiki/Шевченко_Тарас_Григорович"
      }
    ]
  },
  {
    id: 14,
    name: "Пам’ятник Тарасові Шевченку",
    type: "monument",
    category: "literature",
    person: "Тарас Шевченко",
    city: "Чернівці",
    country: "Україна",
    lat: 48.2921,
    lng: 25.9355,
    year: 1999,
    eraYear: 1814,
    eraYearEnd: 1861,
    description: "Пам’ятник на Центральній площі Чернівців.",
    sources: [
      {
        title: "Вікіпедія: Шевченко Тарас Григорович",
        url: "https://uk.wikipedia.org/wiki/Шевченко_Тарас_Григорович"
      }
    ]
  },
  {
    id: 15,
    name: "Пам’ятник Тарасові Шевченку",
    type: "monument",
    category: "literature",
    person: "Тарас Шевченко",
    city: "Краматорськ",
    country: "Україна",
    lat: 48.738,
    lng: 37.584,
    year: 2008,
    eraYear: 1814,
    eraYearEnd: 1861,
    description: "Пам’ятник Шевченку в Донецькій області.",
    sources: [
      {
        title: "Вікіпедія: Памятник Тарасу Шевченко (Краматорск)",
        url: "https://ru.wikipedia.org/wiki/Памятник_Тарасу_Шевченко_(Краматорск)"
      },
      {
        title: "Вікіпедія: Шевченко Тарас Григорович",
        url: "https://uk.wikipedia.org/wiki/Шевченко_Тарас_Григорович"
      }
    ]
  },
  {
    id: 16,
    name: "Пам’ятник Тарасові Шевченку",
    type: "monument",
    category: "literature",
    person: "Тарас Шевченко",
    city: "Бориспіль",
    country: "Україна",
    lat: 50.3527,
    lng: 30.955,
    year: 1994,
    eraYear: 1814,
    eraYearEnd: 1861,
    description: "Пам’ятний знак на честь перебування Шевченка в Борисполі.",
    sources: [
      {
        title: "Вікіпедія: Шевченко Тарас Григорович",
        url: "https://uk.wikipedia.org/wiki/Шевченко_Тарас_Григорович"
      }
    ]
  },
  {
    id: 17,
    name: "Пам’ятник Лесі Українці",
    type: "monument",
    category: "literature",
    person: "Леся Українка",
    city: "Київ",
    country: "Україна",
    lat: 50.4301,
    lng: 30.5386,
    year: 1973,
    eraYear: 1871,
    eraYearEnd: 1913,
    description: "Пам’ятник на площі Лесі Українки.",
    sources: [
      {
        title: "Вікіпедія: Пам'ятник Лесі Українці (Київ)",
        url: "https://uk.wikipedia.org/wiki/Пам%27ятник_Лесі_Українці_(Київ)"
      },
      {
        title: "Вікіпедія: Леся Українка",
        url: "https://uk.wikipedia.org/wiki/Леся_Українка"
      }
    ]
  },
  {
    id: 18,
    name: "Пам’ятник Лесі Українці",
    type: "monument",
    category: "literature",
    person: "Леся Українка",
    city: "Київ",
    country: "Україна",
    lat: 50.4476,
    lng: 30.5511,
    year: 1965,
    eraYear: 1871,
    eraYearEnd: 1913,
    description: "Паркова скульптура Лесі Українки в Маріїнському парку.",
    sources: [
      {
        title: "Вікіпедія: Леся Українка",
        url: "https://uk.wikipedia.org/wiki/Леся_Українка"
      }
    ]
  },
  {
    id: 19,
    name: "Пам’ятник Лесі Українці",
    type: "monument",
    category: "literature",
    person: "Леся Українка",
    city: "Луцьк",
    country: "Україна",
    lat: 50.7417,
    lng: 25.3308,
    year: 1966,
    eraYear: 1871,
    eraYearEnd: 1913,
    description: "Пам’ятник у Центральному парку культури і відпочинку.",
    sources: [
      {
        title: "Вікіпедія: Леся Українка",
        url: "https://uk.wikipedia.org/wiki/Леся_Українка"
      }
    ]
  },
  {
    id: 20,
    name: "Пам’ятник Лесі Українці",
    type: "monument",
    category: "literature",
    person: "Леся Українка",
    city: "Ковель",
    country: "Україна",
    lat: 51.2141,
    lng: 24.71,
    year: 1991,
    eraYear: 1871,
    eraYearEnd: 1913,
    description: "Пам’ятник біля парку імені Лесі Українки.",
    sources: [
      {
        title: "Вікіпедія: Леся Українка",
        url: "https://uk.wikipedia.org/wiki/Леся_Українка"
      }
    ]
  },
  {
    id: 21,
    name: "Пам’ятник Лесі Українці",
    type: "monument",
    category: "literature",
    person: "Леся Українка",
    city: "Колодяжне",
    country: "Україна",
    lat: 51.2438,
    lng: 24.7415,
    year: 1958,
    eraYear: 1871,
    eraYearEnd: 1913,
    description: "Погруддя на території музею-садиби Лесі Українки.",
    sources: [
      {
        title: "Вікіпедія: Леся Українка",
        url: "https://uk.wikipedia.org/wiki/Леся_Українка"
      }
    ]
  },
  {
    id: 22,
    name: "Пам’ятник Лесі Українці",
    type: "monument",
    category: "literature",
    person: "Леся Українка",
    city: "Ялта",
    country: "Україна",
    lat: 44.4917,
    lng: 34.1619,
    year: 1972,
    eraYear: 1871,
    eraYearEnd: 1913,
    description: "Пам’ятник у Ялті біля місць, пов’язаних із перебуванням поетеси.",
    sources: [
      {
        title: "Вікіпедія: Леся Українка",
        url: "https://uk.wikipedia.org/wiki/Леся_Українка"
      }
    ]
  },
  {
    id: 23,
    name: "Пам’ятник Лесі Українці",
    type: "monument",
    category: "literature",
    person: "Леся Українка",
    city: "Звягель",
    country: "Україна",
    lat: 50.5921,
    lng: 27.6215,
    year: 1963,
    eraYear: 1871,
    eraYearEnd: 1913,
    description: "Пам’ятник у рідному місті Лесі Українки.",
    sources: [
      {
        title: "Вікіпедія: Леся Українка",
        url: "https://uk.wikipedia.org/wiki/Леся_Українка"
      }
    ]
  },
  {
    id: 24,
    name: "Пам’ятник Лесі Українці",
    type: "monument",
    category: "literature",
    person: "Леся Українка",
    city: "Білгород-Дністровський",
    country: "Україна",
    lat: 46.1952,
    lng: 30.3494,
    year: 2012,
    eraYear: 1871,
    eraYearEnd: 1913,
    description: "Пам’ятник біля будівлі педагогічного училища.",
    sources: [
      {
        title: "Вікіпедія: Леся Українка",
        url: "https://uk.wikipedia.org/wiki/Леся_Українка"
      }
    ]
  },
  {
    id: 25,
    name: "Пам’ятник Лесі Українці",
    type: "monument",
    category: "literature",
    person: "Леся Українка",
    city: "Білобожниця",
    country: "Україна",
    lat: 49.044,
    lng: 25.765,
    year: 1967,
    eraYear: 1871,
    eraYearEnd: 1913,
    description: "Погруддя біля сільського будинку культури.",
    sources: [
      {
        title: "Вікіпедія: Леся Українка",
        url: "https://uk.wikipedia.org/wiki/Леся_Українка"
      }
    ]
  },
  {
    id: 26,
    name: "Пам’ятник Лесі Українці",
    type: "monument",
    category: "literature",
    person: "Леся Українка",
    city: "Підкамінь",
    country: "Україна",
    lat: 48.967,
    lng: 24.292,
    year: 1992,
    eraYear: 1871,
    eraYearEnd: 1913,
    description: "Пам’ятник Лесі Українці біля сільського клубу.",
    sources: [
      {
        title: "Вікіпедія: Леся Українка",
        url: "https://uk.wikipedia.org/wiki/Леся_Українка"
      }
    ]
  },
  {
    id: 27,
    name: "Пам’ятник Іванові Франку",
    type: "monument",
    category: "literature",
    person: "Іван Франко",
    city: "Київ",
    country: "Україна",
    lat: 50.4455,
    lng: 30.5273,
    year: 1956,
    eraYear: 1856,
    eraYearEnd: 1916,
    description: "Пам’ятник на площі Івана Франка біля театру.",
    sources: [
      {
        title: "Вікіпедія: Пам'ятник Іванові Франку (Київ)",
        url: "https://uk.wikipedia.org/wiki/Пам%27ятник_Іванові_Франку_(Київ)"
      },
      {
        title: "Вікіпедія: Франко Іван Якович",
        url: "https://uk.wikipedia.org/wiki/Франко_Іван_Якович"
      }
    ]
  },
  {
    id: 28,
    name: "Пам’ятник Іванові Франку",
    type: "monument",
    category: "literature",
    person: "Іван Франко",
    city: "Львів",
    country: "Україна",
    lat: 49.8398,
    lng: 24.0213,
    year: 1964,
    eraYear: 1856,
    eraYearEnd: 1916,
    description: "Монумент перед головним корпусом Львівського університету.",
    sources: [
      {
        title: "Вікіпедія: Пам'ятник Іванові Франку (Львів)",
        url: "https://uk.wikipedia.org/wiki/Пам%27ятник_Іванові_Франку_(Львів)"
      },
      {
        title: "Вікіпедія: Франко Іван Якович",
        url: "https://uk.wikipedia.org/wiki/Франко_Іван_Якович"
      }
    ]
  },
  {
    id: 29,
    name: "Пам’ятник Іванові Франку",
    type: "monument",
    category: "literature",
    person: "Іван Франко",
    city: "Дрогобич",
    country: "Україна",
    lat: 49.3546,
    lng: 23.5029,
    year: 1966,
    eraYear: 1856,
    eraYearEnd: 1916,
    description: "Пам’ятник Франкові в Дрогобичі.",
    sources: [
      {
        title: "Вікіпедія: Пам'ятник Франкові у Дрогобичі",
        url: "https://uk.wikipedia.org/wiki/Пам%27ятник_Франкові_у_Дрогобичі"
      },
      {
        title: "Вікіпедія: Франко Іван Якович",
        url: "https://uk.wikipedia.org/wiki/Франко_Іван_Якович"
      }
    ]
  },
  {
    id: 30,
    name: "Пам’ятник Іванові Франку",
    type: "monument",
    category: "literature",
    person: "Іван Франко",
    city: "Івано-Франківськ",
    country: "Україна",
    lat: 48.9226,
    lng: 24.7111,
    year: 1978,
    eraYear: 1856,
    eraYearEnd: 1916,
    description: "Пам’ятник Іванові Франку в обласному центрі.",
    sources: [
      {
        title: "Вікіпедія: Пам'ятник Іванові Франку (Івано-Франківськ)",
        url: "https://uk.wikipedia.org/wiki/Пам%27ятник_Іванові_Франку_(Івано-Франківськ)"
      },
      {
        title: "Вікіпедія: Франко Іван Якович",
        url: "https://uk.wikipedia.org/wiki/Франко_Іван_Якович"
      }
    ]
  },
  {
    id: 31,
    name: "Пам’ятник Іванові Франку",
    type: "monument",
    category: "literature",
    person: "Іван Франко",
    city: "Коломия",
    country: "Україна",
    lat: 48.5312,
    lng: 25.0365,
    year: 2012,
    eraYear: 1856,
    eraYearEnd: 1916,
    description: "Пам’ятник Іванові Франку в Коломиї.",
    sources: [
      {
        title: "Вікіпедія: Пам'ятник Іванові Франку (Коломия)",
        url: "https://uk.wikipedia.org/wiki/Пам%27ятник_Іванові_Франку_(Коломия)"
      },
      {
        title: "Вікіпедія: Франко Іван Якович",
        url: "https://uk.wikipedia.org/wiki/Франко_Іван_Якович"
      }
    ]
  },
  {
    id: 32,
    name: "Пам’ятник Іванові Франку",
    type: "monument",
    category: "literature",
    person: "Іван Франко",
    city: "Борислав",
    country: "Україна",
    lat: 49.2867,
    lng: 23.4214,
    year: 1958,
    eraYear: 1856,
    eraYearEnd: 1916,
    description: "Пам’ятник Іванові Франку в Бориславі.",
    sources: [
      {
        title: "Вікіпедія: Франко Іван Якович",
        url: "https://uk.wikipedia.org/wiki/Франко_Іван_Якович"
      }
    ]
  },
  {
    id: 33,
    name: "Пам’ятник Іванові Франку",
    type: "monument",
    category: "literature",
    person: "Іван Франко",
    city: "Броди",
    country: "Україна",
    lat: 50.0879,
    lng: 25.1503,
    year: 1966,
    eraYear: 1856,
    eraYearEnd: 1916,
    description: "Пам’ятник Франкові на вулиці, названій його іменем.",
    sources: [
      {
        title: "Вікіпедія: Франко Іван Якович",
        url: "https://uk.wikipedia.org/wiki/Франко_Іван_Якович"
      }
    ]
  },
  {
    id: 34,
    name: "Пам’ятник Іванові Франку",
    type: "monument",
    category: "literature",
    person: "Іван Франко",
    city: "Винники",
    country: "Україна",
    lat: 49.8152,
    lng: 24.1439,
    year: 1978,
    eraYear: 1856,
    eraYearEnd: 1916,
    description: "Повторно відкритий пам’ятник Франкові у Винниках.",
    sources: [
      {
        title: "Вікіпедія: Франко Іван Якович",
        url: "https://uk.wikipedia.org/wiki/Франко_Іван_Якович"
      }
    ]
  },
  {
    id: 35,
    name: "Пам’ятник Іванові Франку",
    type: "monument",
    category: "literature",
    person: "Іван Франко",
    city: "Лішня",
    country: "Україна",
    lat: 49.366,
    lng: 23.462,
    year: 1981,
    eraYear: 1856,
    eraYearEnd: 1916,
    description: "Бронзовий пам’ятник біля сільської школи.",
    sources: [
      {
        title: "Вікіпедія: Франко Іван Якович",
        url: "https://uk.wikipedia.org/wiki/Франко_Іван_Якович"
      }
    ]
  },
  {
    id: 36,
    name: "Пам’ятник Іванові Франку",
    type: "monument",
    category: "literature",
    person: "Іван Франко",
    city: "Нагуєвичі",
    country: "Україна",
    lat: 49.356,
    lng: 23.478,
    year: 1986,
    eraYear: 1856,
    eraYearEnd: 1916,
    description: "Повнофігурний пам’ятник у селі, де народився Франко.",
    sources: [
      {
        title: "Вікіпедія: Франко Іван Якович",
        url: "https://uk.wikipedia.org/wiki/Франко_Іван_Якович"
      }
    ]
  },
  {
    id: 37,
    name: "Пам’ятник Іванові Франку",
    type: "monument",
    category: "literature",
    person: "Іван Франко",
    city: "Самбір",
    country: "Україна",
    lat: 49.5183,
    lng: 23.1975,
    year: 1996,
    eraYear: 1856,
    eraYearEnd: 1916,
    description: "Пам’ятник Франкові на площі Івана Франка.",
    sources: [
      {
        title: "Вікіпедія: Франко Іван Якович",
        url: "https://uk.wikipedia.org/wiki/Франко_Іван_Якович"
      }
    ]
  },
  {
    id: 38,
    name: "Пам’ятник «Будителям»",
    type: "monument",
    category: "literature",
    person: "Іван Франко",
    city: "Стрий",
    country: "Україна",
    lat: 49.2604,
    lng: 23.8518,
    year: 1995,
    eraYear: 1856,
    eraYearEnd: 1916,
    description: "Монумент, де поруч зображені Шевченко, Франко та Леся Українка.",
    sources: [
      {
        title: "Вікіпедія: Франко Іван Якович",
        url: "https://uk.wikipedia.org/wiki/Франко_Іван_Якович"
      }
    ]
  },
  {
    id: 39,
    name: "Пам’ятник Іванові Франку",
    type: "monument",
    category: "literature",
    person: "Іван Франко",
    city: "Одеса",
    country: "Україна",
    lat: 46.4825,
    lng: 30.7233,
    year: 2006,
    eraYear: 1856,
    eraYearEnd: 1916,
    description: "Перший державний пам’ятник Франкові на півдні України.",
    sources: [
      {
        title: "Вікіпедія: Франко Іван Якович",
        url: "https://uk.wikipedia.org/wiki/Франко_Іван_Якович"
      }
    ]
  },
  {
    id: 40,
    name: "Пам’ятник Іванові Франку",
    type: "monument",
    category: "literature",
    person: "Іван Франко",
    city: "Тернопіль",
    country: "Україна",
    lat: 49.5535,
    lng: 25.5948,
    year: 1995,
    eraYear: 1856,
    eraYearEnd: 1916,
    description: "Пам’ятник у сквері на вулиці Сагайдачного.",
    sources: [
      {
        title: "Вікіпедія: Франко Іван Якович",
        url: "https://uk.wikipedia.org/wiki/Франко_Іван_Якович"
      }
    ]
  },
  {
    id: 41,
    name: "Пам’ятник Іванові Франку",
    type: "monument",
    category: "literature",
    person: "Іван Франко",
    city: "Борщів",
    country: "Україна",
    lat: 48.8044,
    lng: 26.0435,
    year: 1983,
    eraYear: 1856,
    eraYearEnd: 1916,
    description: "Пам’ятник Франкові в Борщеві.",
    sources: [
      {
        title: "Вікіпедія: Франко Іван Якович",
        url: "https://uk.wikipedia.org/wiki/Франко_Іван_Якович"
      }
    ]
  },
  {
    id: 42,
    name: "Пам’ятник Іванові Франку",
    type: "monument",
    category: "literature",
    person: "Іван Франко",
    city: "Збараж",
    country: "Україна",
    lat: 49.6636,
    lng: 25.7763,
    year: 1992,
    eraYear: 1856,
    eraYearEnd: 1916,
    description: "Пам’ятник Франкові в Збаражі.",
    sources: [
      {
        title: "Вікіпедія: Франко Іван Якович",
        url: "https://uk.wikipedia.org/wiki/Франко_Іван_Якович"
      }
    ]
  },
  {
    id: 43,
    name: "Пам’ятник Іванові Франку",
    type: "monument",
    category: "literature",
    person: "Іван Франко",
    city: "Теребовля",
    country: "Україна",
    lat: 49.3019,
    lng: 25.7097,
    year: 1999,
    eraYear: 1856,
    eraYearEnd: 1916,
    description: "Погруддя Івана Франка в Теребовлі.",
    sources: [
      {
        title: "Вікіпедія: Франко Іван Якович",
        url: "https://uk.wikipedia.org/wiki/Франко_Іван_Якович"
      }
    ]
  },
  {
    id: 44,
    name: "Пам’ятник Іванові Франку",
    type: "monument",
    category: "literature",
    person: "Іван Франко",
    city: "Купчинці",
    country: "Україна",
    lat: 49.381,
    lng: 25.0275,
    year: 1970,
    eraYear: 1856,
    eraYearEnd: 1916,
    description: "Пам’ятник роботи Івана Гончара.",
    sources: [
      {
        title: "Вікіпедія: Франко Іван Якович",
        url: "https://uk.wikipedia.org/wiki/Франко_Іван_Якович"
      }
    ]
  },
  {
    id: 45,
    name: "Пам’ятник Григорію Сковороді",
    type: "monument",
    category: "literature",
    person: "Григорій Сковорода",
    city: "Київ",
    country: "Україна",
    lat: 50.4654,
    lng: 30.5198,
    year: 1977,
    eraYear: 1722,
    eraYearEnd: 1794,
    description: "Пам’ятник Григорію Сковороді на Контрактовій площі.",
    sources: [
      {
        title: "Вікіпедія: Пам'ятник Григорію Сковороді (Київ)",
        url: "https://uk.wikipedia.org/wiki/Пам%27ятник_Григорію_Сковороді_(Київ)"
      },
      {
        title: "Вікіпедія: Сковорода Григорій Савич",
        url: "https://uk.wikipedia.org/wiki/Сковорода_Григорій_Савич"
      }
    ]
  },
  {
    id: 46,
    name: "Погруддя Григорію Сковороді",
    type: "monument",
    category: "literature",
    person: "Григорій Сковорода",
    city: "Київ",
    country: "Україна",
    lat: 50.4449,
    lng: 30.5042,
    year: 1960,
    eraYear: 1722,
    eraYearEnd: 1794,
    description: "Погруддя на станції метро «Університет».",
    sources: [
      {
        title: "Вікіпедія: Сковорода Григорій Савич",
        url: "https://uk.wikipedia.org/wiki/Сковорода_Григорій_Савич"
      }
    ]
  },
  {
    id: 47,
    name: "Пам’ятник Григорію Сковороді",
    type: "monument",
    category: "literature",
    person: "Григорій Сковорода",
    city: "Лохвиця",
    country: "Україна",
    lat: 50.3679,
    lng: 33.26,
    year: 1922,
    eraYear: 1722,
    eraYearEnd: 1794,
    description: "Один із ранніх пам’ятників Григорію Сковороді.",
    sources: [
      {
        title: "Вікіпедія: Сковорода Григорій Савич",
        url: "https://uk.wikipedia.org/wiki/Сковорода_Григорій_Савич"
      }
    ]
  },
  {
    id: 48,
    name: "Пам’ятник Івану Котляревському",
    type: "monument",
    category: "literature",
    person: "Іван Котляревський",
    city: "Полтава",
    country: "Україна",
    lat: 49.5883,
    lng: 34.5514,
    year: 1903,
    eraYear: 1769,
    eraYearEnd: 1838,
    description: "Один із найстаріших пам’ятників українському письменнику.",
    sources: [
      {
        title: "Вікіпедія: Пам'ятник Івану Котляревському",
        url: "https://uk.wikipedia.org/wiki/Пам%27ятник_Івану_Котляревському"
      },
      {
        title: "Вікіпедія: Котляревський Іван Петрович",
        url: "https://uk.wikipedia.org/wiki/Котляревський_Іван_Петрович"
      }
    ]
  },
  {
    id: 49,
    name: "Пам’ятник Василю Стусу",
    type: "monument",
    category: "literature",
    person: "Василь Стус",
    city: "Вінниця",
    country: "Україна",
    lat: 49.2331,
    lng: 28.4682,
    year: 2002,
    eraYear: 1938,
    eraYearEnd: 1985,
    description: "Пам’ятник українському поету-дисиденту.",
    sources: [
      {
        title: "Вікіпедія: Пам'ятник Василю Стусу (Вінниця)",
        url: "https://uk.wikipedia.org/wiki/Пам%27ятник_Василю_Стусу_(Вінниця)"
      },
      {
        title: "Вікіпедія: Стус Василь Семенович",
        url: "https://uk.wikipedia.org/wiki/Стус_Василь_Семенович"
      }
    ]
  },
  {
    id: 50,
    name: "Пам’ятник Михайлу Коцюбинському",
    type: "monument",
    category: "literature",
    person: "Михайло Коцюбинський",
    city: "Вінниця",
    country: "Україна",
    lat: 49.2331,
    lng: 28.4682,
    year: 1927,
    eraYear: 1864,
    eraYearEnd: 1913,
    description: "Пам’ятник Михайлу Коцюбинському у Вінниці.",
    sources: [
      {
        title: "Вікіпедія: Коцюбинський Михайло Михайлович",
        url: "https://uk.wikipedia.org/wiki/Коцюбинський_Михайло_Михайлович"
      }
    ]
  },
  {
    id: 51,
    name: "Пам’ятник Михайлу Коцюбинському",
    type: "monument",
    category: "literature",
    person: "Михайло Коцюбинський",
    city: "Чернігів",
    country: "Україна",
    lat: 51.4982,
    lng: 31.2893,
    year: 1934,
    eraYear: 1864,
    eraYearEnd: 1913,
    description: "Пам’ятник біля музею Михайла Коцюбинського.",
    sources: [
      {
        title: "Вікіпедія: Коцюбинський Михайло Михайлович",
        url: "https://uk.wikipedia.org/wiki/Коцюбинський_Михайло_Михайлович"
      }
    ]
  },
  {
    id: 52,
    name: "Меморіал Тарасові Шевченку",
    type: "monument",
    category: "literature",
    person: "Тарас Шевченко",
    city: "Вашингтон",
    country: "США",
    lat: 38.91,
    lng: -77.0489,
    year: 1964,
    eraYear: 1814,
    eraYearEnd: 1861,
    description: "Один із найвідоміших пам’ятників Шевченку у світі.",
    sources: [
      {
        title: "Вікіпедія: Меморіал Тарасові Шевченку (Вашингтон)",
        url: "https://uk.wikipedia.org/wiki/Меморіал_Тарасові_Шевченку_(Вашингтон)"
      },
      {
        title: "Вікіпедія: Шевченко Тарас Григорович",
        url: "https://uk.wikipedia.org/wiki/Шевченко_Тарас_Григорович"
      }
    ]
  },
  {
    id: 53,
    name: "Пам’ятник Тарасові Шевченку",
    type: "monument",
    category: "literature",
    person: "Тарас Шевченко",
    city: "Прага",
    country: "Чехія",
    lat: 50.0784,
    lng: 14.4044,
    year: 2009,
    eraYear: 1814,
    eraYearEnd: 1861,
    description: "Пам’ятник на площі Кінських у районі Сміхов.",
    sources: [
      {
        title: "Вікіпедія: Пам'ятник Тарасові Шевченку (Прага)",
        url: "https://uk.wikipedia.org/wiki/Пам%27ятник_Тарасові_Шевченку_(Прага)"
      },
      {
        title: "Вікіпедія: Шевченко Тарас Григорович",
        url: "https://uk.wikipedia.org/wiki/Шевченко_Тарас_Григорович"
      }
    ]
  },
  {
    id: 54,
    name: "Пам’ятник Тарасові Шевченку",
    type: "monument",
    category: "literature",
    person: "Тарас Шевченко",
    city: "Варшава",
    country: "Польща",
    lat: 52.2116,
    lng: 21.0234,
    year: 2002,
    eraYear: 1814,
    eraYearEnd: 1861,
    description: "Пам’ятник у сквері імені Тараса Шевченка.",
    sources: [
      {
        title: "Вікіпедія: Пам'ятник Тарасові Шевченку (Варшава)",
        url: "https://uk.wikipedia.org/wiki/Пам%27ятник_Тарасові_Шевченку_(Варшава)"
      },
      {
        title: "Вікіпедія: Шевченко Тарас Григорович",
        url: "https://uk.wikipedia.org/wiki/Шевченко_Тарас_Григорович"
      }
    ]
  },
  {
    id: 55,
    name: "Пам’ятник Тарасові Шевченку",
    type: "monument",
    category: "literature",
    person: "Тарас Шевченко",
    city: "Париж",
    country: "Франція",
    lat: 48.8546,
    lng: 2.3308,
    year: 1978,
    eraYear: 1814,
    eraYearEnd: 1861,
    description: "Пам’ятник у сквері імені Тараса Шевченка.",
    sources: [
      {
        title: "Вікіпедія: Пам'ятник Тарасові Шевченку (Париж)",
        url: "https://uk.wikipedia.org/wiki/Пам%27ятник_Тарасові_Шевченку_(Париж)"
      },
      {
        title: "Вікіпедія: Шевченко Тарас Григорович",
        url: "https://uk.wikipedia.org/wiki/Шевченко_Тарас_Григорович"
      }
    ]
  },
  {
    id: 56,
    name: "Пам’ятник Тарасові Шевченку",
    type: "monument",
    category: "literature",
    person: "Тарас Шевченко",
    city: "Подгориця",
    country: "Чорногорія",
    lat: 42.4304,
    lng: 19.2594,
    year: 2011,
    eraYear: 1814,
    eraYearEnd: 1861,
    description: "Пам’ятник у міському парку Крушевац.",
    sources: [
      {
        title: "Вікіпедія: Шевченко Тарас Григорович",
        url: "https://uk.wikipedia.org/wiki/Шевченко_Тарас_Григорович"
      }
    ]
  },
  {
    id: 57,
    name: "Пам’ятник Тарасові Шевченку",
    type: "monument",
    category: "literature",
    person: "Тарас Шевченко",
    city: "Баку",
    country: "Азербайджан",
    lat: 40.3898,
    lng: 49.8422,
    year: 2008,
    eraYear: 1814,
    eraYearEnd: 1861,
    description: "Пам’ятник молодому Тарасу Шевченку.",
    sources: [
      {
        title: "Вікіпедія: Пам'ятник Тарасові Шевченку (Баку)",
        url: "https://uk.wikipedia.org/wiki/Пам%27ятник_Тарасові_Шевченку_(Баку)"
      },
      {
        title: "Вікіпедія: Шевченко Тарас Григорович",
        url: "https://uk.wikipedia.org/wiki/Шевченко_Тарас_Григорович"
      }
    ]
  },
  {
    id: 58,
    name: "Пам’ятник Тарасові Шевченку",
    type: "monument",
    category: "literature",
    person: "Тарас Шевченко",
    city: "Оттава",
    country: "Канада",
    lat: 45.3764,
    lng: -75.7033,
    year: 2011,
    eraYear: 1814,
    eraYearEnd: 1861,
    description: "Пам’ятник на території українського святинного комплексу.",
    sources: [
      {
        title: "Вікіпедія: Шевченко Тарас Григорович",
        url: "https://uk.wikipedia.org/wiki/Шевченко_Тарас_Григорович"
      }
    ]
  },
  {
    id: 59,
    name: "Пам’ятник Тарасові Шевченку",
    type: "monument",
    category: "literature",
    person: "Тарас Шевченко",
    city: "Вінніпег",
    country: "Канада",
    lat: 49.8847,
    lng: -97.1485,
    year: 1961,
    eraYear: 1814,
    eraYearEnd: 1861,
    description: "Пам’ятник Шевченку в столиці української громади Канади.",
    sources: [
      {
        title: "Вікіпедія: Шевченко Тарас Григорович",
        url: "https://uk.wikipedia.org/wiki/Шевченко_Тарас_Григорович"
      }
    ]
  },
  {
    id: 60,
    name: "Пам’ятник Тарасові Шевченку",
    type: "monument",
    category: "literature",
    person: "Тарас Шевченко",
    city: "Буенос-Айрес",
    country: "Аргентина",
    lat: -34.6037,
    lng: -58.3816,
    year: 1971,
    eraYear: 1814,
    eraYearEnd: 1861,
    description: "Пам’ятник Шевченку в столиці Аргентини.",
    sources: [
      {
        title: "Вікіпедія: Пам'ятник Тарасові Шевченку (Буенос-Айрес)",
        url: "https://uk.wikipedia.org/wiki/Пам%27ятник_Тарасові_Шевченку_(Буенос-Айрес)"
      },
      {
        title: "Вікіпедія: Шевченко Тарас Григорович",
        url: "https://uk.wikipedia.org/wiki/Шевченко_Тарас_Григорович"
      }
    ]
  },
  {
    id: 61,
    name: "Пам’ятник Тарасові Шевченку",
    type: "monument",
    category: "literature",
    person: "Тарас Шевченко",
    city: "Куритиба",
    country: "Бразилія",
    lat: -25.4302,
    lng: -49.2929,
    year: 1967,
    eraYear: 1814,
    eraYearEnd: 1861,
    description: "Пам’ятник у місті з великою українською громадою.",
    sources: [
      {
        title: "Вікіпедія: Шевченко Тарас Григорович",
        url: "https://uk.wikipedia.org/wiki/Шевченко_Тарас_Григорович"
      }
    ]
  },
  {
    id: 62,
    name: "Пам’ятник Тарасові Шевченку",
    type: "monument",
    category: "literature",
    person: "Тарас Шевченко",
    city: "Прудентополіс",
    country: "Бразилія",
    lat: -25.2115,
    lng: -50.9742,
    year: 1989,
    eraYear: 1814,
    eraYearEnd: 1861,
    description: "Пам’ятник Шевченку в бразильському центрі української діаспори.",
    sources: [
      {
        title: "Вікіпедія: Шевченко Тарас Григорович",
        url: "https://uk.wikipedia.org/wiki/Шевченко_Тарас_Григорович"
      }
    ]
  },
  {
    id: 63,
    name: "Пам’ятник Тарасові Шевченку",
    type: "monument",
    category: "literature",
    person: "Тарас Шевченко",
    city: "Рим",
    country: "Італія",
    lat: 41.9118,
    lng: 12.3979,
    year: 1973,
    eraYear: 1814,
    eraYearEnd: 1861,
    description: "Пам’ятник біля українського собору Святої Софії.",
    sources: [
      {
        title: "Вікіпедія: Пам'ятник Тарасові Шевченку (Рим)",
        url: "https://uk.wikipedia.org/wiki/Пам%27ятник_Тарасові_Шевченку_(Рим)"
      },
      {
        title: "Вікіпедія: Шевченко Тарас Григорович",
        url: "https://uk.wikipedia.org/wiki/Шевченко_Тарас_Григорович"
      }
    ]
  },
  {
    id: 64,
    name: "Пам’ятник Тарасові Шевченку",
    type: "monument",
    category: "literature",
    person: "Тарас Шевченко",
    city: "Будапешт",
    country: "Угорщина",
    lat: 47.5111,
    lng: 19.038,
    year: 2007,
    eraYear: 1814,
    eraYearEnd: 1861,
    description: "Пам’ятник у сквері біля української греко-католицької церкви.",
    sources: [
      {
        title: "Вікіпедія: Шевченко Тарас Григорович",
        url: "https://uk.wikipedia.org/wiki/Шевченко_Тарас_Григорович"
      }
    ]
  },
  {
    id: 65,
    name: "Пам’ятник Тарасові Шевченку",
    type: "monument",
    category: "literature",
    person: "Тарас Шевченко",
    city: "Рига",
    country: "Латвія",
    lat: 56.9578,
    lng: 24.1039,
    year: 2015,
    eraYear: 1814,
    eraYearEnd: 1861,
    description: "Пам’ятник у парку Кронвалда.",
    sources: [
      {
        title: "Вікіпедія: Шевченко Тарас Григорович",
        url: "https://uk.wikipedia.org/wiki/Шевченко_Тарас_Григорович"
      }
    ]
  },
  {
    id: 66,
    name: "Пам’ятник Тарасові Шевченку",
    type: "monument",
    category: "literature",
    person: "Тарас Шевченко",
    city: "Ашгабат",
    country: "Туркменістан",
    lat: 37.9502,
    lng: 58.3802,
    year: 1972,
    eraYear: 1814,
    eraYearEnd: 1861,
    description: "Пам’ятник Шевченку в Ашгабаті.",
    sources: [
      {
        title: "Вікіпедія: Шевченко Тарас Григорович",
        url: "https://uk.wikipedia.org/wiki/Шевченко_Тарас_Григорович"
      }
    ]
  },
  {
    id: 67,
    name: "Пам’ятник Тарасові Шевченку",
    type: "monument",
    category: "literature",
    person: "Тарас Шевченко",
    city: "Єреван",
    country: "Вірменія",
    lat: 40.1735,
    lng: 44.5186,
    year: 2018,
    eraYear: 1814,
    eraYearEnd: 1861,
    description: "Пам’ятник Шевченку в Єревані.",
    sources: [
      {
        title: "Вікіпедія: Пам'ятник Тарасові Шевченку (Єреван)",
        url: "https://uk.wikipedia.org/wiki/Пам%27ятник_Тарасові_Шевченку_(Єреван)"
      },
      {
        title: "Вікіпедія: Шевченко Тарас Григорович",
        url: "https://uk.wikipedia.org/wiki/Шевченко_Тарас_Григорович"
      }
    ]
  },
  {
    id: 68,
    name: "Пам’ятник Тарасові Шевченку",
    type: "monument",
    category: "literature",
    person: "Тарас Шевченко",
    city: "Загреб",
    country: "Хорватія",
    lat: 45.77,
    lng: 15.9974,
    year: 2015,
    eraYear: 1814,
    eraYearEnd: 1861,
    description: "Пам’ятник Шевченку в столиці Хорватії.",
    sources: [
      {
        title: "Вікіпедія: Пам'ятник Тарасові Шевченку (Загреб)",
        url: "https://uk.wikipedia.org/wiki/Пам%27ятник_Тарасові_Шевченку_(Загреб)"
      },
      {
        title: "Вікіпедія: Шевченко Тарас Григорович",
        url: "https://uk.wikipedia.org/wiki/Шевченко_Тарас_Григорович"
      }
    ]
  },
  {
    id: 69,
    name: "Пам’ятник Тарасові Шевченку",
    type: "monument",
    category: "literature",
    person: "Тарас Шевченко",
    city: "Ташкент",
    country: "Узбекистан",
    lat: 41.3041,
    lng: 69.2751,
    year: 2002,
    eraYear: 1814,
    eraYearEnd: 1861,
    description: "Пам’ятник Шевченку в Ташкенті.",
    sources: [
      {
        title: "Вікіпедія: Пам'ятник Тарасові Шевченку (Ташкент)",
        url: "https://uk.wikipedia.org/wiki/Пам%27ятник_Тарасові_Шевченку_(Ташкент)"
      },
      {
        title: "Вікіпедія: Шевченко Тарас Григорович",
        url: "https://uk.wikipedia.org/wiki/Шевченко_Тарас_Григорович"
      }
    ]
  },
  {
    id: 70,
    name: "Пам’ятник Тарасові Шевченку",
    type: "monument",
    category: "literature",
    person: "Тарас Шевченко",
    city: "Тбілісі",
    country: "Грузія",
    lat: 41.7151,
    lng: 44.8271,
    year: 2007,
    eraYear: 1814,
    eraYearEnd: 1861,
    description: "Пам’ятник Шевченку в столиці Грузії.",
    sources: [
      {
        title: "Вікіпедія: Пам'ятник Тарасові Шевченку (Тбілісі)",
        url: "https://uk.wikipedia.org/wiki/Пам%27ятник_Тарасові_Шевченку_(Тбілісі)"
      },
      {
        title: "Вікіпедія: Шевченко Тарас Григорович",
        url: "https://uk.wikipedia.org/wiki/Шевченко_Тарас_Григорович"
      }
    ]
  },
  {
    id: 71,
    name: "Пам’ятник Лесі Українці",
    type: "monument",
    category: "literature",
    person: "Леся Українка",
    city: "Батумі",
    country: "Грузія",
    lat: 41.6509,
    lng: 41.6369,
    year: 1972,
    eraYear: 1871,
    eraYearEnd: 1913,
    description: "Пам’ятник Лесі Українці в Батумі.",
    sources: [
      {
        title: "Вікіпедія: Леся Українка",
        url: "https://uk.wikipedia.org/wiki/Леся_Українка"
      }
    ]
  },
  {
    id: 72,
    name: "Пам’ятник Лесі Українці",
    type: "monument",
    category: "literature",
    person: "Леся Українка",
    city: "Сурамі",
    country: "Грузія",
    lat: 42.0243,
    lng: 43.5556,
    year: 1952,
    eraYear: 1871,
    eraYearEnd: 1913,
    description: "Погруддя у дворі музею Лесі Українки.",
    sources: [
      {
        title: "Вікіпедія: Леся Українка",
        url: "https://uk.wikipedia.org/wiki/Леся_Українка"
      }
    ]
  },
  {
    id: 73,
    name: "Пам’ятник Лесі Українці",
    type: "monument",
    category: "literature",
    person: "Леся Українка",
    city: "Телаві",
    country: "Грузія",
    lat: 41.9197,
    lng: 45.4731,
    year: 2017,
    eraYear: 1871,
    eraYearEnd: 1913,
    description: "Бронзова статуя в парку Надікварі.",
    sources: [
      {
        title: "Вікіпедія: Леся Українка",
        url: "https://uk.wikipedia.org/wiki/Леся_Українка"
      }
    ]
  },
  {
    id: 74,
    name: "Пам’ятник Лесі Українці",
    type: "monument",
    category: "literature",
    person: "Леся Українка",
    city: "Торонто",
    country: "Канада",
    lat: 43.647,
    lng: -79.4641,
    year: 1975,
    eraYear: 1871,
    eraYearEnd: 1913,
    description: "Пам’ятник у High Park / районі Bloor West Village.",
    sources: [
      {
        title: "Вікіпедія: Леся Українка",
        url: "https://uk.wikipedia.org/wiki/Леся_Українка"
      }
    ]
  },
  {
    id: 75,
    name: "Пам’ятник Лесі Українці",
    type: "monument",
    category: "literature",
    person: "Леся Українка",
    city: "Саскатун",
    country: "Канада",
    lat: 52.1332,
    lng: -106.6339,
    year: 1976,
    eraYear: 1871,
    eraYearEnd: 1913,
    description: "Пам’ятник на території Університету Саскачевану.",
    sources: [
      {
        title: "Вікіпедія: Леся Українка",
        url: "https://uk.wikipedia.org/wiki/Леся_Українка"
      }
    ]
  },
  {
    id: 76,
    name: "Пам’ятник Іванові Франку",
    type: "monument",
    category: "literature",
    person: "Іван Франко",
    city: "Липик",
    country: "Хорватія",
    lat: 45.4116,
    lng: 17.1529,
    year: 2011,
    eraYear: 1856,
    eraYearEnd: 1916,
    description: "Пам’ятник у місті, де Франко лікувався.",
    sources: [
      {
        title: "Вікіпедія: Пам'ятник Іванові Франку (Липик)",
        url: "https://uk.wikipedia.org/wiki/Пам%27ятник_Іванові_Франку_(Липик)"
      },
      {
        title: "Вікіпедія: Франко Іван Якович",
        url: "https://uk.wikipedia.org/wiki/Франко_Іван_Якович"
      }
    ]
  },
  {
    id: 77,
    name: "Пам’ятник Іванові Франку",
    type: "monument",
    category: "literature",
    person: "Іван Франко",
    city: "Відень",
    country: "Австрія",
    lat: 48.2082,
    lng: 16.3738,
    year: 1999,
    eraYear: 1856,
    eraYearEnd: 1916,
    description: "Пам’ятник Іванові Франку у Відні.",
    sources: [
      {
        title: "Вікіпедія: Франко Іван Якович",
        url: "https://uk.wikipedia.org/wiki/Франко_Іван_Якович"
      }
    ]
  },
  {
    id: 78,
    name: "Пам’ятник Григорію Сковороді",
    type: "monument",
    category: "literature",
    person: "Григорій Сковорода",
    city: "Вашингтон",
    country: "США",
    lat: 38.9072,
    lng: -77.0369,
    year: 2022,
    eraYear: 1722,
    eraYearEnd: 1794,
    description: "Пам’ятник біля Українського дому у Вашингтоні.",
    sources: [
      {
        title: "Вікіпедія: Пам'ятник Григорію Сковороді (Вашингтон)",
        url: "https://uk.wikipedia.org/wiki/Пам%27ятник_Григорію_Сковороді_(Вашингтон)"
      },
      {
        title: "Вікіпедія: Сковорода Григорій Савич",
        url: "https://uk.wikipedia.org/wiki/Сковорода_Григорій_Савич"
      }
    ]
  },
  {
    id: 79,
    name: "Пам’ятник Григорію Сковороді",
    type: "monument",
    category: "literature",
    person: "Григорій Сковорода",
    city: "Любляна",
    country: "Словенія",
    lat: 46.0569,
    lng: 14.5058,
    year: 2016,
    eraYear: 1722,
    eraYearEnd: 1794,
    description: "Скульптура в Парку Книги на Алеї митців.",
    sources: [
      {
        title: "Вікіпедія: Сковорода Григорій Савич",
        url: "https://uk.wikipedia.org/wiki/Сковорода_Григорій_Савич"
      }
    ]
  },
  {
    id: 80,
    name: "Меморіальний комплекс «Пам'яті героїв Крут»",
    type: "memorial",
    category: "independence",
    person: "Захисники Української Народної Республіки",
    city: "Пам'ятне",
    region: "Чернігівська область",
    country: "Україна",
    lat: 51.081111,
    lng: 32.159167,
    year: 2006,
    eraYear: 1918,
    eventDate: "29 січня 1918",
    description: "Меморіальний комплекс присвячений учасникам бою під Крутами. До комплексу входять монументальна колона, курган, хрест і музейна експозиція.",
    history: "29 січня 1918 року українські військові, студенти та гімназисти вступили в бій із більшовицькими військами, що наступали на Київ. Меморіальний комплекс відкрили у 2006 році.",
    significance: "Комплекс увічнює пам’ять захисників української державності та нагадує про бій під Крутами.",
    sources: [
      {
        title: "unr.uinp.gov.ua",
        url: "https://unr.uinp.gov.ua/memory-places/memorialniy-kompleks-pamyati-geroiv-krut-1423732"
      }
    ]
  },
  {
    id: 81,
    name: "Пам'ятник Богдану Хмельницькому",
    type: "monument",
    category: "cossack",
    person: "Богдан Хмельницький",
    city: "Київ",
    region: "Київська область",
    country: "Україна",
    lat: 50.453611,
    lng: 30.516389,
    year: 1888,
    eraYear: 1595,
    eraYearEnd: 1657,
    description: "Кінний пам'ятник гетьману Богдану Хмельницькому на Софійській площі. Монумент відкрили в 1888 році.",
    sources: [
      {
        title: "knmc.kyivcity.gov.ua",
        url: "https://knmc.kyivcity.gov.ua/pam-yatnyk-getmanu-bogdanu-hmelnytskomu/"
      },
      {
        title: "Вікіпедія: Богдан Хмельницький",
        url: "https://uk.wikipedia.org/wiki/Богдан_Хмельницький"
      }
    ]
  },
  {
    id: 1001,
    name: "Пам’ятник робітникам заводу «Арсенал»",
    type: "monument",
    category: "tragedies",
    person: "Учасники Січневого повстання 1918 року",
    city: "Київ",
    region: "Київська область",
    country: "Україна",
    lat: 50.443889,
    lng: 30.545278,
    year: 1923,
    eraYear: 1918,
    eventDate: "Січень 1918 року",
    description: "Пам’ятник у вигляді гармати на Арсенальній площі. Пов’язаний зі збройним повстанням робітників заводу «Арсенал» проти Центральної Ради Української Народної Республіки.",
    history: "У січні 1918 року робітники заводу «Арсенал» та інші збройні формування виступили проти Центральної Ради. Повстання стало частиною боротьби за контроль над Києвом під час Української революції. Після боїв завод був узятий військами УНР. У 1923 році на Арсенальній площі встановили гармату на постаменті колишнього пам’ятника Іскрі та Кочубею.",
    significance: "Цей монумент є прикладом радянської меморіальної політики. Його первісне призначення було прославленням учасників більшовицького повстання. Сьогодні він також є матеріальним свідченням складної історії Української революції.",
    images: [
      {
        url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e2/%D0%9A%D0%B8%D1%97%D0%B2%2C_%D0%90%D1%80%D1%81%D0%B5%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0_%D0%BF%D0%BB.%2C_%D0%9F%D0%B0%D0%BC%27%D1%8F%D1%82%D0%BD%D0%B8%D0%BA_%D1%80%D0%BE%D0%B1%D1%96%D1%82%D0%BD%D0%B8%D0%BA%D0%B0%D0%BC_%D0%B7%D0%B0%D0%B2%D0%BE%D0%B4%D1%83_%C2%AB%D0%90%D1%80%D1%81%D0%B5%D0%BD%D0%B0%D0%BB%C2%BB.jpg/1280px-%D0%9A%D0%B8%D1%97%D0%B2%2C_%D0%90%D1%80%D1%81%D0%B5%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0_%D0%BF%D0%BB.%2C_%D0%9F%D0%B0%D0%BC%27%D1%8F%D1%82%D0%BD%D0%B8%D0%BA_%D1%80%D0%BE%D0%B1%D1%96%D1%82%D0%BD%D0%B8%D0%BA%D0%B0%D0%BC_%D0%B7%D0%B0%D0%B2%D0%BE%D0%B4%D1%83_%C2%AB%D0%90%D1%80%D1%81%D0%B5%D0%BD%D0%B0%D0%BB%C2%BB.jpg",
        author: "Prymasal",
        license: "CC BY-SA 4.0",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:%D0%9A%D0%B8%D1%97%D0%B2,_%D0%90%D1%80%D1%81%D0%B5%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0_%D0%BF%D0%BB.,_%D0%9F%D0%B0%D0%BC%27%D1%8F%D1%82%D0%BD%D0%B8%D0%BA_%D1%80%D0%BE%D0%B1%D1%96%D1%82%D0%BD%D0%B8%D0%BA%D0%B0%D0%BC_%D0%B7%D0%B0%D0%B2%D0%BE%D0%B4%D1%83_%C2%AB%D0%90%D1%80%D1%81%D0%B5%D0%BD%D0%B0%D0%BB%C2%BB.jpg"
      }
    ],
    sources: [
      {
        title: "mdch.kyiv.ua",
        url: "https://www.mdch.kyiv.ua/node/1128"
      }
    ]
  },
  {
    id: 1002,
    name: "Алея Героїв Небесної Сотні",
    type: "memorial",
    category: "independence",
    person: "Учасники Революції Гідності",
    city: "Київ",
    region: "Київська область",
    country: "Україна",
    lat: 50.447806,
    lng: 30.529278,
    year: 2014,
    eraYear: 2013,
    eraYearEnd: 2014,
    eventDate: "Листопад 2013 — лютий 2014 року",
    description: "Меморіальна вулиця в центрі Києва, присвячена учасникам Революції Гідності, які загинули під час протестів.",
    history: "18–20 лютого 2014 року на вулиці Інститутській відбулися найтрагічніші зіткнення між протестувальниками та силовиками. Особливо трагічним стало 20 лютого, коли загинули десятки учасників протесту. Після цих подій місце перетворилося на стихійний меморіал, а згодом отримало назву Алея Героїв Небесної Сотні.",
    significance: "Одне з головних місць пам’яті про Революцію Гідності та боротьбу українців за демократичний вибір і свободу.",
    sources: [
      {
        title: "app.visit.kyiv.ua",
        url: "https://app.visit.kyiv.ua/locations/aleia-heroiv-nebesnoi-sotni/"
      }
    ]
  },
  {
    id: 1003,
    name: "Стіни заводу «Арсенал» — місце боїв 1918 року",
    type: "historical_site",
    category: "tragedies",
    person: "Учасники боїв за завод «Арсенал»",
    city: "Київ",
    region: "Київська область",
    country: "Україна",
    lat: 50.443272,
    lng: 30.544107,
    year: 1918,
    eraYear: 1918,
    eventDate: "Січень 1918 року",
    description: "Історичний корпус заводу «Арсенал», пов’язаний із боями між військами Української Центральної Ради та учасниками більшовицького повстання.",
    history: "Завод «Арсенал» був одним із центрів збройного виступу в Києві в січні 1918 року. Сліди куль і артилерійських влучань на старих стінах нагадують про бої, які точилися навколо підприємства.",
    significance: "Автентичне місце історичних подій Української революції 1917–1921 років.",
    sources: [
      {
        title: "kpi.ua",
        url: "https://kpi.ua/1202-5"
      }
    ]
  },
  {
    id: 1004,
    name: "Пам’ятник Шулявській республіці",
    type: "monument",
    category: "tragedies",
    person: "Учасники робітничого руху 1905 року",
    city: "Київ",
    country: "Україна",
    lat: 50.449889,
    lng: 30.462444,
    year: 1985,
    eraYear: 1905,
    eventDate: "Грудень 1905 року",
    description: "Пам’ятник присвячений подіям революційного руху 1905 року та першій Київській раді робітничих депутатів.",
    history: "У грудні 1905 року на Шулявці відбувалися страйки та робітничі виступи. Центром подій став Київський політехнічний інститут.",
    significance: "Монумент нагадує про революційні події початку XX століття. Його радянський контекст варто враховувати під час історичного опису.",
    sources: [
      {
        title: "kpi.ua",
        url: "https://kpi.ua/shuliavka"
      }
    ]
  },
  {
    id: 1005,
    name: "Пам’ятний хрест Героям Крут",
    type: "memorial",
    category: "independence",
    person: "Герої бою під Крутами",
    city: "Київ",
    country: "Україна",
    lat: 50.444,
    lng: 30.5514,
    year: 2012,
    eraYear: 1918,
    eventDate: "29 січня 1918 року",
    description: "Гранітний козацький хрест із тризубом на Аскольдовій могилі, присвячений українським студентам і гімназистам, які загинули під Крутами.",
    history: "Після бою під Крутами загиблих українських юнаків урочисто вшанували в Києві. У 2012 році на Аскольдовій могилі встановили кам’яний пам’ятник у формі козацького хреста.",
    significance: "Символ пам’яті про молодих захисників Української Народної Республіки.",
    sources: [
      {
        title: "istpravda.com.ua",
        url: "https://www.istpravda.com.ua/short/2012/01/13/68812/"
      }
    ]
  },
  {
    id: 1006,
    name: "Майдан Незалежності — місце Революції на граніті",
    type: "historical_site",
    category: "independence",
    person: "Українські студенти та учасники протесту",
    city: "Київ",
    country: "Україна",
    lat: 50.4501,
    lng: 30.5234,
    year: 1990,
    eraYear: 1990,
    eventDate: "2–17 жовтня 1990 року",
    description: "Місце масштабного студентського протесту та голодування проти політики радянської влади.",
    history: "2 жовтня 1990 року студенти розпочали голодування на тодішній площі Жовтневої революції. Вони висунули політичні вимоги, зокрема щодо відставки уряду та демократичних змін. Акція завершилася 17 жовтня.",
    significance: "Революція на граніті стала важливим етапом боротьби за незалежність України та прикладом організованого ненасильницького протесту.",
    sources: [
      {
        title: "maidanmuseum.org",
        url: "https://www.maidanmuseum.org/uk/storinka/revolyuciya-na-graniti"
      }
    ]
  },
  {
    id: 1008,
    name: "Меморіальний парк «Бабин Яр»",
    type: "historical_site",
    category: "tragedies",
    person: "Жертви нацистських розстрілів",
    city: "Київ",
    country: "Україна",
    lat: 50.4706,
    lng: 30.4491,
    year: 1941,
    eraYear: 1941,
    eraYearEnd: 1943,
    eventDate: "1941–1943 роки",
    description: "Місце масових розстрілів мирного населення, військовополонених та інших жертв нацистської окупації Києва.",
    history: "У вересні 1941 року в Бабиному Яру нацисти розпочали масові розстріли. За роки окупації тут було вбито понад 100 тисяч людей, серед яких переважали євреї.",
    significance: "Бабин Яр є одним із головних місць пам’яті про Голокост та злочини нацистського режиму в Україні.",
    sources: [
      {
        title: "babynyar.gov.ua",
        url: "https://babynyar.gov.ua/"
      }
    ]
  },
  {
    id: 1009,
    name: "Меморіал «Менора»",
    type: "memorial",
    category: "tragedies",
    person: "Євреї — жертви нацистських розстрілів",
    city: "Київ",
    country: "Україна",
    lat: 50.475651,
    lng: 30.457529,
    year: 1991,
    eraYear: 1941,
    eventDate: "29–30 вересня 1941 року",
    description: "Бронзовий семисвічник у Бабиному Яру, встановлений на пам’ять про євреїв, убитих нацистами.",
    history: "Меморіал відкрили у вересні 1991 року, до 50-ї річниці масового розстрілу євреїв у Бабиному Яру.",
    significance: "Менора стала символом вшанування єврейських жертв Голокосту в Києві.",
    sources: [
      {
        title: "guide.kyivcity.gov.ua",
        url: "https://guide.kyivcity.gov.ua/places/pamyatnyk-menora"
      }
    ]
  },
  {
    id: 1010,
    name: "Меморіал Вічної Слави на могилі Невідомого солдата",
    type: "memorial",
    category: "tragedies",
    person: "Загиблі воїни Другої світової війни",
    city: "Київ",
    country: "Україна",
    lat: 50.438994,
    lng: 30.553178,
    year: 1957,
    eraYear: 1941,
    eraYearEnd: 1945,
    eventDate: "1941–1945 роки",
    description: "Меморіальний комплекс у Парку Вічної Слави з 27-метровим обеліском, могилою Невідомого солдата та вічним вогнем.",
    history: "Меморіал відкрили 6 листопада 1957 року. До комплексу також входить Алея Полеглих Героїв із військовими похованнями.",
    significance: "Місце вшанування пам’яті загиблих під час Другої світової війни. Історичний опис варто доповнювати контекстом радянського походження меморіалу.",
    sources: [
      {
        title: "guide.kyivcity.gov.ua",
        url: "https://guide.kyivcity.gov.ua/places/park-vichnoyi-slavy"
      }
    ]
  },
  {
    id: 1011,
    name: "Пам’ятник пожежникам-ліквідаторам аварії на ЧАЕС",
    type: "monument",
    category: "tragedies",
    person: "Пожежники — учасники ліквідації аварії на ЧАЕС",
    city: "Київ",
    country: "Україна",
    lat: 50.442536,
    lng: 30.526608,
    year: 2011,
    eraYear: 1986,
    eventDate: "26 квітня 1986 року",
    description: "Пам’ятник пожежникам, які першими боролися з пожежею після аварії на Чорнобильській АЕС.",
    history: "Монумент відкрили у 2011 році, до 25-ї річниці Чорнобильської катастрофи. Автор — скульптор Микола Тихонов.",
    significance: "Вшановує пожежників, які працювали в умовах надзвичайно високого радіаційного забруднення та ризику для життя.",
    sources: [
      {
        title: "travels.in.ua",
        url: "https://travels.in.ua/uk-/object/2447/pamyatnyk-pozhezhnykam"
      }
    ]
  },
  {
    id: 1012,
    name: "Монумент «Батьківщина-мати»",
    type: "monument",
    category: "tragedies",
    person: "Захисники України у Другій світовій війні",
    city: "Київ",
    country: "Україна",
    lat: 50.426414,
    lng: 30.56299,
    year: 1981,
    eraYear: 1939,
    eraYearEnd: 1945,
    eventDate: "1939–1945 роки",
    description: "Монументальна скульптура на території Національного музею історії України у Другій світовій війні.",
    history: "Монумент відкрили у 1981 році як центральну частину меморіального комплексу. Спочатку він мав радянську назву та ідеологічне оформлення. У 2023 році на щиті замінили радянський герб на український тризуб.",
    significance: "Один із найвідоміших монументів Києва. Сьогодні він є символом української державності та пам’яті про війну.",
    sources: [
      {
        title: "guide.kyivcity.gov.ua",
        url: "https://guide.kyivcity.gov.ua/places/natsionalnyy-muzey-istoriyi-ukrayiny-v-druhiy-svitoviy-viyni"
      }
    ]
  },
  {
    id: 1013,
    name: "Стіна пам’яті полеглих захисників України",
    type: "memorial",
    category: "independence",
    person: "Загиблі захисники України",
    city: "Київ",
    country: "Україна",
    lat: 50.4554,
    lng: 30.5235,
    year: 2015,
    eraYear: 2014,
    eventDate: "З 2014 року",
    description: "Меморіал із фотографіями та біографіями українських військових, добровольців і правоохоронців, які загинули під час російсько-української війни.",
    history: "Меморіал почав формуватися у 2014 році. У 2015 році його розмістили вздовж зовнішньої стіни Михайлівського Золотоверхого монастиря. У наступні роки стіну розширювали та оновлювали.",
    significance: "Місце вшанування конкретних людей, які загинули, захищаючи Україну. Меморіал продовжує поповнюватися.",
    sources: [
      {
        title: "app.visit.kyiv.ua",
        url: "https://app.visit.kyiv.ua/locations/stina-pam-iati-polehlykh-zakhysnykiv-ukrainy-v-rosiisko-ukrainskii-viini/"
      }
    ]
  },
  {
    id: 1014,
    name: "Національний історико-меморіальний заповідник «Биківнянські могили»",
    type: "memorial",
    category: "tragedies",
    person: "Жертви сталінських політичних репресій",
    city: "Київ",
    country: "Україна",
    lat: 50.476383,
    lng: 30.69939,
    year: 2001,
    eraYear: 1937,
    eraYearEnd: 1941,
    eventDate: "1937–1941 роки",
    description: "Національний меморіальний заповідник у Биківнянському лісі — місце поховання людей, розстріляних НКВС під час сталінських репресій.",
    history: "У 1937–1941 роках Биківнянський ліс використовувався НКВС для таємного поховання жертв політичних репресій. Меморіальний комплекс почали створювати у 1994 році, а заповідник заснували у 2001 році.",
    significance: "Одне з найбільших в Україні місць поховання жертв сталінського терору. Важливий об'єкт для збереження пам'яті про репресованих.",
    sources: [
      {
        title: "bykivnia.org.ua",
        url: "https://bykivnia.org.ua/history/"
      }
    ]
  },
  {
    id: 1015,
    name: "Пам’ятний знак жертвам Куренівської катастрофи",
    type: "memorial",
    category: "tragedies",
    person: "Жертви Куренівської трагедії",
    city: "Київ",
    country: "Україна",
    lat: 50.479705,
    lng: 30.452324,
    year: 2006,
    eraYear: 1961,
    eventDate: "13 березня 1961 року",
    description: "Меморіальний знак із двома гранітними плитами на території Бабиного Яру, присвячений загиблим під час Куренівської катастрофи.",
    history: "13 березня 1961 року прорив дамби спричинив потужний селевий потік із Бабиного Яру, який затопив Куренівку. Пам’ятний знак встановили у 2006 році до 45-ї річниці трагедії.",
    significance: "Вшановує пам’ять загиблих киян та нагадує про наслідки недбалості й приховування небезпеки радянською владою.",
    sources: [
      {
        title: "kby.kiev.ua",
        url: "https://www.kby.kiev.ua/komitet/ua/reserve/art00117.html"
      }
    ]
  },
  {
    id: 1016,
    name: "Пам’ятник футболістам київського «Динамо» на стадіоні «Старт»",
    type: "monument",
    category: "tragedies",
    person: "Футболісти київської команди «Старт»",
    city: "Київ",
    country: "Україна",
    lat: 50.456,
    lng: 30.48119,
    year: 1981,
    eraYear: 1942,
    eventDate: "1942 рік",
    description: "Пам’ятний знак на стадіоні «Старт», присвячений футболістам київської команди «Старт», серед яких були гравці довоєнного «Динамо».",
    history: "У 1942 році під час нацистської окупації Києва команда «Старт» проводила футбольні матчі з командами окупаційних військ. Пам’ятний знак на стадіоні встановили у 1981 році.",
    significance: "Об’єкт пов’язаний з історією київського футболу та життям міста під час окупації. Популярна радянська версія «Матчу смерті» містила перебільшення та міфологізовані деталі, тому історію події слід подавати критично.",
    sources: [
      {
        title: "stadiumstart.kyivcity.gov.ua",
        url: "https://stadiumstart.kyivcity.gov.ua/content/obiekt-kulturnoi-spadshchyny.html"
      }
    ]
  },
  {
    id: 1017,
    name: "Пам’ятник Олені Телізі та її соратникам",
    type: "monument",
    category: "independence",
    person: "Олена Теліга та учасники українського націоналістичного підпілля",
    city: "Київ",
    country: "Україна",
    lat: 50.473164,
    lng: 30.448254,
    year: 2017,
    eraYear: 1942,
    eventDate: "Лютий 1942 року",
    description: "Скульптурна композиція, присвячена українській поетесі, публіцистці та діячці ОУН Олені Телізі й учасникам українського руху, які загинули за незалежність України.",
    history: "Під час нацистської окупації Києва Олена Теліга організувала Спілку українських письменників. У лютому 1942 року її заарештувало гестапо та розстріляло в Бабиному Яру. Пам’ятник відкрили 25 лютого 2017 року.",
    significance: "Вшановує Олену Телігу та українських діячів, які загинули під час нацистської окупації.",
    sources: [
      {
        title: "shev.kyivcity.gov.ua",
        url: "https://shev.kyivcity.gov.ua/news/u-shevchenkivskomu-rayoni-vidkrili-pamyatnik-oleni-telizi"
      }
    ]
  },
  {
    id: 1018,
    name: "Пам’ятник дітям, розстріляним у Бабиному Яру",
    type: "memorial",
    category: "tragedies",
    person: "Діти — жертви нацистських розстрілів",
    city: "Київ",
    country: "Україна",
    lat: 50.474176,
    lng: 30.449517,
    year: 2001,
    eraYear: 1941,
    eraYearEnd: 1943,
    eventDate: "1941–1943 роки",
    description: "Меморіальна скульптура, присвячена дітям, убитим нацистами в Бабиному Яру.",
    history: "Пам’ятник відкрили 30 вересня 2001 року, біля виходу зі станції метро «Дорогожичі». Скульптор — Володимир Медведєв, архітектори — Роман Кухаренко та Юрій Мельничук.",
    significance: "Окремо вшановує дітей серед численних жертв нацистських злочинів у Бабиному Яру.",
    sources: [
      {
        title: "babynyar.gov.ua",
        url: "https://babynyar.gov.ua/education/archive/historical-and-architectural-information/"
      }
    ]
  },
  {
    id: 1019,
    name: "Пам’ятник радянським громадянам і військовополоненим у Бабиному Яру",
    type: "memorial",
    category: "tragedies",
    person: "Жертви нацистських розстрілів",
    city: "Київ",
    country: "Україна",
    lat: 50.4712,
    lng: 30.44915,
    year: 1976,
    eraYear: 1941,
    eraYearEnd: 1943,
    eventDate: "1941–1943 роки",
    description: "Велика скульптурна композиція на території Бабиного Яру, встановлена на пам’ять про розстріляних мирних жителів і військовополонених.",
    history: "Монумент відкрили 2 липня 1976 року. Початковий напис використовував узагальнене формулювання «радянські громадяни», не акцентуючи на тому, що більшість загиблих у масових розстрілах 29–30 вересня 1941 року становили київські євреї. У 1989 році написи на меморіалі оновили.",
    significance: "Важливий об’єкт для розуміння історії меморіалізації Бабиного Яру та радянської політики пам’яті.",
    sources: [
      {
        title: "kby.kiev.ua",
        url: "https://www.kby.kiev.ua/komitet/ua/reserve/art00099.html"
      }
    ]
  },
  {
    id: 1948,
    name: "Будинок Української Центральної Ради",
    type: "historical_site",
    category: "independence",
    person: "Михайло Грушевський та діячі Української Центральної Ради",
    city: "Київ",
    country: "Україна",
    lat: 50.44665,
    lng: 30.51415,
    year: 1912,
    eraYear: 1917,
    eraYearEnd: 1918,
    eventDate: "11 березня 1917 — 29 квітня 1918 року",
    description: "Будівля колишнього Педагогічного музею, у якій працювала Українська Центральна Рада — представницький орган українського національного руху.",
    history: "Будівлю спорудили у 1910–1912 роках за проєктом архітектора Павла Альошина. З березня 1917 року тут працювала Українська Центральна Рада на чолі з Михайлом Грушевським. У цій будівлі відбувалася значна частина політичної діяльності, що привела до проголошення Української Народної Республіки.",
    significance: "Одна з ключових історичних споруд українського державотворення початку XX століття. Тут ухвалювалися рішення, які визначили шлях України до незалежності.",
    sources: [
      {
        title: "guide.kyivcity.gov.ua",
        url: "https://guide.kyivcity.gov.ua/places/budynok-pedahohichnoho-muzeyu-v-yakomu-pratsyuvala-ukrayinska-tsentralna-rada-pedahohichnyy-muzey"
      }
    ]
  },
  {
    id: 1949,
    name: "Пам’ятник Михайлу Грушевському",
    type: "monument",
    category: "independence",
    person: "Михайло Грушевський",
    city: "Київ",
    country: "Україна",
    lat: 50.44408,
    lng: 30.51306,
    year: 1998,
    eraYear: 1866,
    eraYearEnd: 1934,
    description: "Бронзова скульптура Михайла Грушевського, який сидить на лаві біля Будинку вчителя.",
    history: "Пам’ятник відкрили 1 грудня 1998 року. Скульптор — Володимир Чепелик, архітектори — Микола Кислий, Руслан Кухаренко та Юрій Мельничук.",
    significance: "Вшановує першого голову Української Центральної Ради, історика та одного з провідних діячів українського державотворення.",
    sources: [
      {
        title: "hrushevsky.history.org.ua",
        url: "https://hrushevsky.history.org.ua/item/0008104"
      },
      {
        title: "Вікіпедія: Грушевський Михайло Сергійович",
        url: "https://uk.wikipedia.org/wiki/Грушевський_Михайло_Сергійович"
      }
    ]
  },
  {
    id: 1950,
    name: "Історико-меморіальний музей Михайла Грушевського",
    type: "museum",
    subtype: "Історико-меморіальний музей",
    category: "independence",
    person: "Михайло Грушевський та родина Грушевських",
    city: "Київ",
    country: "Україна",
    lat: 50.43865,
    lng: 30.50865,
    year: 1908,
    eraYear: 1908,
    description: "Меморіальна садиба на Паньківській, 9, де мешкала родина Михайла Грушевського. Сьогодні тут працює історико-меморіальний музей.",
    history: "У 1908 році Михайло Грушевський разом із родиною придбав садибу. Тут зберігалися його особисті речі, документи, рукописи та родинна бібліотека. Музей створили у 1992 році, а експозицію відкрили для відвідувачів у 2006 році.",
    significance: "Місце дозволяє дослідити не лише політичну діяльність Грушевського, а й його наукове, культурне та сімейне життя.",
    sources: [
      {
        title: "immh.kyiv.ua",
        url: "https://immh.kyiv.ua/ua/istoriya-sadibi-rodini-grushevskih/"
      }
    ]
  },
  {
    id: 1020,
    name: "Мотронинський монастир — осередок Холодного Яру",
    type: "historical_site",
    subtype: "Монастир",
    category: "independence",
    person: "Учасники Коліївщини та Холодноярського повстанського руху",
    city: "Мельники, Черкаська область",
    country: "Україна",
    lat: 49.123,
    lng: 32.285,
    year: 1804,
    eraYear: 1768,
    eraYearEnd: 1922,
    eventDate: "1768 рік; 1918–1922 роки",
    description: "Мотронинський монастир розташований на території історичного урочища Холодний Яр — одного з важливих осередків українського повстанського руху.",
    history: "Монастир відігравав важливу роль під час Коліївщини 1768 року. У 1918–1922 роках Холодний Яр став одним із центрів українського повстанського руху проти більшовицької та інших окупаційних влад. На території монастиря розташована Троїцька церква, споруджена у 1804 році.",
    significance: "Місце пов'язане з кількома етапами українського визвольного руху та історією козацької доби.",
    sources: [
      {
        title: "ck-oda.gov.ua",
        url: "https://ck-oda.gov.ua/istorychni-ta-kulturni-objekty/"
      }
    ]
  },
  {
    id: 1021,
    name: "Батуринська фортеця",
    type: "castle",
    subtype: "Фортеця",
    category: "cossack",
    person: "Захисники Батурина та гетьман Іван Мазепа",
    city: "Батурин",
    country: "Україна",
    lat: 51.345,
    lng: 32.876,
    year: 1625,
    eraYear: 1708,
    eventDate: "2 листопада 1708 року",
    description: "Оборонний комплекс колишньої гетьманської столиці Батурина. Місто було важливим політичним і військовим центром Гетьманщини.",
    history: "На початку XVIII століття Батурин був резиденцією гетьмана Івана Мазепи. У листопаді 1708 року московські війська під командуванням Олександра Меншикова захопили та зруйнували місто. Загинули численні оборонці й мешканці.",
    significance: "Батуринська трагедія стала однією з найважливіших трагічних подій історії Гетьманщини та символом боротьби за українську політичну автономію.",
    sources: [
      {
        title: "baturin-capital.gov.ua",
        url: "https://baturin-capital.gov.ua/pro-zapovidnyk/perelik-pamyatok-zapovidnyka/"
      }
    ]
  },
  {
    id: 1022,
    name: "Резиденція Богдана Хмельницького",
    type: "museum",
    subtype: "Музей-резиденція",
    category: "cossack",
    person: "Богдан Хмельницький",
    city: "Чигирин",
    country: "Україна",
    lat: 49.0833,
    lng: 32.655,
    year: 2009,
    eraYear: 1601,
    eraYearEnd: 1700,
    eventDate: "Середина XVII століття",
    description: "Історико-архітектурний комплекс у Чигирині, присвячений резиденції гетьмана Богдана Хмельницького.",
    history: "Чигирин був столицею козацької держави за часів Богдана Хмельницького. У 2006–2009 роках на території Нижнього міста спорудили відтворений комплекс із будинком гетьмана, військовою канцелярією, скарбницею та іншими будівлями.",
    significance: "Комплекс допомагає відтворити уявлення про адміністративний і військовий центр Гетьманщини XVII століття.",
    sources: [
      {
        title: "chigirinskaotg.gov.ua",
        url: "https://chigirinskaotg.gov.ua/misto-chyhyryn/"
      }
    ]
  },
  {
    id: 1023,
    name: "Історико-культурний комплекс «Запорозька Січ»",
    type: "historical_site",
    category: "cossack",
    person: "Запорозькі козаки",
    city: "Запоріжжя",
    country: "Україна",
    lat: 47.86023062,
    lng: 35.07139945,
    year: 2004,
    eraYear: 1501,
    eraYearEnd: 1800,
    eventDate: "XVI–XVIII століття",
    description: "Історико-культурний комплекс на острові Хортиця, який відтворює архітектуру, побут і військову організацію Запорозької Січі.",
    history: "Комплекс створений як історична реконструкція козацької Січі. На його території представлені укріплення, курені, військова канцелярія, церква Покрови та інші споруди, пов'язані з життям запорозьких козаків.",
    significance: "Один із найважливіших музейних комплексів, присвячених історії українського козацтва. Важливо пам'ятати, що це сучасна реконструкція, а не збережена автентична Січ.",
    sources: [
      {
        title: "ostriv.org",
        url: "https://ostriv.org/"
      }
    ]
  },
  {
    id: 1024,
    name: "Кам'янець-Подільська фортеця",
    type: "castle",
    subtype: "Фортеця",
    category: "cossack",
    person: "Захисники Кам'янця-Подільського",
    city: "Кам'янець-Подільський",
    country: "Україна",
    lat: 48.6744,
    lng: 26.5684,
    year: 1374,
    eraYear: 1301,
    eraYearEnd: 1800,
    eventDate: "XIV–XVIII століття",
    description: "Середньовічна фортеця на скелястому острові, оточеному каньйоном річки Смотрич. Один із найвідоміших оборонних комплексів України.",
    history: "Фортеця формувалася протягом кількох століть і була важливим оборонним центром Поділля. Її укріплення неодноразово перебудовували та посилювали. У різні періоди вона перебувала під владою литовських князів, Речі Посполитої та Османської імперії.",
    significance: "Визначна пам'ятка оборонної архітектури, яка демонструє розвиток військової інженерії в Україні.",
    sources: [
      {
        title: "niaz-kamienec.org.ua",
        url: "https://niaz-kamienec.org.ua/"
      }
    ]
  },
  {
    id: 1025,
    name: "Хотинська фортеця",
    type: "castle",
    subtype: "Фортеця",
    category: "cossack",
    person: "Учасники Хотинської битви 1621 року",
    city: "Хотин",
    country: "Україна",
    lat: 48.521942,
    lng: 26.498349,
    year: 1325,
    eraYear: 1621,
    eraYearEnd: 1673,
    eventDate: "1621 рік; 1673 рік",
    description: "Величний оборонний комплекс на березі Дністра. Фортеця була стратегічним пунктом на торговельних і військових шляхах між Центральною та Східною Європою.",
    history: "Мурована фортеця сформувалася у XIII–XIV століттях. У 1621 році біля Хотина відбулася велика битва між військами Речі Посполитої та Османської імперії, у якій брало участь козацьке військо Петра Конашевича-Сагайдачного. У 1673 році тут відбулася ще одна велика битва.",
    significance: "Одна з найважливіших фортець Східної Європи, пов'язана з історією українського козацтва та міжнародними військовими конфліктами.",
    images: [
      {
        url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/df/73-250-0001_Khotyn_Fortress_RB_18.jpg/1280px-73-250-0001_Khotyn_Fortress_RB_18.jpg",
        author: "Rbrechko",
        license: "CC BY-SA 4.0",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:73-250-0001_Khotyn_Fortress_RB_18.jpg"
      }
    ],
    sources: [
      {
        title: "khotynska-fortecya.cv.ua",
        url: "https://khotynska-fortecya.cv.ua/"
      },
      {
        title: "vue.gov.ua",
        url: "https://vue.gov.ua/Хотинська_фортеця_і_замок"
      }
    ]
  },
  {
    id: 1026,
    name: "Національний заповідник «Поле Берестецької битви»",
    type: "memorial",
    category: "cossack",
    person: "Військо Богдана Хмельницького",
    city: "Пляшева",
    country: "Україна",
    lat: 50.3489521,
    lng: 25.1926374,
    year: 1967,
    eraYear: 1651,
    eventDate: "28 червня — 10 липня 1651 року",
    description: "Національний історико-меморіальний заповідник на місці Берестецької битви — однієї з найбільших битв Національно-визвольної війни під проводом Богдана Хмельницького.",
    history: "У 1651 році поблизу Берестечка відбулася масштабна битва між козацько-селянським військом Богдана Хмельницького та військами Речі Посполитої. Після битви козацьке військо відступило, а події стали одним із переломних моментів війни.",
    significance: "Місце вшанування полеглих козаків і селян, а також важливе джерело для вивчення військової історії України XVII століття.",
    sources: [
      {
        title: "berestechko.org",
        url: "https://berestechko.org/"
      }
    ]
  },
  {
    id: 1027,
    name: "Херсонес Таврійський",
    type: "archaeological",
    subtype: "Античне місто",
    category: "ancient",
    person: "Давньогрецькі колоністи та мешканці Херсонеса",
    city: "Севастополь, Крим",
    country: "Україна",
    lat: 44.610833,
    lng: 33.491389,
    year: -422,
    eraYear: -500,
    eraYearEnd: 1500,
    eventDate: "V століття до н. е. — XV століття",
    description: "Руїни античного міста-держави на території південно-західного Криму. Херсонес був важливим торговельним, політичним і культурним центром Північного Причорномор’я.",
    history: "Місто заснували давньогрецькі колоністи у V столітті до н. е. Згодом воно перебувало під впливом Римської та Візантійської імперій. Археологічні залишки охоплюють житлові квартали, оборонні споруди, громадські будівлі та давні виноградники.",
    significance: "Об’єкт Всесвітньої спадщини ЮНЕСКО. Важливе джерело для вивчення античної історії Криму та культурних зв’язків Причорномор’я.",
    sources: [
      {
        title: "whc.unesco.org",
        url: "https://whc.unesco.org/en/list/1411/"
      }
    ]
  },
  {
    id: 1028,
    name: "Національний історико-археологічний заповідник «Ольвія»",
    type: "archaeological",
    subtype: "Античне місто",
    category: "ancient",
    person: "Мешканці античної Ольвії",
    city: "Парутине, Миколаївська область",
    country: "Україна",
    lat: 46.69182,
    lng: 31.90634,
    year: -600,
    eraYear: -600,
    eraYearEnd: 400,
    eventDate: "VI століття до н. е. — IV століття н. е.",
    description: "Руїни давньогрецького міста-держави на правому березі Бузького лиману. Тут збереглися залишки житлових кварталів, оборонних споруд, агори та некрополя.",
    history: "Ольвію заснували грецькі переселенці приблизно у VI столітті до н. е. Місто стало важливим торговельним центром, підтримувало зв’язки з іншими грецькими містами та місцевими народами. У IV столітті н. е. поселення занепало після нападів гунів.",
    significance: "Одна з найважливіших археологічних пам’яток античної історії України. Дозволяє досліджувати торгівлю, культуру та повсякденне життя населення Північного Причорномор’я.",
    sources: [
      {
        title: "olbio.org.ua",
        url: "https://olbio.org.ua/"
      }
    ]
  },
  {
    id: 1029,
    name: "Наскельна фортеця Тустань",
    type: "castle",
    subtype: "Наскельна фортеця",
    category: "cossack",
    person: "Захисники та мешканці середньовічної Тустані",
    city: "Урич, Львівська область",
    country: "Україна",
    lat: 49.191671,
    lng: 23.409346,
    year: 900,
    eraYear: 801,
    eraYearEnd: 1600,
    eventDate: "IX–XVI століття",
    description: "Унікальна середньовічна фортеця, побудована серед пісковикових скель Карпат. У скелях збереглися тисячі пазів і вирізів від дерев’яних конструкцій.",
    history: "Тустань була оборонним, митним та адміністративним центром на важливому торговельному шляху через Карпати. Дерев’яні споруди не збереглися, але археологічні сліди дозволили дослідникам відтворити її приблизний вигляд.",
    significance: "Унікальна пам’ятка давньоруської та середньовічної оборонної архітектури. Її конструкція є надзвичайно цінною для дослідження історії фортифікації.",
    sources: [
      {
        title: "tustan.ua",
        url: "https://tustan.ua/"
      }
    ]
  },
  {
    id: 1030,
    name: "Золоті ворота Києва",
    type: "building",
    subtype: "Пам'ятка оборонної архітектури",
    category: "ancient",
    person: "Ярослав Мудрий",
    city: "Київ",
    country: "Україна",
    lat: 50.44883,
    lng: 30.51343,
    year: 1037,
    eraYear: 1001,
    eraYearEnd: 1100,
    eventDate: "XI століття",
    description: "Головна парадна брама стародавнього Києва та важлива частина оборонної системи міста за часів Київської Русі.",
    history: "Золоті ворота спорудили за князювання Ярослава Мудрого. Вони виконували оборонну та церемоніальну функції. До комплексу входила надбрамна церква Благовіщення. Сучасна споруда є архітектурною реконструкцією, що захищає залишки давньої брами.",
    significance: "Один із головних символів Києва та визначна пам’ятка архітектури Київської Русі.",
    sources: [
      {
        title: "guide.kyivcity.gov.ua",
        url: "https://guide.kyivcity.gov.ua/en/places/zoloti-vorota"
      }
    ]
  },
  {
    id: 1031,
    name: "Тальянки — трипільське поселення-гігант",
    type: "archaeological",
    subtype: "Трипільське поселення",
    category: "ancient",
    person: "Носії трипільської культури",
    city: "Тальянки, Черкаська область",
    country: "Україна",
    lat: 48.7925,
    lng: 30.5131,
    year: -4000,
    eraYear: -4000,
    eraYearEnd: -2001,
    eventDate: "IV–III тисячоліття до н. е.",
    description: "Одне з найбільших відомих поселень трипільської культури. Археологічна пам'ятка демонструє складну організацію поселень енеолітичної доби.",
    history: "Поселення Тальянки належало до трипільської культури. Воно мало концентричне планування та складалося з великої кількості дерев'яних жител. Поруч у селі Легедзине працює Державний історико-культурний заповідник «Трипільська культура».",
    significance: "Свідчення розвитку великих землеробських поселень на території сучасної України задовго до появи античних міст.",
    sources: [
      {
        title: "tripillya.com",
        url: "https://tripillya.com/"
      }
    ]
  },
  {
    id: 1032,
    name: "Кам'яна Могила",
    type: "archaeological",
    subtype: "Археологічний та культовий комплекс",
    category: "ancient",
    person: "Давні мешканці Північного Причорномор'я",
    city: "Терпіння, Запорізька область",
    country: "Україна",
    lat: 46.949162,
    lng: 35.466064,
    year: -20000,
    eventDate: "Від пізнього палеоліту до середньовіччя",
    description: "Унікальний комплекс пісковикових скель із печерами, гротами та тисячами стародавніх наскельних зображень.",
    history: "Кам'яна Могила використовувалася людьми протягом багатьох тисячоліть. На її поверхнях і в гротах виявлено петрогліфи різних історичних періодів, зокрема зображення тварин, символи та знаки.",
    significance: "Одна з найвизначніших археологічних пам'яток України, що зберігає сліди духовного життя давніх суспільств.",
    images: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/a/ac/%D0%9A%D0%B0%D0%BC%D0%B5%D0%BD%D0%BD%D0%B0%D1%8F-%D0%BC%D0%BE%D0%B3%D0%B8%D0%BB%D0%B0.jpg",
        author: "Pavel dp",
        license: "CC BY-SA 3.0",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:%D0%9A%D0%B0%D0%BC%D0%B5%D0%BD%D0%BD%D0%B0%D1%8F-%D0%BC%D0%BE%D0%B3%D0%B8%D0%BB%D0%B0.jpg"
      }
    ],
    sources: [
      {
        title: "Encyclopedia of Ukraine",
        url: "https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CK%5CA%5CKamianaMohyla.htm"
      },
      {
        title: "archivzp.gov.ua",
        url: "https://archivzp.gov.ua/uk/pidzemnij-ermitazh-ukrajini"
      }
    ]
  },
  {
    id: 1033,
    name: "Мезинська палеолітична стоянка",
    type: "archaeological",
    category: "ancient",
    person: "Мисливці пізнього палеоліту",
    city: "Мезин, Чернігівська область",
    country: "Україна",
    lat: 51.824161,
    lng: 33.07153,
    year: -17000,
    eraYear: -18000,
    eraYearEnd: -13000,
    eventDate: "Приблизно 20–15 тисяч років тому",
    description: "Археологічна стоянка мисливців пізнього палеоліту на березі Десни. Відома знахідками з кісток мамонтів, крем'яними знаряддями та прикрасами.",
    history: "Мезинська стоянка була відкрита наприкінці XIX століття. Археологічні дослідження виявили залишки жител, знаряддя праці, вироби з бивня мамонта та предмети мистецтва.",
    significance: "Надзвичайно важлива пам'ятка для дослідження життя, мистецтва й технологій людей пізнього палеоліту на території України.",
    images: [
      {
        url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bf/%D0%A1%D1%82%D0%BE%D1%8F%D0%BD%D0%BA%D0%B0_%C2%AB%D0%9C%D0%B5%D0%B7%D0%B8%D0%BD%D1%81%D1%8C%D0%BA%D0%B0%C2%BB.jpg/1280px-%D0%A1%D1%82%D0%BE%D1%8F%D0%BD%D0%BA%D0%B0_%C2%AB%D0%9C%D0%B5%D0%B7%D0%B8%D0%BD%D1%81%D1%8C%D0%BA%D0%B0%C2%BB.jpg",
        author: "Inishche",
        license: "CC BY-SA 4.0",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:%D0%A1%D1%82%D0%BE%D1%8F%D0%BD%D0%BA%D0%B0_%C2%AB%D0%9C%D0%B5%D0%B7%D0%B8%D0%BD%D1%81%D1%8C%D0%BA%D0%B0%C2%BB.jpg"
      }
    ],
    sources: [
      {
        title: "mezinpark.com.ua",
        url: "https://mezinpark.com.ua/"
      }
    ]
  },
  {
    id: 1034,
    name: "Більське городище — давній Гелон",
    type: "archaeological",
    category: "ancient",
    person: "Скіфські та місцеві племена",
    city: "Більськ, Полтавська область",
    country: "Україна",
    lat: 50.07758,
    lng: 34.669662,
    year: -500,
    eraYear: -800,
    eraYearEnd: -201,
    eventDate: "VIII–III століття до н. е.",
    description: "Масштабний археологічний комплекс ранньої залізної доби з залишками укріплень, поселень, курганів та виробничих майстерень.",
    history: "Більське городище складалося з кількох укріплених поселень, об'єднаних оборонними валами. Деякі дослідники пов'язують його з містом Гелон, яке описував давньогрецький історик Геродот.",
    significance: "Одна з найбільших археологічних пам'яток ранньої залізної доби у Східній Європі. Важливий центр дослідження скіфського світу та населення лісостепу.",
    images: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Bilske_gorogische.JPG",
        author: "Mpas",
        license: "CC BY-SA 1.0",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Bilske_gorogische.JPG"
      }
    ],
    sources: [
      {
        title: "bilsk.com.ua",
        url: "https://bilsk.com.ua/"
      }
    ]
  },
  {
    id: 1035,
    name: "Печера Вертеба",
    type: "archaeological",
    category: "ancient",
    person: null,
    city: "Більче-Золоте, Тернопільська область",
    country: "Україна",
    lat: 48.78872,
    lng: 25.87148,
    year: -4000,
    eraYear: -4000,
    eraYearEnd: -2001,
    eventDate: "IV–III тисячоліття до н. е.",
    description: "Печера Вертеба — одна з найважливіших пам'яток трипільської культури. Тут знайдено численні керамічні вироби, знаряддя праці та людські останки.",
    history: "У печері виявлено сліди перебування людей різних епох. Особливе значення мають знахідки трипільської культури. У 2004 році тут відкрили підземний археологічний музей.",
    significance: "Вертеба є унікальним джерелом інформації про побут, вірування та поховальні практики трипільців.",
    sources: [
      {
        title: "maps.visicom.ua",
        url: "https://maps.visicom.ua/c/25.87148%2C48.78873%2C17/f/POIFQFP51V?lang=uk"
      }
    ]
  },
  {
    id: 1036,
    name: "Пастерівське городище",
    type: "archaeological",
    category: "ancient",
    person: null,
    city: "Пастирське, Черкаська область",
    country: "Україна",
    lat: 49.122,
    lng: 31.716,
    year: -700,
    eraYear: 601,
    eraYearEnd: 800,
    eventDate: "VII–VIII століття н. е. — основний ранньосередньовічний шар",
    description: "Велике укріплене поселення площею близько 25 гектарів. Городище має складну історію заселення, що охоплює кілька археологічних періодів.",
    history: "Пам'ятка містить ранньоскіфські, пізньоскіфські та ранньосередньовічні культурні шари. Її досліджували Вікентій Хвойка, Михайло Брайчевський та Олег Приходнюк.",
    significance: "Городище важливе для вивчення населення Центральної України та розвитку ранньослов'янських спільнот.",
    sources: [
      {
        title: "ckoblmuz.ck.ua",
        url: "https://ckoblmuz.ck.ua/files/maket.pdf"
      }
    ]
  },
  {
    id: 1037,
    name: "Археологічний комплекс «Острів Байда»",
    type: "archaeological",
    category: "cossack",
    person: "Дмитро Вишневецький (Байда)",
    city: "Запоріжжя",
    country: "Україна",
    lat: 47.83685,
    lng: 35.0511,
    year: 1556,
    eraYear: 1556,
    eventDate: "1556 рік",
    description: "Острів Мала Хортиця, відомий як острів Байда, пов'язаний із заснуванням укріплення князем Дмитром Вишневецьким.",
    history: "У середині XVI століття Дмитро Вишневецький спорудив тут дерев'яно-земляне укріплення. Воно стало одним із попередників Запорозької Січі та важливим осередком козацької військової організації.",
    significance: "Острів є одним із ключових місць ранньої історії українського козацтва.",
    sources: [
      {
        title: "vue.gov.ua",
        url: "https://vue.gov.ua/Подія:Заснування_Хортицької_Січі_1556"
      }
    ]
  },
  {
    id: 1038,
    name: "Місто Володимира — дитинець Стародавнього Києва",
    type: "archaeological",
    category: "ancient",
    person: "Володимир Великий",
    city: "Київ",
    country: "Україна",
    lat: 50.4547,
    lng: 30.5165,
    year: 980,
    eraYear: 901,
    eraYearEnd: 1300,
    eventDate: "Кінець X — перша половина XIII століття",
    description: "Центральна укріплена частина Стародавнього Києва, розташована на Старокиївській горі. Тут містилися князівські палаци, храми та інші важливі споруди.",
    history: "За князювання Володимира Святославича наприкінці X століття територію давнього городища перебудували та перетворили на князівський дитинець. Тут розташовувалися Десятинна церква та князівські палаци. Під час монгольської навали 1240 року ця частина міста зазнала руйнувань.",
    significance: "Це один із головних археологічних осередків, що дозволяє досліджувати становлення Києва як політичного та культурного центру Русі.",
    sources: [
      {
        title: "archkyiv.org.ua",
        url: "https://archkyiv.org.ua/2023/10/04/старокиївська-гора-2/"
      }
    ]
  },
  {
    id: 1040,
    name: "Пам'ятник Ігорю Сікорському",
    type: "monument",
    category: "science",
    person: "Ігор Іванович Сікорський",
    city: "Київ",
    country: "Україна",
    lat: 50.4496,
    lng: 30.4609,
    year: 2008,
    eraYear: 1889,
    eraYearEnd: 1972,
    eventDate: "14 травня 2008 року",
    description: "Пам'ятник видатному авіаконструктору Ігорю Сікорському, одному з піонерів світового літакобудування та вертольотобудування.",
    history: "Ігор Сікорський навчався у Київському політехнічному інституті в 1907–1911 роках. Він створив низку літаків, зокрема багатомоторні конструкції, а згодом став одним із піонерів практичного вертольотобудування. Пам'ятник відкрили на території КПІ біля колишнього авіаційного ангару.",
    significance: "Сікорський є однією з найвідоміших постатей українського походження в історії світової авіації.",
    images: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/6/62/Sikorskiy_2_by_Igor_Palamarchuk.png",
        author: "IgorPalamarchuk",
        license: "CC BY-SA 4.0",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Sikorskiy_2_by_Igor_Palamarchuk.png"
      }
    ],
    sources: [
      {
        title: "kpi.ua",
        url: "https://kpi.ua/mem-sikorsky"
      },
      {
        title: "Вікіпедія: Сікорський Ігор Іванович",
        url: "https://uk.wikipedia.org/wiki/Сікорський_Ігор_Іванович"
      }
    ]
  },
  {
    id: 1041,
    name: "Національний музей космонавтики імені Сергія Корольова",
    type: "museum",
    category: "science",
    person: "Сергій Павлович Корольов",
    city: "Житомир",
    country: "Україна",
    lat: 50.253484,
    lng: 28.67784,
    year: 1970,
    eraYear: 1970,
    eventDate: "1970 рік — відкриття музею",
    description: "Музей присвячений історії космонавтики, ракетобудування та життю видатного конструктора Сергія Корольова.",
    history: "Сергій Корольов народився в Житомирі у 1907 році. Він став одним із головних конструкторів радянської ракетно-космічної програми. У музейній експозиції представлені макети космічних апаратів, скафандри, обладнання та інші матеріали з історії освоєння космосу. Музей відкрили у 1970 році.",
    significance: "Музей зберігає пам'ять про розвиток ракетної техніки та внесок Корольова в історію космонавтики.",
    images: [
      {
        url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/04/Korolev-museum-zhytomyr.jpg/1280px-Korolev-museum-zhytomyr.jpg",
        author: "Texnik",
        license: "CC BY-SA 3.0",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Korolev-museum-zhytomyr.jpg"
      }
    ],
    sources: [
      {
        title: "cosmosmuseum.info",
        url: "https://cosmosmuseum.info/"
      }
    ]
  },
  {
    id: 1042,
    name: "Бюст Бориса Патона",
    type: "monument",
    category: "science",
    person: "Борис Євгенович Патон",
    city: "Київ",
    country: "Україна",
    lat: 50.445667,
    lng: 30.514361,
    year: null,
    eraYear: 1918,
    eraYearEnd: 2020,
    eventDate: "Пам'ятний бюст біля будівлі Президії НАН України",
    description: "Пам'ятний бюст Борису Патону — видатному українському вченому, багаторічному президенту Національної академії наук України.",
    history: "Борис Патон народився у 1918 році. Він присвятив життя дослідженню електрозварювання, розробці нових технологій з'єднання металів та їх застосуванню в промисловості й медицині. Очолював Національну академію наук України з 1962 до 2020 року.",
    significance: "Наукова діяльність Патона зробила значний внесок у розвиток зварювальних технологій в Україні та світі.",
    sources: [
      {
        title: "nas.gov.ua",
        url: "https://www.nas.gov.ua/"
      },
      {
        title: "Вікіпедія: Патон Борис Євгенович",
        url: "https://uk.wikipedia.org/wiki/Патон_Борис_Євгенович"
      }
    ]
  },
  {
    id: 1043,
    name: "Державний політехнічний музей імені Бориса Патона",
    type: "museum",
    category: "science",
    person: "Ігор Сікорський, Борис Патон та інші українські науковці",
    city: "Київ",
    country: "Україна",
    lat: 50.4496,
    lng: 30.4609,
    year: 1995,
    eraYear: 1995,
    eventDate: "1995 рік — створення музею",
    description: "Музей історії науки, техніки, інженерії та промислового розвитку. Розташований на території Київського політехнічного інституту.",
    history: "Музей створений у 1995 році. Його експозиції присвячені розвитку технічної освіти, авіації, космонавтики, транспорту, електроніки та інших галузей. Серед експонатів є історичні технічні пристрої, моделі та зразки обладнання.",
    significance: "Музей демонструє розвиток української інженерної думки та технічної освіти.",
    sources: [
      {
        title: "museum.kpi.ua",
        url: "https://museum.kpi.ua/"
      }
    ]
  },
  {
    id: 1044,
    name: "Острозька академія",
    type: "university",
    subtype: "Історичний навчальний заклад",
    category: "science",
    person: "Костянтин Василь Острозький",
    city: "Острог, Рівненська область",
    country: "Україна",
    lat: 50.3291,
    lng: 26.5139,
    year: 1576,
    eraYear: 1576,
    eventDate: "1576 рік — заснування академії",
    description: "Острозька академія — один із найважливіших освітніх і культурних осередків ранньомодерної України.",
    history: "Академія була заснована князем Василем-Костянтином Острозьким у 1576 році. Тут викладали грецьку, латинську та церковнослов'янську мови, філософію, математику й інші дисципліни. При академії діяла друкарня Івана Федорова, а її середовище було пов'язане з підготовкою Острозької Біблії 1581 року.",
    significance: "Острозька академія стала одним із центрів розвитку української освіти, гуманістичної думки та книгодрукування.",
    sources: [
      {
        title: "oa.edu.ua",
        url: "https://www.oa.edu.ua/"
      }
    ]
  },
  {
    id: 1045,
    name: "Києво-Могилянська академія",
    type: "university",
    subtype: "Історичний навчальний заклад",
    category: "science",
    person: "Петро Могила, Галшка Гулевичівна",
    city: "Київ",
    country: "Україна",
    lat: 50.4646,
    lng: 30.5186,
    year: 1615,
    eraYear: 1615,
    eventDate: "15 жовтня 1615 року — початок історії академії",
    description: "Один із найвідоміших історичних освітніх закладів України, що відіграв значну роль у розвитку освіти, богослов'я, філософії та науки.",
    history: "Історія академії починається з Київської братської школи, заснованої 1615 року за підтримки Галшки Гулевичівни. У 1632 році школи об'єднали під опікою митрополита Петра Могили. У 1701 році заклад офіційно отримав статус академії. У 1817 році його закрили, а в 1991 році університет відновив діяльність.",
    significance: "Академія виховала багатьох відомих діячів української культури, науки, церкви та державного управління.",
    sources: [
      {
        title: "ukma.edu.ua",
        url: "https://ukma.edu.ua/index.php/about-us/istoriya-akademiji"
      }
    ]
  },
  {
    id: 1046,
    name: "Музей книги і друкарства України",
    type: "museum",
    category: "science",
    person: "Єлисей Плетенецький, Іван Федоров",
    city: "Київ",
    country: "Україна",
    lat: 50.43547,
    lng: 30.558321,
    year: 1972,
    eraYear: 1972,
    eraYearEnd: 1975,
    eventDate: "1972 рік — створення музею; 1975 рік — відкриття для відвідувачів",
    description: "Музей присвячений історії української книги — від рукописних видань до сучасного книгодрукування.",
    history: "Музей розташований у будівлі колишньої друкарні Києво-Печерської лаври. Лаврська друкарня була заснована 1615 року архімандритом Єлисеєм Плетенецьким і протягом століть була одним із головних центрів українського книговидання.",
    significance: "Музей зберігає стародруки, рукописи, друкарське обладнання та матеріали про розвиток української видавничої справи.",
    sources: [
      {
        title: "mkdu.com.ua",
        url: "https://www.mkdu.com.ua/"
      }
    ]
  },
  {
    id: 1047,
    name: "Львівська національна наукова бібліотека України імені Василя Стефаника",
    type: "building",
    subtype: "Наукова бібліотека",
    category: "science",
    person: "Василь Стефаник",
    city: "Львів",
    country: "Україна",
    lat: 49.8364,
    lng: 24.0304,
    year: 1940,
    eraYear: 1940,
    eventDate: "1940 рік — створення бібліотеки",
    description: "Одна з найбільших наукових бібліотек України, що зберігає значні колекції рукописів, стародруків, архівних документів та наукових видань.",
    history: "Бібліотеку створили у 1940 році на основі об'єднання фондів різних львівських книгозбірень та установ. Сьогодні вона є важливим центром наукових досліджень і збереження української книжкової спадщини.",
    significance: "Фонди бібліотеки мають велике значення для дослідження історії України, літератури, культури та науки.",
    sources: [
      {
        title: "lsl.lviv.ua",
        url: "https://www.lsl.lviv.ua/"
      }
    ]
  },
  {
    id: 1944,
    name: "Національний художній музей України",
    type: "museum",
    category: "art",
    person: "Владислав Городецький",
    city: "Київ",
    country: "Україна",
    lat: 50.44941,
    lng: 30.5308,
    year: 1899,
    eraYear: 1899,
    eraYearEnd: 1904,
    eventDate: "1899 рік — початок діяльності; 1904 рік — урочисте відкриття",
    description: "Один із найважливіших художніх музеїв України. Зберігає колекцію українського образотворчого мистецтва від давніх часів до сучасності.",
    history: "Музей розпочав діяльність у 1899 році з археологічної виставки. Будівлю спроєктував архітектор Владислав Городецький. У 1904 році відбулося урочисте відкриття закладу під назвою Київський художньо-промисловий і науковий музей.",
    significance: "Музей відіграє важливу роль у збереженні української художньої спадщини, зокрема іконопису, живопису та скульптури.",
    images: [
      {
        url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6c/National_Art_Museum_of_Ukraine_20190505.jpg/1280px-National_Art_Museum_of_Ukraine_20190505.jpg",
        author: "Suicasmo",
        license: "CC BY-SA 4.0",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:National_Art_Museum_of_Ukraine_20190505.jpg"
      }
    ],
    sources: [
      {
        title: "namu.ua",
        url: "https://namu.ua/"
      }
    ]
  },
  {
    id: 1945,
    name: "Будинок з химерами",
    type: "building",
    subtype: "Пам'ятка архітектури",
    category: "art",
    person: "Владислав Городецький, Еліо Саля",
    city: "Київ",
    country: "Україна",
    lat: 50.44593,
    lng: 30.5296,
    year: 1903,
    eraYear: 1901,
    eraYearEnd: 1903,
    eventDate: "1901–1903 роки — будівництво",
    description: "Одна з найвідоміших архітектурних споруд Києва. Будинок вирізняється скульптурним декором із зображеннями фантастичних істот, тварин та морських чудовиськ.",
    history: "Будівлю спорудили за проєктом Владислава Городецького у 1901–1903 роках. Вона поєднувала функції приватного особняка та прибуткового будинку. Скульптурне оформлення створював Еліо Саля. Через складний рельєф ділянки під час будівництва застосували спеціальні інженерні рішення.",
    significance: "Будинок є визначною пам'яткою київського архітектурного модерну та прикладом незвичайного використання скульптурного декору в архітектурі.",
    images: [
      {
        url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/02/%D0%91%D1%83%D0%B4%D0%B8%D0%BD%D0%BE%D0%BA_%D1%96%D0%B7_%D1%85%D0%B8%D0%BC%D0%B5%D1%80%D0%B0%D0%BC%D0%B8%2C_%D0%B2_%D1%8F%D0%BA%D0%BE%D0%BC%D1%83_%D0%B6%D0%B8%D0%B2_%D0%B0%D1%80%D1%85%D1%96%D1%82%D0%B5%D0%BA%D1%82%D0%BE%D1%80_%D0%93%D0%BE%D1%80%D0%BE%D0%B4%D0%B5%D1%86%D1%8C%D0%BA%D0%B8%D0%B9.jpg/1280px-%D0%91%D1%83%D0%B4%D0%B8%D0%BD%D0%BE%D0%BA_%D1%96%D0%B7_%D1%85%D0%B8%D0%BC%D0%B5%D1%80%D0%B0%D0%BC%D0%B8%2C_%D0%B2_%D1%8F%D0%BA%D0%BE%D0%BC%D1%83_%D0%B6%D0%B8%D0%B2_%D0%B0%D1%80%D1%85%D1%96%D1%82%D0%B5%D0%BA%D1%82%D0%BE%D1%80_%D0%93%D0%BE%D1%80%D0%BE%D0%B4%D0%B5%D1%86%D1%8C%D0%BA%D0%B8%D0%B9.jpg",
        author: "Олійник Богдан",
        license: "CC BY-SA 4.0",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:%D0%91%D1%83%D0%B4%D0%B8%D0%BD%D0%BE%D0%BA_%D1%96%D0%B7_%D1%85%D0%B8%D0%BC%D0%B5%D1%80%D0%B0%D0%BC%D0%B8,_%D0%B2_%D1%8F%D0%BA%D0%BE%D0%BC%D1%83_%D0%B6%D0%B8%D0%B2_%D0%B0%D1%80%D1%85%D1%96%D1%82%D0%B5%D0%BA%D1%82%D0%BE%D1%80_%D0%93%D0%BE%D1%80%D0%BE%D0%B4%D0%B5%D1%86%D1%8C%D0%BA%D0%B8%D0%B9.jpg"
      }
    ],
    sources: [
      {
        title: "guide.kyivcity.gov.ua",
        url: "https://guide.kyivcity.gov.ua/places/budynok-z-khymeramy"
      }
    ]
  },
  {
    id: 1946,
    name: "Національний музей народної архітектури та побуту України",
    type: "museum",
    subtype: "Музей просто неба",
    category: "folk",
    person: null,
    city: "Пирогів, Київ",
    country: "Україна",
    lat: 50.3532,
    lng: 30.5045,
    year: 1969,
    eraYear: 1969,
    eraYearEnd: 1976,
    eventDate: "6 лютого 1969 року — заснування; 1976 рік — відкриття для відвідувачів",
    description: "Великий музей просто неба, який представляє традиційну архітектуру, побут і культуру різних історико-етнографічних регіонів України.",
    history: "Музей заснували у 1969 році. На його території зібрано сотні пам'яток народного будівництва XVI–XX століть: житлові будинки, дерев'яні церкви, вітряки, господарські споруди та інші об'єкти. Експозиція охоплює Полісся, Карпати, Поділля, Слобожанщину, Полтавщину, Наддніпрянщину та Південь України.",
    significance: "Музей зберігає матеріальну спадщину українського народу та демонструє регіональні особливості традиційного будівництва.",
    images: [
      {
        url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/30/Kiev_Pyrogiv_Podillya_070628.jpg/1280px-Kiev_Pyrogiv_Podillya_070628.jpg",
        author: "Dgri",
        license: "CC BY-SA 3.0",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Kiev_Pyrogiv_Podillya_070628.jpg"
      }
    ],
    sources: [
      {
        title: "pyrohiv.com",
        url: "https://www.pyrohiv.com/"
      }
    ]
  },
  {
    id: 1947,
    name: "Меморіальний музей Івана Марчука",
    type: "museum",
    subtype: "Меморіальний музей",
    category: "art",
    person: "Іван Степанович Марчук",
    city: "Москалівка, Тернопільська область",
    country: "Україна",
    lat: 49.75444,
    lng: 26.12639,
    year: 2010,
    eraYear: 1936,
    eventDate: "20 квітня 2010 року — відкриття меморіальної кімнати-музею",
    description: "Меморіальна кімната-музей, присвячена українському художнику Івану Марчуку, який народився у селі Москалівка.",
    history: "Іван Марчук народився 12 травня 1936 року в Москалівці. Він став автором унікальної живописної техніки, відомої як «пльонтанізм». У 2010 році в рідному селі художника відкрили меморіальну кімнату-музей за участю самого митця.",
    significance: "Музей увічнює пам'ять про одного з найвідоміших українських художників сучасності та його зв'язок із рідним краєм.",
    sources: [
      {
        title: "tobm.org.ua",
        url: "https://tobm.org.ua/ivan-marchuk/"
      },
      {
        title: "Вікіпедія: Марчук Іван Степанович",
        url: "https://uk.wikipedia.org/wiki/Марчук_Іван_Степанович"
      }
    ]
  },
  {
    id: 1048,
    name: "Національний музей Голодомору-геноциду",
    type: "museum",
    subtype: "Національний музей",
    category: "tragedies",
    person: null,
    city: "Київ",
    country: "Україна",
    lat: 50.4378,
    lng: 30.5575,
    year: 2008,
    eraYear: 1932,
    eraYearEnd: 1933,
    eventDate: "1932–1933 роки — Голодомор; 2008 рік — відкриття меморіалу",
    description: "Музей присвячений вшануванню мільйонів українців, які загинули під час Голодомору 1932–1933 років, та дослідженню цього злочину.",
    history: "Голодомор 1932–1933 років був штучним масовим голодом, організованим радянським тоталітарним режимом. У 2008 році відкрили меморіальну частину комплексу. Музей збирає документи, свідчення очевидців, фотографії та інші матеріали про трагедію.",
    significance: "Зберігає пам'ять про жертв Голодомору та документує злочин геноциду українського народу.",
    sources: [
      {
        title: "holodomormuseum.org.ua",
        url: "https://holodomormuseum.org.ua/"
      }
    ]
  },
  {
    id: 1049,
    name: "Національний музей-меморіал «Тюрма на Лонцького»",
    type: "museum",
    subtype: "Музей-меморіал",
    category: "tragedies",
    person: null,
    city: "Львів",
    country: "Україна",
    lat: 49.83448,
    lng: 24.01868,
    year: 2009,
    eraYear: 1901,
    eraYearEnd: 2000,
    eventDate: "XX століття — період функціонування політичної в'язниці",
    description: "Меморіальний музей у приміщенні колишньої політичної в'язниці, де утримували людей польські, нацистські та радянські окупаційні режими.",
    history: "Будівля використовувалася як місце ув'язнення протягом XX століття. Тут перебували політичні в'язні різних режимів. Особливо трагічними стали події червня 1941 року, коли під час відступу радянські органи НКВС розстріляли в'язнів у львівських тюрмах. Музей відкрили для громадськості у 2009 році.",
    significance: "Музей документує політичні репресії, терор та історії людей, які постраждали від окупаційних режимів.",
    sources: [
      {
        title: "lonckoho.lviv.ua",
        url: "https://lonckoho.lviv.ua/"
      }
    ]
  },
  {
    id: 1050,
    name: "Національний музей історії України у Другій світовій війні",
    type: "museum",
    subtype: "Музейний меморіальний комплекс",
    category: "tragedies",
    person: null,
    city: "Київ",
    country: "Україна",
    lat: 50.426858,
    lng: 30.563697,
    year: 1974,
    eraYear: 1974,
    eraYearEnd: 1981,
    eventDate: "1974 рік — заснування; 1981 рік — відкриття комплексу на сучасному місці",
    description: "Масштабний музейний комплекс, присвячений історії України у Другій світовій війні та сучасній боротьбі за незалежність.",
    history: "Музей заснували у 1974 році. У 1981 році він почав працювати на території сучасного меморіального комплексу. Його центральним елементом стала монументальна скульптура «Батьківщина-мати». Сьогодні експозиції охоплюють не лише Другу світову війну, а й російсько-українську війну.",
    significance: "Комплекс зберігає матеріали про воєнну історію України, долі військових і цивільного населення та боротьбу за незалежність.",
    sources: [
      {
        title: "warmuseum.kyiv.ua",
        url: "https://warmuseum.kyiv.ua/"
      }
    ]
  },
  {
    id: 1051,
    name: "Національний меморіальний комплекс Героїв Небесної Сотні — Музей Революції Гідності",
    type: "memorial",
    subtype: "Меморіальний комплекс",
    category: "independence",
    person: "Герої Небесної Сотні",
    city: "Київ",
    country: "Україна",
    lat: 50.435594,
    lng: 30.554878,
    year: 2014,
    eraYear: 2013,
    eraYearEnd: 2014,
    eventDate: "Листопад 2013 — лютий 2014 року",
    description: "Меморіальний комплекс присвячений учасникам Революції Гідності та людям, які загинули під час протестів за свободу, гідність і європейське майбутнє України.",
    history: "Революція Гідності розпочалася в листопаді 2013 року після відмови української влади підписати Угоду про асоціацію з Європейським Союзом. Найкривавіші події відбулися у лютому 2014 року. Під час протестів загинули учасники Майдану, яких згодом назвали Героями Небесної Сотні.",
    significance: "Комплекс зберігає пам'ять про боротьбу українців за демократичні права, свободу та незалежність.",
    sources: [
      {
        title: "maidanmuseum.org",
        url: "https://maidanmuseum.org/uk"
      }
    ]
  },
  {
    id: 1052,
    name: "Олеський замок",
    type: "castle",
    subtype: "Замок",
    category: "cossack",
    person: "Ян III Собеський",
    city: "Олесько, Львівська область",
    country: "Україна",
    lat: 49.9689,
    lng: 24.8983,
    year: 1327,
    eraYear: 1301,
    eraYearEnd: 1700,
    eventDate: "XIV–XVII століття",
    description: "Олеський замок — одна з найвідоміших середньовічних фортець Західної України. Розташований на пагорбі серед рівнинної місцевості.",
    history: "Перші письмові згадки про замок датуються 1327 роком. Фортеця неодноразово переходила між різними власниками та перебудовувалася. У 1629 році тут народився майбутній польський король Ян III Собеський. У XX столітті споруду відновили та пристосували для музейної діяльності.",
    significance: "Замок є важливою пам'яткою оборонної архітектури та історії Галичини.",
    images: [
      {
        url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c7/Olesko_Castle.jpg/1280px-Olesko_Castle.jpg",
        author: "Mykola Swarnyk",
        license: "CC BY-SA 3.0",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Olesko_Castle.jpg"
      }
    ],
    sources: [
      {
        title: "lvivgallery.org",
        url: "https://lvivgallery.org/"
      }
    ]
  },
  {
    id: 1053,
    name: "Підгорецький замок",
    type: "castle",
    subtype: "Палацово-оборонний комплекс",
    category: "cossack",
    person: "Станіслав Конєцпольський",
    city: "Підгірці, Львівська область",
    country: "Україна",
    lat: 49.9456,
    lng: 24.9817,
    year: 1635,
    eraYear: 1635,
    eraYearEnd: 1640,
    eventDate: "1635–1640 роки — основний період будівництва",
    description: "Величний палацово-оборонний комплекс, який поєднує ренесансну архітектуру з елементами бастіонних укріплень.",
    history: "Замок збудували за наказом коронного гетьмана Станіслава Конєцпольського. Проєкт пов'язують з архітекторами Андреа дель Аква та Гійомом де Бопланом. Комплекс мав розкішні інтер'єри, парк і систему оборонних укріплень. Протягом наступних століть він неодноразово змінював власників і зазнавав пошкоджень.",
    significance: "Підгорецький замок є одним із найяскравіших прикладів поєднання палацової та оборонної архітектури в Україні.",
    images: [
      {
        url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d9/Podhorce_-_Zamek_01A.jpg/1280px-Podhorce_-_Zamek_01A.jpg",
        author: "Lestat (Jan Mehlich)",
        license: "CC BY-SA 3.0",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Podhorce_-_Zamek_01A.jpg"
      }
    ],
    sources: [
      {
        title: "lvivgallery.org",
        url: "https://lvivgallery.org/"
      }
    ]
  },
  {
    id: 1054,
    name: "Свірзький замок",
    type: "castle",
    subtype: "Замок",
    category: "cossack",
    person: "Родина Свірзьких",
    city: "Свірж, Львівська область",
    country: "Україна",
    lat: 49.6509,
    lng: 24.4354,
    year: 1484,
    eraYear: 1401,
    eraYearEnd: 1700,
    eventDate: "XV–XVII століття",
    description: "Середньовічний замок, розташований на пагорбі біля озера. Відомий оборонними мурами, баштами та мальовничим архітектурним ансамблем.",
    history: "Перша відома письмова згадка про замок датується 1484 роком. У XVII столітті споруду значно перебудували та укріпили. Замок належав різним шляхетським родинам і використовувався як оборонна та житлова резиденція.",
    significance: "Свірзький замок демонструє розвиток фортифікаційної архітектури Галичини та поєднання оборонних і житлових функцій.",
    images: [
      {
        url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c9/46-233-0009_Svirzh_Castle_RB.jpg/1280px-46-233-0009_Svirzh_Castle_RB.jpg",
        author: "Rbrechko",
        license: "CC BY-SA 4.0",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:46-233-0009_Svirzh_Castle_RB.jpg"
      }
    ],
    sources: [
      {
        title: "castles.com.ua",
        url: "https://castles.com.ua/swirz.html"
      }
    ]
  },
  {
    id: 1055,
    name: "Замок Любарта",
    type: "castle",
    subtype: "Фортеця",
    category: "cossack",
    person: "Любарт Гедимінович",
    city: "Луцьк",
    country: "Україна",
    lat: 50.7392,
    lng: 25.3232,
    year: 1340,
    eraYear: 1301,
    eraYearEnd: 1400,
    eventDate: "XIV століття — основний період будівництва",
    description: "Середньовічна фортеця, одна з найвідоміших архітектурних пам'яток Волині. Відома також як Верхній замок Луцька.",
    history: "Будівництво мурованого замку пов'язане з князем Любартом Гедиміновичем. Фортеця стала важливим політичним та адміністративним центром Волинського князівства. До складу комплексу входять три основні вежі: В'їзна, Стирова та Владича.",
    significance: "Замок є одним із найкраще збережених середньовічних укріплень України та символом історії Луцька.",
    images: [
      {
        url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ae/Lutsk_Lubarts%27_Castle_02_%28YDS_5502%29.jpg/1280px-Lutsk_Lubarts%27_Castle_02_%28YDS_5502%29.jpg",
        author: "Nataliya Shestakova",
        license: "CC BY-SA 4.0",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Lutsk_Lubarts%27_Castle_02_(YDS_5502).jpg"
      }
    ],
    sources: [
      {
        title: "lutskrada.gov.ua",
        url: "https://www.lutskrada.gov.ua/"
      }
    ]
  },
  {
    id: 1056,
    name: "Цитадель Батуринської фортеці",
    type: "castle",
    subtype: "Цитадель фортеці",
    category: "cossack",
    person: "Іван Мазепа, Дем'ян Многогрішний, Іван Самойлович",
    city: "Батурин, Чернігівська область",
    country: "Україна",
    lat: 51.3338,
    lng: 32.8847,
    year: 1669,
    eraYear: 1708,
    eventDate: "1708 рік — Батуринська трагедія",
    description: "Відновлена цитадель Батуринської фортеці — історичний центр оборони та гетьманської влади.",
    history: "Батурин став гетьманською резиденцією у 1669 році. За часів Івана Мазепи місто було важливим політичним, економічним і військовим центром Гетьманщини. У листопаді 1708 року московські війська під командуванням Олександра Меншикова захопили та зруйнували Батурин, убивши значну частину його населення. Сучасну цитадель відтворили за результатами археологічних досліджень.",
    significance: "Пам'ятка символізує боротьбу Гетьманщини за політичну самостійність та трагічні події 1708 року.",
    images: [
      {
        url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/be/%D0%90%D1%80%D1%85%D1%96%D1%82%D0%B5%D0%BA%D1%82%D1%83%D1%80%D0%BD%D0%BE-%D0%BC%D0%B5%D0%BC%D0%BE%D1%80%D1%96%D0%B0%D0%BB%D1%8C%D0%BD%D0%B8%D0%B9_%D0%BA%D0%BE%D0%BC%D0%BF%D0%BB%D0%B5%D0%BA%D1%81_%D0%A6%D0%B8%D1%82%D0%B0%D0%B4%D0%B5%D0%BB%D1%8C.jpg/1280px-%D0%90%D1%80%D1%85%D1%96%D1%82%D0%B5%D0%BA%D1%82%D1%83%D1%80%D0%BD%D0%BE-%D0%BC%D0%B5%D0%BC%D0%BE%D1%80%D1%96%D0%B0%D0%BB%D1%8C%D0%BD%D0%B8%D0%B9_%D0%BA%D0%BE%D0%BC%D0%BF%D0%BB%D0%B5%D0%BA%D1%81_%D0%A6%D0%B8%D1%82%D0%B0%D0%B4%D0%B5%D0%BB%D1%8C.jpg",
        author: "NSayenko",
        license: "CC BY-SA 4.0",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:%D0%90%D1%80%D1%85%D1%96%D1%82%D0%B5%D0%BA%D1%82%D1%83%D1%80%D0%BD%D0%BE-%D0%BC%D0%B5%D0%BC%D0%BE%D1%80%D1%96%D0%B0%D0%BB%D1%8C%D0%BD%D0%B8%D0%B9_%D0%BA%D0%BE%D0%BC%D0%BF%D0%BB%D0%B5%D0%BA%D1%81_%D0%A6%D0%B8%D1%82%D0%B0%D0%B4%D0%B5%D0%BB%D1%8C.jpg"
      }
    ],
    sources: [
      {
        title: "baturin-capital.gov.ua",
        url: "https://baturin-capital.gov.ua/"
      }
    ]
  },
  {
    id: 1057,
    name: "Іллінська церква в Суботові",
    type: "building",
    subtype: "Церква",
    category: "cossack",
    person: "Богдан Хмельницький",
    city: "Суботів, Черкаська область",
    country: "Україна",
    lat: 49.1445,
    lng: 32.5787,
    year: 1656,
    eraYear: 1650,
    eventDate: "1650-ті роки — спорудження церкви",
    description: "Кам'яна церква XVII століття, пов'язана з родиною Богдана Хмельницького. Вважається місцем його поховання.",
    history: "Іллінську церкву спорудили в середині XVII століття за часів Богдана Хмельницького. Вона була частиною його родинного маєтку в Суботові. Після смерті гетьмана у 1657 році його поховали в цій церкві. Згодом могила зазнала історичних потрясінь, а точне місце останків Хмельницького залишається предметом дискусій.",
    significance: "Одна з найважливіших пам'яток козацької доби та української сакральної архітектури.",
    images: [
      {
        url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/62/%D0%86%D0%BB%D0%BB%D1%96%D0%BD%D1%81%D1%8C%D0%BA%D0%B0_%D1%86%D0%B5%D1%80%D0%BA%D0%B2%D0%B0_%D1%96%D0%B7_%D0%B4%D0%B7%D0%B2%D1%96%D0%BD%D0%B8%D1%86%D0%B5%D1%8E%2C_%D0%A1%D1%83%D0%B1%D0%BE%D1%82%D1%96%D0%B2.jpg/1280px-%D0%86%D0%BB%D0%BB%D1%96%D0%BD%D1%81%D1%8C%D0%BA%D0%B0_%D1%86%D0%B5%D1%80%D0%BA%D0%B2%D0%B0_%D1%96%D0%B7_%D0%B4%D0%B7%D0%B2%D1%96%D0%BD%D0%B8%D1%86%D0%B5%D1%8E%2C_%D0%A1%D1%83%D0%B1%D0%BE%D1%82%D1%96%D0%B2.jpg",
        author: "Kiyanka",
        license: "CC BY-SA 4.0",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:%D0%86%D0%BB%D0%BB%D1%96%D0%BD%D1%81%D1%8C%D0%BA%D0%B0_%D1%86%D0%B5%D1%80%D0%BA%D0%B2%D0%B0_%D1%96%D0%B7_%D0%B4%D0%B7%D0%B2%D1%96%D0%BD%D0%B8%D1%86%D0%B5%D1%8E,_%D0%A1%D1%83%D0%B1%D0%BE%D1%82%D1%96%D0%B2.jpg"
      }
    ],
    sources: [
      {
        title: "chigirinzapovidnyk.org.ua",
        url: "https://chigirinzapovidnyk.org.ua/"
      }
    ]
  },
  {
    id: 1058,
    name: "Замкова гора Богдана Хмельницького",
    type: "archaeological",
    subtype: "Городище, замчище",
    category: "cossack",
    person: "Богдан Хмельницький",
    city: "Чигирин, Черкаська область",
    country: "Україна",
    lat: 49.0789,
    lng: 32.661,
    year: 1590,
    eraYear: 1601,
    eraYearEnd: 1700,
    eventDate: "XVII століття — розквіт Чигирина як гетьманської резиденції",
    description: "Історична височина в центрі Чигирина, на якій розташовувалися укріплення та резиденція гетьмана Богдана Хмельницького.",
    history: "Чигирин був важливим адміністративним і військовим центром ще до Національно-визвольної війни. За Богдана Хмельницького місто стало гетьманською резиденцією та одним із головних політичних центрів козацької держави. На Замковій горі розташовувалися оборонні споруди, які відігравали важливу роль у захисті міста.",
    significance: "Замкова гора є одним із головних символів формування української козацької державності.",
    images: [
      {
        url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9a/Zamkova_gora_Cherk-517.jpg/1280px-Zamkova_gora_Cherk-517.jpg",
        author: "Сергій Криниця (Haidamac)",
        license: "CC BY-SA 3.0",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Zamkova_gora_Cherk-517.jpg"
      }
    ],
    sources: [
      {
        title: "chigirinzapovidnyk.org.ua",
        url: "https://chigirinzapovidnyk.org.ua/"
      }
    ]
  },
  {
    id: 1059,
    name: "Палац гетьмана Кирила Розумовського",
    type: "building",
    subtype: "Палац",
    category: "cossack",
    person: "Кирило Розумовський",
    city: "Батурин, Чернігівська область",
    country: "Україна",
    lat: 51.3326,
    lng: 32.8917,
    year: 1799,
    eraYear: 1799,
    eraYearEnd: 1803,
    eventDate: "1799–1803 роки — будівництво",
    description: "Розкішний палац останнього гетьмана Війська Запорозького Кирила Розумовського, створений у стилі класицизму.",
    history: "Палац спорудили наприкінці XVIII — на початку XIX століття за проєктом шотландського архітектора Чарльза Камерона. Він був частиною великого садибного комплексу в Батурині. Кирило Розумовський планував зробити місто своєю резиденцією. Після тривалого занепаду палац відреставрували та відкрили для відвідувачів у 2009 році.",
    significance: "Палац є важливим свідченням європейських культурних впливів та архітектурних амбіцій останнього українського гетьмана.",
    images: [
      {
        url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/30/%D0%9F%D0%B0%D0%BB%D0%B0%D1%86_%D0%9A._%D0%A0%D0%BE%D0%B7%D1%83%D0%BC%D0%BE%D0%B2%D1%81%D1%8C%D0%BA%D0%BE%D0%B3%D0%BE.jpg/1280px-%D0%9F%D0%B0%D0%BB%D0%B0%D1%86_%D0%9A._%D0%A0%D0%BE%D0%B7%D1%83%D0%BC%D0%BE%D0%B2%D1%81%D1%8C%D0%BA%D0%BE%D0%B3%D0%BE.jpg",
        author: "NSayenko",
        license: "CC BY-SA 4.0",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:%D0%9F%D0%B0%D0%BB%D0%B0%D1%86_%D0%9A._%D0%A0%D0%BE%D0%B7%D1%83%D0%BC%D0%BE%D0%B2%D1%81%D1%8C%D0%BA%D0%BE%D0%B3%D0%BE.jpg"
      }
    ],
    sources: [
      {
        title: "baturin-capital.gov.ua",
        url: "https://baturin-capital.gov.ua/"
      }
    ]
  },
  {
    id: 1060,
    name: "Меморіальний комплекс «Гурби»",
    type: "memorial",
    subtype: "Меморіальний комплекс",
    category: "independence",
    person: "Петро Олійник («Еней»), Василь Кук",
    city: "Урочище Гурби, Рівненська область",
    country: "Україна",
    lat: 50.273542,
    lng: 26.126033,
    year: 1944,
    eraYear: 1944,
    eventDate: "21–25 квітня 1944 року",
    description: "Меморіальний комплекс на місці масштабного бою між підрозділами Української повстанської армії та військами НКВС.",
    history: "У квітні 1944 року в районі урочища Гурби відбулися запеклі бої між повстанськими підрозділами та радянськими внутрішніми військами. Повстанці опинилися в оточенні й намагалися прорватися з нього. Згодом тут створили Пантеон слави героїв Гурбенського бою, встановили меморіальну колону, каплицю та пам'ятний хрест.",
    significance: "Одне з найважливіших місць вшанування учасників українського повстанського руху.",
    sources: [
      {
        title: "horyn.info",
        url: "https://horyn.info/memorialnyj-kompleks-na-misczi-gurbenskogo-boyu/"
      }
    ]
  },
  {
    id: 1061,
    name: "Музей визвольних змагань Карпатського краю",
    type: "museum",
    subtype: "Історичний музей",
    category: "independence",
    person: "Учасники ОУН та УПА",
    city: "Косів, Івано-Франківська область",
    country: "Україна",
    lat: 48.31985,
    lng: 25.09211,
    year: null,
    eraYear: 1930,
    eraYearEnd: 1950,
    eventDate: "1930–1950-ті роки — основний історичний період експозиції",
    description: "Музей, присвячений історії національно-визвольного руху на Прикарпатті та участі місцевого населення в боротьбі за незалежність України.",
    history: "Експозиція розповідає про створення ОУН та УПА, діяльність підпільних організацій, медичну й пропагандистську служби повстанців, репресії радянської влади та долі місцевих учасників визвольного руху. У музеї також відтворено інтер'єр підпільної криївки.",
    significance: "Зберігає регіональну історію визвольного руху та свідчення про людей, які брали в ньому участь.",
    sources: [
      {
        title: "karpaty.info",
        url: "https://www.karpaty.info/ua/uk/if/ks/kosiv/museums/upa/"
      }
    ]
  },
  {
    id: 1062,
    name: "Криївка-музей УПА",
    type: "museum",
    subtype: "Музей-криївка",
    category: "independence",
    person: "Учасники Української повстанської армії",
    city: "Верховина, Івано-Франківська область",
    country: "Україна",
    lat: 48.15615,
    lng: 24.82572,
    year: 2021,
    eraYear: 2021,
    eventDate: "2021 рік — відкриття музею",
    description: "Незвичайний музей, облаштований у підвальному приміщенні старовинного будинку. Відтворює побут і умови життя українських повстанців.",
    history: "Музей створили в підвалі Меморіального музею Петра Шекерика-Дониківа. До експозиції входять реконструйовані підпільні приміщення, документи, фотографії, одяг та предмети повсякденного використання. Потрапити всередину можна через спеціально облаштований прихований вхід.",
    significance: "Дозволяє дослідити побут, конспірацію та повсякденне життя учасників підпілля.",
    sources: [
      {
        title: "travels.in.ua",
        url: "https://travels.in.ua/ru-/object/4645/kryyivka-muzey-upa"
      }
    ]
  },
  {
    id: 1063,
    name: "Музей підпільного штабу УПА Романа Шухевича",
    type: "museum",
    subtype: "Історичний музей",
    category: "independence",
    person: "Роман Шухевич, Дарія Гусак",
    city: "Грімне, Львівська область",
    country: "Україна",
    lat: 49.597652,
    lng: 23.767912,
    year: 1946,
    eraYear: 1946,
    eventDate: "1946 рік — перебування підпільного штабу",
    description: "Музей, присвячений діяльності підпільного штабу УПА та мережі ОУН у селі Грімне.",
    history: "У підвалі будинку священника облаштували підпільний штаб, пов'язаний із діяльністю Романа Шухевича. Невелике приміщення використовували для конспіративної роботи. Сьогодні музейна експозиція містить матеріали про діяльність підпільників, зв'язкових та місцевої мережі ОУН.",
    significance: "Є свідченням існування розгалуженої підпільної інфраструктури українського визвольного руху.",
    sources: [
      {
        title: "maps.visicom.ua",
        url: "https://maps.visicom.ua/i/POIFQO707E"
      }
    ]
  },
  {
    id: 1065,
    name: "Березанське античне поселення (Борисфеніда)",
    type: "archaeological",
    category: "ancient",
    person: "Давньогрецькі колоністи",
    city: "Острів Березань, Миколаївська область",
    country: "Україна",
    lat: 46.595026,
    lng: 31.412906,
    year: -647,
    eraYear: -700,
    eraYearEnd: 300,
    eventDate: "Друга половина VII століття до н. е. — III століття н. е.",
    description: "Залишки одного з найдавніших давньогрецьких поселень на території сучасної України. Античне поселення відоме під назвою Борисфеніда.",
    history: "Поселення заснували вихідці з Мілета у другій половині VII століття до н. е. Спочатку воно було важливим політичним і торговельним центром регіону, а пізніше увійшло до сфери впливу Ольвійського поліса. Археологи виявили залишки житлових споруд, господарських ям, майстерень, кераміки та поховань. На острові також знайдено сліди середньовічного слов'янського поселення.",
    significance: "Березанське поселення має виняткове значення для дослідження початкового етапу грецької колонізації Північного Причорномор'я.",
    sources: [
      {
        title: "esu.com.ua",
        url: "https://esu.com.ua/article-39295"
      }
    ]
  },
  {
    id: 1066,
    name: "Скіфський царський курган Чортомлик",
    type: "archaeological",
    subtype: "Курган",
    category: "ancient",
    person: "Скіфська знать",
    city: "Поблизу села Чкалове, Дніпропетровська область",
    country: "Україна",
    lat: 47.923,
    lng: 34.43,
    year: -350,
    eraYear: -400,
    eraYearEnd: -301,
    eventDate: "IV століття до н. е.; археологічні розкопки 1862–1863 років",
    description: "Один із найбільших царських курганів скіфського часу. Був місцем поховання представника скіфської знаті.",
    history: "Курган досліджував археолог Іван Забєлін у 1862–1863 роках. Під час розкопок було знайдено поховальні камери та численні предмети матеріальної культури, зокрема зброю, прикраси й вироби з дорогоцінних металів. У 1970–1980-х роках археологічні дослідження продовжили українські та німецькі науковці.",
    significance: "Чортомлик є однією з найважливіших пам'яток для вивчення поховальних традицій, мистецтва та суспільного устрою скіфів.",
    sources: [
      {
        title: "history.org.ua",
        url: "https://www.history.org.ua/?termin=Chortomlyk_kurhan"
      }
    ]
  },
  {
    id: 1068,
    name: "Дніпровська гідроелектростанція (ДніпроГЕС)",
    type: "industrial",
    subtype: "Гідроелектростанція",
    category: "science",
    person: "Олександр Вінтер",
    city: "Запоріжжя",
    country: "Україна",
    lat: 47.8665,
    lng: 35.0865,
    year: 1932,
    eraYear: 1927,
    eraYearEnd: 1932,
    eventDate: "1927–1932 роки — будівництво; 1932 рік — введення в експлуатацію",
    description: "Масштабний гідроенергетичний комплекс на річці Дніпро, який став символом індустріалізації та розвитку енергетики України.",
    history: "Будівництво Дніпровської ГЕС розпочалося у 1927 році. Проєкт передбачав створення великої греблі та електростанції, яка мала забезпечувати електроенергією промислові підприємства регіону. Перші агрегати запрацювали у 1932 році. У 1941 році греблю підірвали під час відступу радянських військ, що спричинило масштабну катастрофу. Після Другої світової війни станцію відновили. У наступні десятиліття комплекс розширили.",
    significance: "ДніпроГЕС стала однією з ключових споруд української енергетичної інфраструктури та важливим об'єктом історії інженерії.",
    images: [
      {
        url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3e/%D0%94%D0%BD%D1%96%D0%BF%D1%80%D0%BE%D0%B3%D0%B5%D1%81_%D0%B7_%D0%B2%D0%B8%D1%81%D0%BE%D1%82%D0%B8.jpg/1280px-%D0%94%D0%BD%D1%96%D0%BF%D1%80%D0%BE%D0%B3%D0%B5%D1%81_%D0%B7_%D0%B2%D0%B8%D1%81%D0%BE%D1%82%D0%B8.jpg",
        author: "Anatoliy Volkov",
        license: "CC BY-SA 4.0",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:%D0%94%D0%BD%D1%96%D0%BF%D1%80%D0%BE%D0%B3%D0%B5%D1%81_%D0%B7_%D0%B2%D0%B8%D1%81%D0%BE%D1%82%D0%B8.jpg"
      }
    ],
    sources: [
      {
        title: "uhe.gov.ua",
        url: "https://www.uhe.gov.ua/media_tsentr/novyny/istoriya-dniprovskoi-ges-proektuvannya-budivnictvo-vidnovlennya-ta-sogodennya"
      }
    ]
  },
  {
    id: 1069,
    name: "Соляні шахти Соледара",
    type: "industrial",
    subtype: "Соляні шахти",
    category: "science",
    person: null,
    city: "Соледар, Донецька область",
    country: "Україна",
    lat: 48.692703,
    lng: 38.060868,
    year: 1881,
    eraYear: 1881,
    eventDate: "1881 рік — початок промислового освоєння",
    description: "Величезна система підземних виробок, створена внаслідок промислового видобутку кам'яної солі. Шахти стали основою розвитку міста Соледар.",
    history: "Промислове освоєння соляних родовищ розпочалося у 1881 році. Протягом наступних десятиліть під землею утворилася розгалужена система тунелів і камер. У шахтах облаштовували підземні зали, проводили екскурсії та культурні заходи. Після початку повномасштабного вторгнення Росії місто стало ареною важких бойових дій, а шахтна інфраструктура зазнала руйнувань.",
    significance: "Шахти є важливою частиною історії української гірничої промисловості та промислового розвитку Донбасу.",
    images: [
      {
        url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5b/Soledar_salt_mine_%28Sep_2020%29_9.jpg/1280px-Soledar_salt_mine_%28Sep_2020%29_9.jpg",
        author: "Visem",
        license: "CC BY-SA 4.0",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Soledar_salt_mine_(Sep_2020)_9.jpg"
      }
    ],
    sources: [
      {
        title: "soledar.saltway.in.ua",
        url: "https://soledar.saltway.in.ua/"
      }
    ]
  },
  {
    id: 1070,
    name: "Історичний комплекс заводу «Арсенал»",
    type: "industrial",
    subtype: "Завод",
    category: "science",
    person: null,
    city: "Київ",
    country: "Україна",
    lat: 50.4388,
    lng: 30.546,
    year: 1764,
    eraYear: 1750,
    eraYearEnd: 1764,
    eventDate: "1750 рік — рішення про створення арсеналу; 1764 рік — початок роботи підприємства",
    description: "Історичний комплекс одного з найстаріших військово-промислових підприємств Києва. Тут виготовляли та ремонтували артилерійське озброєння й військове спорядження.",
    history: "У 1750 році було ухвалено рішення про створення київського арсеналу. Перша тимчасова дерев'яна будівля з'явилася у 1763 році, а промислове підприємство почало діяти у 1764 році. У наступні десятиліття комплекс розширювали, зводили кам'яні виробничі корпуси та майстерні. У січні 1918 року робітники підприємства брали участь у збройному повстанні проти Української Центральної Ради. На частині старих будівель збереглися сліди від куль і снарядів.",
    significance: "Комплекс поєднує історію військового виробництва, архітектури Києва та драматичних подій Української революції.",
    images: [
      {
        url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/53/Arsenal_Factory%2C_Kyiv_%2852672804299%29.jpg/1280px-Arsenal_Factory%2C_Kyiv_%2852672804299%29.jpg",
        author: "Svvyatoslav Igorevich",
        license: "CC0",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Arsenal_Factory,_Kyiv_(52672804299).jpg"
      }
    ],
    sources: [
      {
        title: "pamyatky.kiev.ua",
        url: "https://www.pamyatky.kiev.ua/streets/moskovska-vul/a-arsenal-zavod"
      }
    ]
  },
  {
    id: 1071,
    name: "Головний залізничний вокзал Львова",
    type: "building",
    subtype: "Залізничний вокзал",
    category: "science",
    person: "Владислав Садловський, Іван Левинський",
    city: "Львів",
    country: "Україна",
    lat: 49.8409,
    lng: 23.9511,
    year: 1904,
    eraYear: 1861,
    eraYearEnd: 1904,
    eventDate: "4 листопада 1861 року — прибуття першого поїзда; 1904 рік — відкриття сучасної будівлі",
    description: "Один із найвідоміших залізничних вокзалів України, який став важливим транспортним вузлом між українськими землями та Центральною Європою.",
    history: "Перший поїзд прибув до Львова з Перемишля 4 листопада 1861 року. Це стало початком історії регулярного залізничного сполучення на території сучасної України. Сучасну будівлю вокзалу спорудили у 1899–1904 роках за проєктом Владислава Садловського. Будівельними роботами займалася фірма Івана Левинського. Споруда поєднала інженерні рішення того часу з архітектурою модерну.",
    significance: "Вокзал є важливою пам'яткою транспортної інфраструктури та символом інтеграції українських земель у європейську залізничну мережу.",
    images: [
      {
        url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cb/Lviv_railway_station2.png/1280px-Lviv_railway_station2.png",
        author: "Юрій Коберник",
        license: "CC BY 4.0",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Lviv_railway_station2.png"
      }
    ],
    sources: [
      {
        title: "lviv.travel",
        url: "https://lviv.travel/ua/places/attractions/lvivskii-zaliznichnii-vokzal"
      }
    ]
  },
  {
    id: 1072,
    name: "Національна опера України",
    type: "theatre",
    subtype: "Оперний театр",
    category: "music_theatre",
    person: "Микола Лисенко, українські композитори та виконавці",
    city: "Київ",
    region: "Київська область",
    country: "Україна",
    lat: 50.44662,
    lng: 30.51278,
    year: 1901,
    eraYear: 1901,
    description: "Національна опера України — одна з найважливіших оперних сцен країни. Її історія почалася 1867 року з відкриття постійної оперної трупи в Києві. Сучасну будівлю театру урочисто відкрили 29 вересня 1901 року.",
    history: "Першою виставою в новій будівлі стала опера Михайла Глінки «Життя за царя». До цього київська оперна трупа виступала в іншому міському театрі, який згодом згорів. Нова споруда була зведена за проєктом архітектора Віктора Шретера. Театр став важливим центром українського та європейського музичного життя.",
    significance: "Будівля є видатною архітектурною пам'яткою Києва та одним із головних осередків оперного і балетного мистецтва України.",
    sources: [
      {
        title: "opera.com.ua",
        url: "https://www.opera.com.ua/about/perlina-arhitekturi"
      }
    ]
  },
  {
    id: 1073,
    name: "Львівський національний академічний театр опери та балету імені Соломії Крушельницької",
    type: "theatre",
    subtype: "Оперний театр",
    category: "music_theatre",
    person: "Соломія Крушельницька",
    city: "Львів",
    region: "Львівська область",
    country: "Україна",
    lat: 49.843973,
    lng: 24.026205,
    year: 1900,
    eraYear: 1872,
    eraYearEnd: 1952,
    description: "Львівська опера — одна з найвідоміших архітектурних і культурних пам'яток Львова. Театр відкрився 4 жовтня 1900 року як Великий міський театр. Сучасну назву він носить на честь видатної української оперної співачки Соломії Крушельницької.",
    history: "Будівництво театру розпочалося в червні 1897 року за проєктом архітектора Зигмунта Горголевського. Споруду звели в стилі неоренесансу з елементами необароко. Від самого початку театр став важливим місцем культурного життя Львова, де виступали українські та європейські артисти.",
    significance: "Театр є однією з головних культурних візитівок Львова та важливим осередком розвитку українського оперного і балетного мистецтва.",
    sources: [
      {
        title: "opera.lviv.ua",
        url: "https://opera.lviv.ua/urodyny-lvivskoyi-opery/"
      },
      {
        title: "Вікіпедія: Крушельницька Соломія Амвросіївна",
        url: "https://uk.wikipedia.org/wiki/Крушельницька_Соломія_Амвросіївна"
      }
    ]
  },
  {
    id: 1074,
    name: "Національний академічний драматичний театр імені Івана Франка",
    type: "theatre",
    subtype: "Драматичний театр",
    category: "music_theatre",
    person: "Іван Франко, Лесь Курбас, Гнат Юра",
    city: "Київ",
    region: "Київська область",
    country: "Україна",
    lat: 50.445513,
    lng: 30.528415,
    year: 1920,
    eraYear: 1920,
    description: "Театр імені Івана Франка — один із провідних драматичних театрів України. Його історія почалася 1920 року у Вінниці. У 1926 році колектив переїхав до Києва, де отримав постійне приміщення на площі Івана Франка.",
    history: "Першим керівником театру був Гнат Юра. У різні періоди з театром були пов'язані видатні українські актори, режисери та драматурги. Київська будівля театру була споруджена 1898 року для театру «Соловцов». У 1924–1926 роках у цьому приміщенні також працював театр «Березіль» Леся Курбаса.",
    significance: "Театр став одним із важливих центрів українського драматичного мистецтва та зберігає традиції національної театральної школи.",
    sources: [
      {
        title: "esu.com.ua",
        url: "https://esu.com.ua/article-70804"
      }
    ]
  },
  {
    id: 1075,
    name: "Харківський національний академічний театр опери та балету імені Миколи Лисенка",
    type: "theatre",
    subtype: "Оперний театр",
    category: "music_theatre",
    person: "Микола Лисенко",
    city: "Харків",
    region: "Харківська область",
    country: "Україна",
    lat: 49.999224,
    lng: 36.232167,
    year: 1925,
    eraYear: 1842,
    eraYearEnd: 1912,
    description: "Харківський театр опери та балету — один із найстаріших музичних театрів України. Музичні вистави в Харкові відбувалися ще наприкінці XVIII століття. У 1925 році тут було створено першу в Україні державну оперу.",
    history: "У 1870-х роках у Харкові почалися регулярні стаціонарні оперні сезони. У 1883 році тут відбулася постановка опери Миколи Лисенка «Різдвяна ніч», а згодом — «Утопленої». У 1925 році театр отримав статус державної столичної опери. Сучасна будівля на вулиці Сумській стала його домівкою на початку 1990-х років.",
    significance: "Театр відіграв важливу роль у становленні української опери та популяризації творів українських композиторів. Його історія пов'язана з розвитком музичного мистецтва Слобожанщини.",
    sources: [
      {
        title: "kharkivopera.com.ua",
        url: "https://kharkivopera.com.ua/pro-nas/"
      },
      {
        title: "Вікіпедія: Лисенко Микола Віталійович",
        url: "https://uk.wikipedia.org/wiki/Лисенко_Микола_Віталійович"
      }
    ]
  },
  {
    id: 1076,
    name: "Меморіальний будинок-музей Миколи Лисенка",
    type: "museum",
    subtype: "Меморіальний музей",
    category: "music_theatre",
    person: "Микола Лисенко",
    city: "Київ",
    region: "Київська область",
    country: "Україна",
    lat: 50.43953,
    lng: 30.5008,
    year: 1980,
    eraYear: 1842,
    eraYearEnd: 1912,
    description: "Музей розташований у будинку на вулиці Саксаганського, де видатний український композитор Микола Лисенко проживав із 1894 року до своєї смерті у 1912 році. Експозиція знайомить із його життям, творчістю та внеском у розвиток української музики.",
    history: "Микола Лисенко мешкав у цьому будинку разом із родиною, орендуючи другий поверх. Тут він працював над багатьма музичними творами, приймав українських митців і громадських діячів. Після його смерті виникла ідея створення меморіального музею. У 1980 році музей відкрили для відвідувачів. У його приміщеннях відтворено меморіальні кімнати композитора, зберігаються особисті речі, архіви та музичні інструменти.",
    significance: "Музей зберігає пам'ять про засновника української національної композиторської школи, який зробив величезний внесок у розвиток опери, хорової та інструментальної музики.",
    images: [
      {
        url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9f/Kyiv%2C_Saksaganskogo_str.%2C_95.JPG/1280px-Kyiv%2C_Saksaganskogo_str.%2C_95.JPG",
        author: "Xsandriel",
        license: "CC BY-SA 3.0",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Kyiv,_Saksaganskogo_str.,_95.JPG"
      }
    ],
    sources: [
      {
        title: "guide.kyivcity.gov.ua",
        url: "https://guide.kyivcity.gov.ua/muzey-diachiv/index.html"
      },
      {
        title: "mvduk.com.ua",
        url: "https://mvduk.com.ua/"
      },
      {
        title: "Вікіпедія: Лисенко Микола Віталійович",
        url: "https://uk.wikipedia.org/wiki/Лисенко_Микола_Віталійович"
      }
    ]
  },
  {
    id: 1077,
    name: "Музично-меморіальний музей Соломії Крушельницької",
    type: "museum",
    subtype: "Меморіальний музей",
    category: "music_theatre",
    person: "Соломія Крушельницька",
    city: "Львів",
    region: "Львівська область",
    country: "Україна",
    lat: 49.83669,
    lng: 24.01992,
    year: 1989,
    eraYear: 1872,
    eraYearEnd: 1952,
    description: "Музей присвячений життю та творчості Соломії Крушельницької — однієї з найвидатніших українських оперних співачок. Він розташований у будинку, який співачка придбала у Львові в 1903 році.",
    history: "У цьому будинку Соломія Крушельницька провела останні роки свого життя. Після повернення до Львова у 1939 році вона продовжувала викладати вокал і підтримувати музичне життя міста. Після її смерті у 1952 році будинок зберіг меморіальне значення. У 1989 році тут відкрили музей. Його експозиція розповідає про міжнародну кар'єру співачки, її виступи на провідних оперних сценах світу та особисте життя.",
    significance: "Музей увічнює пам'ять про українську співачку світового рівня, яка виступала на найвідоміших оперних сценах Європи та Америки й прославила українську вокальну школу.",
    images: [
      {
        url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/76/Musicmuseumlviv2.jpg/1280px-Musicmuseumlviv2.jpg",
        author: "Георг Фридрих Зандерлинг",
        license: "CC BY-SA 4.0",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Musicmuseumlviv2.jpg"
      }
    ],
    sources: [
      {
        title: "lviv.travel",
        url: "https://lviv.travel/ua/places/museums/muzichno-memorialnii-muzei-solomiyi-krushelnitskoyi"
      },
      {
        title: "lvivmusic.museum",
        url: "https://www.lvivmusic.museum/"
      },
      {
        title: "Вікіпедія: Крушельницька Соломія Амвросіївна",
        url: "https://uk.wikipedia.org/wiki/Крушельницька_Соломія_Амвросіївна"
      }
    ]
  },
  {
    id: 1078,
    name: "Музей Миколи Леонтовича",
    type: "museum",
    subtype: "Меморіальний музей",
    category: "music_theatre",
    person: "Микола Леонтович",
    city: "Марківка",
    region: "Вінницька область",
    country: "Україна",
    lat: 48.722325,
    lng: 29.688621,
    year: 2016,
    eraYear: 1877,
    eraYearEnd: 1921,
    description: "Музей у селі Марківка присвячений українському композитору, хоровому диригенту та фольклористу Миколі Леонтовичу. Він відомий передусім завдяки хоровій обробці української народної пісні «Щедрик», яка стала всесвітньо відомою як Carol of the Bells.",
    history: "22 серпня 2016 року в Марківці відкрили нову музейну експозицію — філію Вінницького обласного краєзнавчого музею. Вона присвячена життю, творчості та педагогічній діяльності Леонтовича. Композитор працював із народними мелодіями, створював хорові твори та зробив вагомий внесок у розвиток української музичної культури.",
    significance: "Музей зберігає пам'ять про автора музичної обробки «Щедрика» — одного з найвідоміших українських музичних творів у світі.",
    sources: [
      {
        title: "museum.vinnytsia.ua",
        url: "https://museum.vinnytsia.ua/branches/leontovych-museum"
      },
      {
        title: "Вікіпедія: Леонтович Микола Дмитрович",
        url: "https://uk.wikipedia.org/wiki/Леонтович_Микола_Дмитрович"
      }
    ]
  },
  {
    id: 1079,
    name: "Будівля колишнього Харківського оперного театру на Римарській",
    type: "theatre",
    subtype: "Історична будівля театру",
    category: "music_theatre",
    person: "Історія української та харківської оперної сцени",
    city: "Харків",
    region: "Харківська область",
    country: "Україна",
    lat: 49.997723,
    lng: 36.230629,
    year: 1829,
    eraYear: 1829,
    description: "Історична будівля на вулиці Римарській, 21 у Харкові пов'язана з раннім розвитком міської оперної сцени. У XIX столітті тут діяв Комерційний клуб, а згодом приміщення було перебудоване для театральних та оперних вистав.",
    history: "Будівлю спорудили 1829 року. У 1850-х роках її пристосували для проведення вистав, а в 1884–1885 роках капітально реконструювали для потреб оперного театру за проєктом архітектора Б. Михаловського. Тут відбувалися оперні постановки та виступи відомих артистів. У 1991 році Харківський театр опери та балету остаточно перейшов до нового приміщення на вулиці Сумській. Історична будівля на Римарській згодом стала домівкою Харківської обласної філармонії.",
    significance: "Це важливе місце в історії музичного життя Харкова, пов'язане зі становленням професійної опери та розвитком міської концертної культури.",
    images: [
      {
        url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/80/Kharkiv_Rymarska_21_Opera_SAM_9266_63-101-0540.JPG/1280px-Kharkiv_Rymarska_21_Opera_SAM_9266_63-101-0540.JPG",
        author: "Сергій Криниця (Haidamac)",
        license: "CC BY-SA 3.0",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Kharkiv_Rymarska_21_Opera_SAM_9266_63-101-0540.JPG"
      }
    ],
    sources: [
      {
        title: "sq.com.ua",
        url: "https://www.sq.com.ua/ukr/news/kultura/02.03.2010/v_harkovskom_teatre_opery_i_baleta_otkroyut_muzej"
      }
    ]
  },
  {
    id: 1953,
    name: "Музей-квартира Миколи Леонтовича",
    type: "museum",
    subtype: "Меморіальний музей",
    category: "music_theatre",
    person: "Микола Леонтович",
    city: "Тульчин",
    region: "Вінницька область",
    country: "Україна",
    lat: 48.676588,
    lng: 28.872778,
    year: 1977,
    eraYear: 1877,
    eraYearEnd: 1921,
    description: "Музей присвячений Миколі Леонтовичу — українському композитору, хоровому диригенту та автору всесвітньо відомої обробки народної пісні «Щедрик».",
    history: "Тульчинський період був важливим етапом життя композитора. Леонтович працював тут учителем співу в єпархіальному училищі, керував хорами та продовжував створювати музичні твори. Музей-квартиру відкрили 1977 року до сторіччя від дня народження композитора. Експозиція розповідає про його педагогічну діяльність, творчість і зв'язок із Поділлям.",
    significance: "Леонтович зробив значний внесок у розвиток української хорової музики. Його обробка «Щедрика» стала основою всесвітньо відомої композиції Carol of the Bells.",
    sources: [
      {
        title: "museum.vinnytsia.ua",
        url: "https://museum.vinnytsia.ua/branches/leontovych-museum"
      },
      {
        title: "Вікіпедія: Леонтович Микола Дмитрович",
        url: "https://uk.wikipedia.org/wiki/Леонтович_Микола_Дмитрович"
      }
    ]
  },
  {
    id: 1954,
    name: "Історична будівля театру «Березіль»",
    type: "theatre",
    subtype: "Історична будівля театру",
    category: "music_theatre",
    person: "Лесь Курбас, Микола Куліш, Вадим Меллер",
    city: "Харків",
    region: "Харківська область",
    country: "Україна",
    lat: 49.994982,
    lng: 36.231686,
    year: 1926,
    eraYear: 1926,
    description: "Будівля на вулиці Сумській, 9, у якій працював український театр «Березіль» під керівництвом режисера Леся Курбаса. Це один із найважливіших осередків українського театрального авангарду XX століття.",
    history: "Театр «Березіль» був заснований Лесем Курбасом у Києві в березні 1922 року. У 1926 році колектив перевели до Харкова, тодішньої столиці УСРР. Перший харківський сезон відкрився 16 жовтня 1926 року виставою «Золоте черево». У театрі Курбас співпрацював із драматургом Миколою Кулішем та художником Вадимом Меллером. У 1933 році Курбаса усунули від керівництва, а згодом заарештували. У 1935 році театр перейменували на честь Тараса Шевченка.",
    significance: "«Березіль» став символом українського театрального модернізму. Його діяльність була важливою частиною культурного відродження 1920-х років, згодом знищеного сталінськими репресіями.",
    sources: [
      {
        title: "theatre-shevchenko.com.ua",
        url: "https://www.theatre-shevchenko.com.ua/theater/history"
      }
    ]
  },
  {
    id: 1081,
    name: "Мистецький музей імені Леся Курбаса",
    type: "museum",
    subtype: "Меморіальний музей",
    category: "music_theatre",
    person: "Лесь Курбас",
    city: "Самбір",
    region: "Львівська область",
    country: "Україна",
    lat: 49.516077,
    lng: 23.191581,
    year: 1993,
    eraYear: 1887,
    eraYearEnd: 1937,
    description: "Музей розташований у будинку, де 1887 року народився Лесь Курбас — видатний український режисер, актор і реформатор театру.",
    history: "Будинок на вулиці Леся Курбаса, 1 пов'язаний із дитинством майбутнього режисера. Музей урочисто відкрили 25 лютого 1993 року. Його експозиція знайомить із життям Курбаса, історією українського театру та його мистецькою спадщиною.",
    significance: "Лесь Курбас став одним із головних реформаторів українського театру XX століття та засновником театру «Березіль». Його творчість була знищена сталінськими репресіями.",
    sources: [
      {
        title: "travels.in.ua",
        url: "https://travels.in.ua/uk-UA/object/2521/mystetskyy-muzey-imeni-lesya-kurbasa"
      },
      {
        title: "Вікіпедія: Лесь Курбас",
        url: "https://uk.wikipedia.org/wiki/Лесь_Курбас"
      }
    ]
  },
  {
    id: 1082,
    name: "Вінницький театр імені Миколи Садовського",
    type: "theatre",
    subtype: "Музично-драматичний театр",
    category: "music_theatre",
    person: "Микола Садовський, Гнат Юра, Тетяна Лентовська",
    city: "Вінниця",
    region: "Вінницька область",
    country: "Україна",
    lat: 49.23487,
    lng: 28.464224,
    year: 1910,
    eraYear: 1910,
    description: "Історична театральна будівля у Вінниці, споруджена за проєктом архітектора Григорія Артинова. Театр відкрився 1910 року та став одним із важливих культурних осередків Поділля.",
    history: "Першу виставу — «Затоплений дзвін» Ґергардта Гауптмана — показали 4 грудня 1910 року за новим стилем. У 1920–1923 роках у приміщенні працював театр імені Івана Франка під керівництвом Гната Юри. Пізніше тут діяли оперні колективи, а 1940 року заклад реорганізували в музично-драматичний театр. Після пошкодження під час Другої світової війни будівлю відновили.",
    significance: "Театр зберігає понад столітню історію сценічного мистецтва Вінниччини та пов'язаний із розвитком української професійної сцени.",
    sources: [
      {
        title: "teatr.vn.ua",
        url: "https://teatr.vn.ua/istoriya-teatru"
      }
    ]
  },
  {
    id: 1083,
    name: "Народний дім у Львові",
    type: "building",
    subtype: "Культурний осередок",
    category: "music_theatre",
    person: "Лев Трещаківський, Юліан Лаврівський, Омелян Бачинський",
    city: "Львів",
    region: "Львівська область",
    country: "Україна",
    lat: 49.8432,
    lng: 24.031,
    year: 1864,
    eraYear: 1864,
    description: "Народний дім — історична українська культурно-освітня установа у Львові. У його приміщенні відбувалися театральні вистави, концерти, культурні та громадські заходи.",
    history: "Будівництво споруди тривало у 1851–1864 роках за проєктом архітектора Вільгельма Шмідта. У великій залі Народного дому в 1864–1876 роках, із перервами, виступав театр товариства «Руська бесіда» — один із перших професійних українських театрів у Галичині. Тут також працювали культурно-освітні організації та бібліотека. У 1930 році частину приміщень перебудували під театр «Розмаїтості».",
    significance: "Народний дім був одним із ключових центрів українського культурного життя Галичини XIX століття. Це місце пов'язане зі становленням професійного українського театру.",
    sources: [
      {
        title: "lia.lvivcenter.org",
        url: "https://lia.lvivcenter.org/uk/objects/teatralna-22/"
      }
    ]
  },
  {
    id: 1084,
    name: "Національна філармонія України — Колонна зала імені Миколи Лисенка",
    type: "theatre",
    subtype: "Концертна зала",
    category: "music_theatre",
    person: "Микола Лисенко, Рейнгольд Глієр",
    city: "Київ",
    region: "Київська область",
    country: "Україна",
    lat: 50.4557,
    lng: 30.5309,
    year: 1882,
    eraYear: 1882,
    description: "Національна філармонія України розташована в історичній будівлі колишнього Купецького зібрання на Володимирському узвозі. Її Колонна зала є однією з найвідоміших концертних зал Києва.",
    history: "Будівлю спорудили 1882 року за проєктом архітектора Володимира Ніколаєва. Велика зала мала особливу акустику та використовувалася для музичних вечорів, концертів і громадських заходів. Тут виступав Микола Лисенко, організовувалися квартетні зібрання та симфонічні концерти. У 1962 році Колонній залі присвоїли ім'я Миколи Лисенка.",
    significance: "Це один із найважливіших історичних концертних осередків України, пов'язаний зі становленням професійного музичного життя Києва.",
    sources: [
      {
        title: "philarmonia.com.ua",
        url: "https://philarmonia.com.ua/istoriya-naczionalnoyi-filarmoniyi-ukrayiny/"
      }
    ]
  },
  {
    id: 1085,
    name: "Національна музична академія України",
    type: "university",
    subtype: "Музична академія",
    category: "music_theatre",
    person: "Володимир Пухальський, Рейнгольд Глієр, Борис Лятошинський",
    city: "Київ",
    region: "Київська область",
    country: "Україна",
    lat: 50.4489,
    lng: 30.5288,
    year: 1913,
    eraYear: 1913,
    description: "Національна музична академія України — один із провідних закладів вищої музичної освіти країни, відомий також як Київська консерваторія. Розташована на вулиці Архітектора Городецького.",
    history: "Заклад заснували 3 листопада 1913 року на базі музичного училища Київського відділення Російського музичного товариства. Першим директором став піаніст і педагог Володимир Пухальський, а згодом заклад очолив композитор Рейнгольд Глієр. У 1920-х роках структура установи змінювалася, а в 1934 році консерваторію відновили. Сучасне приміщення на вулиці Городецького має власну архітектурну історію та не є датою заснування академії.",
    significance: "Академія підготувала покоління українських композиторів, диригентів, вокалістів та інструменталістів. Вона відіграє ключову роль у збереженні й розвитку професійної музичної освіти.",
    sources: [
      {
        title: "knmau.com.ua",
        url: "https://knmau.com.ua/"
      }
    ]
  },
  {
    id: 1086,
    name: "Одеська національна філармонія імені Давида Ойстраха",
    type: "theatre",
    subtype: "Концертна зала",
    category: "music_theatre",
    person: "Давид Ойстрах, Олександр Бернардацці",
    city: "Одеса",
    region: "Одеська область",
    country: "Україна",
    lat: 46.4823,
    lng: 30.7416,
    year: 1899,
    eraYear: 1899,
    description: "Одеська філармонія розташована в будівлі колишньої Нової купецької біржі — одній із найвиразніших архітектурних пам'яток історичного центру Одеси.",
    history: "Будівництво Нової біржі тривало у 1894–1899 роках. Первісний ескізний проєкт створив архітектор Вікентій Прохаска, а робочий проєкт розробив Олександр Бернардацці. Будівля виконана в стилі італійської готики. У 1946 році сюди переїхала Одеська філармонія, заснована 1931 року.",
    significance: "Споруда є пам'яткою архітектури національного значення та важливим центром музичного життя Півдня України.",
    sources: [
      {
        title: "filarmonia.odesa.ua",
        url: "https://filarmonia.odesa.ua/історична-довідка/"
      }
    ]
  },
  {
    id: 1087,
    name: "Львівська національна філармонія імені Мирослава Скорика",
    type: "theatre",
    subtype: "Концертна зала",
    category: "music_theatre",
    person: "Мирослав Скорик, Станіслав Людкевич",
    city: "Львів",
    region: "Львівська область",
    country: "Україна",
    lat: 49.8364,
    lng: 24.0317,
    year: 1907,
    eraYear: 1907,
    description: "Львівська національна філармонія — один із найстаріших концертних закладів України. Її історія пов'язана з розвитком професійної симфонічної музики в Галичині.",
    history: "Філармонія розпочала діяльність 27 вересня 1902 року в приміщенні колишнього театру Скарбека. З 1962 року вона працює в будівлі на вулиці Чайковського, 7, спорудженій 1907 року для Музичного товариства Галичини. У різні роки тут виступали видатні українські та закордонні музиканти.",
    significance: "Філармонія є важливим осередком української симфонічної та камерної музики, а також місцем проведення міжнародних музичних фестивалів.",
    sources: [
      {
        title: "philharmonia.lviv.ua",
        url: "https://philharmonia.lviv.ua/"
      }
    ]
  },
  {
    id: 1088,
    name: "Чернівецька обласна філармонія імені Дмитра Гнатюка",
    type: "theatre",
    subtype: "Концертна зала",
    category: "music_theatre",
    person: "Сидір Воробкевич, Адалберт Гржималі, Соломія Крушельницька",
    city: "Чернівці",
    region: "Чернівецька область",
    country: "Україна",
    lat: 48.2914,
    lng: 25.937,
    year: 1877,
    eraYear: 1877,
    description: "Чернівецька філармонія розташована в історичній будівлі, створеній для Музичного товариства Буковини. Це один із найстаріших концертних осередків західноукраїнських земель.",
    history: "Музичне товариство в Чернівцях було створене 1862 року. У 1876 році розпочалося будівництво його власного приміщення, а в листопаді 1877 року будівлю урочисто відкрили. Концертний зал прикрасив віденський художник Карл Йобст. Тут виступали відомі музиканти, серед яких Соломія Крушельницька та Микола Лисенко. Чернівецьку обласну філармонію заснували 1940 року.",
    significance: "Будівля є важливою пам'яткою музичної культури Буковини та свідченням багатонаціонального культурного життя Чернівців.",
    sources: [
      {
        title: "philharmonic.cv.ua",
        url: "https://www.philharmonic.cv.ua/philharmonic_hall"
      }
    ]
  },
  {
    id: 1089,
    name: "Національна кіностудія імені Олександра Довженка",
    type: "film_location",
    subtype: "Кіностудія",
    category: "cinema",
    person: "Олександр Довженко, Дзиґа Вертов, Олександр Довженко",
    city: "Київ",
    region: "Київська область",
    country: "Україна",
    lat: 50.4577,
    lng: 30.4255,
    year: 1927,
    eraYear: 1927,
    description: "Одна з найвідоміших кіностудій України, розташована на Берестейському проспекті в Києві. Її історія пов'язана зі становленням українського кіновиробництва та розвитком вітчизняного художнього кіно.",
    history: "Будівництво кінофабрики Всеукраїнського фотокіноуправління розпочалося в березні 1927 року. Студія почала працювати у 1928 році. Першою стрічкою став фільм «Ванька і Месник» режисера Акселя Лундіна. У різні періоди тут працювали видатні режисери, оператори, актори та художники. У 1957 році кіностудії присвоїли ім'я Олександра Довженка.",
    significance: "Кіностудія стала одним із головних центрів українського кінематографа. Тут створювалися фільми, що увійшли до історії національного та світового кіно.",
    sources: [
      {
        title: "dovzhenkofilm.com.ua",
        url: "https://dovzhenkofilm.com.ua/history/"
      }
    ]
  },
  {
    id: 1090,
    name: "Одеська кіностудія",
    type: "film_location",
    subtype: "Кіностудія",
    category: "cinema",
    person: "Мирон Гроссман, Олександр Довженко, Віра Холодна",
    city: "Одеса",
    region: "Одеська область",
    country: "Україна",
    lat: 46.4389,
    lng: 30.7618,
    year: 1907,
    eraYear: 1907,
    description: "Одеська кіностудія — один із найстаріших центрів кіновиробництва в Україні. Її історія почалася з кіноательє «Мирограф», заснованого фотографом Мироном Гроссманом.",
    history: "У 1907 році Мирон Гроссман заснував кіноательє «Мирограф» на Французькому бульварі. У 1916 році підприємець Дмитро Харитонов побудував великий скляний знімальний павільйон. В Одесі знімали фільми за участю Віри Холодної та інших зірок німого кіно. У 1926 році сюди приїхав Олександр Довженко, який створив на студії свої перші кінороботи.",
    significance: "Одеський кінематограф відіграв важливу роль у формуванні української кіноіндустрії та розвитку світового німого кіно.",
    sources: [
      {
        title: "odesafilmstudio.com.ua",
        url: "https://www.odesafilmstudio.com.ua/uk/about/history"
      }
    ]
  },
  {
    id: 1091,
    name: "Довженко-Центр",
    type: "museum",
    subtype: "Національний кіноархів",
    category: "cinema",
    person: "Олександр Довженко",
    city: "Київ",
    region: "Київська область",
    country: "Україна",
    lat: 50.4046,
    lng: 30.505,
    year: 1994,
    eraYear: 1894,
    eraYearEnd: 1956,
    description: "Довженко-Центр — національний кіноархів і культурна інституція, що займається збереженням, дослідженням та популяризацією української кінематографічної спадщини.",
    history: "Центр заснований у 1994 році на базі колишньої кінокопіювальної фабрики, створеної 1938 року. У його фондах зберігаються тисячі українських і закордонних фільмів, архівні документи, фотографії та матеріали з історії кінематографа. Центр також розвиває музейні, дослідницькі та освітні програми.",
    significance: "Це одна з головних установ зі збереження української кіноспадщини, без якої неможливе системне дослідження історії національного кінематографа.",
    sources: [
      {
        title: "dovzhenkocentre.org",
        url: "https://dovzhenkocentre.org/pro-nas/"
      },
      {
        title: "Вікіпедія: Довженко Олександр Петрович",
        url: "https://uk.wikipedia.org/wiki/Довженко_Олександр_Петрович"
      }
    ]
  },
  {
    id: 1092,
    name: "Кінотеатр «Ліра»",
    type: "film_location",
    subtype: "Історичний кінотеатр",
    category: "cinema",
    person: "Історія київського кінематографа",
    city: "Київ",
    region: "Київська область",
    country: "Україна",
    lat: 50.4573,
    lng: 30.5122,
    year: 1913,
    eraYear: 1913,
    description: "Кінотеатр «Ліра» на Великій Житомирській, 40 — один із найстаріших діючих кінотеатрів Києва. Його історія почалася на початку XX століття, коли в місті активно поширювалися синематографи.",
    history: "Дозвіл на відкриття синематографа «Ліра» в будинку на Великій Житомирській, 40 був наданий 1913 року. У 1937 році кінотеатр перейменували на честь Василя Чапаєва. Протягом наступних десятиліть заклад неодноразово змінював назву та формат роботи. Сьогодні він відомий як кінотеатр «Ліра».",
    significance: "Кінотеатр є важливою пам'яткою історії міського кінематографа та зберігає традицію кінопоказів у Києві, що бере початок понад століття тому.",
    sources: [
      {
        title: "diaz.kyiv.ua",
        url: "https://diaz.kyiv.ua/objects/najstarishyj-u-kyyevi-kinoteatr-lira-chotyry-epohy-kyyivskogo-kinomystecztva/"
      }
    ]
  },
  {
    id: 1093,
    name: "Хата-гражда — місце зйомок «Тіней забутих предків»",
    type: "film_location",
    subtype: "Кінолокація та етнографічний музей",
    category: "cinema",
    person: "Сергій Параджанов, Іван Миколайчук, Михайло Коцюбинський",
    city: "Криворівня",
    region: "Івано-Франківська область",
    country: "Україна",
    lat: 48.172222,
    lng: 24.8975,
    year: 1858,
    eraYear: 1964,
    description: "Традиційна гуцульська хата-гражда в присілку Заріччя села Криворівня. Ця історична споруда використовувалася під час зйомок фільму Сергія Параджанова «Тіні забутих предків» 1964 року.",
    history: "Гражду спорудили 1858 року. Це традиційний тип гуцульського житла із замкнутим внутрішнім подвір'ям, оточеним житловими та господарськими будівлями. У 1964 році споруду використовували як знімальний майданчик фільму «Тіні забутих предків». Після тривалого занепаду її відреставрували та відкрили як музей у 1993 році.",
    significance: "Об'єкт поєднує гуцульську архітектурну спадщину з історією українського кінематографа. Фільм Параджанова став одним із найвідоміших творів українського поетичного кіно.",
    sources: [
      {
        title: "travels.in.ua",
        url: "https://travels.in.ua/en-US/object/1327/museum-khata-grazhda"
      }
    ]
  },
  {
    id: 1094,
    name: "Андріївська церква — кінолокація фільму «За двома зайцями»",
    type: "film_location",
    subtype: "Пам'ятка архітектури та кінолокація",
    category: "cinema",
    person: "Віктор Іванов, Михайло Старицький",
    city: "Київ",
    region: "Київська область",
    country: "Україна",
    lat: 50.45889,
    lng: 30.51806,
    year: 1961,
    eraYear: 1961,
    description: "Андріївська церква — одна з найвідоміших архітектурних пам'яток Києва. Її сходи стали місцем зйомок фінальних епізодів культової кінокомедії «За двома зайцями» режисера Віктора Іванова.",
    history: "Фільм «За двома зайцями» вийшов 1961 року та був знятий за мотивами однойменної п'єси Михайла Старицького. У фінальних сценах герої опиняються біля Андріївської церкви. У 1999 році неподалік храму встановили пам'ятник Проні Прокопівні та Свириду Голохвостому.",
    significance: "Локація стала невід'ємною частиною кінематографічного образу Києва. Фільм зберігає популярність і є одним із найвідоміших прикладів української кінокомедії.",
    sources: [
      {
        title: "guide.kyivcity.gov.ua",
        url: "https://guide.kyivcity.gov.ua/en/places/andriyivska-tserkva"
      }
    ]
  },
  {
    id: 1095,
    name: "Село Яреськи — знімальний майданчик фільмів Олександра Довженка",
    type: "film_location",
    subtype: "Історична кінолокація",
    category: "cinema",
    person: "Олександр Довженко, Данило Демуцький, Василь Кричевський",
    city: "Яреськи",
    region: "Полтавська область",
    country: "Україна",
    lat: 49.83738,
    lng: 33.91623,
    year: 1929,
    eraYear: 1929,
    description: "Село Яреськи на Полтавщині стало одним із важливих натурних знімальних майданчиків Олександра Довженка. Тут створювалися сцени його фільмів «Звенигора» та «Земля».",
    history: "Олександр Довженко разом із художником Василем Кричевським обрав Яреськи для зйомок завдяки характерному українському сільському ландшафту. У 1927 році тут знімали «Звенигору», а влітку 1929 року — значну частину фільму «Земля». Останній став одним із найвизначніших творів світового німого кінематографа. У зйомках брали участь місцеві мешканці.",
    significance: "Яреськи є важливою локацією в історії українського поетичного кіно та творчості Олександра Довженка.",
    sources: [
      {
        title: "suspilne.media",
        url: "https://suspilne.media/poltava/52477-dovzenko-litus-ta-ivcenko-reziseri-stricki-akih-znimali-na-poltavsini/"
      }
    ]
  },
  {
    id: 1096,
    name: "Красногорівка — місце зйомок фільму «Пропала грамота»",
    type: "film_location",
    subtype: "Історична кінолокація",
    category: "cinema",
    person: "Борис Івченко, Іван Миколайчук, Іван Драч",
    city: "Красногорівка",
    region: "Полтавська область",
    country: "Україна",
    lat: 49.67702,
    lng: 33.74568,
    year: 1972,
    eraYear: 1972,
    description: "Село Красногорівка на Полтавщині стало одним із місць натурних зйомок українського фільму «Пропала грамота» режисера Бориса Івченка.",
    history: "Зйомки фільму розпочалися 1972 року. Перші епізоди створювали в Полтавській області, зокрема в Красногорівці, після чого знімальна група продовжила роботу в Петергофі. Головну роль козака Василя виконав Іван Миколайчук, який також брав участь у роботі над музичним оформленням стрічки. Радянська цензура заборонила фільм після перегляду, і широкому глядачеві він став доступний лише 1983 року.",
    significance: "«Пропала грамота» стала одним із важливих творів українського історико-пригодницького кіно, в якому поєдналися козацькі мотиви, народний гумор, фольклор і музика.",
    sources: [
      {
        title: "dovzhenkocentre.org",
        url: "https://dovzhenkocentre.org/top-100/propala-hramota/"
      }
    ]
  },
  {
    id: 1097,
    name: "Розтоки — місце зйомок «Білого птаха з чорною ознакою»",
    type: "film_location",
    subtype: "Історична кінолокація",
    category: "cinema",
    person: "Юрій Іллєнко, Іван Миколайчук, Богдан Ступка",
    city: "Розтоки",
    region: "Чернівецька область",
    country: "Україна",
    lat: 48.167225,
    lng: 25.127131,
    year: 1970,
    eraYear: 1970,
    description: "Село Розтоки на Буковині стало головним місцем натурних зйомок фільму «Білий птах з чорною ознакою» режисера Юрія Іллєнка. У стрічці зображено драматичну долю буковинської родини на тлі історичних потрясінь.",
    history: "Зйомки розпочалися влітку 1970 року. Розтоки стали основним майданчиком роботи кіногрупи. До зйомок долучалися місцеві мешканці, а частину сцен знімали в навколишніх селах. Під час перебування на Буковині композитор Володимир Івасюк почув від місцевих жителів легенду про червону руту, що згодом вплинула на створення відомої пісні.",
    significance: "Розтоки пов'язані одразу з двома важливими явищами української культури: українським поетичним кіно та історією створення пісні «Червона рута».",
    sources: [
      {
        title: "localhistory.org.ua",
        url: "https://localhistory.org.ua/rubrics/video/bilii-ptakh-z-chornoiu-oznakoiu/"
      }
    ]
  },
  {
    id: 1098,
    name: "Витачів — кінолокація фільму «Вавилон XX»",
    type: "film_location",
    subtype: "Історична кінолокація",
    category: "cinema",
    person: "Іван Миколайчук, Юрій Гармаш",
    city: "Витачів",
    region: "Київська область",
    country: "Україна",
    lat: 50.11327,
    lng: 30.872895,
    year: 1979,
    eraYear: 1979,
    description: "Витачів на Київщині став одним із головних натурних майданчиків фільму «Вавилон XX», режисерського дебюту Івана Миколайчука.",
    history: "Фільм створювали наприкінці 1970-х років за мотивами роману Василя Земляка «Лебедина зграя». Для зйомок шукали місцевість, яка поєднувала б пагорби, рівнини та характерні українські сільські краєвиди. Зрештою знімальна група обрала Витачів. Стрічка вийшла на екрани 1979 року.",
    significance: "Фільм став однією з найважливіших режисерських робіт Івана Миколайчука та помітним явищем українського поетичного кіно.",
    sources: [
      {
        title: "obukhiv.info",
        url: "https://obukhiv.info/categories/archive/drug-mikolaichuka-rozpoviv-chomu-quot-vavilon-xx-quot-znimali-na-obukhivshchini/"
      }
    ]
  },
  {
    id: 1099,
    name: "Околиці Синевирської Поляни — зйомки «Захара Беркута»",
    type: "film_location",
    subtype: "Історична кінолокація",
    category: "cinema",
    person: "Ахтем Сеітаблаєв, Джон Вінн, Іван Франко",
    city: "Синевирська Поляна",
    region: "Закарпатська область",
    country: "Україна",
    lat: 48.582005,
    lng: 23.688941,
    year: 2019,
    eraYear: 2019,
    description: "Карпатські околиці Синевирської Поляни стали одним із натурних майданчиків історичного фільму «Захар Беркут» 2019 року. Стрічку створено за мотивами однойменної повісті Івана Франка.",
    history: "Основні натурні зйомки проходили влітку 2018 року поблизу Синевирської Поляни. Для фільму створювали масштабні декорації гірського поселення та укріплень. Частину сцен також знімали під Києвом. Режисерами стрічки стали Ахтем Сеітаблаєв і Джон Вінн.",
    significance: "Це приклад сучасного українського історичного кіно, для якого використовували реальні карпатські ландшафти та масштабні декорації.",
    sources: [
      {
        title: "film.ua",
        url: "https://film.ua/uk/news/2027"
      }
    ]
  },
  {
    id: 1100,
    name: "Манявський водоспад — кінолокація «Захара Беркута»",
    type: "film_location",
    subtype: "Природна кінолокація",
    category: "cinema",
    person: "Ахтем Сеітаблаєв, Джон Вінн",
    city: "Манява",
    region: "Івано-Франківська область",
    country: "Україна",
    lat: 48.625698,
    lng: 24.303519,
    year: 2019,
    eraYear: 2019,
    description: "Манявський водоспад та навколишні карпатські краєвиди використовувалися під час натурних зйомок фільму «Захар Беркут» 2019 року.",
    history: "Під час створення фільму знімальна група працювала в Карпатах, зокрема поблизу Манявського водоспаду та озера Синевир. Природні ландшафти допомогли створити атмосферу гірського світу, описаного в повісті Івана Франка.",
    significance: "Об'єкт поєднує природну спадщину Карпат із сучасною історією українського кінематографа.",
    sources: [
      {
        title: "ukrinform.ua",
        url: "https://www.ukrinform.ua/rubric-culture/2492915-seitablaev-rozpoviv-pro-mistiku-na-zjomkah-zahara-berkuta.html"
      }
    ]
  },
  {
    id: 1101,
    name: "Товста Могила",
    type: "archaeological",
    subtype: "Скіфський царський курган",
    category: "ancient",
    person: "Скіфська знать",
    city: "Покров",
    region: "Дніпропетровська область",
    country: "Україна",
    lat: 47.67262,
    lng: 34.13211,
    year: -350,
    eraYear: -400,
    eraYearEnd: -301,
    eventDate: "IV століття до н. е.",
    description: "Один із найвідоміших скіфських курганів України. Саме тут у 1971 році археолог Борис Мозолевський знайшов золоту пектораль — шедевр скіфського ювелірного мистецтва.",
    history: "Під час розкопок виявили два поховання, залишки коней, зброю, посуд і сотні золотих прикрас. Центральне поховання було пограбоване ще в давнину, проте бічна гробниця зберегла надзвичайно цінні предмети. Найвідоміша знахідка — золота пектораль із зображеннями сцен життя та міфології скіфів.",
    significance: "Знахідки з кургану стали важливим джерелом для вивчення культури та мистецтва скіфів. Оригінал пекторалі зберігається в Музеї історичних коштовностей України.",
    sources: [
      {
        title: "maps.visicom.ua",
        url: "https://maps.visicom.ua/c/34.1321,47.67262,17/f/POIK75BN6V"
      }
    ]
  },
  {
    id: 1102,
    name: "Курган Солоха",
    type: "archaeological",
    subtype: "Скіфський царський курган",
    category: "ancient",
    person: "Скіфська знать",
    city: "Поблизу Великої Знам'янки",
    region: "Запорізька область",
    country: "Україна",
    lat: 47.32597,
    lng: 34.33917,
    year: -400,
    eraYear: -400,
    eraYearEnd: -301,
    eventDate: "Кінець V — початок IV століття до н. е.",
    description: "Один із найбагатших скіфських царських курганів. Під його насипом заввишки приблизно 18 метрів археологи виявили два поховальні комплекси.",
    history: "Курган досліджував археолог Микола Веселовський у 1912–1913 роках. Серед знахідок — золотий гребінь із зображенням трьох воїнів у бою, золоті прикраси, зброя, посуд і кінська збруя. Частина поховання була пограбована ще в давнину.",
    significance: "Знахідки із Солохи мають велике значення для дослідження скіфської військової культури, поховальних звичаїв та ювелірного мистецтва.",
    sources: [
      {
        title: "history.org.ua",
        url: "https://www.history.org.ua/?termin=Solokha_kurhan"
      }
    ]
  },
  {
    id: 1103,
    name: "Нечаєва Могила",
    type: "archaeological",
    subtype: "Скіфський курган",
    category: "ancient",
    person: "Скіфська знать",
    city: "Поблизу Лукіївки",
    region: "Дніпропетровська область",
    country: "Україна",
    lat: 47.91031,
    lng: 34.49089,
    year: -350,
    eraYear: -400,
    eraYearEnd: -301,
    eventDate: "IV століття до н. е.",
    description: "Один із найвищих курганів степової частини Європи. Висота насипу нині становить близько 15 метрів.",
    history: "Курган також відомий під назвою Гегелина Могила. Попри інтерес археологів, повноцінні археологічні розкопки центрального поховання не були проведені. Тому його справжній поховальний вміст залишається невідомим.",
    significance: "Пам'ятка демонструє масштаб курганного будівництва у степах Північного Причорномор'я та зберігає потенціал для майбутніх археологічних досліджень.",
    sources: [
      {
        title: "spadok.org.ua",
        url: "https://spadok.org.ua/skify/skifski-kurgany-piramidy-stepu"
      }
    ]
  },
  {
    id: 1104,
    name: "Мамай-гора",
    type: "archaeological",
    subtype: "Курганний могильник",
    category: "ancient",
    person: "Давнє населення Північного Причорномор'я",
    city: "Поблизу Великої Знам'янки",
    region: "Запорізька область",
    country: "Україна",
    lat: 47.42139,
    lng: 34.37202,
    year: -3000,
    eraYear: -4000,
    eraYearEnd: 1500,
    eventDate: "IV тисячоліття до н. е. — перша половина II тисячоліття н. е.",
    description: "Великий курганний могильник, що складається з численних поховальних насипів різних історичних епох.",
    history: "На території могильника представлені поховання різних періодів — від доби енеоліту та бронзи до раннього залізного віку й середньовіччя. Це не одна могила, а цілий археологічний комплекс, який відображає тривалу історію заселення регіону.",
    significance: "Мамай-гора є важливою пам'яткою для вивчення поховальних традицій і культурних змін населення степового Подніпров'я протягом тисячоліть.",
    sources: [
      {
        title: "landmarks.in.ua",
        url: "https://landmarks.in.ua/register-of-heritage-places/register1-archeological-architectural-historical-heritage"
      }
    ]
  },
  {
    id: 1105,
    name: "Могила Андрія Кузьменка (Кузьми Скрябіна)",
    type: "grave",
    subtype: "Могила музиканта",
    category: "music_theatre",
    person: "Андрій Кузьменко",
    city: "Брюховичі",
    region: "Львівська область",
    country: "Україна",
    lat: 49.89,
    lng: 23.98,
    year: 2015,
    eraYear: 1968,
    eraYearEnd: 2015,
    eventDate: "5 лютого 2015 року",
    description: "Місце поховання українського музиканта, співака, композитора, телеведучого та лідера гурту «Скрябін» Андрія Кузьменка.",
    history: "Андрій Кузьменко загинув 2 лютого 2015 року в автомобільній аварії поблизу села Лозуватка на Дніпропетровщині. 5 лютого його поховали в родинному склепі Кузьменків на Брюховицькому кладовищі. На склепі встановлена меморіальна дошка з портретом музиканта.",
    significance: "Кузьменко був однією з помітних постатей української популярної музики. Його творчість охоплювала музику, телебачення, літературу та громадську діяльність.",
    sources: [
      {
        title: "myplanet.com.ua",
        url: "https://myplanet.com.ua/de-pokhovanyi-skriabin-rodynnyi-sklep-u-briukhovychakh/"
      },
      {
        title: "Вікіпедія: Кузьма Скрябін",
        url: "https://uk.wikipedia.org/wiki/Кузьма_Скрябін"
      }
    ]
  },
  {
    id: 1106,
    name: "Могила Мирослава Скорика",
    type: "grave",
    subtype: "Могила композитора",
    category: "music_theatre",
    person: "Мирослав Скорик",
    city: "Львів",
    region: "Львівська область",
    country: "Україна",
    lat: 49.8375,
    lng: 24.056,
    year: 2020,
    eraYear: 1938,
    eraYearEnd: 2020,
    eventDate: "5 червня 2020 року",
    description: "Місце поховання українського композитора, музикознавця, педагога та Героя України Мирослава Скорика.",
    history: "Мирослав Скорик (1938–2020) був одним із провідних українських композиторів XX–XXI століть. Серед його найвідоміших творів — «Мелодія» та музика до фільму «Тіні забутих предків». Після смерті 1 червня 2020 року його поховали на Личаківському кладовищі у Львові.",
    significance: "Творчість Скорика поєднала академічну музику, український фольклор та сучасні композиторські підходи. Його ім'я носить Львівська національна філармонія.",
    sources: [
      {
        title: "philharmonia.lviv.ua",
        url: "https://philharmonia.lviv.ua/media/pokladannia-kvitiv-do-mohyly-myroslava-skoryka/"
      },
      {
        title: "Вікіпедія: Скорик Мирослав Михайлович",
        url: "https://uk.wikipedia.org/wiki/Скорик_Мирослав_Михайлович"
      }
    ]
  },
  {
    id: 1107,
    name: "Могила Володимира Івасюка",
    type: "grave",
    subtype: "Могила композитора",
    category: "music_theatre",
    person: "Володимир Івасюк",
    city: "Львів",
    region: "Львівська область",
    country: "Україна",
    lat: 49.8375,
    lng: 24.056,
    year: 1979,
    eraYear: 1949,
    eraYearEnd: 1979,
    eventDate: "22 травня 1979 року",
    description: "Місце поховання українського композитора, поета та одного із засновників української естрадної музики Володимира Івасюка.",
    history: "Володимир Івасюк (1949–1979) — автор пісень «Червона рута», «Водограй» та багатьох інших творів. Його тіло знайшли у Брюховицькому лісі поблизу Львова 18 травня 1979 року. Похорон відбувся 22 травня на Личаківському кладовищі. У ньому взяли участь тисячі людей.",
    significance: "Івасюк став однією з ключових постатей української естради. Його пісні стали частиною української музичної культури та відомі далеко за межами України.",
    sources: [
      {
        title: "commons.wikimedia.org",
        url: "https://commons.wikimedia.org/wiki/File:%D0%9C%D0%BE%D0%B3%D0%B8%D0%BB%D0%B0_%D0%92._%D0%9C._%D0%86%D0%B2%D0%B0%D1%81%D1%8E%D0%BA%D0%B0%2C_%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%B7%D0%B8%D1%82%D0%BE%D1%80%D0%B0.jpg"
      },
      {
        title: "Вікіпедія: Івасюк Володимир Михайлович",
        url: "https://uk.wikipedia.org/wiki/Івасюк_Володимир_Михайлович"
      }
    ]
  },
  {
    id: 1108,
    name: "Могила Богдана Ступки",
    type: "grave",
    subtype: "Могила актора",
    category: "music_theatre",
    person: "Богдан Ступка",
    city: "Київ",
    region: "Київська область",
    country: "Україна",
    lat: 50.4167,
    lng: 30.5058,
    year: 2012,
    eraYear: 1941,
    eraYearEnd: 2012,
    eventDate: "2012 рік",
    description: "Місце поховання видатного українського театрального та кіноактора Богдана Ступки на Байковому кладовищі.",
    history: "Богдан Ступка (1941–2012) був актором театру і кіно, народним артистом України та лауреатом численних нагород. Працював у Львівському театрі імені Марії Заньковецької, Київському театрі імені Івана Франка та очолював Міністерство культури України. На його могилі встановлена скульптура бронзового дерева з корінням, спрямованим догори.",
    significance: "Ступка зробив значний внесок у розвиток українського театру та кінематографа. Його ролі стали важливою частиною історії українського сценічного мистецтва.",
    sources: [
      {
        title: "kmu.gov.ua",
        url: "https://www.kmu.gov.ua/news/249263692"
      },
      {
        title: "Вікіпедія: Ступка Богдан Сильвестрович",
        url: "https://uk.wikipedia.org/wiki/Ступка_Богдан_Сильвестрович"
      }
    ]
  },
  {
    id: 1109,
    name: "Могила Івана Вакарчука",
    type: "grave",
    subtype: "Могила науковця",
    category: "science",
    person: "Іван Вакарчук",
    city: "Львів",
    region: "Львівська область",
    country: "Україна",
    lat: 49.8375,
    lng: 24.056,
    year: 2020,
    eraYear: 1947,
    eraYearEnd: 2020,
    eventDate: "2020 рік",
    description: "Місце поховання українського фізика, професора, багаторічного ректора Львівського національного університету імені Івана Франка та міністра освіти і науки України Івана Вакарчука.",
    history: "Іван Вакарчук (1947–2020) був доктором фізико-математичних наук і ректором Львівського університету протягом 1990–2007 та 2010–2013 років. Також обіймав посаду міністра освіти і науки України у 2007–2010 роках. Його поховали на Личаківському кладовищі. У 2025 році на могилі відкрили надмогильний пам'ятник.",
    significance: "Вакарчук зробив вагомий внесок у розвиток української науки та університетської освіти. Його діяльність пов'язана з реформуванням освітньої системи й розвитком Львівського університету.",
    sources: [
      {
        title: "loda.gov.ua",
        url: "https://loda.gov.ua/news/132821"
      },
      {
        title: "Вікіпедія: Вакарчук Іван Олександрович",
        url: "https://uk.wikipedia.org/wiki/Вакарчук_Іван_Олександрович"
      }
    ]
  },
  {
    id: 1110,
    name: "Могила Василя Стуса",
    type: "grave",
    subtype: "Могила поета та правозахисника",
    category: "literature",
    person: "Василь Стус",
    city: "Київ",
    region: "Київська область",
    country: "Україна",
    lat: 50.4167,
    lng: 30.5058,
    year: 1989,
    eraYear: 1938,
    eraYearEnd: 1985,
    eventDate: "19 листопада 1989 року — перепоховання",
    description: "Місце поховання українського поета, перекладача, літературознавця та правозахисника Василя Стуса на Байковому кладовищі.",
    history: "Василь Стус помер у ніч із 3 на 4 вересня 1985 року в радянському таборі особливого режиму в селищі Кучино Пермської області. Спочатку його поховали на табірному кладовищі. У листопаді 1989 року останки Стуса, Олекси Тихого та Юрія Литвина перепоховали в Києві на Байковому кладовищі, на ділянці №33.",
    significance: "Стус став одним із символів українського дисидентського руху та опору радянським репресіям. У 2005 році йому посмертно присвоїли звання Героя України.",
    sources: [
      {
        title: "localhistory.org.ua",
        url: "https://localhistory.org.ua/texts/statti/mistsia-pamiati-vasilia-stusa/"
      },
      {
        title: "Вікіпедія: Стус Василь Семенович",
        url: "https://uk.wikipedia.org/wiki/Стус_Василь_Семенович"
      }
    ]
  },
  {
    id: 1111,
    name: "Могила Леоніда Бикова",
    type: "grave",
    subtype: "Могила актора та кінорежисера",
    category: "cinema",
    person: "Леонід Биков",
    city: "Київ",
    region: "Київська область",
    country: "Україна",
    lat: 50.4167,
    lng: 30.5058,
    year: 1979,
    eraYear: 1928,
    eraYearEnd: 1979,
    eventDate: "13 квітня 1979 року",
    description: "Місце поховання українського актора, кінорежисера та сценариста Леоніда Бикова на Байковому кладовищі, ділянка №33.",
    history: "Леонід Биков (1928–1979) відомий за фільмами «В бій ідуть тільки старики», «Максим Перепелиця» та «Ати-бати, йшли солдати…». Загинув 11 квітня 1979 року в автомобільній аварії на трасі Київ — Мінськ. Похований на Байковому кладовищі в Києві. На його могилі встановлено надгробок, присвячений пам'яті актора.",
    significance: "Биков став однією з найвідоміших постатей українського кінематографа. Його фільми та акторські роботи залишили помітний слід в історії кіно.",
    sources: [
      {
        title: "vue.gov.ua",
        url: "https://vue.gov.ua/Биков,_Леонід_Федорович"
      },
      {
        title: "Вікіпедія: Биков Леонід Федорович",
        url: "https://uk.wikipedia.org/wiki/Биков_Леонід_Федорович"
      }
    ]
  },
  {
    id: 1112,
    name: "Могила Ігоря Калинця",
    type: "grave",
    subtype: "Могила поета та дисидента",
    category: "literature",
    person: "Ігор Калинець",
    city: "Львів",
    region: "Львівська область",
    country: "Україна",
    lat: 49.8375,
    lng: 24.056,
    year: 2025,
    eraYear: 1939,
    eraYearEnd: 2025,
    eventDate: "1 липня 2025 року",
    description: "Місце поховання українського поета-шістдесятника, письменника та дисидента Ігоря Калинця на Личаківському кладовищі.",
    history: "Ігор Калинець (1939–2025) був одним із представників покоління українських шістдесятників. За свою громадянську та літературну діяльність зазнав переслідувань радянської влади, був засуджений до ув'язнення та заслання. Помер 28 червня 2025 року. Його поховали 1 липня на полі почесних поховань №67 Личаківського кладовища, поруч із дружиною Іриною Калинець.",
    significance: "Калинець був важливою постаттю українського літературного та дисидентського руху. Його творчість і громадська діяльність пов'язані зі збереженням української мови та культури.",
    sources: [
      {
        title: "istpravda.com.ua",
        url: "https://www.istpravda.com.ua/short/2025/06/29/165110/"
      },
      {
        title: "Вікіпедія: Калинець Ігор Миронович",
        url: "https://uk.wikipedia.org/wiki/Калинець_Ігор_Миронович"
      }
    ]
  },
  {
    id: 1113,
    name: "Могила Ігоря Білозіра",
    type: "grave",
    subtype: "Могила композитора та співака",
    category: "music_theatre",
    person: "Ігор Білозір",
    city: "Львів",
    region: "Львівська область",
    country: "Україна",
    lat: 49.8375,
    lng: 24.056,
    year: 2000,
    eraYear: 1955,
    eraYearEnd: 2000,
    eventDate: "28 травня 2000 року",
    description: "Місце поховання українського композитора, співака та керівника вокально-інструментального ансамблю «Ватра» Ігоря Білозіра на Личаківському кладовищі, поле №2.",
    history: "Ігор Білозір (1955–2000) був автором багатьох популярних українських пісень. 8 травня 2000 року його жорстоко побили у львівському кафе після конфлікту, пов'язаного з виконанням українських пісень. Від отриманих травм він помер 28 травня 2000 року в лікарні. Похований на Личаківському кладовищі у Львові.",
    significance: "Білозір зробив значний внесок у розвиток української естрадної музики. Його пісенна спадщина, зокрема твори для ансамблю «Ватра», залишається частиною української музичної культури.",
    sources: [
      {
        title: "old.loda.gov.ua",
        url: "https://old.loda.gov.ua/news?id=51634&news_departments=17%2C24"
      },
      {
        title: "Вікіпедія: Білозір Ігор Йосипович",
        url: "https://uk.wikipedia.org/wiki/Білозір_Ігор_Йосипович"
      }
    ]
  },
  {
    id: 1114,
    name: "Могила Тараса Шевченка",
    type: "grave",
    subtype: "Могила поета та художника",
    category: "literature",
    person: "Тарас Шевченко",
    city: "Канів",
    region: "Черкаська область",
    country: "Україна",
    lat: 49.73234,
    lng: 31.51179,
    year: 1861,
    eraYear: 1814,
    eraYearEnd: 1861,
    eventDate: "22 травня 1861 року",
    description: "Місце поховання Тараса Григоровича Шевченка на Тарасовій горі в Каневі.",
    history: "Після смерті в Санкт-Петербурзі 10 березня 1861 року Шевченка спочатку поховали на Смоленському кладовищі. Згодом, відповідно до його заповіту, домовину перевезли в Україну. 22 травня 1861 року поета перепоховали на Чернечій горі поблизу Канева. Відтоді вона отримала назву Тарасова гора. У 1939 році тут відкрили сучасний пам'ятник роботи скульптора Матвія Манізера.",
    significance: "Могила Шевченка стала одним із головних місць національної пам'яті України. Територія входить до Шевченківського національного заповідника.",
    images: [
      {
        url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/02/%D0%9C%D0%BE%D0%B3%D0%B8%D0%BB%D0%B0_%D0%A2%D0%B0%D1%80%D0%B0%D1%81%D0%B0_%D0%A8%D0%B5%D0%B2%D1%87%D0%B5%D0%BD%D0%BA%D0%B0_%28%D0%9A%D0%B0%D0%BD%D1%96%D0%B2%29.jpg/1280px-%D0%9C%D0%BE%D0%B3%D0%B8%D0%BB%D0%B0_%D0%A2%D0%B0%D1%80%D0%B0%D1%81%D0%B0_%D0%A8%D0%B5%D0%B2%D1%87%D0%B5%D0%BD%D0%BA%D0%B0_%28%D0%9A%D0%B0%D0%BD%D1%96%D0%B2%29.jpg",
        author: "Куннова Олена",
        license: "CC BY-SA 4.0",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:%D0%9C%D0%BE%D0%B3%D0%B8%D0%BB%D0%B0_%D0%A2%D0%B0%D1%80%D0%B0%D1%81%D0%B0_%D0%A8%D0%B5%D0%B2%D1%87%D0%B5%D0%BD%D0%BA%D0%B0_(%D0%9A%D0%B0%D0%BD%D1%96%D0%B2).jpg"
      }
    ],
    sources: [
      {
        title: "shevchenko-museum.com.ua",
        url: "https://shevchenko-museum.com.ua/default/static/view/9/"
      },
      {
        title: "Вікіпедія: Шевченко Тарас Григорович",
        url: "https://uk.wikipedia.org/wiki/Шевченко_Тарас_Григорович"
      }
    ]
  },
  {
    id: 1115,
    name: "Могила Лесі Українки",
    type: "grave",
    subtype: "Могила письменниці",
    category: "literature",
    person: "Леся Українка",
    city: "Київ",
    region: "Київська область",
    country: "Україна",
    lat: 50.416111,
    lng: 30.512222,
    year: 1913,
    eraYear: 1871,
    eraYearEnd: 1913,
    eventDate: "7 серпня 1913 року",
    description: "Місце поховання української поетеси, драматургині та перекладачки Лесі Українки на Байковому кладовищі.",
    history: "Леся Українка померла 1 серпня 1913 року в Сурамі, Грузія. Її тіло перевезли до Києва та поховали 7 серпня на Байковому кладовищі, на старій ділянці №3. У 1939 році на могилі встановили бронзовий надгробний пам'ятник роботи скульпторки Галини Петрашевич.",
    significance: "Могила є місцем вшанування однієї з найважливіших постатей української літератури та жіночого інтелектуального руху.",
    images: [
      {
        url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6d/%D0%9B%D0%B5%D1%81%D1%8F_%D0%A3%D0%BA%D1%80%D0%B0%D0%B8%D0%BD%D0%BA%D0%B0_%D0%91%D0%B0%D0%B9%D0%BA%D0%BE%D0%B2%D0%BE_%D0%BA%D0%BB%D0%B0%D0%B4%D0%B1%D0%B8%D1%89%D0%B5.jpg/1280px-%D0%9B%D0%B5%D1%81%D1%8F_%D0%A3%D0%BA%D1%80%D0%B0%D0%B8%D0%BD%D0%BA%D0%B0_%D0%91%D0%B0%D0%B9%D0%BA%D0%BE%D0%B2%D0%BE_%D0%BA%D0%BB%D0%B0%D0%B4%D0%B1%D0%B8%D1%89%D0%B5.jpg",
        author: "Половко Сергей Николаевич",
        license: "Public domain",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:%D0%9B%D0%B5%D1%81%D1%8F_%D0%A3%D0%BA%D1%80%D0%B0%D0%B8%D0%BD%D0%BA%D0%B0_%D0%91%D0%B0%D0%B9%D0%BA%D0%BE%D0%B2%D0%BE_%D0%BA%D0%BB%D0%B0%D0%B4%D0%B1%D0%B8%D1%89%D0%B5.jpg"
      }
    ],
    sources: [
      {
        title: "lesyaukrainka.com",
        url: "https://lesyaukrainka.com/ua/vshanuvannya-pamyati/pamyatniki/21_kiyiv-nadgrobniy-pam-yatnik-lesi-ukrayinci-na-baykovomu-kladovishci"
      },
      {
        title: "Вікіпедія: Леся Українка",
        url: "https://uk.wikipedia.org/wiki/Леся_Українка"
      }
    ]
  },
  {
    id: 1116,
    name: "Могила Івана Франка",
    type: "grave",
    subtype: "Могила письменника та громадського діяча",
    category: "literature",
    person: "Іван Франко",
    city: "Львів",
    region: "Львівська область",
    country: "Україна",
    lat: 49.833104,
    lng: 24.052873,
    year: 1916,
    eraYear: 1856,
    eraYearEnd: 1916,
    eventDate: "1916 рік; перепоховання 1921 року",
    description: "Місце поховання українського письменника, поета, перекладача, науковця та громадського діяча Івана Франка на Личаківському цвинтарі.",
    history: "Іван Франко помер 28 травня 1916 року у Львові. Спочатку його поховали у склепі родини Мотичинських. У 1921 році останки перенесли до окремої могили на Личаківському цвинтарі. У 1933 році над нею встановили пам'ятник роботи скульптора Сергія Литвиненка, що зображає Франка-каменяра.",
    significance: "Могила Франка є однією з найвідоміших пам'яток Личаківського цвинтаря та місцем вшанування його літературної, наукової та громадської спадщини.",
    images: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/1/18/IwanFrankoLwow.jpg",
        author: "Stanisław Kosiedowski",
        license: "CC BY-SA 3.0",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:IwanFrankoLwow.jpg"
      }
    ],
    sources: [
      {
        title: "swr.lnu.edu.ua",
        url: "https://swr.lnu.edu.ua/memory/monument/view?id=4886&type=1"
      },
      {
        title: "Вікіпедія: Франко Іван Якович",
        url: "https://uk.wikipedia.org/wiki/Франко_Іван_Якович"
      }
    ]
  },
  {
    id: 1117,
    name: "Могила Михайла Грушевського",
    type: "grave",
    subtype: "Могила історика та державного діяча",
    category: "independence",
    person: "Михайло Грушевський",
    city: "Київ",
    region: "Київська область",
    country: "Україна",
    lat: 50.418599,
    lng: 30.510178,
    year: 1934,
    eraYear: 1866,
    eraYearEnd: 1934,
    eventDate: "29 листопада 1934 року",
    description: "Місце поховання українського історика, академіка та першого голови Української Центральної Ради Михайла Грушевського.",
    history: "Михайло Грушевський помер 24 листопада 1934 року в Кисловодську. Його тіло перевезли до Києва. Похорон відбувся 29 листопада 1934 року. Могила розташована на Байковому кладовищі, ділянка №8. Поховання має статус пам'ятки історії національного значення.",
    significance: "Грушевський був одним із ключових українських істориків і політичних діячів початку XX століття. Його наукові праці та діяльність Центральної Ради мають фундаментальне значення для історії української державності.",
    images: [
      {
        url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6b/%D0%9C%D0%BE%D0%B3%D0%B8%D0%BB%D0%B0_%D0%93%D1%80%D1%83%D1%88%D0%B5%D0%B2%D1%81%D1%8C%D0%BA%D0%BE%D0%B3%D0%BE_%D0%9C._%D0%A1.%2C_%D1%83%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D1%81%D1%8C%D0%BA%D0%BE%D0%B3%D0%BE_%D1%96%D1%81%D1%82%D0%BE%D1%80%D0%B8%D0%BA%D0%B0%2C_%D0%BF%D0%B5%D1%80%D1%88%D0%BE%D0%B3%D0%BE_%D0%B3%D0%BE%D0%BB%D0%BE%D0%B2%D0%B8_%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D1%81%D1%8C%D0%BA%D0%BE%D1%97_%D0%A6%D0%B5%D0%BD%D1%82%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D1%97_%D0%A0%D0%B0%D0%B4%D0%B8.JPG/1280px-thumbnail.jpg",
        author: "Kiyanka",
        license: "CC BY-SA 3.0",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:%D0%9C%D0%BE%D0%B3%D0%B8%D0%BB%D0%B0_%D0%93%D1%80%D1%83%D1%88%D0%B5%D0%B2%D1%81%D1%8C%D0%BA%D0%BE%D0%B3%D0%BE_%D0%9C._%D0%A1.,_%D1%83%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D1%81%D1%8C%D0%BA%D0%BE%D0%B3%D0%BE_%D1%96%D1%81%D1%82%D0%BE%D1%80%D0%B8%D0%BA%D0%B0,_%D0%BF%D0%B5%D1%80%D1%88%D0%BE%D0%B3%D0%BE_%D0%B3%D0%BE%D0%BB%D0%BE%D0%B2%D0%B8_%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D1%81%D1%8C%D0%BA%D0%BE%D1%97_%D0%A6%D0%B5%D0%BD%D1%82%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D1%97_%D0%A0%D0%B0%D0%B4%D0%B8.JPG"
      }
    ],
    sources: [
      {
        title: "hrushevsky.history.org.ua",
        url: "https://hrushevsky.history.org.ua/item/0006211"
      },
      {
        title: "Вікіпедія: Грушевський Михайло Сергійович",
        url: "https://uk.wikipedia.org/wiki/Грушевський_Михайло_Сергійович"
      }
    ]
  },
  {
    id: 1955,
    name: "Національний музей історії України",
    type: "museum",
    subtype: "Національний історичний музей",
    category: "folk",
    person: "Історія України",
    city: "Київ",
    region: "Київська область",
    country: "Україна",
    lat: 50.4547,
    lng: 30.5266,
    year: 1899,
    eraYear: 1899,
    eventDate: "Заснований у 1899 році",
    description: "Один із провідних історичних музеїв України, розташований на Старокиївській горі біля Десятинної церкви. Його колекції охоплюють історію українських земель від найдавніших часів до сучасності.",
    history: "Музей виник наприкінці XIX століття як Київський художньо-промисловий і науковий музей. Його сучасна будівля на вулиці Володимирській була споруджена на початку XX століття. У фондах зберігаються археологічні знахідки, стародавні прикраси, зброя, монети, документи, рукописи, предмети побуту та мистецтва.",
    significance: "Музей є важливим центром збереження матеріальної історії України. Його археологічні, етнографічні та історичні колекції дозволяють простежити розвиток суспільства на українських землях протягом тисячоліть.",
    images: [
      {
        url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/49/Building_of_National_Museum_of_the_History_of_Ukraine_%282018-10-13%29.jpg/1280px-Building_of_National_Museum_of_the_History_of_Ukraine_%282018-10-13%29.jpg",
        author: "Oleh Kushch",
        license: "CC BY-SA 4.0",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Building_of_National_Museum_of_the_History_of_Ukraine_(2018-10-13).jpg"
      }
    ],
    sources: [
      {
        title: "nmiu.org",
        url: "https://nmiu.org/"
      }
    ]
  },
  {
    id: 1956,
    name: "Національний музей Тараса Шевченка",
    type: "museum",
    subtype: "Літературно-меморіальний музей",
    category: "literature",
    person: "Тарас Шевченко",
    city: "Київ",
    region: "Київська область",
    country: "Україна",
    lat: 50.4458,
    lng: 30.5104,
    year: 1940,
    eraYear: 1814,
    eraYearEnd: 1861,
    eventDate: "Заснований у 1940 році",
    description: "Музей присвячений життю, творчості та культурній спадщині Тараса Григоровича Шевченка. Тут зберігаються особисті речі поета, його рукописи, документи, малярські роботи та видання творів.",
    history: "Музейна колекція формувалася на основі матеріалів про життя і творчість Шевченка, зокрема предметів, переданих із приватних зібрань та інших установ. Експозиція знайомить із дитинством поета, його викупом із кріпацтва, навчанням у Петербурзі, творчістю, засланням та останніми роками життя.",
    significance: "Це один із головних осередків збереження спадщини Тараса Шевченка. Музей допомагає досліджувати його не лише як поета, а і як художника, мислителя та важливу постать українського національного руху.",
    images: [
      {
        url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fc/%D0%91%D1%83%D0%BB%D1%8C%D0%B2%D0%B0%D1%80_%D0%A2%D0%B0%D1%80%D0%B0%D1%81%D0%B0_%D0%A8%D0%B5%D0%B2%D1%87%D0%B5%D0%BD%D0%BA%D0%BE_12_%D0%9A%D0%B8%D0%B5%D0%B2_2012_01.JPG/1280px-%D0%91%D1%83%D0%BB%D1%8C%D0%B2%D0%B0%D1%80_%D0%A2%D0%B0%D1%80%D0%B0%D1%81%D0%B0_%D0%A8%D0%B5%D0%B2%D1%87%D0%B5%D0%BD%D0%BA%D0%BE_12_%D0%9A%D0%B8%D0%B5%D0%B2_2012_01.JPG",
        author: "AMY",
        license: "CC BY-SA 3.0",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:%D0%91%D1%83%D0%BB%D1%8C%D0%B2%D0%B0%D1%80_%D0%A2%D0%B0%D1%80%D0%B0%D1%81%D0%B0_%D0%A8%D0%B5%D0%B2%D1%87%D0%B5%D0%BD%D0%BA%D0%BE_12_%D0%9A%D0%B8%D0%B5%D0%B2_2012_01.JPG"
      }
    ],
    sources: [
      {
        title: "museumshevchenko.org.ua",
        url: "https://museumshevchenko.org.ua/"
      },
      {
        title: "Вікіпедія: Шевченко Тарас Григорович",
        url: "https://uk.wikipedia.org/wiki/Шевченко_Тарас_Григорович"
      }
    ]
  },
  {
    id: 1957,
    name: "Національний музей мистецтв імені Богдана та Варвари Ханенків",
    type: "museum",
    subtype: "Художній музей",
    category: "art",
    person: "Богдан Ханенко та Варвара Ханенко",
    city: "Київ",
    region: "Київська область",
    country: "Україна",
    lat: 50.4388,
    lng: 30.5147,
    year: 1919,
    eraYear: 1919,
    eventDate: "Музей заснований у 1919 році",
    description: "Один із найвідоміших художніх музеїв України, створений на основі колекції меценатів Богдана та Варвари Ханенків. Музей розташований у двох історичних будівлях на вулиці Терещенківській.",
    history: "Богдан і Варвара Ханенки протягом життя збирали твори мистецтва різних країн та епох. Після смерті Богдана Ханенка Варвара передала їхню колекцію Києву разом із будинком та іншими цінностями. У зібранні представлені твори західноєвропейського живопису, візантійські ікони, японська графіка, китайське мистецтво та інші цінні експонати.",
    significance: "Музей є одним із найважливіших центрів збереження світового мистецтва в Україні. Його історія також є прикладом масштабного меценатства та приватного колекціонування.",
    images: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Khanenko_Museum_01.png",
        author: "Museum of Bogdan and Varvara Khanenko",
        license: "Public domain",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Khanenko_Museum_01.png"
      }
    ],
    sources: [
      {
        title: "khanenko.museum",
        url: "https://khanenko.museum/"
      }
    ]
  },
  {
    id: 1958,
    name: "Музей гетьманства",
    type: "museum",
    subtype: "Історичний музей",
    category: "cossack",
    person: "Богдан Хмельницький, Іван Мазепа, Пилип Орлик, Павло Скоропадський",
    city: "Київ",
    region: "Київська область",
    country: "Україна",
    lat: 50.467077,
    lng: 30.520465,
    year: 1993,
    eraYear: 1993,
    eventDate: "Заснований у 1993 році",
    description: "Музей, присвячений історії українського козацтва, Гетьманщини та гетьманської державної традиції. Розташований у старовинній кам'яниці на Подолі, відомій як Будинок Мазепи.",
    history: "Музей було засновано в незалежній Україні у 1993 році. Його експозиції розповідають про добу Богдана Хмельницького, державотворчу діяльність Івана Мазепи, спадщину Пилипа Орлика, а також Українську Державу Павла Скоропадського. У колекції представлені документи, козацька зброя, печатки, предмети побуту та матеріали про українських гетьманів.",
    significance: "Музей зберігає пам'ять про українську козацьку державність та розвиток традицій українського державотворення.",
    images: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Budynok_Mazepy_Kyiv.jpg",
        author: "Невідомий автор",
        license: "CC BY-SA 3.0",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Budynok_Mazepy_Kyiv.jpg"
      }
    ],
    sources: [
      {
        title: "hetmanmuseum.com.ua",
        url: "https://hetmanmuseum.com.ua/"
      }
    ]
  },
  {
    id: 1118,
    name: "Львівський історичний музей",
    type: "museum",
    subtype: "Історичний музей",
    category: "folk",
    person: "Історія Львова та України",
    city: "Львів",
    region: "Львівська область",
    country: "Україна",
    lat: 49.841944,
    lng: 24.032778,
    year: 1892,
    eraYear: 1892,
    eventDate: "22 грудня 1892 року",
    description: "Один із найстаріших історичних музеїв України. Його колекції охоплюють історію Львова, Галичини та українських земель від найдавніших часів до сучасності.",
    history: "Історія музею почалася 22 грудня 1892 року, коли львівський магістрат оголосив про створення Історичного музею міста Львова. У 1908 році для музейних потреб придбали кам'яницю Корнякта на площі Ринок, 6. Ця будівля стала однією з найвідоміших музейних локацій Львова. У фондах музею зберігаються археологічні матеріали, зброя, монети, документи, предмети побуту та мистецтва.",
    significance: "Музей зберігає значну частину історичної спадщини Львова та регіону. Його колекція налічує близько 380 тисяч музейних предметів.",
    sources: [
      {
        title: "lhm.lviv.ua",
        url: "https://www.lhm.lviv.ua/hystory.html"
      }
    ]
  },
  {
    id: 1119,
    name: "Одеський археологічний музей НАН України",
    type: "museum",
    subtype: "Археологічний музей",
    category: "ancient",
    person: "Археологічна спадщина Північного Причорномор'я",
    city: "Одеса",
    region: "Одеська область",
    country: "Україна",
    lat: 46.485,
    lng: 30.743889,
    year: 1825,
    eraYear: 1825,
    eventDate: "Заснований у 1825 році",
    description: "Найстаріший археологічний музей України. Його колекції розповідають про історію Північного Причорномор'я від кам'яної доби до середньовіччя.",
    history: "Музей заснований у 1825 році. У його зібраннях представлені матеріали трипільської, скіфської, сарматської, грецької та інших стародавніх культур. Окрему цінність становлять колекції античних старожитностей, єгипетських предметів, монет і скульптур. Перед будівлею музею розташована копія знаменитої скульптурної композиції «Лаокоон».",
    significance: "Музей є одним із провідних наукових центрів дослідження стародавньої історії Північного Причорномор'я. Його колекції мають значення для вивчення античних міст Півдня України.",
    images: [
      {
        url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/89/51-101-0551_Odesa_Lanzheronivska_DSC_0287.jpg/1280px-51-101-0551_Odesa_Lanzheronivska_DSC_0287.jpg",
        author: "Haidamac",
        license: "CC BY-SA 4.0",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:51-101-0551_Odesa_Lanzheronivska_DSC_0287.jpg"
      }
    ],
    sources: [
      {
        title: "museum.mincult.gov.ua",
        url: "https://museum.mincult.gov.ua/museums/odeskyy-arkheolohichnyy-muzey-natsionalnoyi-akademiyi-nauk-ukrayiny"
      }
    ]
  },
  {
    id: 1120,
    name: "Харківський історичний музей імені Миколи Сумцова",
    type: "museum",
    subtype: "Історичний музей",
    category: "folk",
    person: "Микола Сумцов",
    city: "Харків",
    region: "Харківська область",
    country: "Україна",
    lat: 49.9923,
    lng: 36.2305,
    year: 1920,
    eraYear: 1920,
    eventDate: "21 січня 1920 року",
    description: "Один із найбільших історичних музеїв України, присвячений історії Харкова, Слобожанщини та українських земель.",
    history: "Музей веде свою історію від Музею Слобідської України імені Григорія Сковороди, заснованого 21 січня 1920 року за участю академіка Миколи Сумцова. До його колекції увійшли матеріали попередніх музейних установ Харкова. У 2015 році закладу присвоїли ім'я Миколи Сумцова. Сучасна будівля музею — колишній Харківський міський ломбард, споруджений у 1908 році.",
    significance: "Фонди музею налічують понад 330 тисяч предметів: археологічні знахідки, документи, твори мистецтва, зброю та предмети повсякденного життя. Це один із головних осередків дослідження історії Слобожанщини.",
    images: [
      {
        url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ad/Kharkiv_Historical_Museum_1.JPG/1280px-Kharkiv_Historical_Museum_1.JPG",
        author: "Kharkivian (Сергій Петров)",
        license: "CC BY-SA 3.0",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Kharkiv_Historical_Museum_1.JPG"
      }
    ],
    sources: [
      {
        title: "museum.kh.ua",
        url: "https://museum.kh.ua/"
      }
    ]
  },
  {
    id: 1121,
    name: "Полтавський краєзнавчий музей імені Василя Кричевського",
    type: "museum",
    subtype: "Краєзнавчий музей",
    category: "folk",
    person: "Василь Кричевський",
    city: "Полтава",
    region: "Полтавська область",
    country: "Україна",
    lat: 49.583476,
    lng: 34.561381,
    year: 1891,
    eraYear: 1891,
    eventDate: "Заснований у 1891 році",
    description: "Один із найвідоміших регіональних музеїв України, розташований у будівлі колишнього Полтавського губернського земства — видатній пам'ятці українського архітектурного модерну.",
    history: "Музей заснований у 1891 році як природничо-історичний музей Полтавського губернського земства. Важливу роль у створенні його колекцій відіграв учений Василь Докучаєв. Будівлю музею спроєктував архітектор і художник Василь Кричевський. Споруда стала одним із найвідоміших прикладів українського архітектурного стилю.",
    significance: "Музей зберігає природничу, археологічну, етнографічну та історичну спадщину Полтавщини. Його будівля є важливим зразком українського архітектурного модерну.",
    images: [
      {
        url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d6/%D0%91%D1%83%D0%B4%D0%B8%D0%BD%D0%BE%D0%BA_%D0%B7%D0%B5%D0%BC%D1%81%D1%82%D0%B2%D0%B0_P1230868_%D0%BF%D0%BB._%D0%9A%D0%BE%D0%BD%D1%81%D1%82%D0%B8%D1%82%D1%83%D1%86%D1%96%D1%97%2C_2.jpg/1280px-%D0%91%D1%83%D0%B4%D0%B8%D0%BD%D0%BE%D0%BA_%D0%B7%D0%B5%D0%BC%D1%81%D1%82%D0%B2%D0%B0_P1230868_%D0%BF%D0%BB._%D0%9A%D0%BE%D0%BD%D1%81%D1%82%D0%B8%D1%82%D1%83%D1%86%D1%96%D1%97%2C_2.jpg",
        author: "Posterrr",
        license: "CC BY-SA 4.0",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:%D0%91%D1%83%D0%B4%D0%B8%D0%BD%D0%BE%D0%BA_%D0%B7%D0%B5%D0%BC%D1%81%D1%82%D0%B2%D0%B0_P1230868_%D0%BF%D0%BB._%D0%9A%D0%BE%D0%BD%D1%81%D1%82%D0%B8%D1%82%D1%83%D1%86%D1%96%D1%97,_2.jpg"
      }
    ],
    sources: [
      {
        title: "pkm.poltava.ua",
        url: "https://www.pkm.poltava.ua/uk/museum_history"
      }
    ]
  },
  {
    id: 1122,
    name: "Національний музей у Львові імені Андрея Шептицького",
    type: "museum",
    subtype: "Національний художній музей",
    category: "art",
    person: "Андрей Шептицький",
    city: "Львів",
    region: "Львівська область",
    country: "Україна",
    lat: 49.8412,
    lng: 24.0265,
    year: 1905,
    eraYear: 1905,
    eraYearEnd: 1913,
    eventDate: "Заснований у 1905 році; переданий українському народові у 1913 році",
    description: "Один із найбільших художніх музеїв України, що зберігає виняткову колекцію українського сакрального мистецтва, іконопису, рукописів, графіки та живопису.",
    history: "Музей заснований митрополитом Андреєм Шептицьким у 1905 році як приватна фундація під назвою «Церковний музей». 13 грудня 1913 року його урочисто передали в дар українському народові. Зібрання музею поступово розширювалося та стало одним із найважливіших центрів дослідження українського мистецтва.",
    significance: "Музей зберігає унікальні пам'ятки української культури, зокрема давній іконопис, сакральне мистецтво та твори українських художників. Його колекції мають національне та міжнародне значення.",
    images: [
      {
        url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/44/%D0%9B%D1%8C%D0%B2%D1%96%D0%B2_%D0%A1%D0%B2%D0%BE%D0%B1%D0%BE%D0%B4%D0%B8_20.jpg/1280px-%D0%9B%D1%8C%D0%B2%D1%96%D0%B2_%D0%A1%D0%B2%D0%BE%D0%B1%D0%BE%D0%B4%D0%B8_20.jpg",
        author: "Wereskowa",
        license: "CC BY-SA 4.0",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:%D0%9B%D1%8C%D0%B2%D1%96%D0%B2_%D0%A1%D0%B2%D0%BE%D0%B1%D0%BE%D0%B4%D0%B8_20.jpg"
      }
    ],
    sources: [
      {
        title: "nml.com.ua",
        url: "https://nml.com.ua/"
      }
    ]
  },
  {
    id: 1123,
    name: "Музей народної архітектури та побуту у Львові імені Климентія Шептицького",
    type: "museum",
    subtype: "Музей просто неба",
    category: "folk",
    person: "Климентій Шептицький",
    city: "Львів",
    region: "Львівська область",
    country: "Україна",
    lat: 49.8695,
    lng: 24.0556,
    year: 1971,
    eraYear: 1971,
    eventDate: "Заснований у 1971 році",
    description: "Відомий як Шевченківський гай або Львівський скансен. Музей просто неба представляє традиційну архітектуру, побут і культуру західних регіонів України.",
    history: "Музей заснований у 1971 році. На його території площею близько 36,6 гектара розміщено понад 100 архітектурних об'єктів, перевезених із різних куточків Західної України. Серед них — дерев'яні церкви, дзвіниці, селянські хати, господарські споруди та традиційні садиби. Експозиція представляє Бойківщину, Лемківщину, Гуцульщину, Буковину, Покуття, Поділля та інші етнографічні регіони.",
    significance: "Музей зберігає унікальні зразки дерев'яної народної архітектури та сакрального мистецтва. Його колекція дерев'яних церков є однією з найцінніших музейних збірок такого типу в Україні.",
    images: [
      {
        url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bd/%D0%9C%D1%83%D0%B7%D0%B5%D0%B9_%D0%BD%D0%B0%D1%80%D0%BE%D0%B4%D0%BD%D0%BE%D1%97_%D0%B0%D1%80%D1%85%D1%96%D1%82%D0%B5%D0%BA%D1%82%D1%83%D1%80%D0%B8_%D1%82%D0%B0_%D0%BF%D0%BE%D0%B1%D1%83%D1%82%D1%83_%D1%83_%D0%9B%D1%8C%D0%B2%D0%BE%D0%B2%D1%96._-_panoramio_%2811%29.jpg/1280px-%D0%9C%D1%83%D0%B7%D0%B5%D0%B9_%D0%BD%D0%B0%D1%80%D0%BE%D0%B4%D0%BD%D0%BE%D1%97_%D0%B0%D1%80%D1%85%D1%96%D1%82%D0%B5%D0%BA%D1%82%D1%83%D1%80%D0%B8_%D1%82%D0%B0_%D0%BF%D0%BE%D0%B1%D1%83%D1%82%D1%83_%D1%83_%D0%9B%D1%8C%D0%B2%D0%BE%D0%B2%D1%96._-_panoramio_%2811%29.jpg",
        author: "Дмитрий Ванькевич",
        license: "CC BY-SA 3.0",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:%D0%9C%D1%83%D0%B7%D0%B5%D0%B9_%D0%BD%D0%B0%D1%80%D0%BE%D0%B4%D0%BD%D0%BE%D1%97_%D0%B0%D1%80%D1%85%D1%96%D1%82%D0%B5%D0%BA%D1%82%D1%83%D1%80%D0%B8_%D1%82%D0%B0_%D0%BF%D0%BE%D0%B1%D1%83%D1%82%D1%83_%D1%83_%D0%9B%D1%8C%D0%B2%D0%BE%D0%B2%D1%96._-_panoramio_(11).jpg"
      }
    ],
    sources: [
      {
        title: "lvivskansen.org",
        url: "https://lvivskansen.org/pro-muzej/"
      }
    ]
  },
  {
    id: 1124,
    name: "Закарпатський музей народної архітектури та побуту",
    type: "museum",
    subtype: "Музей просто неба",
    category: "folk",
    person: "Народна культура Закарпаття",
    city: "Ужгород",
    region: "Закарпатська область",
    country: "Україна",
    lat: 48.6215,
    lng: 22.3055,
    year: 1970,
    eraYear: 1970,
    eventDate: "Відкритий 27 червня 1970 року",
    description: "Ужгородський скансен — один із перших музеїв просто неба в Україні. Він відтворює традиційне закарпатське село з житловими будинками, господарськими спорудами, церквою та іншими архітектурними пам'ятками.",
    history: "Музей відкрили для відвідувачів у червні 1970 року на схилі Замкової гори поруч з Ужгородським замком. Експозиція відображає традиційну архітектуру різних етнографічних груп Закарпаття: долинян, бойків і гуцулів, а також угорського та румунського населення краю. Тут представлені садиби, дерев'яна церква, дзвіниця, школа, кузня, млин і корчма.",
    significance: "Музей зберігає багатокультурну спадщину Закарпаття та демонструє особливості народної архітектури й побуту різних етнічних спільнот регіону.",
    images: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/1/17/Panorama_uschhorod_museum.jpg",
        author: "Elya",
        license: "CC BY-SA 3.0",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Panorama_uschhorod_museum.jpg"
      }
    ],
    sources: [
      {
        title: "uzhhorod-skansen.com",
        url: "https://www.uzhhorod-skansen.com/"
      }
    ]
  },
  {
    id: 1125,
    name: "Музей народної архітектури та побуту Середньої Наддніпрянщини",
    type: "museum",
    subtype: "Музей просто неба",
    category: "folk",
    person: "Народна культура Середньої Наддніпрянщини",
    city: "Переяслав",
    region: "Київська область",
    country: "Україна",
    lat: 50.0594,
    lng: 31.4783,
    year: 1964,
    eraYear: 1964,
    eventDate: "Створення розпочалося у 1964 році",
    description: "Один із перших музеїв просто неба в Україні. На території відтворено традиційне українське село Середньої Наддніпрянщини з житловими будинками, церквами, вітряками, майстернями та господарськими спорудами.",
    history: "Створення музею розпочалося у 1964 році на Татарській горі в Переяславі. Його концепція передбачає відтворення еволюції українського житла та сільського побуту від найдавніших часів до XX століття. На території розташовано численні архітектурні пам'ятки XVII–XIX століть, традиційні садиби, ремісничі майстерні, вітряки та дерев'яні церкви. Музей є частиною Національного історико-етнографічного заповідника «Переяслав».",
    significance: "Комплекс дозволяє досліджувати традиційну архітектуру, ремесла, господарство та повсякденне життя населення Середньої Наддніпрянщини.",
    images: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Windmill_-_Museum_of_folk_architecture_and_way_of_life_of_Middle_Naddnipryanschina.jpg",
        author: "Uk-Kamelot",
        license: "CC BY-SA 3.0",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Windmill_-_Museum_of_folk_architecture_and_way_of_life_of_Middle_Naddnipryanschina.jpg"
      }
    ],
    sources: [
      {
        title: "niez.com.ua",
        url: "https://niez.com.ua/museums/about-museum/681"
      }
    ]
  },
  {
    id: 1126,
    name: "Чернівецький обласний музей народної архітектури та побуту",
    type: "museum",
    subtype: "Музей просто неба",
    category: "folk",
    person: "Народна культура Буковини",
    city: "Чернівці",
    region: "Чернівецька область",
    country: "Україна",
    lat: 48.2884,
    lng: 25.9817,
    year: 1977,
    eraYear: 1977,
    eraYearEnd: 1986,
    eventDate: "Заснований у 1977 році; відкритий для відвідувачів у 1986 році",
    description: "Етнографічний музей просто неба, який відтворює традиційне буковинське село XIX — першої половини XX століття.",
    history: "Музей заснований у 1977 році, а першу експозицію відкрили для відвідувачів у липні 1986 року. На території представлені житлові та господарські споруди, церква, дзвіниця, кузня, корчма, сільська управа та інші об'єкти. Будівлі перевезені з різних районів Буковини й облаштовані відповідно до традиційного сільського середовища.",
    significance: "Музей зберігає матеріальну спадщину Буковини, демонструє регіональні особливості дерев'яного будівництва, традиційного одягу, ремесел і побуту.",
    images: [
      {
        url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/55/%D0%A1%D0%B0%D0%B4%D0%B8%D0%B1%D0%B0_%D1%81%D0%B5%D0%BB%D1%8F%D0%BD%D0%B8%D0%BD%D0%B0-%D0%B1%D0%B0%D0%B3%D0%B0%D1%87%D0%B0_%D0%B2_%D0%A7%D0%B5%D1%80%D0%BD%D1%96%D0%B2%D0%B5%D1%86%D1%8C%D0%BA%D0%BE%D0%BC%D1%83_%D1%81%D0%BA%D0%B0%D0%BD%D1%81%D0%B5%D0%BD%D1%96.jpg/1280px-%D0%A1%D0%B0%D0%B4%D0%B8%D0%B1%D0%B0_%D1%81%D0%B5%D0%BB%D1%8F%D0%BD%D0%B8%D0%BD%D0%B0-%D0%B1%D0%B0%D0%B3%D0%B0%D1%87%D0%B0_%D0%B2_%D0%A7%D0%B5%D1%80%D0%BD%D1%96%D0%B2%D0%B5%D1%86%D1%8C%D0%BA%D0%BE%D0%BC%D1%83_%D1%81%D0%BA%D0%B0%D0%BD%D1%81%D0%B5%D0%BD%D1%96.jpg",
        author: "Dmytro37",
        license: "CC BY-SA 3.0",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:%D0%A1%D0%B0%D0%B4%D0%B8%D0%B1%D0%B0_%D1%81%D0%B5%D0%BB%D1%8F%D0%BD%D0%B8%D0%BD%D0%B0-%D0%B1%D0%B0%D0%B3%D0%B0%D1%87%D0%B0_%D0%B2_%D0%A7%D0%B5%D1%80%D0%BD%D1%96%D0%B2%D0%B5%D1%86%D1%8C%D0%BA%D0%BE%D0%BC%D1%83_%D1%81%D0%BA%D0%B0%D0%BD%D1%81%D0%B5%D0%BD%D1%96.jpg"
      }
    ],
    sources: [
      {
        title: "skansen.cv.ua",
        url: "https://www.skansen.cv.ua/index.php/uk/"
      }
    ]
  }
]

export default monuments
