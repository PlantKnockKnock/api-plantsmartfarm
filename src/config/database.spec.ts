import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import pool from "./database";

describe('database', () => {

    beforeEach(async () => {
      });

    it('should be defined', () => {
        expect(pool).toBeDefined();
    });
    
    it("DB connection 성공", async () => {
        const connection =  await pool.getConnection();
        expect(connection).toBeDefined();
    });
});