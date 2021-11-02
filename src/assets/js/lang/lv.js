/*
 * BEEP - Translation - Latvian
 * Author: Guntis Laurins (guntis.laurins@gmail.com)
 *
 */
const translations = {
  /* Date picker */
  monthsFull: [
    'Janvāris',
    'Februāris',
    'Marts',
    'Aprīlis',
    'Maijs',
    'Jūnijs',
    'Julijs',
    'Augusts',
    'Septembris',
    'Oktobris',
    'Novembris',
    'Decembris',
  ],
  monthsShort: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'Mai',
    'Jūn',
    'Jul',
    'Aug',
    'Sep',
    'Okt',
    'Nov',
    'Dec',
  ],
  Today: 'Šodien',
  Clear: 'tīrs',
  Close: 'Ciet',
  firstDay: 1,
  format: 'dddd d mmmm yyyy',

  /* main */
  Website: 'mājas lapa',
  Feedback: 'Atgriezeniskā saite',
  Feedback_mail_header: 'Atgriezeniskā saite',
  Feedback_mail_body:
    'Sveiki,%0D%0A%0D%0A Atgriezeniskā saite.%0D%0A%0D%0AI Atklājās tas:%0D%0A%0D%0Atieši pirms tam kad, darīju :%0D%0A%0D%0Aekrāns izskatījās tieši tāds (Lūdzu iekļaujiet attēla šāviņu):%0D%0A%0D%0A%0D%0A%0D%0A',
  Diagnostic_info: 'Diagnostikas informācija (programmatūras kļūdas gadījumā):%0D%0A',
  back: 'Atpakaļ',
  menu: 'Izvēlne',
  lighting: 'Zibspūldze',
  camera: 'Kamera',
  weather: 'Laikapstākļi',
  sensors: 'Iekārtas',

  no_valid_authentication: 'Nav saņemta derīga autentifikācijas informācija',
  succesfully_saved: 'Veiksmīgi saglabāts',

  switch_language: 'Pārslēgt valodas',
  Delete: 'Izdzēst',
  Search: 'Meklēt...',

  /* user error messages */
  User: 'Lietotājs',
  User_data: 'Lietotāja dati',
  user_data: 'lietotāja dati',
  updated: 'atjaunināts',
  delete_complete_account:
    'Vai esi drošs, ka vēlies izdzēst visus lietotāja datus, iekļaujot reģistrētos stropus un inspekcijas. Tas būs neatgriezeniski.',
  username_is_required: 'Lūdzu ievadiet lietotāja vārdu',
  username_already_exists: 'tāds lietotāja vārds jau eksistē',
  password_is_required: 'Lūdzu ievadiet paroli',
  email_is_required: 'lūdzu ievadiet epasta adresi',
  email_already_exists: 'tāda epasta drese jau ir lietošanā',
  policy_accepted_is_required:
    'Jums vēl jāapstiprina lietošanas noteikumi',

  already_registered: 'Esmu jau reģistrējies lietotājs',
  invalid_user: 'Nezināms lietotāja vārds, vai nepareiza parole',
  no_password_match: 'Ievadītās paroles nesakrīt',
  invalid_token: 'Nekorekts kods',

  no_valid_email: 'Nekorekta epasta adrese',

  empty_fields: 'Lūdzu aizpildiet visus informācijas lauciņus',
  match_passwords: 'Paroles nesakrīt',

  succesfully_registered: 'Jūs esat veiksmīgi reģistrējies.',
  authentication_failed: 'Neizdevās autentificēties',

  no_valid_input_received: 'Datus neizdodas saglabāt, nav saņemts korekts ieraksts.',

  remove_all_settings: 'Noņemt visus iestatījumus',
  remove_apiary: 'Noņemt Dravu',
  remove_hive: 'Noņemt stropu',
  remove_inspection: 'Noņemt pārbaudi ',

  Error: 'Kļūda',
  Warning: 'Brīdinājums',
  first_remove_hives:
    'Uzmanību: Dravā vēl ir reģistrēti stropi. Jūs varat saglabāt specifisku stropu un tās reģistrētās pārbaudes, pārvietojot tās uz citu dravu. Ja turpināsies ar datu izdzēšanu, tiks izdzēsti visi reģistrētie stropi un tās pārbaudes, kas atrodas šajā dravā.',

  Date: 'Datums',
  ok: 'Labi',
  previous: 'Iepriekšējais',
  prev: 'iepriekš',
  next: 'Nākamais',
  add: 'Pievienot',
  create_new: 'Izveidot jaunu',
  New: 'Jauns',

  warning: 'Brīdinājums',

  apply: 'Apstiprināt',
  Cancel: 'Atcelt',
  automatic: 'Automātiski',
  manually: 'Manuāli',
  on: 'Ieslēgts',
  off: 'Izslēgts',

  /* login */
  login_title: 'Lietotāja dati',
  login: 'Lietotājs',
  back_to_login: 'atpakaļ uz lietotāja datiem',
  forgot_password: 'Aizmirsāt paroli',

  username: 'Lietotāja vārds',
  password: 'Parole',
  confirm_password: 'Apstipriniet paroli',
  email: 'E-pasts',
  token: 'Kods',

  create_login_question: 'Vēl nav konts? Reģistrējies kā jauns lietotājs',
  create_login: 'Reģistrēties kā jauns lietotājs',
  create_login_summary: 'Izveidot jaunu lietotāja kontu',
  save: 'Saglabāt',
  save_and_return: 'Saglabāt un atgriezties',

  logout: 'Iziet no konta',
  logout_title: 'Iziet no konta kā ',
  logout_now: 'Vai tiešām velaties iziet no konta?',
  member_since: 'Lietotājs kopš',

  /* password recovery */
  password_recovery_title: 'Vai aizmirsāt jūsu paroli?',
  password_recovery_remembered: 'Ou, tagad es atcerējos savu paroli!',
  password_recovery_user: 'Lietotāja informācija',
  password_recovery_send_mail: 'Sūtīt verifikācijas kodu',
  password_recovery_code_not_received: 'Kods nesaņēmās 5 minūšu laikā?',
  password_recovery_enter_code:
    'Verivikācijas kods jau ir pieejams? Ievadiet to šeit',
  password_recovery_reset_title: 'Ievadiet jaunu paroli',
  password_recovery_reset_password: 'Mainīt paroli',
  password_recovery_reminder_success:
    'E-pasts tika nosūtīts. Nospiediet saiti Jūsu saņemtajā e-pastā, lai atjaunotu Jūsu paroli šim kontam.',
  password_recovery_reminder_summary:
    'Ievadiet Jūsu e-pasta adresi. Jūs saņemsiet e-pastu ar saiti, kur ar nākamo soli varēsiet nomainīt paroli.',

  password_recovery_reset_summary:
    'Izmantojiet kodu ko saņēmāt, lai iestatītu jaunu paroli Jūsu kontam',
  password_recovery_reset_success:
    'jūsu parole ir veiksmīgi nomainīta un Jūs esat savā kontā',

  new_password: 'Jauna Parole',
  confirm_new_password: 'Apstiprieniet jauno paroli',

  go_to_dashboard: 'iet uz manu datu pārlūku',

  /* overview */
  overview_title: 'Kopskats',
  overview: 'Kopskats',
  color: 'Krāsa',
  state: 'Ieslēgts/Izslēgts',
  connection_state: 'Savienojuma statuss',

  /* hives */
  locations_title: 'Atrašanās',
  hives_title: 'Nosaukums',
  Hive: 'Strops | Stropi',
  hive: 'strops | stropi',
  Location: 'Drava | Dravas',
  location: 'drava | Dravas',
  Name: 'Vārds',
  name: 'vārds',
  Type: 'Tips',
  type: 'tips',
  Layer: 'Daļa',
  layer: 'daļa',
  brood: 'Peru',
  honey: 'Medus',
  inspect: 'Pārbaudīt',
  inspection: 'pārbaude | pārbaudes',
  Inspection: 'Pārbaude | Pārbaudes',
  New_inspection: 'Jauna pārbaude',
  Edit_inspection: 'Labot pārbaudi',
  Actions: 'Darbības',
  Conditions: 'Apstākļi (pārbaudē)',
  edit: 'Labot',
  Hive_layer_amount: 'Korpusu skaits',
  Bee_race: 'Bišu rase',
  Birth_date: 'Dzimšanas datums',
  Color: 'Krāsa',
  Queen_colored: 'Bišu māte iekrāsota',
  Queen_clipped: 'Bišu mātei nogriezts spārns',
  Queen_fertilized: 'Bišu māte apaugļota',
  Age: 'Vecums',
  years_old: 'gadus veca',

  /* Hive check items */
  Date_of_inspection: 'Pārbaudes datums',
  action: 'Darbība',
  reminder: 'Atgādinājumi',
  remind_date: 'Atgādinājuma datums',

  overall: 'Kopumā',
  positive_impression: 'Kopējais iespaids',
  needs_attention: 'Nepieciešama uzmanība',
  notes: 'Pieraksti',
  notes_for_next_inspection:
    'Īsa atzīme priekš nākamās pārbaudes (redzams kopskatā)',
  Not_implemented_yet: 'Tas vēl nav ieviests',
  save_input_first: 'Vai vēlaties vispirms saglabāt savu ierakstu?',

  /* dashboard */
  dashboard_title: 'Datu pārlūks',
  dashboard: 'Datu pārlūks',
  measurementsError: 'Neizdodas ielādēt mērījumus, pārbaudiet tīkla savienojumu',
  last_measurement: 'Pēdējais mērījums',
  at: 'at',
  measurement_system: 'Mērījuma sistēma',
  no_data: 'Dati nav pieejami',
  no_chart_data: 'Nav dati par izvēlēto laika periodu',

  /* settings */
  General: 'Galvenā',
  Place: 'Atrašanās vieta',
  Country: 'Valsts',
  City: 'Pilsēta',
  Address: 'Adrese',
  Lattitude: 'Platuma grādi',
  Longitude: 'Garuma grādi',
  Street: 'Iela',
  Number: 'Nr.',
  Postal_code: 'Pasta Indeks',
  Description: 'Apraksts',
  Hive_settings: 'Stropa iestatījumi',
  Hive_amount: 'Stropu skaits',
  Hive_prefix: 'Stropa vārds (pirms nummura)',
  Hive_number_offset: 'stropa sākuma cipars',
  Hive_type: 'Stropa tips',
  Hive_layers: 'Stropa korpusi',
  Hive_frames: 'Rāmīšu skaits korpusā',
  Hive_color: 'Stropa krāsa',
  Queen: 'Bišu māte',
  queen: 'bišu māte',

  settings_title: 'Iestatījumi',
  settings_description: 'Sensoru iestatījumi',
  Settings: 'Iestatījumi',
  settings: 'iestatījumi',

  sensors_title: 'Iekārtas iestatījumi',
  sensors_description: 'Iekārtas status un reģistrācija',
  // sensors: 'Iekārtas',
  sensor: 'Iekārta',

  Select: 'Atzīmēt',
  Not_selected: 'Nav atzīmēts',
  Poor: 'Nabadzīgi',
  Fair: 'Pietiekoši',
  Average: 'Vidēji',
  Average_slider: 'Vidēji',
  Good: 'Labi',
  Excellent: 'Izcili',
  Low: 'Zemi',
  Medium: 'Vidēji',
  High: 'Augsti',
  Extreme: 'Ekstrēmi',

  /* colors */
  select_color: 'Atzīmēt krāsu',
  advanced: 'Papildus',

  /* sensors */
  Select_sensor: 'Atzīmēt sensoru',
  temperature: 'Temperatūras',
  t: 'Temperatūra',
  t_0: 'Temperatūra 1',
  t_1: 'Temperatūra 2',
  t_2: 'Temperatūra 3',
  t_3: 'Temperatūra 4',
  t_4: 'Temperatūra 5',
  t_5: 'Temperatūra 6',
  t_6: 'Temperatūra 7',
  t_7: 'Temperatūra 8',
  t_8: 'Temperatūra 9',
  t_9: 'Temperatūra 10',
  light: 'Saulesgaisma',
  l: 'Saulesgaisma',
  water: 'Ūdens',
  w: 'Ūdens',
  humidity: 'Mitrums',
  h: 'Mitrums',
  air_pressure: 'Gaisa spiediens',
  p: 'Gaisa spiediens',
  weight: 'Svars',
  w_v: 'Svaru sensora vērtība visi sensori',
  w_fl: 'Svaru sensora vērtība priekšā pa kreisi',
  w_fr: 'Svaru sensora vērtība priekšā pa labi',
  w_bl: 'Svaru sensora vērtība  aizmugurē pa kreisi',
  w_br: 'Svaru sensora vērtība  aizmugurē pa labi',
  weight_kg: 'Svars',
  weight_kg_corrected: 'Svars (corr)',
  weight_combined_kg: 'Svars combi',
  bat_volt: 'Baterija',
  bv: 'Baterijas spriegums',
  sound_fanning_4days: 'Skaņa 4d bites',
  s_fan_4: 'Skaņa 4d bites',
  sound_fanning_6days: 'Skaņa 6d bites',
  s_fan_6: 'Skaņa 6d bites',
  sound_fanning_9days: 'Skaņa 9d bites',
  s_fan_9: 'Skaņa 9d bites',
  sound_flying_adult: 'Flying bees',
  s_fly_a: 'Lidojošās bites',
  sound_total: 'Kopējā skaņa',
  s_tot: 'Kopējā skaņa',
  s_spl: 'Skaņas spiediena līmenis',
  bee_count_in: 'Bišu daudzums iekšā',
  bc_i: 'Bišu daudzums ielido',
  bee_count_out: 'Bišu daudzums izlido',
  bc_o: 'Bišu daudzums izlido',
  t_i: 'Temperatūra iekšā',
  rssi: 'Signāla stiprums',
  snr: 'Signāla troksnis',
  lat: 'Platuma grādi',
  lon: 'Garuma grādi',
  Sound_measurements: 'Skaņas mērījumi',
  Sensor_info: 'Sensora dati',
  s_bin098_146Hz: '098-146Hz',
  s_bin146_195Hz: '146-195Hz',
  s_bin195_244Hz: '195-244Hz',
  s_bin244_293Hz: '244-293Hz',
  s_bin293_342Hz: '293-342Hz',
  s_bin342_391Hz: '342-391Hz',
  s_bin391_439Hz: '391-439Hz',
  s_bin439_488Hz: '439-488Hz',
  s_bin488_537Hz: '488-537Hz',
  s_bin537_586Hz: '537-586Hz',
  s_bin_71_122: '071-122Hz',
  s_bin_122_173: '122-173Hz',
  s_bin_173_224: '173-224Hz',
  s_bin_224_276: '224-276Hz',
  s_bin_276_327: '276-327Hz',
  s_bin_327_378: '327-378Hz',
  s_bin_378_429: '378-429Hz',
  s_bin_429_480: '429-480Hz',
  s_bin_480_532: '480-532Hz',
  s_bin_532_583: '532-583Hz',
  s_bin_0_201: '0-201Hz',
  s_bin_201_402: '201-402Hz',
  s_bin_402_602: '402-602Hz',
  s_bin_602_803: '602-803Hz',
  s_bin_803_1004: '803-1004Hz',
  s_bin_1004_1205: '1004-1205Hz',
  s_bin_1205_1406: '1205-1406Hz',
  s_bin_1406_1607: '1406-1607Hz',
  s_bin_1607_1807: '1607-1807Hz',
  s_bin_1807_2008: '1807-2008Hz',
  icon: 'Icon',
  precipIntensity: 'Nokrišņi',
  precipProbability: 'Lietus varbūtība',
  precipType: 'Lietus tips',
  outsideTemperature: 'Āra temperatūra',
  apparentTemperature: 'Šķietamā temperatūra',
  dewPoint: 'Kušanas temperatūra',
  // humidity: 'Mitrums',
  pressure: 'Gaisa spiediens',
  windSpeed: 'Vēja ātrums',
  windGust: 'Vēja brāzmas',
  windBearing: 'Vēja rašanās',
  cloudCover: 'Mākoņu daudzums',
  uvIndex: 'UV indeks',
  visibility: 'Redzamība',
  ozone: 'Ozons',
  alarm_state: 'Signalizācijas stāvoklis',

  /* Measurements */
  Hour: 'Stunda',
  hour: 'stunda | stundas',
  day: 'Diena',
  week: 'Nedēļa',
  month: 'Mēnesis',
  year: 'Gads',

  /* settings */
  could_not_load_settings: 'Iestatījumus neizdodas ielādēt',
  offline: 'Nav savienojums',
  remote: 'Attālināti',
  connected: 'Tieši',

  yes: 'Jā',
  no: 'Nē',

  footer_text: 'Attālinātā bišu saimju uzraudzība',
  beep_foundation: 'BEEP pamati',

  Checklist: 'Saraksts | Saraksti',
  checklist: 'saraksts | saraksti',
  Checklist_items: 'Saraksta sadaļa',
  edit_hive_checklist:
    'Atzīmēt/noņemt atzīmi sarakstiem zemāk, lai pievienotu/noņemtu sadaļas no stropu kopējā pārbaudes saraksta. You can also izklāt/sakļaut un  vienkārši aizvilkt sadaļas, lai pārkārtotu sev vēlamā secībā.',

  /* user */
  Data_export: 'Eksportēt datus',
  Export_your_data:
    'Eksportēt visus datus kas ir jūsu kontā un nosūtīt e-pastu ar datiem ekscel formātā. Eksceļa failam ir dažādas tabulas kolonnas kas satur personas datus, stropi, atrašanās vieta un Pārbaudes.',

  Terms_of_use: 'Lietošanas nosacījumi',
  accept_policy:
    'Es apstiprinu lietošanas nosacījumus, kas ir saderīgi ar Eiropas privātuma likumu',
  policy_url: 'https://beep.nl/terms-of-service',
  policy_version: 'beep_terms_2018_05_25_avg_v1',
  approve_policy: 'Jūs vēl neesat apstiprinājis jaunākos lietošanas noteikumus.',

  /* weight calibration settings */
  calibrate_weight: 'Kalibrēt svarus',
  current_offset_is: 'Patreizējā nulles vērtība ir',
  calibrate_explanation:
    'Iestatiet sensora nulles vērtību atņemot patreizējo mērījuma vērtību.',
  set_as_zero_value: 'Iestatiet šīs vērtības kā nulles vērtības',
  set_weight_factor: 'Definējiet svara koeficientu',
  own_weight_kg: 'Kāds ir Jūsu svars KG?',
  start_calibration:
    'Tagad uzskāpiet uz svariem un nospiediet pogu, lai nodefinētu svara koeficientu. Izkliedējiet svaru uz platformas līdzvērtīgi.',
  currently_there_is: 'Patreiz mērījums ir',
  nothing: 'nekas',
  on_the_scale: 'uz svariem',
  calibration_started:
    'kalibrācija ir uzsākta... Gaidiet nākamo mērījumu lai izmaiņas tiktu ņemtas vērā.',
  calibration_ended: 'kalibrācija veikta veiksmīgi!',

  /* General items */
  server_down:
    'Aplikācija patreiz nav pieejama saistībā ar labošanas darbiem, Lūdzu mēģiniet vēlāk vēlreiz',
  add_to_calendar: 'Pievienot kalendāram',
  sort_on: 'Škirot pēc',
  Whats_new: 'Jauns!',
  Manual: 'Manuāli',

  Site_title: 'Bišu attālināta novērošana',

  could_not_create_user:
    'Lietotāju patreiz nevar izveidot. Atvainojiet par sagādātajām neērtībām, lūdzu mēģiniet vēlāk vēlreiz.',
  email_verified: 'jūsu e-pasta adrese ir apstiprināta.',
  email_not_verified: 'Jūsu e-pasta adrese vēl nav apstiprināta.',
  email_new_verification:
    'Spiediet uz saites, lai nosūtītu apstiprinājuma e-pastu.',
  email_verification_sent:
    'Ziņa ar apstiprinājuma saiti ir nosūtīta uz Jūsu norādīto e-pasta adresi. Spiediet uz saites jūsu e-pastā lai aktivizētu jūsu kontu un ieietu tajā.',
  email_verification_resent:
    'Jauna ziņa ar apstiprinājuma saiti ir nosūtīta uz Jūsu norādīto e-pasta adresi. Nospiediet saiti e-pastā, lai aktivizētu jūs kontu un ieietu tajā.',

  not_filled: 'ir obligāts lauks, bet nav aizpildīts',
  cannot_deselect:
    'Neizdevās izdzēst šo sadaļu, jo tā satur nepieciešamu lietu',
  Undelete: 'Atcelt dzēšanu',
  the_field: '',
  is_required: 'ir obligāts',

  No_groups: 'Nav pieejamu grupu',
  not_available_yet:
    'Vēl nav pieejams. Spiediet uz pogas augšējā labā stūrī, lai pievienotu.',
  Users: 'Lietotāji',
  member: 'biedrs | biedri',
  Member: 'Grupas biedrs | Grupas biedri',
  Invite: 'Ielūgt',
  Invited: 'Ielūgts',
  Invitation: 'Ielūgums | Ielūgumi',
  Admin: 'Administrators',
  Creator: 'Grupas īpašnieks',
  Collaborate: 'Sadarboties',
  Group: 'Sadarbības grupa | Sadarbības grupas',
  group: 'sadarbības grupa | sadarbības grupas',
  group_short: 'grupa | grupas',
  to_share:
    'Lai dalītos šajā grupā. 1 nospiesta poga = grupas dalībnieki var tikai skatīties, 2 reizes nospiesta = grupas dalībnieki var labot',
  Invitation_accepted: 'Ielūgums ir apstiprināts',
  Accept: 'Apstiprināt',
  My_shared: 'Mani izplatītie',
  invitee_name: 'Vārds',
  Remove_group:
    "Vai esi drošs, ka pilnībā vēlies izdzēst šo kopīgoto grupu visiem tās dalībniekiem",
  Detach_from_group: 'Izdzēst mani un manus stropus no šīs grupas',
  my_hive: 'Mani stropi',
  created: 'izveidoti',
  group_detached: 'Veiksmīga grupas pamešana',
  group_activated: 'Grupas ielūgums apstiprināts',
  group_explanation_1:
    '1. Izveidojiet jaunu sadarbības grupu ar saprotamu nosaukumu un īsu aprakstu',
  group_explanation_2: '2. ielūdz citus platformas lietotājus uz viņu platformā reģistrētām epasta adresēm',
  group_explanation_3:
    '3. Dalies ar speciāli atzīmētu stropu, ko varēs redzēt citi sadarbības dalībnieki',
  Filter_and_sort_on: 'Filtrēt un kārtot pēc:',

  /* TO BE TRANSLATED */
  /* New translations v2.2.0 */
  roofed: 'Vai kādai dravai ir Jumts?',
  info: 'Info',

  research: 'Pētniecība',
  start_date: 'Sākuma datums',
  end_date: 'beigu datums',
  purpose: 'pētījuma iemesls',
  institution: 'Pētniecības iestāde',
  type_of_data_used: 'Datu pielietojums',
  link: 'Links',
  Consent: 'Piekrišana',
  history: 'vēsture',
  Current_consent: 'Patreizējā piekrišana',
  consent_yes: 'Es piekrītu dalīties ar maniem datiem',
  consent_no: 'Es nepiekrītu dalīties ar maniem datiem',
  my_beep_data: 'Mani dati',
  Consent_can_only_be_set: 'Piekrišanu var mainīt tikai',
  earlier: 'agrāk',
  later: 'vēlāk',

  new_apiary_explanation: 'Izveido jaunu Dravu tikai 4 soļos',
  start_here: 'Spied šeit, lai sāktu',
  optional: 'nav obligāti',
  dimensions: 'Izmēri',
  details: 'detaļas',
  configuration: 'konfigurācija',
  adjustments: 'pielāgojumi',
  changes_queen_color: 'Labošana maina krāsu',

  Brood_box_and_frame: 'Peru telpa un rāmji',
  Hive_order: 'Stropu secība dravā',
  bb_width_cm: 'Peru telpas platums (cm)',
  bb_height_cm: 'Peru telpas augstums (cm)',
  bb_depth_cm: 'Peru telpas dziļums (cm)',
  fr_width_cm: 'Rāmju platums (cm)',
  fr_height_cm: 'Rāmju augstums (cm)',
  queen_line: 'Līnija',
  queen_tree: 'koks',
  queen_description: 'pieraksti',
  Hive_short: 'Strops | Stropi',

  Image: 'Bilde | Bildes',
  Size: 'Izmērs',
  preview: 'apskatīt',

  Inside: 'Iekšējie izmēri',
  Offset: 'Starpība',
  Multiplier: 'Reizinātājs',
  Input: 'Ievade',
  Output: 'Izvade',
  Last: 'Pēdējais',

  Export_sensor_data:
    "Eksportēt visus datus ar visaugstāko izšķirtspēju kā  .csv failu, ko iespējams atvērt ar Ekscel vai SPSS. Laika un datuma dati 'time' kolonā ir GMT laika formātā ar RFC 3339 datums-laiks standartu.",
  CSV_export_separator: 'CSV datu kolonnu atdalīšana',
  Selected_date: 'Izvēlētais laika periods',
  Sensor_measurements: 'Sensoru mērījumi',
  too_much_data:
    'Pārāk daudz datu procesēšanai, lūdzu atzīmējiet mazāku sensoru daudzumu mērījumiem, vai samaziniet periodu sākuma un beigu datumiem.',

  beep_base_explanation:
    "ja Jums ir svari (parādīti augšējā bildē), Lūdzu lietojiet applikāciju (iOS and Android) lai iestatītu savienojumu ar aplikāciju. Ja nav, tad apmeklējiet web saiti. Ja Jums ir pašam sava mērīšanas iekārta, lūdzu sūtiet mums ziņu, lai tiktu pie API apraksta.",

  sample_code_hive: 'Vispirms izvēlies stropu, lai uzģenerētu unikālu nummuru',
  sample_code_generate: 'Generēt unikālo nummuru',
  sample_code_delete: 'Dzēst unikālo nummuru',

  measurement_interval: 'intervāls',
  from_weather_service: 'no laikapstākļu pakalpojumiem',

  /* New translations v3 */
  click_hives_to_filter: 'spied uz stropiem lai filtrētu',
  for: 'priekš',
  last_visit: 'pēdējā pārbaude',
  apiary_details: 'Dravas detaļas',
  group_details: 'Grupas detaļas',
  diary: 'Žurnāls',
  data: 'Dati',
  photo: 'bilde | bildes',
  add_checklist: 'Pievienot Pārbaudes sarakstu',
  add_hive: 'Pievienot stropu',
  delete_apiary: 'Dzēst dravu',
  edit_apiary: 'Labot Dravu',
  new_apiary: 'Jauna Drava',
  delete_group: 'Dzēst grupu',
  edit_group: 'Labot grupu',
  new_group: 'Jauna Sadarbības grupa',
  verification_code: 'verifikācijas kods',
  limit_exceeded: 'Limits ir sasniegts, mēģiniet vēlāk vēlreiz',
  confirm_email_title: 'Apstipriniet Jūsu e-pastu',
  confirm_email_summary:
    "jūs esat saņēmuši verivikācijas kodu uz Jūsu e-pasta adresi. ievadiet to zemāk, lai apstiprinātu Jūsu e-pasta adresi",
  confirm: 'Apstiprināt',
  Profile: 'Profils',
  Checklist_template: 'Pārbaužu sagatave | Pārbaužu sagataves',
  Help: 'Palīdzība',
  Privacy: 'Privātums',
  FAQ: 'BUJ',
  Support: 'Atbalsts',
  no_inspections: 'Pievienot pirmo pārbaudi',
  no_results: 'Nav rezultātu',
  Hive_brood_layer: 'Peru telpa | Peru telpas',
  Hive_honey_layer: 'Medus telpa | Medus telpas',
  Hive_queen_excluder_layer: 'Bišu māšu šķirsiets | Bišu māšu šķirsieti',
  Hive_feeding_box_layer: 'Barotava | Barotavas',
  overrides_layer_colors: 'Ignorē telpu krāsu',
  drag_layers: 'Pārvieto telpas lai komplektētu stropu',
  page: 'lapa | lapas',
  not_found: 'nav atrasts',
  sorry: 'Atvaino',
  delete_layer: 'Dzēst telpu',
  not_saved_error: 'Datus nav iespējams saglabāt',
  something_wrong: 'Kaut kas atgadījās greizi',
  not_editable: 'nevar labot',
  unsaved_changes: 'Nesaglabātas izmaiņas',
  save_changes:
    'Vai esi drošs, ka vēlies pamest šo lapu? Jebkuras nesaglabātas izmaiņas būs pazaudētas.',
  no_apiaries_yet: "Jums vēl nav izveidota neviena drava",
  need_help: 'nepieciešama palīdzība?',
  Apiary_color: 'Dravas krāsa',
  Set_notification_date: 'Iestatīt atgādinājuma datumu',
  remove_image: 'Noņemt bildi',
  Total_colony_size: 'Kopējais bišu saimes izmērs',
  bee: 'bite | bites',
  with_bees: 'ar bitēm',
  change_checklist_confirm:
    'Esi drošs, ka vēlies lietot citu Pārbaudes sarakstu? Līdz šim aizpildītās vērtības tiks paturētas.',
  view: 'Skats',
  share: 'Dalīties',
  edit_details: 'Labot detaļas',
  remove_queen: 'Noņemt bišu māti',
  remove_group_short: 'Noņemt Sadarbības grupu',
  device: 'Iekārta | Iekārtas',
  click_date_to_edit: 'Spied uz datuma, lai labotu.',
  accept_policy_1: 'Es apstiprinu',
  accept_policy_2: ', ka lietošana saderīga ar Eiropas privātuma politiku',
  terms_of_use: 'Līguma nosacījumi',
  invalid_password:
    'parolei jāsatur vismaz 8 simbolus , vien mazo burtu, vienu lielo burtu, vienu ciparu un vienu speciālo simbolu (\\]{}()?\\-"!@#%&/\\,><\':;|_~`)',
  sensor_definition: 'Sensora definējums | sensora definējumi',
  measurement: 'mērījums | mērījumi',
  remove_device: 'Noņemt iekārtu',
  last_message_received: 'Pēdējā ziņa ir saņemta',
  transmission_ratio: 'Sūtīšanas ātrums',
  period: 'Periods',
  download: 'Lejupielāde',
  different_end_start: 'Beigu un sākuma datumiem ir jāatšķiras',
  later_end_start: 'Sākuma datuma jābūt agrākam par beigu datumu',
  new_email_verification_sent:
    'Ziņa ar verifikācijas saiti ir nosūtīta uz jūsu jauno e-pasta adresi. Spiediet uz saiti e-pastā lai apstiprinātu Jūsu jauno e-pasta adresi un Ieietu kontā',
  sensordef_info:
    "Sensora definējums ir domāts pārkonvertēt sensora vērtību no ienākošas vērt1ības (piemēram w_v = 1098273 => weight_kg = 62,400 kg) vai sensora kalibrēšanai (piemēram t_0 = 15.3 ° C => t_0 = 15.8 ° C). Tas ir veicam pielietojot iestatījumos starpību vai reizinātāju 'offset' un 'multiplier'. Iejas un Izejas vērtības paliek nemainīgasja starpība ir 0 un reizinātājs ir 1. Aplikācija Jums nodrošinās attiecīgo sensora definējumu sākuma iestatījumos.",
  or: 'vai',
  select_all_hives: 'Atzīmēt visus stropus',
  select_all_editable_hives: 'Atzīmēt visus labojamos Stropus',
  Alert: 'Brīdinājums | Brīdinājumi',
  alert: 'brīdinājumi | brīdiņajumi',
  remove_alert: 'Noņemt brīdinājumu',
  alerts_enabled: 'Brīdinājumi iestatīti',
  alerts_disabled: 'Brīdinājumi atiestatīti',
  edit_checklist_confirm:
    'Vai esi drošs, ka vēlies labot Parbaužu sarakstu? Jebkuras nesaglabātās izmaiņas Jūsu Pārbaudē būs pazaudētas.',
  edit_checklist_confirm_deselectedhives:
    'Vai esi drošs, ka vēlies labot Pārbaužu sarakstu? Visi nesaglabātie dati par pārbaudēm un stropu izvēli būs pazaudēti.',
  user_not_edited:
    'Lietotāja dati nav laboti. iespējams ka lietotāja dati ir identiski vai kāds no laukiem aizpildīts nekorekti. Lūdzu pārbaudi datus un mēģini vēlreiz.',
  user_not_deleted: 'Kaut kas nogāj agreizi, lietotāja dati netika izdzēsti.',
  research_consent: 'pētniecības piekrišana',
  checklist_types: 'Personas, dalīšanās, pētniecisks',
  edit_hive_checklist_no_touch:
    'Atzīmēt/noņemt atzīmi sarakstiem zemāk, lai pievienotu/noņemtu sadaļas no stropu kopējā pārbaudes saraksta. You can also izklāt/sakļaut un  vienkārši aizvilkt sadaļas, lai pārkārtotu sev vēlamā secībā izmantojot skārienekrāna iekārtu.',
  edit_hive_checklist_touch:
    'Atzīmēt/noņemt atzīmi sarakstiem zemāk, lai pievienotu/noņemtu sadaļas no stropu kopējā pārbaudes saraksta. Sadaļu kārtību pamainīt iespējams tikai web pārlūkā.',
  input_not_possible_for_bulkinspection:
    'Šī iespēja nav pieejam, ja pārbaudei ir atzīmēti vairāki stropi.',
  save_bulkinspection_confirm:
    'vai esi droš, ka vēlies saglabāt šos pārbaudes datus vairākiem stropiem uzreiz?',
  deleted_but_not_saved_devices_warning:
    "Iekārtas tiek izdzēstas pēc pogad  Saglabāt un izdzēst nospiešanas augšējā labā stūrīdevices will only be removed after clicking the 'Save and delete' button in the top right corner.",
  no_alerts: 'Nav jaunu brīdinājumu',
  alertrule: 'brīdinājuma nosacījums | Brīdinājuma nosacījumi',
  alertrule_pagetitle: 'Brīdinājuma iestatījumi',
  Measurement: 'Mērījums | Mērījumi',
  Calculation: 'Skaitļojumi',
  calculation: 'skaitļojumi',
  Alert_on_occurences: 'Kad Jūs vēlētos saņemt šo brīdinājumu?',
  Alert_on_occurences_hint:
    'Uzreiz, vai pēc tam kad tas ir noticis x reizes?',
  Direct: 'Uzreiz',
  After: 'Pēc ',
  times: ' reizēm',
  Comparator: 'Salīdzinātājs',
  comparator: 'salīdzinātājs',
  Comparison: 'Salīdzinājums',
  comparison: 'salīdzinājums',
  Threshold_value: 'Sliekšņa vērtība',
  Minimum: 'Minimums',
  Maximum: 'Maksimums',
  Derivative: 'Atvasinājums (pieaugums vai kritums)',
  Count: 'Reizes',
  Value: 'Vērtība',
  Difference: 'Starpība',
  Absolute_value: 'Absolūtā vērtība',
  Absolute_value_of_dif_explanation: '**Absolūtā vērtība atšķirībai',
  Exclude_months:
    '<strong>Deaktivizēt</strong> brīdinājumu attiecīgajos mēnešos:',
  Exclude_hours:
    '<strong>Deaktivizēt</strong> brīdinājumu attiecīgās stundās:',
  Exclude_hives:
    '<strong>Deaktivizēt</strong> brīdinājumu attiecīgajos stropos:',
  Exclude_hives_details:
    'Pēc noklusējuma brīdinājums tiks izpildīts visiem stropiem kas aprīkoti ar mērīšanas iekārtu.',
  months: 'mēneši',
  hours: 'stundas',
  delete_alertrule: 'Dzēst brīdinājuma nosacījumu',
  Active: 'Aktivizēt',
  Alert_via_email: 'Brīdināt caur e-pastu',
  Webhook_url: 'Webhook saite',
  this_field: 'Tas lauks',
  alertrule_default: 'Brīdinājuma nosacījums pēc noklusējuma | Brīdinājuma nosacījumi pēc noklusējuma',
  copy: 'Kopēt',
  Home: 'Galvenā',
  Select_default_alertrule: 'Kopēt brīdinājuma nosacījumus pēc noklusējuma',
  /* below, please keep all terms between [] as is: */
  alertrule_main_sentence:
    'Es vēlētos saņemt paziņojumu, ja [calculation] [comparison] no [measurement_quantity] [comparator] [threshold_value][measurement_unit]. Šis aprēķins tiks veikts [calculation_minutes]',
  alertrule_occurences_direct_sentence:
    ', un Es vēlētos saņemt brīdinājumu uzreiz. ',
  alertrule_occurences_indirect_sentence:
    ', bet Es vēlētos saņemt brīdinājumu tikai tad ja tas parādas [alert_on_occurences] reizes. ',
  alertrule_exclude_months_sentence:
    'Šis paziņojum stiks Deaktivizēts atzīmētajos mēnešos: [exclude_months]. ',
  alertrule_exclude_hours_sentence:
    'Šis paziņojumjs tiks Deaktivizēts atzīmētajās stundās: [exclude_hours]. ',
  alertrule_exclude_hives_sentence:
    'Šis paziņojums tiks Deaktivizēts atzīmētajos stropos: [exclude_hive_ids].',
  min: 'minimums',
  max: 'maksimums',
  ave: 'vidējais',
  der: 'atvasinājums',
  cnt: 'skaits',
  equal_to: 'ir vienāds ar',
  less_than: 'is mazāks kā',
  greater_than: 'ir lielāks kā',
  less_than_or_equal: 'ir mazāks vai vienāds ar',
  greater_than_or_equal: 'ir lielāks vai vienāds ar',
  alertrule_not_active:
    "Šis paziņojums ir Deaktivizēts. Jūs varat to aktivizēt, atzīmējot 'Aktīvs' un saglabājot izveidoto brīdinājuma komandu.",
  export_email_sent: 'E-pasts ar eksceļa failu ir nosūtīts',
  export_file_saved: 'Eksceļa fails ir saglabāts Jūsu Lejupielādes mapē',
  Updated_at: 'Atjaunināts',
  Not_yet_saved: 'Vēl nav saglabāts',
  add_own_device: 'Pievieno savu iekārtu',
  devices_info_text:
    'Lūdzu ņemiet vērā: Vai Jums ir BEEP svari? Lietojiet BEEP base app lai pievienotu Jūsu iekārtu. Tas automātiski tad parādīsies sarakstā.',
  devices_url_text: 'Šeit Jūs varat atrast vairāk informācijas lietotnē BEEP base app.',
  alert_explanation_1:
    'Ja Jums ir BEEP svari vai cita iekārta Jūs varat saņemt paziņojumus pie noteiktiem mērījuma apstākļiem. Piemēram, straujas svara samazināšanās gadījumā Spietošanas dēļ. Brīdinājumi tiks attēloti šajā aplikācijā, Jūs varat izvēlēties vai saņemt tos caur e-pastu vai tikai aplikācija.',
  alert_explanation_2:
    'Lai būtu vienkāršāk uzsākt, šeit ir izveidotas daži filtri, ko varat lietot vai pielāgot. VArat arī papildināt ar jauniem filtriem.',
  alertrules_url_text: "Ejiet uz 'Brīdinājuma Iestatījumi' lai izveidotu Jūsu piermo filtru",
  Apiary_management: 'Dravas pārvaldība',
  Move: 'Pārvietot',
  Current_apiary: 'Patreizējā drava',
  sensor_key: 'Iekārtas unikālais identifikators',
  disabled_settings: 'Manuāla iespēja labot šos iestatījumus ir noņemta.',
  Address_placeholder: 'Nummurs, Iela nosaukums, Pilsēta',
  first_create_apiary: 'Vispirms, izveidot dravu',
  Unknown: 'Nezināms',
  unknown: 'nezināms',
  research_warning:
    "Lūdzu ņemiet vērā: ja neesat saņēmuši ielūgumu , nav nepieciešams saņemt Jūsu piekrišanu dalīties ar Jūsu datiem, jo šādā situācijā jūsu dati netiks lietoti.",
  research_explanation_p1:
    'Zemāk esošais pētījumu saraksts izmanto platformu. Pēc tam, kad esat uzaicināts pētījuma projektā, Jums ir jādod sava piekrišana Jūsu datu piekļūšanai.',
  research_explanation_p2:
    'Jūs varat atteikt piekrišanu jebkurā laikā. No tā brīža un uz priekšu Jūsu dati netiks publicēti. Dati, kuriem devāt piekļuves atļauju arī paliks publiski pieejami. Jautājumus lūdzu adresēt pētniecisko projektu kontaktpersonām.',
  research_info:
    'Pirms piekrītat, lūdzu pārskatiet pētniecisko aprakstu, kas pieejams zem saites zemāk un pieprasiet papildus informāciju, ja tas ir nepieciešams.',
  save_and_delete: 'Saglabāt un izdzēst',
  drag_layers_info_text:
    'Pārvelciet telpas no kreisās puses uz nepieciešamo pozīciju stropa komplektācijā. Stropa telpu var izdzēst atzīmējot to ar nospiešanu un tad nospiežot sarkano miskastes pogu. Stropos telpas var tikt pārvilktas lai mainītus tās vietām, telpu krāsas var tikt mainītas uzspiežot uz attiecīgās telpas.',
  New_hive: 'Jauns strops',
  New_alertrule: 'Jauns brīdinājuma filtrs',
  Add_alertrule: 'Pievienot brīdinājuma filtru',
  Add_apiary: 'Pievienot dravu',
  Add_sensor_definition: 'Pievienot Sensora nosaukumu',
  Add_member: 'Pievienot pārstāvi',

  alert_rule_deleted: 'Brīdinājuma filtrs ir izdzēsts',
  new_or_edited_but_not_saved_sensor_defs_warning:
    'Sensora nosaukums tiks saglabāts vai papildināts vienīgi pēc zaļās ikonas nospiešanas sensora tabulas beigās.',
  delete_sensordef: 'Izdzēst sensora definējumu',
  delete_all_alerts: 'Izdzēst visus brīdinājumus',
  delete_all_alerts_warning:
    'Vai esat drošs, ka vēlaties izdzēst visus brīdinājumus? Tas būs neatgriezeniski.',
  delete_all_alerts_warning_filter_active:
    'Vai esat drošs, ka vēlaties izdzēst visus brīdinājumus? Brīdinājumi, kas nesakrīt ar Jūsu meklēšanas nosacījumu arī tiks izdzēsti. Tas būs neatgriezeniski.',
  already_verified: 'Esu Apstiprinājis Savu e-pastu un vēlos tikt iekšā Savā kontā',
  password_recovery_resend_mail: 'Nosūtīt jaunu apstiprinājuma kodu',
  alert_rule_created: 'Jauns brīdinājuma filtrs ir izveidots',
  select_all: 'Atzīmēt visus',
  During: 'Laika periods',
  Calculation_minutes:
    'Cik bieži Jūs vēlētos, lai notiek aprēķins?',
  Every: 'Katru ', // context: how often would you like the alert rule calculation to be performed? -> every 15 min, ..., every 24 hours etc.
  every: 'katru ',
  Calculation_minutes_short: 'Cik bieži tas tiek aprēķināts?', // for alert rule overview table header
  Alert_on_occurences_short: 'Kad tiks saņemts brīdinājums?', // for alert rule overview table header
  Disable_alert_for_this_hive: 'Deaktivizēt brīdinājumu šim stropam',
  Alert_disabled_for_this_hive: 'Brīdinājums ir deaktivizēts šim stropam',
  disabled_for_hive: 'ir deaktivizēts šim stropam', // [alert] has been disabled for the following hive
  Alert_disabled: 'Brīdinājums deaktivizēts',

  Log_data_import: 'Importēts datus',
  Log_files: 'datu fails', // Flashlogs
  Upload_date: 'Augšupielādes datums',
  Messages: 'Ziņa',
  Log_time: 'Laiks datiem',
  File_size: 'Faila izmērs',
  check_log_data: 'pārbaudīt datus', // Check_flashlog
  delete_log_file: 'Izdzēst datus', // Delete_flashlog
  commit_log_data_short: 'Importēt datus', // commit_flashlog_short
  commit_log_data: 'Importēt datus no faila uz aplikāciju: ', // commit_flashlog
  // flashlog_explanation
  import_log_data_explanation:
    "Importēt datus iespējasm arī no svaru iekārtas.",
  // flashlog_url_text
  import_log_data_url_text:
    'Šeit Jūs varat atrast materiālu plašākaam izklāstam.',
  // flashlog_support_url
  import_log_data_support_url:
    'https://beepsupport.freshdesk.com/en/support/solutions/articles/60000697129-download-beep-base-data-through-bluetooth',

  Immediately: 'Nekavējoties',
  alertrule_active_no_email_sentence:
    ', un atveru aplikāciju lai redzētu brīdinājumus.',
  alertrule_active_email_sentence:
    ', un saņemu brīdinājumus caur e-pastu. Papildus brīdinājumus iespējams redzēt arī aplikācijā.',
  First_occurence: 'Pirmais: ',
  Last_occurence: 'Pēdējais: ',
  // default alert rule names:
  Hive_stability_and_theft: 'Stropa stabilitāte',
  Temperature_sensor_defect: 'Temperatūras sensora defekts',
  Battery_low: 'Baterijai zems spriegums',
  Honey_harvest: 'Medus ienesums',
  Hive_temperature: 'Stropam zema temperatūra',
  Brood_temperature: 'Peru temperatūra zemu',
  No_measurements: 'Nav mērījumi',
  Swarm: 'Spiets',
  Food_supply_low: 'Zems barības apjoms',
  // default alert rule descriptions:
  Weight_drop_is_above_a_set_value:
    'Svara samazinājums ir virs iestatītās vērtības',
  Temperature_sensor_malfunctions: 'Temperatūras sensors nestrādā korekti',
  Battery_voltage_is_below_a_set_value:
    'baterijas spriegums ir zem iestatītās vērtības',
  Weight_increase_due_to_nectar_collection_comes_to_a_halt:
    'Svara paplielināšanās sāk beigties saistībā ar nektāra ienesuma beigām',
  Hive_temperature_drops_below_a_set_value:
    'Stropa temperatūra nokritusies zem iestatītās vērtības',
  Temperature_in_the_brood_below_a_set_value:
    'Temperatūra peru telpā nokritusies zem iestatītās vērtības',
  No_measurement_data_received_in_a_set_time_period:
    'Nav saņemti mērījuma dati noteiktā laika periodā',
  Sudden_weight_drop_triggers_alert_immediately:
    'Pēkšņi svara samazinājumi veic brīdinājumus uzreiz nekavējoties, ņemot vērā, ka datu sūtīšanas intervāls ir 15 minūtes.',
  The_hive_weight_is_below_a_set_value: 'Stropa svars ir zem iestatītās vērtības',

  minute: 'minūte | minūtes',
  upload_interval_warning_single_interval:
    'Datu pārraidīšanas intervāls Jūsu iekārtai ir | datu raidīšanas intervāls Jūsu iekārtām ir', // f.e.: ... 15 minutes
  upload_interval_warning_interval_range:
    'Datu raidīšanas intervāls ir mainīgs ', // f.e. ... 5 - 15 minutes
  not_relevant_for_immediate_calculation:
    'Neattiecas uz tūlītēju aprēķinu',
  Increase: 'Palielinājums',
  Decrease: 'Samazinājums',
  Every_hour: 'Katru stundu',
  every_hour: 'katru stundu',
  Absolute_value_of_dif: 'Izmaiņa', // context: 'Change' is an easier to understand word than 'the absolute value of the difference' between 2 values.
  In_case_of_good_connection_warning:
    '*Nekavējoties, tiklīdz mērījuma dati ir saņemti. Tas ir atkarīgs no datu sūtīšanas intervāla un cik stabils ir savienojums.',
  Alertrule_summary_title: 'Kopsavilkums',
  Alertrule_settings_title: 'Brīdinājuma filtru iestatījumiAlert rule settings',
  Alertrule_exclude_title: 'Izņemot laika periodu un stropus',
  of: 'no',

  alerts_url_text: 'Iepazīstiesties ar rakstu par Brīdinājumu filtriem',
  alerts_support_url:
    'https://beepsupport.freshdesk.com/nl/support/solutions/articles/60000706484-alerts',
}

export default translations
