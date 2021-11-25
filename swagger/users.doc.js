/**
     * @swagger
     * /users:
     *      get:
     *          tags: [Users]
     *          summary: Get all users
     *          responses:
     *              200:
     *                  description: A list of users.
     *                  content:
     *                      application/json:
     *                          schema:
     *                              type: object
     *                              properties:
     *                                  data:
     *                                      type: array
     *                                      items:
     *                                          type: object
     *                                          properties:
     *                                              firstname:
     *                                                  type: string
     *                                                  description: First name.
     *                                                  example: Black Panther
     *                                              lastname:
     *                                                  type: string
     *                                                  description: Last name.
     *                                                  example: Wakanda
     *                                              phone:
     *                                                  type: string
     *                                                  description: Phone number.
     *                                                  example: +6273872873827
     *                                              active:
     *                                                  type: boolean
     *                                                  description: Active user.
     *                                                  example: true
     *                                              time:
     *                                                  type: integer
     *                                                  description: time create_at user.
     *                                                  example: 1637749055150
     *                                              createdAt:
     *                                                  type: string
     *                                                  description: create_at user.
     *                                                  example: 2021-11-24T10:17:35.152Z
     *                                              updatedAt:
     *                                                  type: string
     *                                                  description: update_at user.
     *                                                  example: 2021-11-24T10:17:35.152Z
     *                                              id:
     *                                                  type: string
     *                                                  description: update_at user.
     *                                                  example: 619e113f43f2db7b6f8577f3
     * 
     *                                  message:
     *                                          type: string
     *                                          description: Status
     *                                          example: Success
     * 
     */

    /**
     * @swagger
     * /users:
     *   post:
     *     tags: [Users]
     *     summary: Post user
     *     requestBody:
     *       content:
     *          application/json:
     *              schema:
     *                  type: object
     *                  properties:
     *                      firstname:
     *                          type: string
     *                          example: John
     *                      lastname:
     *                          type: string
     *                          example: Doe
     *                      phone:
     *                          type: string
     *                          example: +72632625391211
     *
     * 
     *     responses:
     *       201:
     *         description: Created
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                   data:
     *                         type: object
     *                         properties:
     *                              firstname:
     *                                  type: string
     *                                  description: First name.
     *                                  example: Black Panther
     *                              lastname:
     *                                  type: string
     *                                  description: Last name.
     *                                  example: Wakanda
     *                              phone:
     *                                  type: string
     *                                  description: Phone number.
     *                                  example: +6273872873827
     *                              active:
     *                                  type: boolean
     *                                  description: Active user.
     *                                  example: true
     *                              time:
     *                                  type: integer
     *                                  description: time create_at user.
     *                                  example: 1637749055150
     *                              createdAt:
     *                                  type: string
     *                                  description: create_at user.
     *                                  example: 2021-11-24T10:17:35.152Z
     *                              updatedAt:
     *                                  type: string
     *                                  description: update_at user.
     *                                  example: 2021-11-24T10:17:35.152Z
     *                              id:
     *                                  type: string
     *                                  description: update_at user.
     *                                  example: 619e113f43f2db7b6f8577f3
     * 
     *                   message:
     *                        type: string
     *                        description: Status
     *                        example: Success Created
     * 
     */

    /**
     * @swagger
     * /users/{id}:
     *      get:
     *          tags: [Users]
     *          summary: Get users by Id
     *          parameters: [
     *                   {
     *                      in: path,
     *                      name: id,
     *                      required: true,
     *                      default: "619e113f43f2db7b6f8577f3",
     *                      Schema(
     *                          type="string"
     *                      )
     *                   },
     *                  {
     *                      in: query,
     *                      name: time,
     *                      required: false,
     *                      default: 1637749055150,
     *                      Schema(
     *                          type="integer"
     *                      )
     *                   }
     *                  
     *          ]
     *          responses:
     *              200:
     *                  description: A list of users by Id.
     *                  content:
     *                      application/json:
     *                          schema:
     *                              type: object
     *                              properties:
     *                                  data:
     *                                      type: array
     *                                      items:
     *                                          type: object
     *                                          properties:
     *                                              firstname:
     *                                                  type: string
     *                                                  description: First name.
     *                                                  example: Black Panther
     *                                              lastname:
     *                                                  type: string
     *                                                  description: Last name.
     *                                                  example: Wakanda
     *                                              phone:
     *                                                  type: string
     *                                                  description: Phone number.
     *                                                  example: +6273872873827
     *                                              active:
     *                                                  type: boolean
     *                                                  description: Active user.
     *                                                  example: true
     *                                              time:
     *                                                  type: integer
     *                                                  description: time create_at user.
     *                                                  example: 1637749055150
     *                                              createdAt:
     *                                                  type: string
     *                                                  description: create_at user.
     *                                                  example: 2021-11-24T10:17:35.152Z
     *                                              updatedAt:
     *                                                  type: string
     *                                                  description: update_at user.
     *                                                  example: 2021-11-24T10:17:35.152Z
     *                                              id:
     *                                                  type: string
     *                                                  description: update_at user.
     *                                                  example: 619e113f43f2db7b6f8577f3
     * 
     *                                  message:
     *                                          type: string
     *                                          description: Status
     *                                          example: Success
     * 
     */

    /**
     * @swagger
     * /users/{id}:
     *      delete:
     *          tags: [Users]
     *          summary: Delete user by Id
     *          parameters: [
     *                   {
     *                      in: path,
     *                      name: id,
     *                      required: true,
     *                      default: "619e113f43f2db7b6f8577f3",
     *                      Schema(
     *                          type="string"
     *                      )
     *                   }
     *          ]
     * 
     *          responses:
     *              202:
     *                  description: A list of users by Id.
     *                  content:
     *                      application/json:
     *                          schema:
     *                              type: object
     *                              properties: 
     *                                  message:
     *                                          type: string
     *                                          description: Status
     *                                          example: Success deleted
     * 
     */

    /**
     * @swagger
     * /users/{id}:
     *      put:
     *          tags: [Users]
     *          summary: Update user by Id
     *          parameters: [
     *                   {
     *                      in: path,
     *                      name: id,
     *                      required: true,
     *                      default: "619e113f43f2db7b6f8577f3",
     *                      Schema(
     *                          type="string"
     *                      )
     *                   }
     *          ]
     *          requestBody:
     *              content:
     *                  application/json:
     *                      schema:
     *                          type: object
     *                          properties:
     *                              firstname:
     *                                  type: string
     *                                  example: John
     *                              lastname:
     *                                  type: string
     *                                  example: Doe
     *                              phone:
     *                                  type: string
     *                                  example: +72632625391211
     *                              active:
     *                                  type: boolean
     *                                  example: true
     * 
     *          responses:
     *              202:
     *                  description: A list of users by Id.
     *                  content:
     *                      application/json:
     *                          schema:
     *                              type: object
     *                              properties: 
     *                                  message:
     *                                          type: string
     *                                          description: Status
     *                                          example: Success updated
     * 
     */