const faQuestions = [
  {
    question: 'Razlika između standarde (obične) i inverter klime?',
    answer:
      'Razlika između obične split klime i inverter split klime odnosi se na način rada kompresora, što ima uticaja na efikasnost i potrošnju energije.\n' +
      'Kompresor "obične" klime radi u dva režima - ili je uključen i radi punom snagom ili je isključen. ' +
      'Za razliku od "obične" klime, kompresor inverter klime radi kontinuirano' +
      ', što mu omogućava i prilagodljivu brzinu rada, a sve ovo dovodi do smanjenja potrošnje energije, jer nema čestih ciklusa uključivanja/isključivanja. ' +
      'Iako su inverter klime obično skuplje od "običnih" klima, dugoročno mogu rezultirati uštedom energije i novca zbog svoje efikasnije upotrebe energije.',
  },
  {
    question: 'Zašto klima uređaj neće da se uključi?',
    answer:
      'Postoje dva potencijalna razloga za ovaj problem. Prvi je, ukoliko ima dovod struje proveriti ispravnost daljinskog upravljača (uglavnom baterija) ili je problem u samoj elektronici unutrašnje jedinice. Dok ukoliko nema dovod struje, klima izbaci osigurač kako ne bi došlo do većeg kvara na klima uređaju.',
  },
  {
    question: 'Zašto klima uređaj pušta vodu na unutrašnjoj jedinici?',
    answer:
      'Nekoliko razloga može uticati na pojavu ovog problema. Može biti zapušeno kondenz crevo, turbina ili filter mogu biti zaprljani ili je začepljena kadica. Takođe i ukoliko klima nije montirana u libeli ili nije izbušena rupa pod padom, postoji i mogućnost da se napravio "stomak" na crevu za odvod kondenzata.',
  },
  {
    question: 'Zašto klima uređaj duva toplo na opciji hlađenja - ne uključuje se kompresor?',
    answer:
      'Vrlo verovatno da je došlo do kvara na kompresoru spoljašnje jedinice. Takođe, postoji i opcija da klima uređaj nema gas (freon).',
  },
  {
    question: 'Zašto klima uređaj ne hladi, a kompresor na spoljašnjoj jedinici radi?',
    answer:
      'Što se ovog problema tiče, situacija je jasna. Nema gasa, odnosno freona u sistemu. To ćemo potvrditi tako što se nakače manometri  i klima uređaj pusti da radi na opciju hlađenja.',
  },
  {
    question: 'Zašto klima uređaj slabo hladi?',
    answer:
      'Na ovaj problem utiče zaprljano saće unutrašnje ili spoljašnje jedinice, kao i prljavi filteri i turbina. Takođe postoji i opcija da fali gasa (freona) u samom sistemu.',
  },
  {
    question:
      'Zašto na klima uređaju počnu da blinkaju lampice i ne može da se ugasi na daljinski?',
    answer:
      'Navedeni problem ukazuje na problem sa elektronikom ili problem sa ventilatorom i kompresorom.',
  },
  {
    question: 'Zašto klima uređaj ne greje, a kompresor radi?',
    answer:
      'Sve ukazuje da fali gasa (freona) u sistemu ili je kvar u magnetnom ventilu. Takođe postoji i opcija da je zaledilo saće.',
  },
  {
    question: 'Zašto klima uređaj stane na opciji grejanja i upali se crvena lampica?',
    answer:
      'Klima uređaj na opciji grejanja ima u određenom vremenskom intervalu proces otapanja spoljne jedinice (defrostaciju) kada se upali crvena lampica i napravi pauzu sa radom unutrašnje jedinice. U pitanju je sastavni deo rada u opciji grejanja, dakle ukoliko nije u pitanju kvar, klima uređaj će kroz 10-15 minuta ponovo početi da duva topao vazduh.',
  },
  {
    question: 'Zašto unutrašnja jedinica zvrči kada radi?',
    answer: 'Najverovatnije problem predstavlja ležaj turbine, kao i prljava turbina.',
  },
  {
    question: 'Zašto je spoljna jedinica bučna?',
    answer:
      'Nekoliko faktora može uticati na to što je bučna spoljna jedinica. Prvenstveno može biti stara i dotrajala klima u pitanju. Može biti i propali lim koji udara u kompresor. Problem mogu predstavljati i propale gumice, kao i ležaj ventilatora spoljašnje jedinice.',
  },
];

export default faQuestions;
