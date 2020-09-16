import { addnewTicket, deleteTicket, getAllTickets, getTickettWithId } from '../controllers/ticketControllers';

const routes = (app) => {
    app.route('/tickets')
        .post(addnewTicket)
        .get(getAllTickets);

    app.route('/tickets/:ticketId')
        .get(getTickettWithId)
        .delete(deleteTicket);
}

export default routes;