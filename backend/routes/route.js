import express from 'express';
import { addUser, getUser } from '../controller/usercontroller.js';
import { newConversation,  getConversation } from '../controller/ConversController.js'; 
import { newMessage, getMessage } from '../controller/messageController.js';
import { getImage, uploadImage } from '../controller/ImageController.js';

import upload from '../utils/upload.js'


const route = express.Router();

route.post('/add', addUser);
route.get('/users', getUser);
route.post('/conversation/add', newConversation);
route.post('/conversation/get', getConversation);

route.post('/message/add', newMessage);
route.get('/message/get/:id', getMessage);

route.post('/file/upload', upload.single('file'), uploadImage);
route.get('/file/:filename', getImage);


export default route;