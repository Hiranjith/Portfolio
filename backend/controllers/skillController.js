import { assyncHandler } from '../middleware/assyncHandlerMW.js'
import Skill from '../models/skillModel.js'

export const addSkill = assyncHandler(async(req, res) => {
    try {
        const {skill} = req.body
        if (!skill) {
            throw new Error("Skill is not added...!")
        }
        const newSkill = await Skill.create({skill})

        console.log("new skill saved", newSkill);
        res.status(200).json({success : true, message : 'Skill saved successfully'})
    } catch (error) {
        console.error("Error saving data:", error.message);
        res.status(400).json({ success: false, error: error.message });
    }
})

export const getSkill = assyncHandler(async(req, res)=> {
    try {
        const skills = await Skill.find({})

        if (!skills || skills.length === 0) {
            throw new Error("No skills found");
        }
         res.status(200).json(skills)
        
    } catch (error) {
        console.error("Error saving data:", error.message);
        res.status(400).json({ success: false, error: error.message });
    }
})

export const removeSkill = assyncHandler(async(req, res)=> {
    try {
        const {skillId} = req.params
        const removed = await Skill.findByIdAndDelete(skillId)

        if (!removed) {
            res.status(400).json({
                success: false, 
                message: "Skill not found. It may have already been deleted."
            })
        }

        res.status(200).json({
            success: true, 
            message: "Skill removed successfully", 
            data: removed
        })

    } catch (error) {
        console.error("Error saving data:", error.message);
        res.status(400).json({ success: false, error: error.message });
    }
})