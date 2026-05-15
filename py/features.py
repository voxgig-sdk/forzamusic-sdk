# Forzamusic SDK feature factory

from feature.base_feature import ForzamusicBaseFeature
from feature.test_feature import ForzamusicTestFeature


def _make_feature(name):
    features = {
        "base": lambda: ForzamusicBaseFeature(),
        "test": lambda: ForzamusicTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
