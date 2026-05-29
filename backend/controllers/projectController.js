import { assyncHandler } from "../middleware/assyncHandlerMW.js";
import Project from "../models/projectModel.js";

export const addProject = assyncHandler(async(req, res) => {
    try {
        const {title, shortDescription, liveLink, githubLink, technologies} = req.body
        if (!title || !shortDescription) {
            throw new Error("title or description is missing...!")
        }

        const newProject = await Project.create({
            title,
            shortDescription,
            liveLink,
            githubLink,
            technologies
        })

        res.status(200).json({success: true, message: 'New project added'})
    } catch (error) {
        console.error("Error adding project:", error.message);
        res.status(400).json({ success: false, error: error.message });
    }
})

export const showAllProject = assyncHandler(async(req, res) => {
    try {
        const projects = await Project.find({})

        if (!projects) {
             throw new Error("No projects found");
        }
        res.status(200).json(projects)
    } catch (error) {
        console.error("Error fetching projects:", error.message);
        res.status(400).json({ success: false, error: error.message });
    }
})

export const removeProject = assyncHandler(async(req, res) => {
    try {
        const {id} = req.params
        const droppedProject = await Project.findByIdAndDelete(id)

        if (!droppedProject) {
            return res.status(400).json({
                success: false, 
                message: "Project not found. It may have already been deleted."
            })
        }

        res.status(200).json({
            success: true, 
            message: "Project removed successfully", 
            data: droppedProject
        })
    } catch (error) {
        console.error("Error saving data:", error.message);
        res.status(400).json({ success: false, error: error.message });
    }
})

export const updateProject = assyncHandler(async (req, res) => {
    try {
        const { title, shortDescription, liveLink, githubLink, technologies } = req.body;
        const { id } = req.params;

        const project = await Project.findByIdAndUpdate(
            id, 
            { title, shortDescription, liveLink, githubLink, technologies },
            { new: true, runValidators: true } 
        );

        if (!project) {
            return res.status(404).json({ success: false, message: "Project not found" });
        }

        res.status(200).json({ success: true, data: project });

    } catch (error) {
        console.error("Error updating data:", error.message);
        res.status(400).json({ success: false, error: error.message });
    }
});