import mongoose from 'mongoose';

const projectSchema = mongoose.Schema({
    title: String,
    description: String,
    author: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var PostProject = mongoose.model('PostProject', projectSchema);

export default PostProject;