# Forzamusic SDK utility: make_context

from projectname_sdk.core.context import ForzamusicContext


def make_context_util(ctxmap, basectx):
    return ForzamusicContext(ctxmap, basectx)
