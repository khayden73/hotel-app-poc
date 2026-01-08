import Hotels from "../data/hotels.json";
import Inventory from "../data/inventory.json";

export function getHotels() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Hotels);
        }, 1000);
    });
}

export function getInventory(hotelId: string = '') {
    if (hotelId && hotelId !== '') {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(Inventory.filter((item) => item.hotelId === hotelId));
            }, 1000);
        });
    }
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Inventory);
        }, 1000);
    });
}