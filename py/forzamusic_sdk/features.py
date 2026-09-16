# Forzamusic SDK feature factory

from forzamusic_sdk.feature.base_feature import ForzamusicBaseFeature
from forzamusic_sdk.feature.ratelimit_feature import ForzamusicRatelimitFeature
from forzamusic_sdk.feature.retry_feature import ForzamusicRetryFeature
from forzamusic_sdk.feature.test_feature import ForzamusicTestFeature
from forzamusic_sdk.feature.timeout_feature import ForzamusicTimeoutFeature


_FEATURES = {
    "base": lambda: ForzamusicBaseFeature(),
    "ratelimit": lambda: ForzamusicRatelimitFeature(),
    "retry": lambda: ForzamusicRetryFeature(),
    "test": lambda: ForzamusicTestFeature(),
    "timeout": lambda: ForzamusicTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
