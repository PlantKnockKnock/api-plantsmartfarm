import { Test, TestingModule } from '@nestjs/testing';
import pool from "./database";

describe('database', () => {
    it('should be defined', () => {
        expect(pool).toBeDefined();
    });

    it("DB connection 성공", () => {
        const connection = pool.getConnection();
        expect(connection).toBeDefined();
    });
});