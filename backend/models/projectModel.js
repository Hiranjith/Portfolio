import mongoose from "mongoose";

const projectSchema = mongoose.Schema({
    title : {type : String, required : true},
    shortDescription : {type : String, required : true},
    liveLink: { type: String, trim: true },
    githubLink: {type: String, trim: true },
    technologies: { type: [String], default: [] }
})

const Project = mongoose.model('Project', projectSchema)

export default Project