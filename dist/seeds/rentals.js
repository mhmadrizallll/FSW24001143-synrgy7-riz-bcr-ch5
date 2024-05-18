"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.seed = void 0;
function seed(knex) {
    return __awaiter(this, void 0, void 0, function* () {
        // Deletes ALL existing entries
        yield knex("rentals").del();
        const rentDate = new Date();
        const returnDate = new Date(rentDate);
        returnDate.setDate(returnDate.getDate() + 7);
        // Inserts seed entries
        yield knex("rentals").insert([
            {
                id: 1,
                car_id: 1,
                customer_id: 1,
                // rent date tipe date
                rent_date: rentDate,
                // return date tipe date
                return_date: returnDate,
                total_amount: 1,
            },
        ]);
    });
}
exports.seed = seed;
