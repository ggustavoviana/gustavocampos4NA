import { getAllBooks } from '../controllers/bookController';
import { Request, Response } from 'express';

describe('Book Controller', () => {
  it('should return a list of books', async () => {
    const req = {} as Request;
    const res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
    } as unknown as Response;

    await getAllBooks(req, res);
    expect(res.json).toHaveBeenCalled(); // Verifica se o método json foi chamado
  });
});
