declare namespace User {
  interface User {
    id?: number
    id_auth0?: string
    name: string
    nickname: string
    username: string
    email: string
    email_verified: boolean
    picture: string
    created_at: DateTime
    updated_at: DateTime
  }
}

declare namespace Express {
  export interface Request {
     user?: User.User
  }
}
