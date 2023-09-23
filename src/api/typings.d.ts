declare namespace API {
  type BooleanResult = {
    code?: ErrorCode
    /** The data of the request result */
    data?: boolean
    /** The error message of the request result if any error happend */
    error?: string
  }

  type deleteDishDeleteIdParams = {
    id: string
  }

  type deleteImageDeleteHomeImageIdParams = {
    id: string
  }

  type deleteNotificationDeleteIdParams = {
    id: string
  }

  type deletePostDeleteIdParams = {
    id: number
  }

  type deleteUserDeleteIdParams = {
    id: string
  }

  type deleteUserLikeDeleteUserNameNameParams = {
    userName: string
    name: string
  }

  type deleteWindowDeleteIdParams = {
    id: string
  }

  type Dish = {
    id?: string
    name: string
    price: number
    canteen: string
    window: string
    image?: string
    favoriteCount?: number
  }

  type DishDto = {
    name: string
    price: number
    canteen: string
    window: string
    image?: string
    favoriteCount?: number
  }

  type DishListResult = {
    code?: ErrorCode
    /** The data of the request result */
    data?: Dish[]
    /** The error message of the request result if any error happend */
    error?: string
  }

  type DishResult = {
    code?: ErrorCode
    data?: Dish
    /** The error message of the request result if any error happend */
    error?: string
  }

  type ErrorCode =
    | 200
    | 201
    | 400
    | 401
    | 404
    | 500
    | 4001
    | 4002
    | 4003
    | 4004
    | 4005
    | 4006
    | 4007
    | 4008
    | 4009
    | 4011
    | 40010
    | 40011
    | 40012
    | 40013
    | 40014
    | 40015

  type getDishGetAllParams = {
    order?: string
    desending?: boolean
  }

  type getDishGetByCanteenAndWindowCanteenWindowParams = {
    canteen: string
    window: string
    order?: string
    desending?: boolean
  }

  type getDishGetByCanteenCanteenParams = {
    canteen: string
    order?: string
    desending?: boolean
  }

  type getDishGetByIdIdParams = {
    id: string
  }

  type getDishGetByNameNameParams = {
    name: string
    order?: string
    desending?: boolean
  }

  type getNotificationGetByIdIdParams = {
    id: string
  }

  type getUserGetByEmailEmailParams = {
    email: string
  }

  type getUserGetByIdIdParams = {
    id: string
  }

  type getUserGetByNameNameParams = {
    name: string
  }

  type getUserGetByNameOrEmailNameOrEmailParams = {
    nameOrEmail?: string
  }

  type getUserLikeGetUserNameNameParams = {
    userName: string
    name: string
  }

  type getUserVerifyEmailEmailParams = {
    email: string
  }

  type getUserVerifyNameNameParams = {
    name: string
  }

  type getWindowGetByCanteenCanteenParams = {
    canteen: string
  }

  type getWindowGetByIdIdParams = {
    id: string
  }

  type GuidResult = {
    code?: ErrorCode
    /** The data of the request result */
    data?: string
    /** The error message of the request result if any error happend */
    error?: string
  }

  type HomeImage = {
    id?: string
    url: string
  }

  type HomeImageListResult = {
    code?: ErrorCode
    /** The data of the request result */
    data?: HomeImage[]
    /** The error message of the request result if any error happend */
    error?: string
  }

  type HomeImageResult = {
    code?: ErrorCode
    data?: HomeImage
    /** The error message of the request result if any error happend */
    error?: string
  }

  type Int32Result = {
    code?: ErrorCode
    /** The data of the request result */
    data?: number
    /** The error message of the request result if any error happend */
    error?: string
  }

  type LoginDTO = {
    userNameOrEmail: string
    password: string
  }

  type Notification = {
    id?: string
    title: string
    content: string
    createdAt?: string
    updatedAt?: string
    isVisiable?: boolean
  }

  type NotificationDto = {
    title: string
    content: string
    isVisiable?: boolean
  }

  type NotificationListResult = {
    code?: ErrorCode
    /** The data of the request result */
    data?: Notification[]
    /** The error message of the request result if any error happend */
    error?: string
  }

  type NotificationResult = {
    code?: ErrorCode
    data?: Notification
    /** The error message of the request result if any error happend */
    error?: string
  }

  type Post = {
    id?: string
    userName: string
    content: string
    createdAt?: string
    avatar?: string
  }

  type postDishDecreaseFavoriteCountIdParams = {
    id: string
  }

  type postDishIncreaseFavoriteCountIdParams = {
    id: string
  }

  type PostDto = {
    userName: string
    content: string
    avatar?: string
  }

  type postEmailCodeSendEmailParams = {
    email: string
  }

  type postEmailCodeVerifyEmailCodeParams = {
    email: string
    code: string
  }

  type postImageAddHomeImageParams = {
    url: string
  }

  type PostListResult = {
    code?: ErrorCode
    /** The data of the request result */
    data?: Post[]
    /** The error message of the request result if any error happend */
    error?: string
  }

  type PostResult = {
    code?: ErrorCode
    data?: Post
    /** The error message of the request result if any error happend */
    error?: string
  }

  type postUserLikeCreateUserNameNameParams = {
    userName: string
    name: string
  }

  type postWindowDecreaseFavoriteCountIdParams = {
    id: string
  }

  type postWindowIncreaseFavoriteCountIdParams = {
    id: string
  }

  type putDishUpdateIdParams = {
    id: string
  }

  type putNotificationUpdateIdParams = {
    id: string
  }

  type putUserUpdateIdParams = {
    id: string
  }

  type putWindowUpdateIdParams = {
    id: string
  }

  type StringResult = {
    code?: ErrorCode
    /** The data of the request result */
    data?: string
    /** The error message of the request result if any error happend */
    error?: string
  }

  type UpdateDishParams = {
    name?: string
    price?: number
    canteen?: string
    window?: string
    image?: string
    favoriteCount?: number
  }

  type UpdateNotificationParams = {
    title?: string
    content?: string
    isVisiable?: boolean
  }

  type UpdateUserParams = {
    name?: string
    email?: string
    password?: string
    role?: UserRole
    avatar?: string
    signature?: string
  }

  type UpdateWindowParams = {
    name?: string
    canteen?: string
    image?: string
    favoriteCount?: number
  }

  type UserDto = {
    name: string
    email: string
    password: string
    avatar?: string
    signature?: string
  }

  type UserLike = {
    id?: string
    userName: string
    likedName: string
  }

  type UserLikeResult = {
    code?: ErrorCode
    data?: UserLike
    /** The error message of the request result if any error happend */
    error?: string
  }

  type UserOutDto = {
    id: string
    name: string
    email: string
    role: UserRole
    avatar?: string
    signature?: string
  }

  type UserOutDtoListResult = {
    code?: ErrorCode
    /** The data of the request result */
    data?: UserOutDto[]
    /** The error message of the request result if any error happend */
    error?: string
  }

  type UserOutDtoResult = {
    code?: ErrorCode
    data?: UserOutDto
    /** The error message of the request result if any error happend */
    error?: string
  }

  type UserRole = 0 | 1

  type Window = {
    id?: string
    name: string
    canteen: string
    image?: string
    favoriteCount?: number
  }

  type WindowDto = {
    name: string
    canteen: string
    image?: string
    favoriteCount?: number
  }

  type WindowListResult = {
    code?: ErrorCode
    /** The data of the request result */
    data?: Window[]
    /** The error message of the request result if any error happend */
    error?: string
  }

  type WindowResult = {
    code?: ErrorCode
    data?: Window
    /** The error message of the request result if any error happend */
    error?: string
  }
}
