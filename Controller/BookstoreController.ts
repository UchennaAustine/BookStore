import express, { Request, Response } from "express";
import bookModel from "../Model/BoostoreModel";

export const getAllBooks = async (req: Request, res: Response): Promise<Response> => {
  try {
    const allBooks = await bookModel.find();
    if (allBooks.length > 0) {
      return res.status(200).json({
        message: "All Books Have Being Gotten Successfully",
        data: allBooks,
      });
    } else {
      return res.status(200).json({
        message: "No Available Book in Store",
      });
    }
  } catch (error: any) {
    return res.status(404).json({
      message: "Can't get all Books form:  getAllBooks()",
      data: error.message,
    });
  }
};

export const getSingleBook = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const userId = req.params.bookId;
    const singleBook = await bookModel.findById(userId);
    return res.status(200).json({
      message: "Single Book has being Gotten",
      data: singleBook,
    });
  } catch (error: any) {
    return res.status(400).json({
      message: "Can't get a single book: getSingleBook()",
      data: error.message,
    });
  }
};

export const newBook = async (req: Request, res: Response) => {
  try {
    const { book_title, author_name, description, isbn, authorEmail } = req.body;
    const getAuthorUniqueId = await author_name.charAt(0).toUppercase();
    const getIsbn = await `${getAuthorUniqueId}_${Math.floor(
      Math.random() * 1000
    )}_${Math.floor(Math.random() * 1000)}`;

    const createBook = await bookModel.create({
        book_title,
      author_name,
      description,
      isbn: getIsbn,
      authorEmail,
    });
    return res.status(201).json({
      message: "Created book successfully",
      data: createBook,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Error occures in creating book: newBooks",
    });
  }
};


export const updateBooks = async (req: Request, res: Response) => {
    try {
      const { book_title, description } = req.body;
      const update = await bookModel.findByIdAndUpdate(
        req.params.bookId,
        {
          book_title,
          description
        },
        { new: true }
      );
      return res.status(201).json({
        message: "Updated Books successfully",
        data: update,
      });
    } catch (error) {
      return res.status(400).json({
        message: "Error occured while updating books",
      });
    }
  };

export const deleteBooks = async (req: Request, res: Response) => {
    try {
      const Delete = await bookModel.findByIdAndDelete(req.params.bookId);
      return res.status(201).json({
        message: "Deleted Books successfully",
        data: Delete,
      });
    } catch (error) {
      return res.status(400).json({
          message: "Error occured while deleting books",
        });
    }
  };