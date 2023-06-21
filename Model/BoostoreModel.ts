import mongoose, {Document} from "mongoose"

interface iBookStore{
    book_title?: string,
    author_name?: string,
    description?: string,
    author_image?: string,
    cover_image?: string,
    views?: string[],
    isbn?: string,
    authorEmail?: string,
}
// interface iBook extends iBookStore, mongoose.Document{}
interface iBook extends iBookStore,Document{}

const bookSchema = new mongoose.Schema<iBook>({
    book_title:{type:String,unqiue: true},
    author_name:String,
    description: String,
    author_image: String,
    cover_image: String,
    views: [],
    isbn: String,
    authorEmail: {type: String, unique: true},
}, { timestamps: true })

const bookModel = mongoose.model<iBook>("BookStoreCollection", bookSchema)

export default bookModel