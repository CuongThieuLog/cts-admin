import { UserType } from '../type'

export const mapperDataUserCsv = (data: UserType[]) => {
  return data.map((el) => {
    return {
      _id: el._id,
      email: el.email,
      role: el.role,
      labor_id: el.labor_id._id,
      position: el.labor_id.position,
      rate_per_hour: el.labor_id.rate_per_hour,
      firstName: el.labor_id.information_id.firstName,
      lastName: el.labor_id.information_id.lastName,
    }
  })
}
