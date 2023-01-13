import message from "../models/MessageSchema.js";
import conversation from "../models/conversationSchema.js";



export const newMessage = async (request, response) => {
    const newMessage = new message(request.body);
    try {
        await newMessage.save();
        await conversation.findByIdAndUpdate(request.body.conversationId, { message: request.body.text });
        response.status(200).json("Message has been sent successfully");
    } catch (error) {
        response.status(500).json(error);
    }

}


export const getMessage = async (request, response) => {
    try {
        const messages = await message.find({ conversationId: request.params.id });
        response.status(200).json(messages);
    } catch (error) {
        response.status(500).json(error);
    }

}
