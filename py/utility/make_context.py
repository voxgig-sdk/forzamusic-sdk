# Forzamusic SDK utility: make_context

from core.context import ForzamusicContext


def make_context_util(ctxmap, basectx):
    return ForzamusicContext(ctxmap, basectx)
