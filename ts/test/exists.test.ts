
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { ForzamusicSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = ForzamusicSDK.test()
    equal(testsdk instanceof ForzamusicSDK, true,
      'ForzamusicSDK.test() must return a client synchronously')
  })

})
