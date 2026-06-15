import { MedicalService } from '../models/service.model';

export const MEDICAL_SERVICES: MedicalService[] = [
  {
    id: 'free-services',
    number: '01',
    title: {
      ua: 'Безкоштовно для задекларованих пацієнтів',
      en: 'Free of charge for declared patients',
      ru: 'Бесплатно для задекларированных пациентов',
      pl: 'Bezpłatnie dla pacjentów z deklaracją',
    },
    shortDescription: {
      ua: 'Послуги та аналізи, які повністю покриваються Національною службою здоров’я України (НСЗУ).',
      en: 'Services and tests fully covered by the National Health Service of Ukraine (NHSU).',
      ru: 'Услуги и анализы, которые полностью покрываются Национальной службой здоровья Украины (НСЗУ).',
      pl: 'Usługi i badania w całości pokrywane przez Narodową Służbę Zdrowia Ukrainy (NSZU).',
    },
    subCategories: [
      {
        id: 'family-doc',
        title: {
          ua: 'Консультація сімейного лікаря',
          en: 'Family doctor consultation',
          ru: 'Консультация семейного врача',
          pl: 'Konsultacja lekarza rodzinnego',
        },
      },
      {
        id: 'blood-test',
        title: {
          ua: 'Загальний аналіз крові',
          en: 'Complete blood count (CBC)',
          ru: 'Общий анализ крови',
          pl: 'Morfologia krwi obwodowej',
        },
      },
      {
        id: 'cholesterol-test',
        title: {
          ua: 'Загальний холестерин',
          en: 'Total cholesterol test',
          ru: 'Общий холестерин',
          pl: 'Cholesterol całkowity',
        },
      },
      {
        id: 'glucose-test',
        title: {
          ua: 'Глюкоза',
          en: 'Blood glucose test',
          ru: 'Глюкоза',
          pl: 'Glukoza во krwi',
        },
      },
      {
        id: 'urine-test',
        title: {
          ua: 'Загальний аналіз сечі',
          en: 'General urinalysis',
          ru: 'Общий анализ мочи',
          pl: 'Badanie ogólne moczu',
        },
      },
      {
        id: 'ecg',
        title: {
          ua: 'ЕКГ (Електрокардіограма)',
          en: 'ECG (Electrocardiogram)',
          ru: 'ЭКГ (Электрокардиограмма)',
          pl: 'EKG (Elektrokardiogram)',
        },
      },
      {
        id: 'referral-diagnostic',
        title: {
          ua: 'Скерування на обстеження',
          en: 'Referral for diagnostics',
          ru: 'Направление на обследование',
          pl: 'Skierowanie на badania diagnostyczne',
        },
      },
      {
        id: 'referral-specialist',
        title: {
          ua: 'Скерування до вузьких спеціалістів',
          en: 'Referral to specialists',
          ru: 'Направление к узким специалистам',
          pl: 'Skierowanie do lekarzy specjalistów',
        },
      },
      {
        id: 'sick-leave',
        title: {
          ua: 'Електронні висновки непрацездатності',
          en: 'Electronic sick leave certificates',
          ru: 'Электронные больничные листы',
          pl: 'Elektroniczne zwolnienia lekarskie (L4)',
        },
      },
    ],
  },
  {
    id: 'cardiology-diagnostic',
    number: '02',
    title: {
      ua: 'Кардіологія та діагностика',
      en: 'Cardiology and diagnostics',
      ru: 'Кардиология и диагностика',
      pl: 'Kardiologia i diagnostyka',
    },
    shortDescription: {
      ua: 'Комплексне дослідження серцево-судинної системи та професійний моніторинг.',
      en: 'Comprehensive study of the cardiovascular system and professional monitoring.',
      ru: 'Комплексное исследование сердечно-сосудистой системы и профессиональный мониторинг.',
      pl: 'Kompleksowe badanie układu sercowo-naczyniowego i profesjonalny monitoring.',
    },
    subCategories: [
      {
        id: 'cardio-consult',
        title: {
          ua: 'Консультація кардіолога',
          en: 'Cardiologist consultation',
          ru: 'Консультация кардиолога',
          pl: 'Konsultacja kardiologiczna',
        },
      },
      {
        id: 'holter-ecg',
        title: {
          ua: 'Добове моніторування ЕКГ (Холтер)',
          en: '24-hour Holter ECG monitoring',
          ru: 'Суточное мониторирование ЭКГ (Холтер)',
          pl: '24-godzinne monitorowanie EKG (Holter)',
        },
      },
      {
        id: 'blood-pressure-monitoring',
        title: {
          ua: 'Добове моніторування артеріального тиску',
          en: '24-hour blood pressure monitoring',
          ru: 'Суточное мониторирование артериального давления',
          pl: 'Całodobowe monitorowanie ciśnienia tętniczego (ABPM)',
        },
      },
    ],
  },
];

export const CLINIC_CONTACTS = {
  city: { ua: 'м. Борислав', en: 'Boryslav', ru: 'г. Борислав', pl: 'Borysław' },
  address: {
    ua: 'вул. Весняна 7 А',
    en: '7A Vesnyana St',
    ru: 'ул. Весняная 7 А',
    pl: 'ul. Wiosenna 7A',
  },
  phones: ['0980358737', '0935026791'],
};
