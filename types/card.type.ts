export type CardType = "visa" | "jcb" | "mastercard";

export type CardDataType = {
    id?: number,
    cardType?: CardType,
    name: string,
    expireMonth: number,
    expireYear: number,
    cardNumber: string,
    cvv: string,
}

export type SavedCardDataType = {
  cust_id: string,
  card_id: string,
  expiration_year: number,
  expiration_month: number,
  name: string,
  last_digits: string,
  brand: string,
  bank: string
}