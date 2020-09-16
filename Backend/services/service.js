// import mongoose from 'mongoose';
// import { Tickets } from '../models/tickets';

// const Ticket = mongoose.model('tickets', Tickets);


// export const addnewTicket = (req, res) => {
//     Ticket.create(req.body, (err, ticket) => {
//         if (err) {
//             console.log(err);
//             res.send(err);
//         };
//         res.json(ticket);
//     });
// }

// export const getTickettWithId = (req, res) => {
//     Ticket.findOne({ _id: req.params.ticketId }, (err, ticket) => {
//         if (err || !ticket) {
//             res.send({
//                 error_code: "Bad request",
//                 message: 'Ticket doesn\'t exist'
//             });
//         }
//         res.json(ticket);
//     });
// }

// export const getAllTickets = (req, res) => {

//     Ticket.find({}, (err, ticket) => {
//         if (err) {
//             res.send(err);
//         }
//         res.json(ticket);
//     }).sort({ createdAt: -1 });
// }

// export const deleteTicket = (req, res) => {

//     Ticket.remove({ _id: req.params.ticketId }, (err) => {
//         if (err) {
//             res.send(err);

//         }
//         res.json({ message: 'Successfully deleted ticket' });
//     });
// }
