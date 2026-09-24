"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForzamusicError = void 0;
class ForzamusicError extends Error {
    isForzamusicError = true;
    sdk = 'Forzamusic';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.ForzamusicError = ForzamusicError;
//# sourceMappingURL=ForzamusicError.js.map