import express, {Router} from "express"
import { deleteBooks, getAllBooks, getSingleBook, newBook, updateBooks } from "../Controller/BookstoreController"


const router = express.Router()

router.route("/getAllBooks").get(getAllBooks)
router.route("/getSingleBook/:userId").get(getSingleBook)
router.route("/newBook").post(newBook)
router.route("/updateBooks/:userId").patch(updateBooks)
router.route("/deleteBooks/:userId").delete(deleteBooks)

export default router