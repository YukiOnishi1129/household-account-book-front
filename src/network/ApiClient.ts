import {
  Configuration,
  AnnualChangeApiFactory,
  CalendarApiFactory,
  CategoryApiFactory,
  DetailApiFactory,
  MonthRateApiFactory,
  PartnerApiFactory,
  UsersApiFactory,
} from '../types/api'

const config: Configuration = {
  baseOptions: {
    baseURL: 'http://localhost:4010',
    withCredentials: true,
  },
}

export default {
  annualChange: AnnualChangeApiFactory(config),
  calender: CalendarApiFactory(config),
  category: CategoryApiFactory(config),
  detail: DetailApiFactory(config),
  monthRate: MonthRateApiFactory(config),
  partner: PartnerApiFactory(config),
  user: UsersApiFactory(config),
}
