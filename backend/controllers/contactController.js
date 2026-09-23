import { assyncHandler } from "../middleware/assyncHandlerMW.js";
import ContactForm from "../models/formModel.js";
import { sendEmail } from "../utils/sendEmail.js";

export const createContacts = assyncHandler(async(req, res) => {
    const {name, email, number, message } = req.body

    try {
        if (!name || !email || !number) {
            throw new Error("All fields are required...!")
        }
        const newContact = await ContactForm.create({name, email, number, message})
        console.log("new contact saved", newContact);

        // Send email notification
        await sendEmail({
            to: process.env.EMAIL_USER,
            subject: `New Portfolio Contact from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nPhone: ${number}\nMessage: ${message}`,
            html: `
                <h3>New Contact Message</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${number}</p>
                <p><strong>Message:</strong> ${message}</p>
            `
        });
        
        res.status(200).json({success : true, message : 'Contact saved successfully'})
    } catch (error) {
        console.error("Error saving data:", error.message);
        res.status(400).json({ success: false, error: error.message });
        
    }
})

export const showAllContacts = assyncHandler(async(req, res) => {
    try {
        const contacts = await ContactForm.find({})
        res.status(200).json(contacts)
    } catch (error) {
        console.error("Error fetching contacts:", error.message);
        res.status(400).json({ success: false, error: error.message });
    }
})

export const removeContact = assyncHandler(async(req, res) => {
    try {
        const {id} = req.params
        const deleted = await ContactForm.findByIdAndDelete(id)

        if (!deleted) {
            res.status(400).json({
                success: false, 
                message: "Contact not found. It may have already been deleted."
            })
        }

        res.status(200).json({
            success: true, 
            message: "Contact deleted successfully", 
            data: deleted
        })
    } catch (error) {
        console.error("Error saving data:", error.message);
        res.status(400).json({ success: false, error: error.message });
    }
})