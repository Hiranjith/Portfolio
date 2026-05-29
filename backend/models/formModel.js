import mongoose from "mongoose";

const formSchema = mongoose.Schema(
    {
        name : {type : String, required : true},
        email : {type : String, required : true},
        number : {type : Number, required : true},
        message : {type : String}
    }
)

const ContactForm = mongoose.model('ContactForm', formSchema)

export default ContactForm