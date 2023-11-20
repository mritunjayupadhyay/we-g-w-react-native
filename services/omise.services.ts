import Omise from 'omise-react-native';
import axios from "axios";

import { CardDataType, SavedCardDataType } from '../types/card.type';
Omise.config('pkey_test_5wvisbxphp1zapg8ie6', '2015-11-17'); // TODO: use env

const apiUrl = "https://we-g-w-nest-production.up.railway.app"

export const createCard = async (cardData: CardDataType, cust_id: string | undefined)
:Promise<{ error: boolean, cust_id: string, cards: SavedCardDataType[]}> => {
    const { name, cardNumber, expireMonth, expireYear, cvv } = cardData;
    const token = await Omise.createToken({
        'card': {
            name,
            'number': cardNumber,
            'expiration_month': expireMonth,
            'expiration_year': expireYear,
            'security_code': cvv
        }
    });

    try {
        if (cust_id) {
            const url = `${apiUrl}/online-pay/add-card`;
            const { 
                data: result
            }: { 
                data: {
                    data: {cust_id: string, cards:SavedCardDataType[]}, 
                    error: boolean
                }
            } = await axios.post(url, {customer: cust_id, token: token.id});
            return {error: result.error, cust_id: result.data?.cust_id || "", cards: result.data?.cards || []};
        } else {
            const url = `${apiUrl}/online-pay`;
            const { 
                data: result
            }: { 
                data: {
                    data: {cust_id: string, cards:SavedCardDataType[]}, 
                    error: boolean
                }
            } = await axios.post(url, {description: "test it is", email: "m@gmail.com", token: token.id});
            return {error: result.error, cust_id: result.data?.cust_id || "", cards: result.data?.cards || []};
        }
        
    } catch(e) {
        return { error: true, cust_id: "", cards: []}
    }
}

export const chargeCard = async(cust_id: string, card_id: string) => {
    const url = `${apiUrl}/online-pay/charge`;
            const { 
                data: result
            }: { 
                data: {
                    data: {cust_id: string, cards:SavedCardDataType[]}, 
                    error: boolean
                }
            } = await axios.post(url, {customer: cust_id, card: card_id});
            return {error: result.error, cust_id: result.data?.cust_id || "", cards: result.data?.cards || []};
}

export const getCards = async (cust_id: string):Promise<SavedCardDataType[]> => {
    try {
        const url = `${apiUrl}/online-pay/cards?cust_id=${cust_id}`;
        const { data: result }: { data: {data: SavedCardDataType[], error: boolean}} = await axios.get(url);
        return result.error ? [] : result.data;
    } catch(e) {
        return []
    }
}