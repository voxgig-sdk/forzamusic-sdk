# Forzamusic SDK feature factory

from forzamusic_sdk.feature.base_feature import ForzamusicBaseFeature
from forzamusic_sdk.feature.test_feature import ForzamusicTestFeature


def _make_feature(name):
    features = {
        "base": lambda: ForzamusicBaseFeature(),
        "test": lambda: ForzamusicTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
