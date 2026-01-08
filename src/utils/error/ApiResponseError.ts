type SerializableResponse = {
   status: number
   statusText: string
   url: string
}

export class ApiResponseError extends Error {
   response: SerializableResponse
   data: any

   constructor(message: string, response: Response, data: any) {
      super(message)
      this.name = "ApiResponseError"
      this.response = {
         status: response.status,
         statusText: response.statusText,
         url: response.url,
      }
      this.data = data
   }
}
