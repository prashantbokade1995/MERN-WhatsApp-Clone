import conversation from "../models/conversationSchema.js";


export const newConversation = async (request, response) => {
    let senderId = request.body.senderId;
    let receiverId = request.body.receiverId;
    const exist = await conversation.findOne({ members: { $all: [receiverId, senderId]  }})
        
    if(exist) {
        response.status(200).json('conversation already exists');
        return;
    }
    const newConversation = new conversation ({
        members:[senderId, receiverId ]
    })
    try {
        let conversationData = await newConversation.save();
        return response.status(200).json(conversationData);
    } catch (error) {
        response.status(500).json(error.message);
    }
}


export const getConversation = async (request, response) => {
    try {
        let senderId = request.body.senderId;
        let receiverId = request.body.receiverId;
        let conversationData = await conversation.findOne({members:{$all: [receiverId, senderId]}})
        return response.status(200).json(conversationData);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}