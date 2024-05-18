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
exports.down = exports.up = void 0;
function up(knex) {
    return __awaiter(this, void 0, void 0, function* () {
        return knex.schema.alterTable("rentals", (table) => {
            table.date("rent_date").notNullable().alter(); // Mengubah tipe data rent_date menjadi date
            table.date("return_date").notNullable().alter(); // Mengubah tipe data return_date menjadi date
        });
    });
}
exports.up = up;
function down(knex) {
    return __awaiter(this, void 0, void 0, function* () {
        return knex.schema.alterTable("rentals", (table) => {
            // Jika Anda perlu melakukan rollback, Anda dapat mengubah kembali tipe data ke integer
            table.integer("rent_date").notNullable().alter(); // Mengembalikan tipe data rent_date menjadi integer
            table.integer("return_date").notNullable().alter(); // Mengembalikan tipe data return_date menjadi integer
        });
    });
}
exports.down = down;
