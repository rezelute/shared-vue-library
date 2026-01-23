// errors/AppError.ts
export class AppError extends Error {
   type: string // error type identifier
   details?: any // additional error details (object or array)
   cause?: Error // stack trace of the original error

   constructor({
      type,
      message,
      details,
      cause,
   }: {
      type: string
      message: string // human-readable error message
      details?: any
      cause?: Error
   }) {
      super(message)
      this.name = "AppError"
      this.type = type
      this.details = details
      this.cause = cause
   }
}
