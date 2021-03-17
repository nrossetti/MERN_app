import express from 'express';
import mongoose from 'mongoose';

import PostProject from '../models/postProject.js';

const router = express.Router();

export const getProjects = async (req, res) => { 
    try {
        const postProject = await PostProject.find();
                
        res.status(200).json(postProject);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getProject = async (req, res) => { 
    const { id } = req.params;

    try {
        const post = await PostProject.findById(id);
        
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ description: error.message });
    }
}

export const createProject = async (req, res) => {
    const { title, description, selectedFile, author, tags } = req.body;

    const newPostProject = new PostProject({ title, description, selectedFile, author, tags })

    try {
        await newPostProject.save();

        res.status(201).json(newPostProject );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateProject = async (req, res) => {
    const { id } = req.params;
    const { title, description, author, selectedFile, tags } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No project with id: ${id}`);

    const updatedProject = { author, title, description, tags, selectedFile, _id: id };

    await PostProject.findByIdAndUpdate(id, updatedProject, { new: true });

    res.json(updatedProject);
}

export const deleteProject = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No project with id: ${id}`);

    await PostProject.findByIdAndRemove(id);

    res.json({ message: "Project deleted successfully." });
}

export const likeProject = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No project with id: ${id}`);
    
    const post = await PostProject.findById(id);

    const updatedProject = await PostProject.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true });
    
    res.json(updatedProject);
}


export default router;