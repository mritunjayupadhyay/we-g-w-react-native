export type CardType = "visa" | "jcb" | "mastercard";

export type CardDataType = {
    id: number,
    cardType: CardType,
    name: string,
    expireMonth: number,
    expireYear: number,
    cardNumber: string,
    cvv: string,
}