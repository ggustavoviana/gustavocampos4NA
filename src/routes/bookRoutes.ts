import express from 'express';
import { getAllBooks, addBook } from '../controllers/bookController';

const router = express.Router();

router.get('/books', getAllBooks);   // Rota para listar todos os livros
router.post('/books', addBook);      // Rota para adicionar um novo livro

export default router;
