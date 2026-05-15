
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { ForzamusicSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await ForzamusicSDK.test()
    equal(null !== testsdk, true)
  })

})
