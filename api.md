### Endpoints:
- POST /api/client/verification 
     Gets the user info and verifies against transtar GetHolder api

- POST /api/broker/register
    Register Broker

- POST /api/broker/login
    broker login

- POST /api/broker/changepassword
    Prompt broker to change password on first login attempt
    
- POST /api/broker/resetpassword
    reset broker password

- POST /api/broker/verifycertificate
     verify certificate against Transtar API

- POST /api/broker/verifdrs
     verify DRS against Transtar API

- POST /api/admin/login
    admin login

- POST /api/admin/changepassword
    Prompt admin to change password on first login attempt
    
- POST /api/admin/resetpassword
    reset admin password

- GET /api/admin/notifications/getall
    gets all notifications

- PATCH /api/admin/notifications/:id
    update a single notification e.g mark as read

- PATCH /api/admin/notifications
    update a batch of notifications e.g mark all as read

- GET /api/admin/firms/getall
    gets all registered firms

- POST /api/admin/firms/register
    register a new firm

- GET /api/admin/users SUPER ADMIN ACCESS
    gets all odyssey users

- POST /api/admin/users SUPER ADMIN ACCESS
   add a new user

- PATCH /api/admin/users/:id SUPER ADMIN ACCESS
    update a user info

- DELETE /api/admin/users/:id SUPER ADMIN ACCESS
    delete a particular user 

