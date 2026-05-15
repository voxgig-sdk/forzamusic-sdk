
import { Context } from './Context'


class ForzamusicError extends Error {

  isForzamusicError = true

  sdk = 'Forzamusic'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  ForzamusicError
}

