# ProjectName SDK exists test

import pytest
from forzamusic_sdk import ForzamusicSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = ForzamusicSDK.test(None, None)
        assert testsdk is not None
